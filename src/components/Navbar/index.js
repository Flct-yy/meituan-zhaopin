import React from 'react';
import logo_Black from '@/assets/logo_Black.png'
import logo_White from '@/assets/logo_White.svg'
import { useLocation,Link,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.scss';

// 美团招聘导航栏组件
const Navbar = () => {
  //编程式导航 useNavigate
  const navigate = useNavigate();
  // 当前路径
  const location = useLocation();
  const isVisual = ((location.pathname === '/home')||(location.pathname === '/beidouprogram'))

  //滑动收缩效果
  const [prevScrollPos,setPrevScrollPos] = useState(0);
  const [visible,setVisible] = useState(true);
  useEffect(()=>{
    const handleScroll = () =>{
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos && currentScrollPos > 0;

      setVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);

    };

    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
  },[prevScrollPos])


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
    <div className={`meituan-navbar ${(isVisual&&prevScrollPos <= 78)?'black':'white'}`}
      style={isVisual ? {
        top: visible ? `0` : '-78px'
      } : undefined}
    >
      {/* 左侧logo区域 */}
      <div className="navbar-left">
        <div
          className="logo-wrapper"
          onClick={() => navigate('/home')}
        >
          <img 
            src={(isVisual&&prevScrollPos <= 78)?logo_White:logo_Black} 
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
            <div className={`line ${location.pathname === item.path ? 'active' : ''}`}></div>
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