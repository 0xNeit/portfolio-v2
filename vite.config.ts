import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import fs from 'fs';

const folders = fs.readdirSync('./src', { withFileTypes: true });
const fileNames = folders
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const filePaths = fileNames.reduce(
  (acc, cur) => ({
    // @ts-ignore
    ...acc,
    [cur]: `/${cur === 'src' ? cur : 'src/' + cur}`,
  }),
  ''
);

console.log(`filePaths: ${JSON.stringify(filePaths, null, 2)}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin(), tsconfigPaths()],
  server: {
    port: 4000,
    open: true,
  },
  resolve: {
    alias: {
      ...filePaths,
    },
  },
})
