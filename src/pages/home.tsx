import { defineVaporComponent } from "vue";

export const Home = defineVaporComponent({
    name: "Home",
    render() {
        return (
            <main>
                <h3>Title</h3>
                <div>Home Page</div>
            </main>
        );
    },
});
