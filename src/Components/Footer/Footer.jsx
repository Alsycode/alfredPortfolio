import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import { SparklesCore } from '../ui/Sparkles'
import HudButton from '../ui/HudButton'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-sparkles" aria-hidden="true">
        <span className="footer-beam footer-beam--wide" />
        <span className="footer-beam footer-beam--narrow" />
        <SparklesCore
          id="footer-sparkles-purple"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={250}
          speed={1.5}
          particleColor="#d946ef"
          className="footer-sparkles__layer"
        />
        <SparklesCore
          id="footer-sparkles-orange"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={120}
          speed={1}
          particleColor="#ff8a3d"
          className="footer-sparkles__layer"
        />
        <div className="footer-sparkles__fade" />
      </div>
      <div className="footer-top">
        <div className="footer-top-left">
        <h2 className="footer-logo">
  alfre<span>D</span>
</h2>
            <p>&gt; Alfred Shyam // full stack engineer, Kochi. 3 years of shipping neon-lit interfaces across React, Next.js, React Native and the web.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='ENTER_EMAIL' />
            </div>
            <HudButton size="sm" label="Subscribe" />
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© {new Date().getFullYear()} ALFRED SHYAM // ALL RIGHTS RESERVED</p>
        <p className="footer-status"><span className="footer-dot" />SYS.ONLINE</p>
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
