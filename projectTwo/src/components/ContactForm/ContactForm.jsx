import Button from '../Button/Button'
import './contactform.css'
import {MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'

const ContactForm = () => {
  return (
    <div className='parent'>
      <section className='contact-form'>
        <div className='top-btn'>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize='24px'/>}/>
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize='24px'/>}/>
            <Button isOutline={true} text="VIA Email" icon={<HiMail fontSize='24px'/>}/>
        </div>
        <form >
            <div className="form_control">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div className="form_control">
                <label htmlFor="email">E Mail</label>
                <input type="email" name="email" />
            </div>
            <div className="form_control" >
                <label htmlFor="text" >Text</label>
                <input name="text" style={{height:"120px"}}/>
            </div>
            <Button text="Submit" />
        </form>
      </section>
      <section>  
      <div className='image'>
        <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
      </section>
    </div>
  )
}

export default ContactForm
