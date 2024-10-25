import {useCart} from "../context/CartContext.jsx";
import BasketCard from "../components/BasketCard.jsx";
import BasketSidebar from "../components/BasketSidebar.jsx";
import styles from "./CheckoutPage.module.css"
import { MdRemoveShoppingCart } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
    const navigate = useNavigate()
    const [state, dispatch] = useCart()

    const clickHandler = (type, product) => {
        dispatch({type, payload : product})
    }

    if (!state.itemsCounter) {
        return (
            <div className={styles.emptyCartContainer}>
                <div className={styles.emptyCartContent}>
                    <div className={styles.iconWrapper}>
                        <MdRemoveShoppingCart className={styles.emptyCartIcon} />
                    </div>
                    <h2 className={styles.emptyCartTitle}>Your cart is feeling lonely</h2>
                    <p className={styles.emptyCartMessage}>
                        It looks like you haven't added anything to your cart yet.
                        Let's change that!
                    </p>
                    <button className={styles.continueShopping} onClick={() => navigate('/')}>
                        <span className={styles.buttonText}>Discover Amazing Products</span>
                        <span className={styles.buttonIcon}>→</span>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <BasketSidebar state={state} clickHandler={clickHandler} />
            <div className={styles.products}>{state.selectedItems.map((product) => (
                <BasketCard key={product.id} product={product} clickHandler={clickHandler} />
            ))}</div>
        </div>
    )
}
export default CheckoutPage