import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // <-- importujemy
import { getListById, getColumnsByList } from '../../redux/store';

const List = () => {
  const { id } = useParams(); // pobieramy id listy z URL
  const listId = parseInt(id, 10); // zamieniamy string na number

  const listData = useSelector(state => getListById(state, listId));
  const columns = useSelector(state => getColumnsByList(state, listId));



  if (!listData) return <p>List not found</p>; // obsługa błędnego id

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
        {columns.map(column =>
          <Column key={column.id} {...column}  />
        )}
      </section>
      <ColumnForm listId={listData.id} />
    </div>
  );
};

export default List;
