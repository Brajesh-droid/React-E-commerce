
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Details from './components/Details'
import Create from './components/Create'
import Edit from './components/Edit'

function App() {
 const { search,pathname} = useLocation()
  
  return (
    <div className=' h-screen w-screen flex '>
      <h1 className ="text-3xl font-semibold absolute left-[50%] justify-center underline decoration-wavy ...">KIRANA STOREZ</h1>
      {(pathname != "/" || search.length > 0 ) && (
      <Link  className = "absolute text-red-300 left-[15%] mt-1 top-[1%] text-white bg-blue-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-gray-700 dark:focus:ring-gray-300" to= "/">home
      </Link>)}
      
<Routes>
  <Route path = "/" element ={<Home />}/>
  <Route path = "/Create" element ={<Create />}/>
  <Route path = "/details/:id" element ={<Details />}/>
  <Route path = "/edit/:id" element ={<Edit />}/>
</Routes>
    </div>
  )
}

export default App
