import Image from "next/image";
import React from "react";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/runcong.jpg"
          alt="An image to show runcong"
          width={300}
          height={500}
        />
      </div>
      <h1>Hi, I'm Runcong Chen</h1>
      <p>
        It's a blog about web development - especially frontend framworks like
        Angular and React.
      </p>
    </section>
  );
};

export default Hero;
