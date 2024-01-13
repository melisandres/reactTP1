import Nav from './components/Nav'
import Header from './components/Header'
import ManyProducts from './components/ManyProducts'
import AddProduct from './components/AddProduct'
import Product from './components/Product'
import Footer from './components/Footer'
import About from './components/About'
import EditProduct from './components/EditProduct';
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import CustomModal from './components/CustomModal'
import './App.css';




function App() {
  const [products, setProducts] = useState([
  ])

  const fetchProducts = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }

  //with useEffect it is necessary to pass an empty array at the end
  //c'est le démarrage, on demande la donnée
  useEffect(() => {
    const getProducts = async () => {
      const productFromServer = await fetchProducts('http://localhost:5000/products')
      setProducts(productFromServer)
    }
    getProducts()

  }, [])

  const deleteProduct = async (id) => {
    await  fetch(`http://localhost:5000/products/${id}`, {
      method: 'delete',
    })
    setProducts(products.filter((product)=>product.id!==id))
  }

  const addProduct = async (product) => {
    const res = await fetch('http://localhost:5000/products', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    const newProduct = await res.json()
    setProducts([...products, newProduct])
    return newProduct;
  }

    const updateProduct = async (updatedProduct) => {
      // Send a PUT request to update the product on the server
      const res = await fetch(`http://localhost:5000/products/${updatedProduct.id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
      });
    
      // Check if the request was successful
      if (res.ok) {
        // If successful, update the product in the local state
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
      } else {
        // If the request was not successful, log an error
        console.error('Failed to update product');
      }
    };


  return (
    <BrowserRouter>
      <div>
        <div>
          <Nav/>
          <Header  />
          <Routes>
            <Route path='/' element={<ManyProducts products={products} onDelete={deleteProduct}/>}/>
            <Route path='/create' element={
              <>
                <CustomModal onAdd={addProduct} />
                <ManyProducts products={products} onDelete={deleteProduct}/>
              </> }>
            </Route>
            <Route path='/product/:id' element={
              <>
                <CustomModal onDelete={deleteProduct} />
                <ManyProducts products={products} onDelete={deleteProduct} />
              </>} />
            <Route path='/about' element={<About />}/>
            <Route path='/edit/:id'element={
              <>
                <CustomModal products={products} onUpdate={updateProduct}/>
                <ManyProducts products={products} onDelete={deleteProduct}/>
              </> }>
            </Route>
          </Routes>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;