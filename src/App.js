import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routes/Home'));


function App() {
  return (
    <div >
      <Home/>
      
    </div>
  );
}

export default App;
