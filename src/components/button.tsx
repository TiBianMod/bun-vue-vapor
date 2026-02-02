import { defineComponent } from "vue";

export const Button = defineComponent({
    name: "Button",
    setup() {
        return () => <button>Button</button>;
    },
});
