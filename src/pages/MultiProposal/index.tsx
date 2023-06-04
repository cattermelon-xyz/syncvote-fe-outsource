import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Initiative = () => {
  const [initiative, setInitiative] = useState();
  const [checkpoints, setCheckpoints] = useState();

  return (
    <>
      <Outlet
        context={{
          initiative,
          setInitiative,
          checkpoints,
          setCheckpoints,
        }}
      />
    </>
  );
};

export default Initiative;
