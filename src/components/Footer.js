import React from 'react'
import './styles.css'
import { FaArrowRight, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import  logo  from '../assets/logo.png'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className='footer_container'>
            <div className='footer'>
                <div className='footer_main'>
                    <div className='footer_content first'>
                        <img src={logo} alt='logo' />
                        <h1 style={{fontSize:"32px", fontWeight: 500 }}>Quizzer Mania</h1>
                        <p>+1(7635)547-12-97</p>
                        <p>support@quizzermania.com</p>
                    </div>
                    <div className='footer_content second'>
                        <h2 style={{fontWeight:400}}>Quick Links</h2>
                        <p>About us</p>
                        <p>Pricing</p>
                    </div>
                    <div className='footer_content third'>
                        <p>Terms and Policy</p>
                        <p>Quiz</p>
                    </div>
                    <div className='footer_content fourth'>
                        <h2 style={{ fontWeight: 500 }}>
                            Subscribe for updates
                        </h2>
                        <div className='input'>
                            <input />
                            <div className='right_arrow_box'>
                                <FaArrowRight size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='footer_bottom'>
                    <div className='social_media'>
                        <div className='social_media_icon'><FaLinkedinIn /></div>
                        <div className='social_media_icon'><FaFacebookF /></div>
                        <div className='social_media_icon'><BsTwitter /></div>
                    </div>
                    <div className='copyright'>
                        &#169; {year} Quizzer mania. All rights reserved
                    </div>
                </div>
            </div>
        </div>
    )
}
