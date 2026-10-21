import React from 'react'
import './Contact.css'
import HudButton from '../ui/HudButton'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());


      alert(res.message);

  };


  return (
    <div id='contact' className='contact'>
      <div className="contact-bg" aria-hidden="true" />
      <div className="title-box contact-head">
        <span className="contact-tag">// 03 — OPEN_CHANNEL</span>
        <h1>
          <span className="contact-h-light">GET IN</span>{" "}
          <span className="contact-h-neon" data-text="TOUCH">TOUCH</span>
        </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h2 className="contact-lets">&gt; LET'S_TALK<span className="contact-cursor">_</span></h2>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>shyamalfred@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+91 8891581416</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Aluva, Ernakulam</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
        <input type="hidden" name="access_key" value="48f93888-7ed5-42a0-9deb-4cbd117f98d7"/>
            <label htmlFor="">&gt; USER_NAME</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">&gt; USER_EMAIL</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">&gt; MESSAGE_PAYLOAD</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <HudButton label="Transmit" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Contact
