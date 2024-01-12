import Nav from './components/Nav'
import Header from './components/Header'
import ManyProducts from './components/ManyProducts'
import AddProduct from './components/AddProduct'
import Footer from './components/Footer'
import { useState } from 'react'
import About from './components/About'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import CustomModal from './components/CustomModal'
import './App.css';

function App() {

  //an array of product objects to work locally
  const [products, setProducts] = useState ([
    {
      "id": 1,
      "name": "auto-shovel",
      "description": "Will shovel for you. Snow has never been funner--or lighter. Perfect x-mas gift for colder climates.",
      "price": "299.00",
      "category": "magical"
    },
    {
      "id": 2,
      "name": "winter sandals",
      "description": "Will keep your feet toasty in cold times. Will melt snow at a two inch radius. Stop using if your feet turn black.",
      "price": "49.98",
      "category": "modern-day marvels"
    },
    {
      "name": "self-repairing cake",
      "description": "Will make itself whole. Great for the holidays. If used according to guidelines, will render up to 50 servings per day, for up to a whole week of festivities. Wait at least 10 minutes between servings. ",
      "price": "99.95",
      "category": "magical",
      "id": 3
    },
    {
      "name": "monster mania",
      "description": "A party in a box. Play your cards right, and you might get invited.",
      "price": "5.98",
      "category": "magical",
      "id": 4
    },
    {
      "name": "smoke screen",
      "description": "non permeable nano-thin screen, made of subzero diaphenous smoke particles. Perfect for confusing onlookers.",
      "price": "29.98",
      "category": "modern-day marvels",
      "id": 5
    },
    {
      "name": "cloning device",
      "description": "clone your favorite pet, your favorite parent, your favorite child. Do so in the comfort and secrecy of your own home, for the pleasure and amusement of those you love. ",
      "price": "7000",
      "category": "modern-day marvels",
      "id": 6
    },
    {
      "name": "biolin",
      "description": "a violin made of live tissue, created to combine the melodic enchantment of songbirds, the beauty of resonating strings, and the complexity of polymorphic engineering. ",
      "price": "700.00",
      "category": "modern-day marvels",
      "id": 7
    },
    {
      "name": "field mouse",
      "description": "A mouse that hunts, in the field, for you. Yield: 2 grams of locally grown seeds and/or shiny objects a day. ",
      "price": "9.99",
      "category": "magical",
      "id": 10
    },
    {
      "name": "glitter an gold",
      "description": "looks like glitter, acts like gold. ",
      "price": "8.99",
      "category": "magical",
      "id": 11
    },
    {
      "name": "shimmering ",
      "description": "an adjective you can use anywhere you like. forever.",
      "price": "99.99",
      "category": "magical",
      "id": 13
    },
    {
      "name": "fur",
      "description": "it will grow on your winter-cold body and keep you warm",
      "price": "90.99",
      "category": "magical",
      "id": 14
    },
    {
      "name": "friendster",
      "description": "monthly subscription to a pocket-sized friend. Participate in this wonderful reabilitation program for convicts world-wide.",
      "price": "20.99",
      "category": "technology",
      "id": 15
    }
  ])

  const deleteProduct = (id) => {
    setProducts(products.filter((product)=>product.id !==id))
  }

  const addProduct = (product) => {
    const lastId = products.length > 0 ? products[products.length - 1].id : 0
    const id = lastId + 1
    const newProduct = {id, ...product}
    setProducts([...products, newProduct])
    return newProduct
  }

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };


  //paths orchestrate what the modal shows: 
  //create, edit, and show individual products
  return (
    <BrowserRouter>
      <div>
        <div>
          <Nav/>
          <Header/>
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
                <CustomModal products={products} onDelete={deleteProduct} />
                <ManyProducts products={products} onDelete={deleteProduct} />
              </>} />
            <Route path='/about' element={<About/>}/>
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