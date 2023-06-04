import { useEffect, useState } from 'react';
import './index.css';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '@components/Header/Header';
import MainLayout from '@components/Layouts/MainLayout';
import PAGE_ROUTES from '@utils/constants/pageRoutes';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const token = window.localStorage.getItem('isConnectWallet');

  useEffect(() => {
    if (!token) {
      navigate(PAGE_ROUTES.CONNECT_WALLET);
    }
  }, []);

  return (
    <div className="w-full">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <MainLayout>
        <Outlet
          context={{
            isAuth,
            setIsAuth,
          }}
        />
      </MainLayout>
    </div>
  );
}

export default App;
