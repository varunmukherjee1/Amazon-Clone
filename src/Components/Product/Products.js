import Product from "./Product";

import classes from "./Products.module.css";

const Products = () => {
    return (
        <div className = {classes.products}>
            <Product
                id = "1"
                image = "https://m.media-amazon.com/images/I/71AvQd3VzqL._AC_UL320_.jpg"
                rating = "4"
                description="OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)"
                price = "19999"
            />

            <Product
                id = "2"
                image = "https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UL320_.jpg"
                rating = "4"
                description="Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life, Launched in April 2022 (Magico Black)"
                price = "1799"
            />

            <Product
                id = "3"
                image = "https://m.media-amazon.com/images/I/617ysOitciL._AC_UL320_.jpg"
                rating = "3"
                description="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Charcoal Black)"
                price = "2999"
            />

            <Product
                id = "4"
                image = "https://m.media-amazon.com/images/I/51HBom8xz7L._AC_UL320_.jpg"
                rating = "4"
                description="boAt Airdopes 141 True Wireless Earbuds with 42H Playtime, Beast™ Mode(Low Latency Upto 80ms) for Gaming, ENx™ Tech, ASAP™ Charge, IWP™, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)"
                price = "1499"
            />

            <Product
                id = "5"
                image = "https://m.media-amazon.com/images/I/812YsUxpyfL._AC_UL320_.jpg"
                rating = "4"
                description="Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"
                price = "11999"
            />

            <Product
                id = "6"
                image = "https://m.media-amazon.com/images/I/71L-lTQnJiL._AC_UL320_.jpg"
                rating = "4"
                description="Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)"
                price = "14999"
            />

            <Product
                id = "7"
                image = "https://m.media-amazon.com/images/I/51vE1zjkFGL._AC_UL320_.jpg"
                rating = "4"
                description="Fire TV Stick 4K Max streaming device, Alexa Voice Remote (includes TV controls)| 2021 release"
                price = "6499"
            />

            <Product
                id = "8"
                image = "https://m.media-amazon.com/images/I/812YsUxpyfL._AC_UL320_.jpg"
                rating = "4"
                description="Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"
                price = "11999"
            />

            <Product
                id = "9"
                image = "https://m.media-amazon.com/images/I/81qoKyMES2L._AC_UL320_.jpg"
                rating = "4"
                description="OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV 43Y1S Pro (Black)"
                price = "29999"
            />
        </div>
    );
}

export default Products;