import {JSX} from 'react';
import {useNavigate} from 'react-router-dom';
import style from './style/notfound.module.css';

function NotFound(): JSX.Element {
  const nav = useNavigate();

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.animation}>🤔</div>
        <h1 className={style.title}>404</h1>
        <p className={style.text}>Oops! The page you re looking for does not exist.</p>
        <button className={style.link} onClick={() => nav('/')}>Go Back Home</button>
      </div>
    </div>
  );
}

export default NotFound;
