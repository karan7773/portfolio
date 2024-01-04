import React, { useState } from 'react'
import './projects.css'

function Projects() {

  return (
    <section className="projects section" id='projects'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My work</span>

        <div className="projects__container container grid">
            <div className="projects__content">
                <div>
                    <i className="uil uil-clipboard-notes projects__icon"></i>
                    <h3 className="projects__title">Budget<br/>Bliss</h3>
                </div>

                <span className="projects__button"><a href="https://github.com/karan7773/BudgetBliss">
                <i className="bx bx-code"></i> Code
                </a></span>
                <br/>
                <span className="projects__button"><a href="https://budget-bliss-ebon.vercel.app/">
                <i className="bx bx-laptop"></i> Demo
                </a></span>
            </div>

            <div className="projects__content">
                <div>
                    <i class='bx bxl-bitcoin projects__icon'></i>
                    <h3 className="projects__title">CryptoIq</h3>
                    <br/>
                </div>

                <span className="projects__button"><a href="https://github.com/karan7773/CryptoIQ">
                <i className="bx bx-code"></i> Code
                </a></span>
                <br/>
                <span className="projects__button"><a href="https://github.com/karan7773/CryptoIQ">
                <i className="bx bx-laptop"></i> Demo
                </a></span>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-cloud-sun projects__icon"></i>
                    <h3 className="projects__title">Clime</h3>
                </div>

                <span className="projects__button"><a href="https://github.com/karan7773/Clime"> 
                <i className="bx bx-code"></i> Code
                </a></span>
                <br/>
                <span className="projects__button"><a href="https://beautiful-peony-1e82a7.netlify.app/"> 
                <i className="bx bx-laptop"></i> Demo
                </a></span>
            </div>

            <div className="projects__content">
                <div>
                    <i className='bx bxl-blogger projects__icon'></i>
                    <h3 className="projects__title">BlogVista</h3>
                    <br/>
                </div>

                <span className="projects__button"><a href="https://github.com/karan7773/blogVista-client">
                <i className="bx bx-code"></i> Code
                </a></span>
                <br/>
                <span className="projects__button"><a href="https://github.com/karan7773/blogVista-server">
                <i className="bx bx-laptop"></i> Demo
                </a></span>
            </div>

            <div className="projects__content">
                <div>
                    <i class='bx bxs-alarm projects__icon'></i>
                    <h3 className="projects__title">Doctor Appointment <br/> System</h3>
                </div>

                <span className="projects__button"><a href="https://github.com/karan7773/sih-23-frontend">
                <i className="bx bx-code"></i> Code
                </a></span>
                <br/>
                <span className="projects__button"><a href="https://github.com/karan7773/sih-23-backend">
                <i className="bx bx-laptop"></i> Demo
                </a></span>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-window-grid projects__icon"></i>
                    <h3 className="projects__title">Solar Panel <br/>Control System</h3>
                </div>

                <span className="projects__button"><a href="https://github.com/karan7773/Solar-panel-controlling-system">
                <i className="bx bx-code"></i> Code
                </a></span>
                <br/>
                <span className="projects__button"><a href="https://www.tinkercad.com/things/ceF5DaGVunW-hubhdyvshd/editel">
                <i className="bx bx-laptop"></i> Demo
                </a></span>
            </div>

        </div>
    </section>
  )
}

export default Projects