export default function Cart({ cart }) {
    return (
        <div>
            <h2>CART</h2>
            {cart.length === 0 && <p>YOUR CART IS EMPTY</p>}
            {
                cart.map((item, i) => (
                    <p key={i}>
                        {item.name} {item.price}
                    </p>
                ))
            }
        </div>
    )
}