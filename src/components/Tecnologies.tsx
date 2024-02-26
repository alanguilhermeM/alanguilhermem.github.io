import React, { Component } from 'react';
import Header from './Header';
import typeScript from '../images/icons8-typescript-62.png';
import python from '../images/python-logo-only.png';
import chai from '../images/chaijs_logo_icon_168435.png';
import Projects from './Projects';
import { motion } from 'framer-motion';
import Footer from './Footer';

export class Tecnologies extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
          <Header />
          <div className='technologies-page'>
            <div className='tecnologies'>
              <div className='skill-card'>
                <h1 className='skill-title'>Front-End</h1>

                <section className='section'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt='JS' className='img'/>
                  <h4>JavaScript</h4>
                </section>

                <section className='section'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='React' className='img'/>
                  <h4>React</h4>
                </section>

                <section className='section'>
                  <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt='Redux' className='img'/>
                  <h4>Redux</h4>
                </section>

                <section className='section'>
                  <img src={ typeScript } alt='TS' className='img'/>
                  <h4>TypeScript</h4>
                </section>
              </div>
              <div className='skill-card'>
                <h1 className='skill-title'>Back-End</h1>
                <section className='section'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt='express' className='img'/>
                  <h4>Express</h4>
                </section>

                <section className='section'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt='Docker' className='img'/>
                  <h4>Docker</h4>
                </section>

                <section className='section'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='mySQL' className='img'/>
                  <h4>MySQL</h4>
                </section>

                <section className='section'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt='NodeJs' className='img'/>
                  <h4>NodeJs</h4>
                </section>

                <section className='section'>
                  <img src={ python } alt='Python' className='img'/>
                  <h4>Python</h4>
                </section>
              </div>
              <div className='skill-card'>
                <h1 className='skill-title'>Testes</h1>
                <section className='section'>
                  <img src="https://user-images.githubusercontent.com/10525473/50372432-95dcd880-0611-11e9-9432-58de9be26b3b.png" alt='Jest' className='img'/>
                  <h4>Jest</h4>
                </section>
                
                <section className='section'>
                  <img src="https://testing-library.com/img/octopus-128x128.png" alt='RTL' className='img' />
                  <h4>RTL</h4>
                </section>
                
                <section className='section'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" alt='Mocha' className='img' />
                  <h4>Mocha</h4>
                </section>

                <section className='section'>
                  <img src={ chai } alt='Chai' className='img'/>
                  <h4>Chai</h4>
                </section>
              </div>
              <div className='skill-card'>
                <h1 className='skill-title'>Tools</h1>

                <section className='section'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt='VsCode' className='img'/>
                  <h4>VsCode</h4>
                </section>

                <section className='section'>
                  <img src="https://www.svgrepo.com/show/327394/logo-slack.svg" alt='Slack' className='img'/>
                  <h4>Slack</h4>
                </section>

                <section className='section'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt='Git' className='img'/>
                  <h4>Git</h4>
                </section>

                <section className='section'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" alt='Ubunto' className='img'/>
                  <h4>Ubunto</h4>
                </section>
              </div>
            </div>
          </div>
          <div id='projects'>
            <Projects />
          </div>
          <Footer />
      </motion.div>
    );
  }
}
export default Tecnologies;