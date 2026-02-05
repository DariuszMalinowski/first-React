import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = ({ listId }) => { // <-- odbieramy listId jako props
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        if (!title) return; // zabezpieczenie przed pustym tytułem

        // <-- dodajemy listId do obiektu akcji
        dispatch(addColumn({ title, icon, listId }));

        // reset formularza
        setTitle('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <div className={styles.inputGroup}>
                <span className={styles.label}>Title:</span>
                <input
                    className={styles.input}
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className={styles.inputGroup}>
                <span className={styles.label}>Icon:</span>
                <input
                    className={styles.input}
                    type="text"
                    value={icon}
                    onChange={e => setIcon(e.target.value)}
                />
            </div>
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;
