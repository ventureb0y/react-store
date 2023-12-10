import { useCartStore } from "../../app/store/cartStore"
import { UIInput } from "../../shared/ui/ui-input"

export function CartItem ({ data }) {
    const [addProduct, removeProduct, deleteProduct, changeAmount] = useCartStore(state => [state.addProduct, state.removeProduct, state.deleteProduct, state.changeAmount])
    return (
        <div className="bg-white text-black grid grid-cols-12 rounded">
        <img className="h-32 p-4 col-span-3" src={data.image} alt="" />
        <span className="font-medium col-span-4 mt-4">{data.title}</span>
        <span className="font-medium mt-4 text-xl col-start-9">${data.price}</span>
        <div className="items-start col-start-11 col-span-3 m-4">
            <div className='flex justify-between'>
                <button className='bg-slate-200 text-black rounded py-1.5 px-4 font-medium' onClick={() => {removeProduct(data)}}>-</button>
                <UIInput fn={(e) => {changeAmount(data.id, e.target.value)}} value={data.amount}/>
                <button className='bg-slate-200 text-black rounded py-1.5 px-4 font-medium' onClick={() => {addProduct(data)}}>+</button>
            </div>
            <button onClick={() => {deleteProduct(data.id)}} className="bg-slate-200 w-full py-1.5 mt-1 rounded">Remove</button>
        </div>
        </div>
    )
}