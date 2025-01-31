import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function ProductDetails() {
  //useParams!!! Retrieves the dynamic `id` parameter from the URL, which is used to fetch or display specific product details.
  const ProductId = useParams()// Retrieve all dynamic route parameters as an object
  console.log("Product ID as Object-->", ProductId);

  const { id } = useParams()
  // Destructure the 'id' parameter directly from the useParams() object
  console.log("Destructure the 'id' parameter from the object -->", id);


  const [product, setProduct] = useState({})


  // Fetch product details when the component mounts
  useEffect(() => {
    //axios.get(`https://fakestoreapi.com/products/${ProductId.id}`)
    //or
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        console.log(response);
        // Log the full response for debugging

        console.log(response.data);
        // Log the data part of the response


        setProduct(response.data)
        // Update the 'product' state with the fetched data

      })
      .catch((error) => {
        console.log("\nAn Error occured ->", error);
      })
  }, [])

  // Log the product details fetched from the API for debugging
  console.log("\nProduct Deatils -->", product);

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