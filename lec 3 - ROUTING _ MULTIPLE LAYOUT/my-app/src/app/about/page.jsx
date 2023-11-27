import Link from 'next/link'
import React from 'react'
import Contact from './contact'

const AboutPage = () => {
  return (
    <h1>

      About Page
      <br />
      <br />

      <Link href={"/"}>
        Go To Home Page
      </Link>
      
      <br />
      <br />
      <Contact></Contact>

    </h1>
  );
}

export default AboutPage
