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

            const source = await Bun.file(path).text();

            // Transpile a JavaScript or TypeScript into a target
            // ECMAScript version using `oxc-transform`
            const { code } = await transform(path, source, {
                jsx: "preserve",
                lang: "tsx",
            });

            // Transform JSX using `@vue-jsx-vapor/compiler-rs`
            const result = jsxTransform(code, {
                filename: path,
                ssr: true,
                runtimeModuleName: "vue-jsx-vapor",
            });

            console.log("# RESULT");
            console.log(result.code);
            console.log("------------------------------------------------");

            return { contents: result.code, loader: "js" };
        });
    },
});
