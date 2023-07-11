import React from "react";
import About from "../About";
import Socials from "../Socials";
import Projects from "../Projects";
import Contact from "../Contact";
import Resume from "../Resume";

function Main(){

  return(
    <main>
      <Socials />
      <section id='content'>
        <About />
        <Projects />
        <Resume />
        <Contact />
      </section>
    </main>
  )

}

export default Main;