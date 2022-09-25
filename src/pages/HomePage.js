import {Fragment} from "react";

import HeroSection from "../Components/HeroSection/HeroSection";
import Header from "../Components/Navbar/Header";
import Products from "../Components/Product/Products";

const HomePage = () => {
    return (
        <Fragment>
            <Header/>
            <div style = {{
                    "display":"flex",
                    "flexDirection":"column",
                    "alignItems": "center"
                }}
            >
                <HeroSection/>
                <Products/>
            </div>
        </Fragment>
    );
}

export default HomePage;