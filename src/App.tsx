
import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'
import { Home } from './pages/home/home'
import { BaseLayout } from './components/layout/base'
import { SimulacraCards } from './pages/simulacra/simulacra'
import { NotFound404 } from './pages/not.found'
import { WeaponsCards } from './pages/weapons/weapons'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<BaseLayout />}>
        <Route index element={<Home />}/>
        <Route path='*' element={<NotFound404/>}/>
        <Route path='/simulacra' element={<SimulacraCards/>}/>
        <Route path='/weapons' element={<WeaponsCards/>}/>
      </Route>
    </>
  )
)


function App() {
  return <RouterProvider router={router}/>
}

export default App
