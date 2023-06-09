import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: [
        "vue",
        "vue-router",
        "pinia",
        "@vueuse/core",
        {
          axios: [
            // 默认导入
            ["default", "axios"], // import { default as axios } from 'axios',
          ],
        },
      ],
    }),
    Components({
      //配置自动导入组件
      dirs: ['./src/components/', './src/view/'],
      deep: true,
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    //设置路径名
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
