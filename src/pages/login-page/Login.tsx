import {FormEvent, JSX, useState} from 'react';
import {Link} from 'react-router-dom';
import {TLoginData} from '../../store/types.ts';
import {useAppDispatch} from '../../hooks/store.ts';
import {login} from '../../store/thunk/user.ts';

function Login(): JSX.Element {
  const [loginData, setLoginData] = useState<TLoginData>({email: '', password: ''});
  const dispatch = useAppDispatch();

  const handleInputChange = <K extends keyof TLoginData> (loginField: K, value: string) => {
    setLoginData((prev) => ({...prev, [loginField]: value}));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(loginData));
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  onChange={(e) =>
                    handleInputChange('email', e.target.value)}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  onChange={(e) =>
                    handleInputChange('password', e.target.value)}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
