import Hero from '../components/Hero/Hero';
import SearchForm from '../components/SearchForm/SearchForm';
import Lists from '../components/Lists/Lists'; // import nowego komponentu
import styles from './Pages.module.scss';

const Home = () => {
  return (
    <>
      <Hero />
      <SearchForm />
      <Lists />
    </>
  );
};

export default Home;
