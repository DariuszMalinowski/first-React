import Hero from '../components/Hero/Hero';
import Lists from '../components/Lists/Lists'; // import nowego komponentu
import styles from './Pages.module.scss';

const Home = () => {
  return (
    <>
      <Hero />
      <Lists />
    </>
  );
};

export default Home;
