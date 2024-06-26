import styles from './About.module.scss'
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


export default function AboutMe() {

    const [currentImage, setCurrentImage] = useState(null);
  
    useEffect(() => {
      const images = ['/Monaco.png', '/wedding.png']
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    });



    return (
    
      // Code for 'fade in' transition
    <motion.div
    className="page1"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1 } }}
    exit={{ opacity: 0 }}
    >

    <Navbar />

    <div className={styles.aboutMeContainer}>

    {currentImage && (
      <img src={currentImage} alt="Random Image" className={styles.image} />
      )}

        <h1>A bit about me: </h1>

        <div className={styles.divider}></div>


        <p>
          Hey there! I'm Paul. I was born in New Jersey but have called Delaware
          home for most of my life.
        </p>
        <p>
          My collegiate journey took me to Newark, Delaware, and Nashville,
          Tennessee, where I earned a bachelor's degree in business. However, my
          passion for technology led me down a different path.
        </p>
        <p>
          In the past year, I embarked on a self-taught coding journey, delving
          into the intricacies of programming. This newfound interest inspired
          me to enroll in a full stack development course at Columbia
          University.
        </p>
        <p>
          While I acknowledge that there's always more to learn, I thrive on the
          challenge of tackling complex problems and honing my coding skills.
          I'm excited about the possibilities that lie ahead as I continue to
          grow in this dynamic field.
        </p>
        <p>
          When I'm not immersed in work or coding projects, you can find me
          staying active through workouts, exploring new destinations to
          experience the diverse cultures (and of course food), and spending
          some downtime outdoors.
        </p>
        <p>
          I also spend my time diving into captivating reads (preferably a
          series), looking for newly released music, and always searching for
          the best lasagna the East Coast has to offer.
        </p>
        <p>
          I'm sure there's much more to me than what's listed here, so don't
          hesitate to reach out if you'd like to learn more.
        </p>
      </div>
      </motion.div>
      )}