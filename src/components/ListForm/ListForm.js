import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';
import Button from '../Button/Button';
import styles from './ListForm.module.scss';
import { addList } from '../../redux/listsRedux';


const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const newId = shortid(); // generujemy id tu, a nie w reducerze
    dispatch(addList({ id: newId, title, description })); // przekazujemy id w payload

    setTitle('');
    setDescription('');

    // teraz możemy przejść do nowej listy
    navigate(`/list/${newId}`);
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <span className={styles.label}>Title:</span>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <span className={styles.label}>Description:</span>
        <input
          className={styles.input}
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
