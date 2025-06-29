import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/AutoDeployPro/', // ✅ This is the fix
  plugins: [react()],
});
