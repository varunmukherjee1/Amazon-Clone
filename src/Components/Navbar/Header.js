import {Link} from "react-router-dom";

import Logo from "./Logo";
import NavLink from "./NavLink";
import CartIcon from "../Cart/CartIcon";
import { useSiteContext } from "../../store/SiteProvider";
import {myAuth} from "../../store/firebase";

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import classes from "./Header.module.css"

const Header = () => {

    const ctx = useSiteContext()[0];

    const logoutHandler = () => {
        myAuth.signOut(myAuth.auth);
    }

    const userElement = (ctx.user)? (
                <Link onClick = {logoutHandler} to = "/">
                    <NavLink width = "122px">
                        <span>{`Hello, ${(ctx.user.length > 6)? `${ctx.user.slice(6)}...`: ctx.user}`}</span>
                        <span>Sign Out</span>
                    </NavLink>
                </Link>
            ):
            (
                <Link to = "/login">
                    <NavLink width = "122px">
                        <span>Hello,Sign in</span>
                        <span>Account & Lists</span>
                    </NavLink>
                </Link>
            );
    
    return (
        <div className = {classes.header}>
            {/* logo */}
            <Link to = "/">
                <Logo/>
            </Link>

            {/* Link */}
            <div className = {classes.header__location}>
                <PlaceOutlinedIcon fontSize="small" style = {{"margin-bottom": "0.3rem"}}/>
                <NavLink width = "150px">
                    <span>Hello</span>
                    <span>Select your address</span>
                </NavLink>
            </div>

            {/* Search bar */}
            <div className = {classes.searchBar}>
                <input type="text" name="" id="" />
                <div className = {classes.searchBar__btn}>
                    <SearchOutlinedIcon fontSize = "medium" style = {{"color":"#333333","fontSize":"30px"}}/>
                </div>
            </div>

            {/* Links */}
            {userElement}

            <NavLink width = "75px">
                <span>Returns</span>
                <span>& Orders</span>
            </NavLink>

            {/* cart */}
            <Link to = "/checkout">
                <NavLink >
                    <CartIcon/>
                </NavLink>
            </Link>
        </div>
        
    );
}

export default Header;