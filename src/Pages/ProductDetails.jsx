import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom'

export  async function getproductdetails({params}){
  // The 'params' object is automatically provided by React Router
  // It contains the dynamic segments of the URL, such as ':id' in '/productdetails/:id'
  // Destructuring 'params' allows us to access the 'id' directly
  console.log(params);
  
  try {
  const product=await axios.get(`https://fakestoreapi.com/products/${params.id}`)
  console.log(product);
  
    return product.data
  } catch (error) {
    console.log("An error occired -->",error);
     
  }
}

function ProductDetails() {
  //useParams!!! Retrieves the dynamic `id` parameter from the URL, which is used to fetch or display specific product details.
 // const ProductId = useParams()// Retrieve all dynamic route parameters as an object
  //console.log("Product ID as Object-->", ProductId);

 // const { id } = useParams()
  // Destructure the 'id' parameter directly from the useParams() object
 // console.log("Destructure the 'id' parameter from the object -->", id);


 // const [product, setProduct] = useState({})


  // Fetch product details when the component mounts
  // useEffect(() => {
  //   //axios.get(`https://fakestoreapi.com/products/${ProductId.id}`)
  //   //or
  //   axios.get(`https://fakestoreapi.com/products/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //       // Log the full response for debugging

  //       console.log(response.data);
  //       // Log the data part of the response


  //       setProduct(response.data)
  //       // Update the 'product' state with the fetched data

  //     })
  //     .catch((error) => {
  //       console.log("\nAn Error occured ->", error);
  //     })
  // }, [])

  // // Log the product details fetched from the API for debugging
  // console.log("\nProduct Deatils -->", product);


  const product=useLoaderData()
  console.log('Product data from useLoaderData() -->',product);
  

  return (
    <div className='container my-5'>
      <div className=' row g-4 '>
        <div className="col-md-6 viewDetailscardimg">
          <img src={product.image} alt="" />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className='text-muted'>{product.category}</p>
          <p>{product.description}</p>
          <h3 className='text-primary'>${product.price}</h3>
          <Button variant="success" className='p-2 rounded-0'>Buy Now</Button>
          
        </div>


      </div>
    </div>
  )
}

export default ProductDetails