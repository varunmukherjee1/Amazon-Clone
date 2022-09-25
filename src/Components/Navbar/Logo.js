import classes from "./Logo.module.css"

const Logo = (props) => {

    return (
        <div className = {classes.container}>
            <img src = "https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="😅" />
            <span>.in</span>
        </div>
    );
}

export default Logo;