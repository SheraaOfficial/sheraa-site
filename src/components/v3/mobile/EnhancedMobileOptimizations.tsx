import React, { useEffect, useState, useRef } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';

interface MobileOptimizationProps {
  children: React.ReactNode;
  enableHaptics?: boolean;
  enableGestures?: boolean;
  enableBatteryAware?: boolean;
}

interface DeviceInfo {
  isMobile: boolean;
  isTouch: boolean;
  batteryLevel: number;
  performance: 'high' | 'medium' | 'low';
  connection: 'fast' | 'slow' | 'offline';
}

export const EnhancedMobileOptimizations: React.FC<MobileOptimizationProps> = ({
  children,
  enableHaptics = true,
  enableGestures = true,
  enableBatteryAware = true
}) => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTouch: false,
    batteryLevel: 100,
    performance: 'high',
    connection: 'fast'
  });

  const [gestureState, setGestureState] = useState({
    isSwipeActive: false,
    swipeDirection: null as 'left' | 'right' | 'up' | 'down' | null,
    isPinching: false,
    pinchScale: 1
  });

  const touchesRef = useRef<Touch[]>([]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  // Device detection and performance monitoring
  useEffect(() => {
    const detectDevice = async () => {
      const isMobile = window.innerWidth < 768;
      const isTouch = 'ontouchstart' in window;
      
      let batteryLevel = 100;
      let performance: 'high' | 'medium' | 'low' = 'high';
      let connection: 'fast' | 'slow' | 'offline' = 'fast';

      // Battery API (experimental)
      try {
        if ('getBattery' in navigator) {
          const battery = await (navigator as any).getBattery();
          batteryLevel = battery.level * 100;
        }
      } catch (e) {
        // Battery API not supported
      }

      // Performance detection
      const cores = navigator.hardwareConcurrency || 2;
      const memory = (navigator as any).deviceMemory || 4;
      
      if (cores <= 2 || memory <= 2) {
        performance = 'low';
      } else if (cores <= 4 || memory <= 4) {
        performance = 'medium';
      }

      // Connection detection
      const conn = (navigator as any).connection;
      if (conn) {
        if (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g') {
          connection = 'slow';
        } else if (!navigator.onLine) {
          connection = 'offline';
        }
      }

      setDeviceInfo({ isMobile, isTouch, batteryLevel, performance, connection });
    };

    detectDevice();
  }, []);

  // Haptic feedback simulation
  const triggerHaptic = (type: 'light' | 'medium' | 'heavy' = 'light') => {
    if (!enableHaptics || !deviceInfo.isTouch) return;

    // Vibration API (if available)
    if ('vibrate' in navigator) {
      const patterns = {
        light: [10],
        medium: [20],
        heavy: [30, 10, 30]
      };
      navigator.vibrate(patterns[type]);
    }
  };

  // Multi-touch gesture handling
  const handleTouchStart = (e: TouchEvent) => {
    if (!enableGestures) return;
    
    touchesRef.current = Array.from(e.touches);
    
    if (e.touches.length === 2) {
      setGestureState(prev => ({ ...prev, isPinching: true }));
      triggerHaptic('light');
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!enableGestures) return;
    
    const touches = Array.from(e.touches);
    
    if (touches.length === 2 && touchesRef.current.length === 2) {
      // Pinch gesture
      const currentDistance = Math.sqrt(
        Math.pow(touches[0].clientX - touches[1].clientX, 2) +
        Math.pow(touches[0].clientY - touches[1].clientY, 2)
      );
      
      const initialDistance = Math.sqrt(
        Math.pow(touchesRef.current[0].clientX - touchesRef.current[1].clientX, 2) +
        Math.pow(touchesRef.current[0].clientY - touchesRef.current[1].clientY, 2)
      );
      
      const scaleValue = currentDistance / initialDistance;
      scale.set(scaleValue);
      setGestureState(prev => ({ ...prev, pinchScale: scaleValue }));
    }
  };

  const handleTouchEnd = () => {
    if (!enableGestures) return;
    
    setGestureState({
      isSwipeActive: false,
      swipeDirection: null,
      isPinching: false,
      pinchScale: 1
    });
    
    scale.set(1);
    touchesRef.current = [];
  };

  // Swipe gesture handling
  const handlePan = (event: any, info: PanInfo) => {
    if (!enableGestures) return;

    const { offset, velocity } = info;
    const threshold = 50;
    const velocityThreshold = 300;

    if (Math.abs(offset.x) > threshold || Math.abs(velocity.x) > velocityThreshold) {
      const direction = offset.x > 0 ? 'right' : 'left';
      setGestureState(prev => ({ 
        ...prev, 
        isSwipeActive: true, 
        swipeDirection: direction 
      }));
      triggerHaptic('medium');
    } else if (Math.abs(offset.y) > threshold || Math.abs(velocity.y) > velocityThreshold) {
      const direction = offset.y > 0 ? 'down' : 'up';
      setGestureState(prev => ({ 
        ...prev, 
        isSwipeActive: true, 
        swipeDirection: direction 
      }));
      triggerHaptic('medium');
    }
  };

  // Apply performance optimizations based on device capabilities
  const getOptimizedStyles = () => {
    const baseStyles: React.CSSProperties = {};

    if (enableBatteryAware && deviceInfo.batteryLevel < 20) {
      // Low battery mode - reduce animations
      baseStyles.animationDuration = '0.1s';
      baseStyles.transitionDuration = '0.1s';
    }

    if (deviceInfo.performance === 'low') {
      // Low performance mode
      baseStyles.willChange = 'auto';
      baseStyles.backfaceVisibility = 'hidden';
      baseStyles.perspective = '1000px';
    }

    return baseStyles;
  };

  useEffect(() => {
    if (!deviceInfo.isTouch) return;

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [deviceInfo.isTouch, enableGestures]);

  return (
    <motion.div
      style={{ 
        x, 
        y, 
        scale,
        ...getOptimizedStyles()
      }}
      drag={enableGestures && deviceInfo.isTouch}
      dragElastic={0.1}
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      onPan={handlePan}
      className={`mobile-optimized ${
        deviceInfo.performance === 'low' ? 'low-performance' : ''
      } ${
        deviceInfo.batteryLevel < 20 ? 'battery-saver' : ''
      }`}
    >
      {children}

      {/* Performance overlay for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 bg-black/80 text-white p-2 rounded text-xs z-50">
          <div>Battery: {deviceInfo.batteryLevel.toFixed(0)}%</div>
          <div>Performance: {deviceInfo.performance}</div>
          <div>Connection: {deviceInfo.connection}</div>
          {gestureState.isSwipeActive && (
            <div>Swipe: {gestureState.swipeDirection}</div>
          )}
          {gestureState.isPinching && (
            <div>Pinch: {gestureState.pinchScale.toFixed(2)}x</div>
          )}
        </div>
      )}

      {/* Gesture indicators */}
      {enableGestures && gestureState.isSwipeActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 pointer-events-none flex items-center justify-center z-40"
        >
          <div className="bg-sheraa-primary/20 backdrop-blur-sm rounded-full p-6 border border-sheraa-primary/30">
            <div className="text-2xl">
              {gestureState.swipeDirection === 'left' && '←'}
              {gestureState.swipeDirection === 'right' && '→'}
              {gestureState.swipeDirection === 'up' && '↑'}
              {gestureState.swipeDirection === 'down' && '↓'}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};