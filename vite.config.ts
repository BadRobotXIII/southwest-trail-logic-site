import { defineConfig,} from 'vite'


import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    plugins:[cloudflare()],
    build: {
        rollupOptions:{
            input:{
                index:'index.html',
                main: 'main.html'
            }
        },
        outDir: 'dist'
  }
})