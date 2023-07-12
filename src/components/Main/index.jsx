import React from "react";
import About from "../About";
import Socials from "../Socials";
import Projects from "../Projects";
import Contact from "../Contact";
import Resume from "../Resume";

function Main(){

  return(
    <main>
      <section id='content'>
        <About />
        <Projects />
        <Resume />
        <Contact />
      </section>
      <Socials />
    </main>
  )

}

export default Main;