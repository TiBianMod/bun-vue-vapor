import { defineComponent } from "vue";
import type { ButtonHTMLAttributes } from "vue-jsx-vapor";

interface ButtonProps extends ButtonHTMLAttributes<{}> {
    variant?: "default" | "danger" | "light";
}

export const Button = defineComponent<ButtonProps>({
    name: "Button",
    render() {
        return <button>+</button>;
    },
});
