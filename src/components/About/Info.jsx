import React from 'react'

export default function Info() {
 return (
    <div className="about__info grid">
        <div className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">Academics</h3>
            <span className="about__subtitle">8.49 Average CGPA</span>
        </div>
        
        <div className="about__box">
        <i class='bx bx-code-curly about__icon'></i>
            <h3 className="about__title">Codeability</h3>
            <span className="about__subtitle">10k+ lines of code</span>
        </div>

        <div className="about__box">
        <i className='bx bxs-folder-open about__icon'></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">6+ Projects completed</span>
        </div>
    </div>
  )
}
