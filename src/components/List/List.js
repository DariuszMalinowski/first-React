import styles from './List.module.scss';

const List = () => {
    return (
        <header>
            <h1>Things to do <span>soon</span></h1>
            <p>Interesting things I want to check out</p>
            <section>
                <article>
                    <h2 className="title">Books</h2>
                </article>
                <article>
                    <h2 className="title">Movies</h2>
                </article>
                <article>
                    <h2 className="title">Games</h2>
                </article>
            </section>
        </header>
    );
  };

  export default List;