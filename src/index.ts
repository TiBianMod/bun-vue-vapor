// import { createViteServer } from "./helpers/create_vite_server.js";

const server = Bun.serve({
    port: 3000,
    development: true,
    routes: {
        "/": async () => {
            // at this point the plugin inside `src/preload.ts` is called
            const { Home } = await import("./pages/home.tsx");

            // at this point we need the results from
            // `@vue-jsx-vapor/compiler-rs` -> transform
            console.log("# OUTPUT");
            console.log(Home);
            console.log("------------------------------------------------");

            // WIP: next step, after resolving the issues until here
            return new Response("HOME");
        },
    },
});

console.log(`Listening on ${server.url}`);

// Start VITE SERVER, only if is not running.
// await createViteServer();
