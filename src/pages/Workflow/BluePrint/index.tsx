import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { PAGE_ROUTES } from '@utils/constants/pageRoutes';

const BluePrint = () => {
  const navigate = useNavigate();
  const [bluePrint, setBluePrint] = useState();

  useEffect(() => {
    navigate(PAGE_ROUTES.WORKFLOW.SELECT_TEMPLATE, { replace: true });
  }, []);

  return (
    <>
      <Outlet
        context={{
          bluePrint,
          setBluePrint,
        }}
      />
    </>
  );
};

export default BluePrint;
