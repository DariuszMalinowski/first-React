import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


const SearchForm = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        dispatch({
            type: 'UPDATE_SEARCHSTRING',
            payload: searchText,
        });
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchText} onChange={e => setSearchText(e.target.value)} />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;