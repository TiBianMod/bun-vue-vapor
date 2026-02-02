import { defineComponent, ref } from "vue";
import type { ButtonHTMLAttributes } from "vue-jsx-vapor";

interface ButtonProps extends ButtonHTMLAttributes<{}> {
    variant?: "default" | "danger" | "light";
}

export const Button = defineComponent<ButtonProps>({
    name: "Button",
    setup() {
        const foo = ref("4453");

        return { foo };
    },
    render(data, props) {
        return <button>Value: {data.foo}</button>;
    },
});
