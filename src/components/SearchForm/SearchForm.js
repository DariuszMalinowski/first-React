import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';


const SearchForm = () => {
  const dispatch = useDispatch();
  const searchStringFromState = useSelector(state => state.searchString);

  // lokalny stan inicjalizowany wartością ze store
  const [searchText, setSearchText] = useState(searchStringFromState);

  // synchronizacja stanu lokalnego, jeśli state.searchString w magazynie się zmieni
  useEffect(() => {
    setSearchText(searchStringFromState);
  }, [searchStringFromState]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString(searchText));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <Button type="submit">
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
