import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Shop from './pages/Shop.jsx'
import NotFound from './pages/NotFound.jsx'
import LogIn from './pages/LogIn.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import CheckOutPage from './pages/CheckOutPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "contact",
            element: <Contact />
          },
          {
            path: "productDetails/:id",
            element: <ProductDetails />
          },
          {
            path: "shop",
            element: <Shop />
          },
          {
            path: "login",
            element: <LogIn />
          },
          {
            path: "checkout",
            element: <CheckOutPage />
          },
          {
            path: "*",
            element: <NotFound />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
