import { defineConfig,} from 'vite'

export default defineConfig({
    plugins:[],
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