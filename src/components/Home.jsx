import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import {ProductContext} from "./Utils/Context"
import Loading from './Loading'
import axios from './Utils/axios'
const Home = () => {
 const [products] = useContext(ProductContext);
 const {search} = useLocation()
 const category = decodeURIComponent(search.split("=")[1]);
 

const [filterProducts, setfilterProducts] = useState(null)
 const productcategory = async ()=>{
  try{
const {data} =  await axios.get (`/products/category/${category}`)
setfilterProducts(data)
  } catch (error){
    console.log(error)
  }
 } 
 
 
 useEffect(()=>{
  if (!filterProducts || category == "undefined") setfilterProducts(products)
  if (category != "undefined"){ 
    setfilterProducts(products.filter(p=>p.category==category))

  };

 },[category,products])
  return products ?(
    <>
    <Nav/>
<div className='w-[85%] p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
 {filterProducts && filterProducts.map((s,i) => (
 <Link key={s.id} to = 
{`/details/${s.id}` }
 className='mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[35vh] flex-col flex justify-center items-center'>
   <div 
   className='hover:scale-110 mb-3 mt-3 w-full h-[80%] bg-contain bg-center bg-no-repeat flex justify-center items-center' 
   style={{backgroundImage:`url(${s.image})`}}>
   </div>
   <h1 className='hover:text-blue-300'>{s.title}</h1>   
 </Link>
 ))}
 
 
</div>
</>
   ):(<Loading />)

  
};

export default Home;