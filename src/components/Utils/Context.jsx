import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

const Context = (props) => {
    const [products, setproducts] = useState(() => {
        try {
            const data = JSON.parse(localStorage.getItem("products"));
            return Array.isArray(data) ? data : []; // Ensure products is an array
        } catch (error) {
            console.error("Error parsing products from localStorage:", error);
            return []; // Fallback to an empty array
        }
    });

    useEffect(() => {
        // Store updated products back to localStorage whenever they change
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return (
        <ProductContext.Provider value={[products, setproducts]}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default Context;
