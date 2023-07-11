import React from "react";
import About from "../About";
import Socials from "../Socials";
import Portfolio from "../Portfolio";

function Main(){

  return(
    <main>
      <Socials />
      <section id='content'>
        <About />
        <Portfolio />
      </section>
    </main>
  )

}

export default Main;