import React from 'react';
import styles from './UserHeader.module.css';
import UserHeaderNav from './UserHeaderNav';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [tittle, setTittle] = React.useState('');
  const location = useLocation();
  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/estatisticas':
        setTittle('Estatísticas');
        break;
      case '/conta/postar':
        setTittle('Poste Sua Foto');
        break;
      default:
        setTittle('Minha Conta');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="tittle">{tittle}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
