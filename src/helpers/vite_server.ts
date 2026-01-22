import { createServer } from "vite";
import vueJsxVapor from "vue-jsx-vapor/vite";

const server = await createServer({
    server: {
        port: 5173,
    },
    plugins: [
        vueJsxVapor({
            macros: true,
        }),
    ],
});

await server.listen();

console.log(`Vite started on http://localhost:5173`);
