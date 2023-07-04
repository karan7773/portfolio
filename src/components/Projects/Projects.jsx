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
                    <i className="bx bxs-grid projects__icon"></i>
                    <h3 className="projects__title">Tic-Tac-Toe</h3>
                </div>

                <span className="projects__button"><a href="https://github.com/karan7773/tic-tac-teo">
                <i className="bx bx-code"></i> Code
                </a></span>
                <br/>
                <span className="projects__button"><a href="https://karan7773.github.io/tic-tac-teo/">
                <i className="bx bx-laptop"></i> Demo
                </a></span>
            </div>

            <div className="projects__content">
                <div>
                    <i className="bx bx-store projects__icon"></i>
                    <h3 className="projects__title">Book store</h3>
                </div>

                <span className="projects__button"><a href="https://github.com/karan7773/libraray_page">
                <i className="bx bx-code"></i> Code
                </a></span>
                <br/>
                <span className="projects__button"><a href="https://libraray-page.vercel.app/">
                <i className="bx bx-laptop"></i> Demo
                </a></span>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-clipboard-notes projects__icon"></i>
                    <h3 className="projects__title">Todo <br/> list</h3>
                </div>

                <span className="projects__button"><a href="https://github.com/karan7773/todo-list">
                <i className="bx bx-code"></i> Code
                </a></span>
                <br/>
                <span className="projects__button"><a href="https://karan7773.github.io/todo-list/">
                <i className="bx bx-laptop"></i> Demo
                </a></span>
            </div>
            <div className="projects__content">
                <div>
                    <i className="uil uil-stopwatch projects__icon"></i>
                    <h3 className="projects__title">Pomodoro<br/> App</h3>
                </div>

                <span className="projects__button"><a href="https://github.com/karan7773/pomodoro-app">
                <i className="bx bx-code"></i> Code
                </a></span>
                <br/>
                <span className="projects__button"><a href="https://karan7773.github.io/pomodoro-app/">
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