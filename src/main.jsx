import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<div className='bg-gray-800 text-white  karla-500'>
     <RouterProvider router={router} />
</div>
  </StrictMode>,
)
