import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import TextButton from '../TextButton/TextButton.js';


const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search" />
            <TextButton placeholder="Search"/>
        </form>
    );
  };

  export default SearchForm;