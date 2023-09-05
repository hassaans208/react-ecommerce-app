import React from 'react';
import ReactDOM from 'react-dom';
import RootDom from 'react-dom/client';

import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './components/App';
import Cart from './components/Cart';
import BaseLayout from './components/BaseLayout';
import Women from './components/Women';
import Men from './components/Men';
import Clothes from './components/Clothes';
import Accessories from './components/Accessories';
import ShowProduct from './components/ShowProduct';
import registerServiceWorker from './registerServiceWorker';

const root = RootDom.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <BaseLayout>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/women" element={<Women />}  />
        <Route path="/men" element={<Men />} />
        <Route path="/clothes" element={<Clothes />}  />
        <Route path="/accessories" element={<Accessories />} />
        <Route exact path="/products/:id" element={<ShowProduct />} />
      </Routes>
    </BaseLayout>
  </BrowserRouter>);

registerServiceWorker();
