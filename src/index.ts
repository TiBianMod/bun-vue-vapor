// import { createViteServer } from "./helpers/create_vite_server.js";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp } from "vue";

const server = Bun.serve({
    port: 3000,
    development: true,
    routes: {
        "/": async () => {
            // at this point the plugin inside `src/preload.ts` is called
            // and will transform the `tsx` file
            const { Home } = await import("./pages/home.tsx");

            // at this point we need the results from
            // `@vue-jsx-vapor/compiler-rs` -> transform
            console.log("# OUTPUT");
            console.log(Home);
            console.log("------------------------------------------------");

            const app = createSSRApp(Home, { class: ["p-4 flex"] });
            const html = await renderToString(app);

            return new Response(html, {
                headers: {
                    "Content-Type": "text/html",
                },
            });
        },
    },
});

console.log(`Listening on ${server.url}`);

// Start VITE SERVER, only if is not running.
// await createViteServer();
