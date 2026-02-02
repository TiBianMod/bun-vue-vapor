import { defineComponent } from "vue";
import { Button } from "../components/button.js";

export const Home = defineComponent(() => {
    return () => (
        <main>
            <h3>Lorem ipsum dolor sit amet!</h3>
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, obcaecati.
                Corrupti asperiores fugit, voluptatibus sint provident explicabo, similique natus
                eius ut illum labore quas libero? Vel iusto nam blanditiis magnam.
            </div>

            <Button />
        </main>
    );
});
