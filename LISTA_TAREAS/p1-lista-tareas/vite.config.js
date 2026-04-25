import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    globals: true, // describe, it, expect, ... están disponibles globalmente sin necesidad de importarlos en cada archivo de test.
  }
})
