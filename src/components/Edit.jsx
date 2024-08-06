import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from './Utils/Context'
import { toast, useToast } from 'react-toastify'

const Edit = () => {
    const [products, setproducts]= useContext(ProductContext)
    const navigate = useNavigate()
    const{id} =  useParams()
    const [product, setproduct] = useState({
        title: "",
        description:"",
        image: "",
        price : "",
        category:"",
    })
const ChangeHandler = (e) => {
    
    setproduct({...product,[e.target.name]:e.target.value} )
}
     
     useEffect(()=>{
setproduct(products.filter((p)=>p.id == id)[0])
     },[id])
 
      const addproducthandler = (e) => {
         e.preventDefault();
         if(product.title.trim().length < 5 || product.image.trim().length < 5 || 
         product.category.trim().length < 5 || product.price.trim().length <  1 || product.description.trim().length < 5){
             alert("no field must be empty")
             return;
         }
         
         const pi = products.findIndex((p)=>p.id == id);
         const CopyData = [...products];
         CopyData[pi]={...products[pi], ...product};
        
         setproducts(CopyData)

        //  setproducts([...products,product])
         localStorage.setItem
         ("products",JSON.stringify(CopyData))
         toast.success("prouduct addded sucessfully")
         navigate(-1);
        //  console.log(products);
      }
  return (
    <form onSubmit = {addproducthandler} className='p-[5%] flex flex-col items-center w-screen h-screen '>
    <h1 className='w-1/2 mb-5 text-3xl '>Edit product</h1>
    <input
     type="url" 
    placeholder='image link'
    className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3 '
    name='image'
    onChange={ChangeHandler}
    value = {product && product.image}/>

    <input 
    type="text" 
    placeholder='title'
    className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
    name='title'
    onChange={ChangeHandler}
    value = {product && product.title}/>

    <div className='w-1/2 flex space-x-12 gap-8'>
    <input
     type="text" 
    placeholder='category'
    className='text-2xl bg-zinc-100 rounded p-3 mb-3 w-[1/2] '
    name='category'
    onChange={ChangeHandler}
    value = {product &&product.category}/>

    <input 
    type="text" 
    placeholder='price'
    className='text-2xl bg-zinc-100 rounded mb-3 p-3 w-[1/2]'
    name='price'
    onChange={ChangeHandler}
    value = {product &&product.price}/>
    </div>

   <textarea 
    name='description'
    onChange={ChangeHandler}
    value={product &&product.description}
    placeholder='enter text here'
    className='text-2xl bg-zinc-100 rounded p-3 mb-3 w-1/2 '
    rows="8"
   
   
   ></textarea>
  <div className=' w-1/2'>
  <button
className=' border rounded border-blue-700 px-2 py-1 text-black-300 ' 
href="/create">edit product</button>
</div>
    

    </form>
  )
}

export default Edit