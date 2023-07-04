import React from 'react'
import './skills.css'
import Frontend from './Frontend';
import Backend from './Backend';
import Programming from './Programming';

export default function Skills() {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <Programming/>
          <Frontend/>
          <Backend/>
        </div>
    </section>
  )
}
