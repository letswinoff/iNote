import React from 'react'
import PhoneIcon from "./images/icons8-phone-48.png"
import EmailIcon from "./images/icons8-mail-48.png"
import LocationIcon from "./images/icons8-location-48.png"

const Contact = () => {
  return (
    <>
        <div className="contact_info">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                        {/* {phone number} */}
                        <div className="contact_info_item d-flex justify-content-start align-item-center">
                            <img src={PhoneIcon} alt="phone" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Phone
                                </div>
                                <div className="contact_info_text">
                                    +91 7735 156 611
                                </div>
                            </div>
                        </div>
                        {/* {Email} */}
                        <div className="contact_info_item d-flex justify-content-start align-item-center">
                            <img src={EmailIcon} alt="phone" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Email
                                </div>
                                <div className="contact_info_text">
                                    sumitsahoof5@gmail.com
                                </div>
                            </div>
                        </div>
                        {/* {Adress number} */}
                        <div className="contact_info_item d-flex justify-content-start align-item-center">
                            <img src={LocationIcon} alt="phone" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Address
                                </div>
                                <div className="contact_info_text">
                                    Rourkela,Odisha,India
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {contact us} */}
            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title align-items-center">
                                    Get In Touch
                                </div>
                                <form id="contact_form">
                                    <div className="contact_form_name d-flex justify-content-between align-items-between">
                                        
                                        <input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Your name" required="true" />
                                        
                                        <input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="Your Email" required="true" />
                                        
                                        <input type="number" id="contact_form_name" className="contact_form_number input_field" placeholder="Your Number" required="true" />
                                    </div>
                                    <div className="contact_form_text mt-5">
                                        <textarea className="text_field contact_form_message" placeholder="Message" cols="30" rows="10" style={{width: '100%'}}></textarea>
                                    </div>
                                    <div className="contact_form_button">
                                        <button type="submit" className="button contact_submit_button btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact