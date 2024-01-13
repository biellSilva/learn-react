
import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
} from 'react-router-dom'
import { Home } from './pages/home/home'
import { BaseLayout } from './components/layout/base'
import { SimulacraCards } from './pages/simulacra/simulacra'
import { NotFound404 } from './pages/not.found'
import { WeaponsCards } from './pages/weapons/weapons'
import { SimulacraPage } from './pages/simulacra/simulacra.id'
import { AppProvider } from './context/app.context'
import { WeaponsPage } from './pages/weapons/weapons.id'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<AppProvider><BaseLayout/></AppProvider>}>
        
        <Route index element={<Home />}/>

        <Route path='*' element={<NotFound404/>}/>
        <Route path='/404' element={<NotFound404/>}/>

        <Route path='/simulacra' element={<SimulacraCards/>}/>
        <Route path='/simulacra/:id' element={<SimulacraPage/>}/>

        <Route path='/weapons' element={<WeaponsCards/>}/>
        <Route path='/weapons/:id' element={<WeaponsPage/>}/>
        
      </Route>
    </>
  )
)


function App() {
  return <RouterProvider router={router}/>
}

export default App
