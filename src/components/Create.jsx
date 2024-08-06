import React, { useContext,useState} from 'react'
import { ProductContext } from './Utils/Context'
import {nanoid} from "nanoid"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'



const Create = () => {
   const navigate = useNavigate()
    const [products, setproducts]= useContext(ProductContext)
    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")

     const addproducthandler = (e) => {
        e.preventDefault();
        if(title.trim().length < 5 || image.trim().length < 5 || 
        category.trim().length < 5 ||price.trim().length <  1 || description.trim().length < 5){
            alert("no field must be empty")
            return;
        }
        const product = { 
            id:nanoid(),
            title,
            image,
            category,
            price,
            description,
        };
        setproducts([...products,product])
        localStorage.setItem
        ("products",JSON.stringify(...products,product))
        toast.success("prouduct addded sucessfully")
        navigate("/");
        console.log(products);
     }

  return (
    <form onSubmit = {addproducthandler} className='p-[5%] flex flex-col items-center w-screen h-screen '>
        <h1 className='w-1/2 mb-5 text-3xl '>Add New Product</h1>
        <input
         type="url" 
        placeholder='image link'
        className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3 '
        onChange={(e)=> setimage(e.target.value)}
        value = {image}/>

        <input 
        type="text" 
        placeholder='title'
        className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        onChange={(e)=> settitle(e.target.value)}
        value = {title}/>

        <div className='w-1/2 flex space-x-12 gap-8'>
        <input
         type="text" 
        placeholder='category'
        className='text-2xl bg-zinc-100 rounded p-3 mb-3 w-[1/2] '
        onChange={(e)=> setcategory(e.target.value)}
        value = {category}/>

        <input 
        type="text" 
        placeholder='price'
        className='text-2xl bg-zinc-100 rounded mb-3 p-3 w-[1/2]'
        onChange={(e)=> setprice(e.target.value)}
        value = {price}/>
        </div>

       <textarea 
        onChange={(e)=> setdescription(e.target.value)}
        value={description}
        placeholder='enter text here'
        className='text-2xl bg-zinc-100 rounded p-3 mb-3 w-1/2 '
        rows="8"
       
       
       ></textarea>
      <div className=' w-1/2'>
      <button
   className=' border rounded border-blue-700 px-2 py-1 text-black-300 ' 
    href="/create">Add new product</button>
    </div>
        

        </form>
  )
}

export default Create