import {Link} from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import {useCart} from "../context/CartContext.jsx";
import styles from "./Layout.module.css";


function Layout({ children }) {
    const [state] = useCart()


    return (
        <>
            <header className={styles.header}>
                <Link to="/products">Shop</Link>
                <Link to="/checkout">
                    <div>
                        <PiShoppingCartSimpleBold/>
                        {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
                    </div>
                </Link>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developed by Keihan with Love</p>
            </footer>
        </>
    )
}
export default Layout