import { createContext, useEffect, useState } from "react";

export const GlobalStateContext = createContext(null)

const GlobalStateProvider = ({ children }) => {

    const [products, setProducts] = useState([])


    //get products
    const getProducts = async (searchText, sort) => {

        let url = `https://ecommerce-server-rust.vercel.app//products`;
        if (searchText && sort) {
            url += `?search=${searchText}&sort=${sort}`;
        }
        else if (searchText) {
            url += `?search=${searchText}`;
        }
        else if (sort) {
            url += `?sort=${sort}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    //loading initial data
    useEffect(() => {
        getProducts();
    }, [])



    const globalState = {
        products,
        getProducts,
        setProducts
    }

    return (
        <GlobalStateContext.Provider value={globalState}>{children}</GlobalStateContext.Provider>
    );
};

export default GlobalStateProvider;