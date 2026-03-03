import ProductCard from "./ProductCard";
export default function ProductList({ products, addToCart }) {
    return (
        <div>
            <h3>PRODUCTS</h3>
            <hr />

            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    )
}