import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
const App = lazy(() => import('./App.jsx'));
const ShopPage = lazy(() => import('./components/shopPages/ShopPage.jsx'));
const ItemPage = lazy(() => import('./components/shopPages/ItemPage.jsx'));
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense><App /></Suspense>
  },
  {
    path: "/item/:itemId",
    element: <Suspense fallback={<App />}><ItemPage /></Suspense>
  },
  {
    path: "/shop",
    element: <Suspense fallback={<App />}><ShopPage /></Suspense>,
    children: [
      //Empty for now. Will later contain the different shop pages
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
