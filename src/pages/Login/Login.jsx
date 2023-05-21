import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <h4>Email</h4>
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        <h4>Password</h4>
        <input type="password" name="password" />
      </label>
      <button className={css.loginButton} type="submit">
        Log In
      </button>
    </form>
  );
}
