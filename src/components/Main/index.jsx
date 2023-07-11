import React from "react";
import About from "../About";
import Socials from "../Socials";
import Projects from "../Projects";

function Main(){

  return(
    <main>
      <Socials />
      <section id='content'>
        <About />
        <Projects />
      </section>
    </main>
  )

}

export default Main;