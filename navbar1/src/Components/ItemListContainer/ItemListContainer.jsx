const CartWidget = ({quanCart}) => {
    return (
        <div>
            <button className="btn"><img src="./cart.png" alt="" /></button>
            <p>{quanCart}</p>
        </div>
    );
}

export default CartWidget;