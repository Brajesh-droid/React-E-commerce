import React, { useContext } from 'react'
import { ProductContext } from './Utils/Context';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [products] = useContext(ProductContext);
  let unique = products && products.reduce((acc,cv)=>[...acc,cv.category],[])
  unique = [...new Set(unique)]


  const color = () => {
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`;
  }  
  return (
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
  <a 
   className='border rounded border-blue-700 px-2 py-1 text-black-300 ' 
    href="/create">Add new product</a>
  <hr className='my-3 w-[80%]'/>
  <h1 className='text-2xl mb-3 w-[80%]'>Categories</h1>
  <div className='w-[80%] '>
    {unique.map((c,i)=>
 <Link key={i} to = {`/?category=${c}`} className='px-1 mb-3  mb-3 flex items-center'>
 <span style = {{backgroundColor: color()}} className='rounded-full block w-[15px]  h-[15px] bg-red-100'></span>{""}
 {c} 
 </Link>
    )}
 
        
  </div>
</nav>

  )
}

export default Nav
