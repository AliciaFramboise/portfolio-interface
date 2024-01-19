import './Contact.css';

export default function Contact() {
    return (
      <div className='contact-container'>
        <div className='contact-form'>
          <h1> CONTACT FORM </h1>
          <input type="text" placeholder="Full Name"/>
          <input type="tel" placeholder="Phone Number"/>
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Message Title"/>
          <input type="text" placeholder="Your Message"/>
          <button> SUBMIT </button>
        </div>
      </div>
    )
  }