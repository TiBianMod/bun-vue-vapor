import { plugin } from "bun";
import { transform } from "oxc-transform";
import { transform as jsxTransform } from "@vue-jsx-vapor/compiler-rs";
import type { PluginBuilder } from "bun";

plugin({
    name: "BUN::TSX::Plugin",
    setup(build: PluginBuilder) {
        build.onLoad({ filter: /\.(jsx|tsx)$/ }, async ({ path }) => {
            console.log("# BUN::TSX::Plugin");
            console.log("# TRANSFORM: ", path);
            console.log("------------------------------------------------");

            // Transpile a JavaScript or TypeScript into a target
            // ECMAScript version using `oxc-transform`
            const { code } = await transform(path, await Bun.file(path).text(), {
                jsx: "preserve",
                lang: "tsx",
            });

            // Transform JSX using `@vue-jsx-vapor/compiler-rs`
            const result = jsxTransform(code, {
                filename: path,
            });

            return { contents: result.code, loader: "js" };
        });
    },
});
