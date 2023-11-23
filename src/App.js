import React from 'react';
import './App.css';
import Head from './Components/Header/Header';
import Contain from './Components/Contain/Contain';
import Foot from './Components/Footer/Footer';
import { Layout } from 'antd';

function App() {
  return (
    <div className="App min-h-screen max-h-screen h-screen flex flex-col">
      <Layout>
        <Head />
        <Contain />
        <Foot />
      </Layout>
    </div>
  );
}

export default App;
