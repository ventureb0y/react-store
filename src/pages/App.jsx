import { useEffect } from 'react'
import { getProductsData } from '../features/api/api'
import { useProductsStore } from '../app/store/productsStore'
import { ProductCard } from '../widgets/productCard/productCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartPage } from './cart'
import { Header } from '../widgets/Header/Header'
import { Notification } from '../shared/ui/notification'
import { useCartStore } from '../app/store/cartStore'
import { NotificationLayout } from '../widgets/Layouts/NotificationsLayout'

function App() {
  const [products, setProducts] = useProductsStore(state => ([state.products, state.setProducts]))
  const cart = useCartStore(state => state.cart)
  useEffect(() => {
    async function getData() {
      const req = await getProductsData()
      setProducts(req.data)
    }
    getData()
  }, [])

  return (
    <BrowserRouter>
    <Header/>
          <NotificationLayout>
                {cart.map(e => <Notification key={e.id} data={e}/>)}
          </NotificationLayout>   
      <Routes>
        <Route path='/' element={
        <div className='container mx-auto p-5'>
          <div className='grid grid-cols-5 grid-flow-row-dense gap-4'>
            {products.map(e => <ProductCard key={e.id} data={e}/>)}
          </div>
        </div>}/> 
        <Route path='cart' element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
