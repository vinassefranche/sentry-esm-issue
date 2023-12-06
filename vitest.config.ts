import { defineConfig, mergeConfig } from 'vitest/config';


export default defineConfig({
  resolve: {
    mainFields: ['module'],
  },
  test: {
    globals: true,
    include: ['./src/**/*.test.ts'],
  },
});
