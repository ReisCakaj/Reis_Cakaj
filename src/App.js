import './App.css';
import DecryptedText from './Components/DecryptedText/DecryptedText';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y7vkbdd', 'template_wvy3sox', form.current, {
        publicKey: '86qY6w7JINBdyev5l',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="App">
      <div className='navbar'>
      <div className='name'>
      <DecryptedText
      text="Reis Cakaj"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={80}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed"
      encryptedClassName="encrypted"
      clickMode="once"/>
      </div>
      
      <div className='navcomponents'>
      <a href='#about'>
            <DecryptedText
      text="About"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={80}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed"
      encryptedClassName="encrypted"
      clickMode="once"/>
      </a>
    <a href='#skills'>
            <DecryptedText
      text="Skills"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={80}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed"
      encryptedClassName="encrypted"
      clickMode="once"/>
      </a>      
      <a href='#projects'>
            <DecryptedText
      text="Projects"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={80}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed"
      encryptedClassName="encrypted"
      clickMode="once"/>
      </a>
  
      <a href='#contact'>
            <DecryptedText
      text="Contact"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={80}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed"
      encryptedClassName="encrypted"
      clickMode="once"/>
      </a>
      </div>
      </div>
        <div className='main'>
          <DecryptedText
      text="Fullstack Junior Developer."
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed maintitle"
      encryptedClassName="encrypted"
      clickMode="once"/>
                <DecryptedText
      text="Building modern web applications with React & Laravel"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed maintext"
      encryptedClassName="encrypted"
      clickMode="once"/>
        </div>
        <div className='second' id='about'>
          <DecryptedText
      text="Im a college student that enjoys building websites.
            I mainly work with React on the frontend and Laravel on the backend."
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed maintext"
      encryptedClassName="encrypted"
      clickMode="once"/>
        </div>
        <div className='center' id='skills'>
        <div className='skills'>
            <DecryptedText
      text="Frontend Development"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed skills-title"
      encryptedClassName="encrypted"
      clickMode="once"/>
            <DecryptedText
      text="Building responsive, interactive user interfaces with React and modern JavaScript (ES6+). Experienced with HTML5, CSS3, and frameworks like Tailwind CSS."
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed maintext"
      encryptedClassName="encrypted"
      clickMode="once"/>
                  <DecryptedText
      text="Backend Development"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed skills-title"
      encryptedClassName="encrypted"
      clickMode="once"/>
            <DecryptedText
      text="Developing robust server-side applications with Laravel and PHP. Database design with SQL (MySQL)."
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed maintext"
      encryptedClassName="encrypted"
      clickMode="once"/>
        </div>
        </div>
        <div className='center' id='projects'>
        <div className='projects'>
            <DecryptedText
      text="My Projects"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed projects-title"
      encryptedClassName="encrypted"
      clickMode="once"/>
      <div className='projects-grid'>


<a href='/'>
            <div className='project'>
            <DecryptedText
      text="Reis Cakaj"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed project-title"
      encryptedClassName="encrypted"
      clickMode="once"/>
      <DecryptedText
      text="Personal Portfolio. made with ReactJS, responsive design and animations.
(This Website)."
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed project-description"
      encryptedClassName="encrypted"
      clickMode="once"/>        
            </div>
</a>


                        <div className='project'>
            <DecryptedText
      text="STOKR"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed project-title"
      encryptedClassName="encrypted"
      clickMode="once"/>
      <DecryptedText
      text="Stock Management Website. Made with laravel, a responsive design and advanced system."
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed project-description"
      encryptedClassName="encrypted"
      clickMode="once"/>        
            </div>



                        <div className='project'>
            <DecryptedText
      text="More soon"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed project-title"
      encryptedClassName="encrypted"
      clickMode="once"/>
      <DecryptedText
      text=""
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed project-description"
      encryptedClassName="encrypted"
      clickMode="once"/>        
            </div>
      </div>
        </div>
        </div>
        <div className='contact' id='contact'>
      <DecryptedText
      text="Contact Me"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed contact-title"
      encryptedClassName="encrypted"
      clickMode="once"/>
            <DecryptedText
      text="I'm always open to discussing new opportunities."
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed contact-undertitle"
      encryptedClassName="encrypted"
      clickMode="once"/>
      <div className='input-group'>
      <form ref={form} onSubmit={sendEmail} className='form'>
      <input type="text" name="user_name" placeholder='Your Name'/>
      <input type="email" name="user_email" placeholder='Your Email'/>
      <textarea name="message" placeholder='Your Message' />
      <input type="submit" value="Send Message" />
    </form>
      </div>
        </div>
        <div className='footer'>
      <DecryptedText
      text="Reis Cakaj"
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed footer-title"
      encryptedClassName="encrypted"
      clickMode="once"/>
      <DecryptedText
      text="© 2026 Reis Cakaj. All rights reserved."
      animateOn="view"
      effect="scramble"
      sequential={true}
      revealDirection="start"
      speed={40}
      maxIterations={9}
      useOriginalCharsOnly={false}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      className="revealed footer-text"
      encryptedClassName="encrypted"
      clickMode="once"/>
        </div>   
    </div>
  );
}

export default App;
