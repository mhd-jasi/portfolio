import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { motion } from "framer-motion";
import "../style/about.css";
import hexagon from "../photos/prohexo.png";
import css from "../photos/css_logo.png";
import html from "../photos/html_logo.png";
import node from "../photos/node_logo.png";
import java from "../photos/java_logo.png";
import python from "../photos/python logo.png";
import reactt from "../photos/reactt logo.png";

const About = () => {
  const navigate =useNavigate();


  useEffect(() => {
    document.body.classList.add("about-bg"); 
    return () => {
      document.body.classList.remove("about-bg"); 
    };
  }, []);



  return (
    <>
      <div className="about-me">
        <div className="about-myself">
        <div className="about-me1">
          <h1>ABOUT ME</h1>
          <p><span>Hi</span>, I’m Muhammed Jasim. P, a passionate Full Stack <br/>Developer. 
          At the beginning of my journey in the tech  <br/>world. With a
          background in computer science, I am <br/>constantly learning and 
          refining my skills to build <br/>efficient and user-friendly web applications.
          </p>
        </div>
        
        <div className="about-me2">
          <p>What sets me apart is my communication and problem-<br/>solving 
          approach—I believe in clear discussions, under<br/>standing client 
          needs, and delivering projects on time <br/>with precision.
          </p>
        </div>

        <div className="about-me3">
          <p>Beyond coding, I enjoy watching movies, playing foot<br/>ball and cricket, 
          diving into video games, and reading  <br/>books. These hobbies keep me
          inspired and help me <br/>bring fresh perspectives to my work.
          </p>
        </div>

        <div className="about-me4">
          <p>If you’re looking for someone to bring your ideas to life, <br/>feel free to 
          connect with me through my social media <br/> pages or click the 
          "Contact Me" button.Let’s build some<br/>thing great together!</p>
        </div>
        </div>

        <button onClick={()=> navigate("/contact")}><span>Contact Me</span></button> 
      </div>

      <div className="hexo">
        <img src={hexagon} alt="hexagon" />
      </div>

      <div className="myskill">
        <h2>Things I Know</h2>
      </div>

      <div className="skills-container">
      <motion.div
        className="about-skill1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div className="python-logo" whileHover={{ scale: 1.1 }}>
          <img src={python} alt="Python logo" />
          <p>Python</p>
        </motion.div>

        <motion.div className="node-logo" whileHover={{ scale: 1.1 }}>
          <img src={node} alt="Node.js logo" />
          <p>Node.JS</p>
        </motion.div>

        <motion.div className="html-logo" whileHover={{ scale: 1.1 }}>
          <img src={html} alt="HTML logo" />
          <p>HTML</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="about-skill2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div className="css-logo" whileHover={{ scale: 1.1 }}>
          <img src={css} alt="CSS logo" />
          <p>CSS 3</p>
        </motion.div>

        <motion.div className="java-logo" whileHover={{ scale: 1.1 }}>
          <img src={java} alt="JavaScript logo" />
          <p>JavaScript</p>
        </motion.div>

        <motion.div className="reactt-logo" whileHover={{ scale: 1.1 }}>
          <img src={reactt} alt="React logo" />
          <p>React</p>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export default About;
