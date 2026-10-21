   import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Components/Footer' ;
import Header from './Components/Header' ;
import Product from './Components/Product' ;
function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')

        if (!response.ok) {
          throw new Error('Products could not be loaded.')
        }

        const data = await response.json()
        setProducts(data.products)
      } catch (fetchError) {
        setError(fetchError.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <>
      <Header />
      <main className="product-page">
      <header className="page-header">
        <p className="eyebrow">Fresh arrivals</p>
        <h1>Product catalog</h1>
        <p>Browse the latest products from DummyJSON.</p>
      </header>

      {isLoading && <p className="status">Loading products...</p>}
      {error && <p className="status error">{error}</p>}

      {!isLoading && !error && (
        <section id="products" className="product-grid" aria-label="Products">
          <Product products={products} />
        </section>
      )}
      </main>
      <Footer />
    </>
  )
}

export default App  