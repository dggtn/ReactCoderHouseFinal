const CartItem = ({cartItem, onRemove}) => {
    const subTotal = () => (cartItem.item.price * cartItem.quantity).toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    });

    function removeItem() {
        onRemove(cartItem.item.id)
    }
    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src={cartItem.item.pictureUrl} alt={cartItem.item.description} className="h-full w-full object-cover object-center"/>
            </div>
            <div className="ml-4 flex flex-1 flex-col">
            <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                        <a href="#">{cartItem.item.title}</a>
                    </h3>
                    <p className="ml-4">{subTotal()}</p>
                </div>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Cantidad: {cartItem.quantity}</p>

                <div className="flex">
                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={removeItem}>Quitar</button>
                </div>
            </div>
            </div>
        </li>
    )
}

export default CartItem;