import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
        <h2 style={{ fontSize: '40px' }}>
  alfre
  <span style={{ color: '#C443A1' }}>D</span>
</h2>
            <p>I'm Alfred Shyam frontend developer based in Kochi with 1.5 years of experience .</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Alfred Shyam. All rights reserved.</p>
        {/* <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
