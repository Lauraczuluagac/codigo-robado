import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Inicio from './components/Inicio'
import Celulares from './components/Celulares'
import Computadores from './components/Computadores'
import Tablets from './components/Tablets'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Inicio/>,
    
  },
  {
    path:'/celulares',
    element:<Celulares/>
  },
  {
    path:'/computadores',
    element:<Computadores/>
  },
  {
    path:'/tablets',
    element:<Tablets/>
  }
])




function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
