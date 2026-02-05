import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import SearchForm from './../SearchForm/SearchForm';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import { getListById } from '../../redux/listsRedux';
import { getColumnsByList } from '../../redux/columnsRedux';
import { clearSearchString } from '../../redux/searchStringRedux';


const List = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const listId = id;

  const listData = useSelector(state => getListById(state, listId));
  const columns = useSelector(state => getColumnsByList(state, listId));

  useEffect(() => {
    dispatch(clearSearchString());
  }, [dispatch, listId]);

  if (!listData) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>

      <p className={styles.description}>{listData.description}</p>

      {/* ✅ SEARCH TYLKO W WIDOKU JEDNEJ LISTY */}
      <SearchForm />

      <section className={styles.columns}>
        {columns.map(column => (
          <Column key={column.id} {...column} />
        ))}
      </section>

      <ColumnForm listId={listData.id} />
    </div>
  );
};

export default List;
