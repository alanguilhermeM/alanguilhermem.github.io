import { Component } from 'react';
import contact from '../images/contact.png'

export class Contact extends Component {
  render() {
    return (
      <div className='contact-page'>
          <form className='form' action='https://formsubmit.co/alanguilherme13@outlook.com' method='POST'>
            <section>
              <h1 className='contact'>Send me a message!</h1>
              <input name='name' type='text' placeholder='Name' required className='input'/>
              <input name='email' type='email' placeholder='Email' required className='input' />
              <textarea name='message' required className='textArea' />
              <input type='hidden' name='_captcha' value='false' className='input' />
              <input type='submit' value='Send' className='btn' />
            </section>
            <img src={contact} alt='contact' className='contact-img'/>
          </form>
      </div>
    );
  }
}
export default Contact;