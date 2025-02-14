import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Master from "./Components/Layouts/Master";


createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        const Page = pages[`./Pages/${name}.jsx`].default;

        // Wrap the page inside the Master layout
        Page.layout = Page.layout || ((page) => <Master>{page}</Master>);

        return Page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
