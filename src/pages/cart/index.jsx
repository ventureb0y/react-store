import { useEffect } from "react"
import { useCartStore } from "../../app/store/cartStore"
import { CartItem } from "../../widgets/cartItem/cartItem"

export function CartPage () {
    const [cart, total, countTotal] = useCartStore(state => [state.cart, state.total, state.countTotal])
    useEffect(() => {
        countTotal()
    }, [cart])
    return (
        <div className="container mx-auto p-4 grid grid-cols-6 gap-3 justify-between">
            {cart.length != 0 ? <>
            <div className="col-span-4 flex flex-col gap-3">
            {cart.map(e => <CartItem data={e}/>)}
            </div>
            <div className="col-span-2 bg-white rounded p-4 text-black h-fit">
                <h3 className="text-3xl font-semibold mb-8">Your cart</h3>
                <div className="flex justify-between">
                    <span className="text-lg font-medium">Price</span>
                    <span className="text-lg font-medium">${total}</span>
                </div>
                <div className="flex justify-between text-indigo-500">
                    <span className="text-lg font-medium">Discount</span>
                    <span className="text-lg font-medium">- ${Math.round(total * 0.2)}</span>
                </div>
                <div className="flex justify-between font-bold">
                    <span className="text-lg">Total cost</span>
                    <span className="text-2xl">${Math.round(total - total * 0.2)}</span>
                </div>
                <button className="w-full px-4 py-1.5 bg-slate-200 mt-4 rounded font-medium">
                    Continue
                </button>
            </div></> : <h1 className="text-black text-4xl font-medium col-span-6">Your cart is empty!</h1>}
        </div>
    )
}