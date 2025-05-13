import Home from '../pages/home'
import Program from '../pages/beidouprogram'
import Social from '../pages/social'
import Campus from '../pages/campus'
import English from '@/pages/en'
import Login from '@/pages/login'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/beidouprogram',
    element:<Program/>
  },
  {
    path:'/social',
    element:<Social/>
  },
  {
    path:'/campus',
    element:<Campus/>
  },
  {
    path:'/en',
    element:<English/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'.'
  }
])

export default router;