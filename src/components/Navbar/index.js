import React from 'react';
import logo from '@/assets/logo.png'
import { Link,useNavigate } from 'react-router-dom';
import './Navbar.scss';

// 美团招聘导航栏组件
const Navbar = () => {
  //编程式导航 useNavigate
  const navigate = useNavigate();
  const menuItems =[
    { path: '/home', name: '首页' },
    { path: '/beidouprogram', name: '北斗计划' },
    { path: '/social', name: '社会招聘' },
    { path: '/campus', name: '校园招聘' },
    { path: '/parttime', name: '工作兼职' },
    { path: '/about', name: '了解美团' },
    { path: '/faq', name: '常见问题' }
  ]
  return (
    <div className="meituan-navbar">
      {/* 左侧logo区域 */}
      <div className="navbar-left">
        <div
          className="logo-wrapper"
          onClick={() => navigate('/home')}
        >
          <img 
            src={logo} 
            alt="美团招聘官网logo"
            className='logo-img'
          />
        </div>
      </div>

      {/* 中间导航菜单 */}
      <nav className='navbar-center'>
        {/* 声明式导航 Link */}
        {menuItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path}
            className='nav-link'
          >
            {item.name}
            <div className='line'></div>
          </Link>
        ))}
      </nav>

      {/* 右侧操作区 */}
      <div class="navbar-right">
        <button 
          className='language-btn'
          onClick={()=>navigate('/en')}
        >
          <span className='language-text'>English</span>
        </button>
        <button 
          className='login-btn'
          onClick={()=>navigate('/login')}
        >
          <span className='login-text'>登录</span>
        </button>
      </div>
    </div>
  )
}
export default Navbar;