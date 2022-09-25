
import { useSiteContext } from "../../store/SiteProvider";
import classes from "./CartIcon.module.css";

const Cart = () => {

    const ctx = useSiteContext()[0];

    const totalItems = ctx.cart.reduce((acc,item) => acc + parseInt(item.amount),0)

    // console.log(ctx.cart);

    return (
        <div className = {classes.cartIcon}>
            <div className={classes.count}>{totalItems}</div>
            <svg className={classes.cart} width = "70" height = "50">
                <line x1 = "0" y1 = "44" x2 = "15" y2 = "44"></line>
                <line x1 = "13" y1 = "44" x2 = "25" y2 = "14"></line>
                <line x1 = "23" y1 = "14" x2 = "58" y2 = "14"></line>
                <line x1 = "56" y1 = "14" x2 = "68" y2 = "39"></line>
                <circle cx = "28" cy = "5" r = "2"></circle>
                <circle cx = "52" cy = "5" r = "2"></circle>
            </svg>
        </div>
    );
}

export default Cart;