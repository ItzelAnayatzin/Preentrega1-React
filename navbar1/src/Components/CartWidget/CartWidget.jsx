const CartWidget = ({quanCart}) => {
    return (
        <div>
            <img src="../Cart.ico" alt="" />
            <p>{quanCart}</p>
        </div>
    );
}

export default CartWidget;