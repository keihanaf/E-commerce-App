import {Navigate, Route, Routes} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import ProductsProvider from "./context/ProducContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import Layout from "./Layout/Layout.jsx";



function App() {

  return (
    <>
        <CartProvider>
            <ProductsProvider>
                <Layout>
                    <Routes>
                        <Route index element={<Navigate to="/products" replace /> } />
                        <Route path="/products" element={ <ProductsPage/> } />
                        <Route path="/products/:id" element={ <DetailsPage/> } />
                        <Route path="/checkout" element={ <CheckoutPage/> } />
                        <Route path="/*" element={ <PageNotFound/> } />
                    </Routes>
                </Layout>
            </ProductsProvider>
        </CartProvider>
    </>
  )
}

export default App
