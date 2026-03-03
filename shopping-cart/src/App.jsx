// import { useState } from "react";
// import Header from "./components1/Header";
// import ProductList from "./components1/ProductList";
// import Cart from "./components1/Cart";

// export default function App() {

//   const [cart, setCart] = useState([]) // STATE BORN 


//   // DATA SOUCE BORN 
//   const products = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Headphones", price: 2000 },
//     { id: 3, name: "Mouse", price: 800 }

//   ]

//   // EVENT BORN 
//   function addToCart(products) {
//     setCart([...cart, products])
//   }

//   return (
//     <>
//       <Header />

//       <ProductList products={products} addToCart={addToCart} />
//       <Cart cart={cart} />

//     </>
//   )

// }

import { useState } from "react";
import Header from "./components2/Header";
import ProductList from "./components2/ProductList";
import Cart from "./components2/Cart";
import "./App.css"

export default function App() {

  const [cart, setCart] = useState([]) // INITIALLY THE CART IS EMPTY 

  // DUMMY PRODUCT DATA 🤙
  const products = [
    // PRODUCT - 1 
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    // PRODUCT - 2 
    {
      id: 2,
      name: "Headphones",
      price: 2000
    },
    // PRODUCT - 3 
    {
      id: 3,
      name: "Mouse",
      price: 800
    }
  ]

  // FUNCTION WHICH WILL ADD THE PRODUCT INTO CART THROUGH BUTTON CLICK 
  function addToCart(product) {
    setCart([...cart, product])
  }

  return (
    <>
      <Header />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </>
  )
}