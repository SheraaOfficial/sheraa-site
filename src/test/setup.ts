
import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend vitest's expect method with methods from jest-dom
expect.extend(matchers);

// Runs a cleanup after each test case
afterEach(() => {
  cleanup();
});
