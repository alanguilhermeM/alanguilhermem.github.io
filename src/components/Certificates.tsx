import React, { Component } from 'react';
import Header from './Header';
import { motion } from 'framer-motion';
import Footer from './Footer';
import front from '../images/CertificadoFront.png';
import back from '../images/CertificadoBack.png';
import science from '../images/CertificadoCienCia.png';
import fundamentals from '../images/CertificadoFundamentos2.png';

export class Certificates extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
          <Header />
          <main className='main'>
            <div className='certificates'>
                <section className='certificate'>
                    <a href='https://www.credential.net/36ecad47-36c7-4fa0-837c-081786bd3303#gs.5fdgff'>
                        <img src={fundamentals} alt='Fundamentals' />  
                    </a>
                </section>
                <section className='certificate'>
                    <a href='https://www.credential.net/ed44afb0-f77c-4b27-a40a-137b145392ec#gs.5fdh75'>
                        <img src={front} alt='FrontEnd' />
                    </a>
                </section>
                <section className='certificate'>
                    <a href='https://www.credential.net/04076351-9c16-45b2-a737-cb3a33b97601#gs.5fdidd'>
                        <img src={back} alt='BackEnd' />
                    </a>
                </section>
                <section className='certificate'>
                    <a href='https://www.credential.net/f11b5f30-06b1-4a5f-82a1-621765f90092#gs.5fdiuc'>
                        <img src={science} alt='Computer Science' />
                    </a>
                </section>
            </div>
          </main>
          <Footer />
      </motion.div>
    );
  }
}
export default Certificates;