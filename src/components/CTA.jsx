import React from 'react'
import { Link } from 'react-router-dom'


const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Brainstorming a new project? <br className='sm:block hidden'/>
        Let's get building! </p>
        <Link to="/contact" className="btn">
            Contact
        </Link>
    </section>
  )
}

export default CTA