import {useProducts} from "../context/ProducContext.jsx";
import styles from "../pages/ProductsPage.module.css"
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";
import {useEffect, useState} from "react";
import { filterProducts, searchProducts,getInitialQuery} from "../helpers/helper.js";
import {useSearchParams} from "react-router-dom";
import SearchBox from "../components/SearchBox.jsx";
import Sidebar from "../components/Sidebar.jsx";


function ProductsPage() {
    const products = useProducts()

    const [search, setSearch] = useState("");
    const [displayed, setDisplayed] = useState([]);
    const [query, setQuery] = useState({});

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setDisplayed(products)

        setQuery(getInitialQuery(searchParams))
    }, [products])

    useEffect(() => {
        setSearchParams(query)
        setSearch(query.search || "")
        let finalProducts = searchProducts(products, query.search);
        finalProducts = filterProducts(finalProducts, query.category);

        setDisplayed(finalProducts)
    },[query])


    return (
        <>
            <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
            <div className={styles.container}>
                <div className={styles.products}>
                    {!displayed.length && <Loader/>}
                    {displayed.map((product) => (
                        <Card key={product.id} data={product} />
                    ))}
                </div>
                <Sidebar query={query} setQuery={setQuery} />
            </div>
        </>
    )
}
export default ProductsPage;