import {FaListUl} from "react-icons/fa";
import {createQueryObject} from "../helpers/helper.js";
import {categories} from "../constant/list.js";
import styles from "./Sidebar.module.css";



function Sidebar({setQuery,query}) {

    const categoryHandler = (e) => {
        const {tagName} = e.target;
        const category = e.target.innerText.toLowerCase();

        if (tagName !== "LI"){
            return
        }
        setQuery((query) => createQueryObject(query, {category: category}))
    }

    return (
        <div className={styles.sidebar}>
            <div>
                <FaListUl/>
                <p>Categories</p>
            </div>
            <ul onClick={categoryHandler}>
                {
                    categories.map((item) => (
                        <li key={item.id} className={item.type.toLowerCase() === query.category ? styles.selected: null}>{item.type}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar;