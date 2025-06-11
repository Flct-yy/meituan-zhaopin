import React from "react";
import logo from '@/assets/logo_Black.png'
import './Footer.scss'

const Footer = () => {

  return (
    <footer className="beidou-footer">
      <div className='content'>
        <div className="logoAndSlogan">
          <img src={logo} alt='美团招聘'/>
          <div className='slogan'>
            <p className="slogan_cn">一起成长，一起更好</p>
            <p className="slogan_en">Grow Together, Better Together</p>
          </div>
        </div>
        <div className="copyAndFocusUs">
          <div className='copy'>
            <div className='copyText'>
              <span>
                <a className='meituanUrl' href='.'>美团</a>
              </span>
              <span className='line'>|</span>
              <span className='meituanCopy'>
                @ 2025 xx版权所有&nbsp;&nbsp;
              </span>
              <span>
                <a className='num-1' href='.'>京ICP备xxxxxxxx号</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a className='num-2' href='.'>京公网安备 xxxxxxxxxxxxxx号</a>
              </span>
              <span className='line'>|</span>
              <span>
                <a href='.' className='rule'>隐私政策</a>
              </span>
              <span className='contact'>
                &nbsp;&nbsp;&nbsp;&nbsp;招聘意见反馈:&nbsp;&nbsp;zhaopin@meituan.com
              </span>
            </div>
          </div>
          <div className='FocusUsWrap'>
            <div className='FocusUs'>
              关注我们
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;