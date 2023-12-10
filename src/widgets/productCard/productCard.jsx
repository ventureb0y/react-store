import { useCartStore } from '../../app/store/cartStore'

export function ProductCard ({ data }) {
    const [cart, addProduct, removeProduct] = useCartStore(state => [state.cart, state.addProduct, state.removeProduct])
    return (
        <div className='bg-white text-black p-2 rounded'>
            <img src={data.image} alt="" className='h-40 mx-auto my-5'/>
            <h2 className='font-bold text-2xl '>${data.price}</h2>
            <h3 className='truncate text-lg font-medium mb-2'>{data.title}</h3>
        {cart.some((e) => e.id == data.id) ? 
        <div className='flex justify-between items-center'>
                <button className='bg-slate-200 text-black rounded py-1.5 px-4 font-medium' onClick={() => {removeProduct(data)}}>-</button>
                <div className='border-slate-200 border-2 text-center font-medium py-1 w-16 mx-1 rounded'>{cart.find(e => e.id == data.id).amount}</div>
                <button className='bg-slate-200 text-black rounded py-1.5 px-4 font-medium' onClick={() => {addProduct(data)}}>+</button></div> : 
                <button onClick={() => {addProduct(data)}} className='bg-slate-200 text-black font-medium py-1.5 w-full rounded'>Add</button>}
        </div>
    )
}