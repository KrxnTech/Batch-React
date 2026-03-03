import ProductCard from "./ProductCard"
export default function ProductList({ products, addToCart }) { // WE PASS THE ARRAY 
    return (
        <div>
            <h2>PRODUCT</h2>
            <hr />
            {products.map(p => (
                <ProductCard
                    key={p.id}
                    product={p}
                    addToCart={addToCart} />
            ))}
        </div>
    )
}