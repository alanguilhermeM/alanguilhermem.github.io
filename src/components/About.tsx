import React, { Component } from 'react';
import Header from './Header';
import Contact from './Contact';
import image from '../images/1-removebg.png';
import { motion } from 'framer-motion';
import Footer from './Footer';

export class About extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
          <Header />
          <div className='about'>
            <main>
              <h1>Hello, I'm Guilherme Mansur and i am a Front-End Developer.</h1>
              <br></br>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perspiciatis assumenda, harum hic voluptas cupiditate sit libero recusandae rerum vero? Optio iusto tenetur, asperiores libero vel officia eaque quam recusandae?</p>
            </main>

            <img src={ image } alt='Me'/>
          </div>
          <div id='contact'>
            <Contact />
          </div>
          <Footer />
      </motion.div>
    );
  }
}
export default About;