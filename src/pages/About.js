import styles from './About.module.scss';

const About = () => (
  <section className={styles.hero} >
    <h2 className={styles.title} >ABOUT</h2>
    <p className={styles.subtitle}> 
      To aplikacja do zarządzania zadaniami zbudowana w React + Redux.
    </p>
  </section>
);

export default About;
