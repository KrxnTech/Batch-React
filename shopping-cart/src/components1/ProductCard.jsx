export default function ProductCard({ product, addToCart }) {
    return (
        <div>
            <p>
                {product.name} = ${product.price}
                <button onClick={()=>addToCart(product)}>Add To Cart</button>
            </p>
        </div>
    )
}