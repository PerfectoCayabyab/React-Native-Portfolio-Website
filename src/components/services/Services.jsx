import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return(
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
            <article className="service">
                <div className="service__head">
                    <h3>Mobile App Development</h3>
                </div>

                <ul className='service__list'>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Communication Apps</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Dating Apps</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Education Apps</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Entertainment Apps</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Gaming Apps</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Navigation Apps</p>
                    </li>
                    
                </ul>
            </article>
                                                {/* END OF UI/UX */}
                                                <article className="service">
                <div className="service__head">
                    <h3>Web Development</h3>
                </div>

                <ul className='service__list'>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>E-Commerce Websites</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Dropshipping Websites</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Business Websites</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Portfolio Websites</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Event Website</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Personal Website</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Online Forum</p>
                    </li>
                    
                </ul>
            </article>
                                                {/* END OF WEB DEVELOPMENT */}
                                                <article className="service">
                <div className="service__head">
                    <h3>Content Creation</h3>
                </div>

                <ul className='service__list'>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Photo Editing</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Video Editing</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Gaming Scripts</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Exploits Creation</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Social Media Management</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Virtual Assistant</p>
                    </li>
                    
                </ul>
            </article>
                                                {/* END OF Content Creation */}
        </div>
    </section>)
}

export default Services