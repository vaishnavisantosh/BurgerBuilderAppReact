import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
      <Route path="/checkout" component={Checkout} />

        <Route path="/" component={BurgerBuilder} />
      </Layout>

    </div>
  );
}

export default App;
