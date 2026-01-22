import { connect, spawn } from "bun";
import { join } from "node:path";

export async function createViteServer() {
    await connect({
        hostname: "localhost",
        port: 5173,
        socket: {
            data() {},
        },
    }).catch(async () => {
        await startServer();
    });
}

async function startServer() {
    const server = spawn({
        cmd: ["bun", join(import.meta.dir, "./vite_server.ts")],
        cwd: ".",
        stdio: ["ignore", "inherit", "inherit"],
    });

    server.exited.then(async () => {
        console.log("Vite server exited");
        console.log("Start new Vite server");

        await startServer();
    });
}
