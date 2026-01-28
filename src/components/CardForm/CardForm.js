import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

const CardForm = ({ columnId }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({
      type: 'ADD_CARD',
      payload: {title, columnId },
    });

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextInput
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add card..."
      />
      <Button type="submit">
        Add Card
      </Button>
    </form>
  );
};

export default CardForm;
