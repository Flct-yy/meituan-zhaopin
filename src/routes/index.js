import Home from '../pages/home'
import Program from '../pages/beidouprogram'
import Social from '../pages/social'
import Campus from '../pages/campus'
import English from '@/pages/en'
import Login from '@/pages/login'
import { createBrowserRouter,Navigate } from 'react-router-dom'
import NotFound from '@/pages/404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace /> // 默认路径重定向到 /home
  },
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
    path:'/404',
    element:<NotFound/>
  },
  {
    path:'*',
    element:<Navigate to="/404" replace />
  }
])

export default router;