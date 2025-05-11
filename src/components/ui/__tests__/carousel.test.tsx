import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import { 
  useCarouselSelection,
  useCarouselKeyboardNavigation,
  getOrientationClass,
  getNavigationButtonPosition,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../carousel';

// Test the utility functions
describe('Carousel Utility Functions', () => {
  describe('getOrientationClass', () => {
    it('returns correct class for horizontal orientation', () => {
      expect(getOrientationClass('horizontal')).toBe('-ml-4');
      expect(getOrientationClass('horizontal', true)).toBe('pl-4');
    });

    it('returns correct class for vertical orientation', () => {
      expect(getOrientationClass('vertical')).toBe('-mt-4 flex-col');
      expect(getOrientationClass('vertical', true)).toBe('pt-4');
    });
  });

  describe('getNavigationButtonPosition', () => {
    it('returns correct position for horizontal previous button', () => {
      expect(getNavigationButtonPosition('horizontal')).toBe('-left-12 top-1/2 -translate-y-1/2');
    });

    it('returns correct position for horizontal next button', () => {
      expect(getNavigationButtonPosition('horizontal', true)).toBe('-right-12 top-1/2 -translate-y-1/2');
    });

    it('returns correct position for vertical previous button', () => {
      expect(getNavigationButtonPosition('vertical')).toBe('-top-12 left-1/2 -translate-x-1/2 rotate-90');
    });

    it('returns correct position for vertical next button', () => {
      expect(getNavigationButtonPosition('vertical', true)).toBe('-bottom-12 left-1/2 -translate-x-1/2 rotate-90');
    });
  });

  describe('useCarouselKeyboardNavigation', () => {
    it('calls scrollPrev when ArrowLeft key is pressed', () => {
      const scrollPrevMock = vi.fn();
      const scrollNextMock = vi.fn();
      
      const TestComponent = () => {
        const handleKeyDown = useCarouselKeyboardNavigation(scrollPrevMock, scrollNextMock);
        return <div data-testid="test-div" onKeyDown={handleKeyDown} />;
      };
      
      render(<TestComponent />);
      const element = screen.getByTestId('test-div');
      
      fireEvent.keyDown(element, { key: 'ArrowLeft' });
      expect(scrollPrevMock).toHaveBeenCalledTimes(1);
      expect(scrollNextMock).not.toHaveBeenCalled();
    });

    it('calls scrollNext when ArrowRight key is pressed', () => {
      const scrollPrevMock = vi.fn();
      const scrollNextMock = vi.fn();
      
      const TestComponent = () => {
        const handleKeyDown = useCarouselKeyboardNavigation(scrollPrevMock, scrollNextMock);
        return <div data-testid="test-div" onKeyDown={handleKeyDown} />;
      };
      
      render(<TestComponent />);
      const element = screen.getByTestId('test-div');
      
      fireEvent.keyDown(element, { key: 'ArrowRight' });
      expect(scrollNextMock).toHaveBeenCalledTimes(1);
      expect(scrollPrevMock).not.toHaveBeenCalled();
    });

    it('does not call any scroll function for other keys', () => {
      const scrollPrevMock = vi.fn();
      const scrollNextMock = vi.fn();
      
      const TestComponent = () => {
        const handleKeyDown = useCarouselKeyboardNavigation(scrollPrevMock, scrollNextMock);
        return <div data-testid="test-div" onKeyDown={handleKeyDown} />;
      };
      
      render(<TestComponent />);
      const element = screen.getByTestId('test-div');
      
      fireEvent.keyDown(element, { key: 'Enter' });
      expect(scrollPrevMock).not.toHaveBeenCalled();
      expect(scrollNextMock).not.toHaveBeenCalled();
    });
  });

  describe('useCarouselSelection', () => {
    it('updates scroll states correctly when api exists', () => {
      const setCanScrollPrevMock = vi.fn();
      const setCanScrollNextMock = vi.fn();
      const onSelectMock = vi.fn();
      
      const mockApi = {
        canScrollPrev: vi.fn().mockReturnValue(true),
        canScrollNext: vi.fn().mockReturnValue(false)
      };
      
      const handleSelect = useCarouselSelection(
        mockApi as any,
        setCanScrollPrevMock,
        setCanScrollNextMock,
        onSelectMock
      );
      
      handleSelect(mockApi as any);
      
      expect(setCanScrollPrevMock).toHaveBeenCalledWith(true);
      expect(setCanScrollNextMock).toHaveBeenCalledWith(false);
      expect(onSelectMock).toHaveBeenCalledWith(mockApi);
    });

    it('does nothing when api is null', () => {
      const setCanScrollPrevMock = vi.fn();
      const setCanScrollNextMock = vi.fn();
      const onSelectMock = vi.fn();
      
      const handleSelect = useCarouselSelection(
        null as any,
        setCanScrollPrevMock,
        setCanScrollNextMock,
        onSelectMock
      );
      
      handleSelect(null as any);
      
      expect(setCanScrollPrevMock).not.toHaveBeenCalled();
      expect(setCanScrollNextMock).not.toHaveBeenCalled();
      expect(onSelectMock).not.toHaveBeenCalled();
    });
  });
});

// Basic tests for the Carousel components
describe('Carousel Components', () => {
  beforeEach(() => {
    // Mock embla-carousel-react
    vi.mock('embla-carousel-react', () => ({
      default: () => [
        React.createRef(),
        {
          canScrollPrev: () => true,
          canScrollNext: () => true,
          scrollPrev: vi.fn(),
          scrollNext: vi.fn(),
          on: vi.fn(),
          off: vi.fn(),
        }
      ]
    }));
  });

  it('renders Carousel with children', () => {
    render(
      <Carousel>
        <div data-testid="carousel-child">Carousel Content</div>
      </Carousel>
    );
    expect(screen.getByTestId('carousel-child')).toBeInTheDocument();
  });

  it('renders CarouselContent', () => {
    render(
      <Carousel>
        <CarouselContent>
          <div data-testid="carousel-content">Content</div>
        </CarouselContent>
      </Carousel>
    );
    expect(screen.getByTestId('carousel-content')).toBeInTheDocument();
  });

  it('renders CarouselItem', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div data-testid="carousel-item">Item</div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    );
    expect(screen.getByTestId('carousel-item')).toBeInTheDocument();
  });
});
