import React from 'react';
import Header from "./components/header";
import CartPage from './components/CartPage';
import TotalPrice from './components/TotalPrice';

function App() {

  return (
    <div className="text-sm">
      <Header />
      <div className="main-container flex flex-col top-[70px] relative h-screen overflow-scroll">
        <CartPage />
        <TotalPrice />
      </div>
    </div>
  );
}

export default App;
