export default function ProductCart({ product, addToCart }) {
    return (
        <p>
            {product.name} {product.price}
            <button onClick={addToCart(product)}>ADD PRODUCT</button>
        </p>
    )
}