import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.home}>
      <h1 className={css.greeting}>Phonebook App</h1>
    </div>
  );
}
