
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';

import { Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';
const App = () => {
  return (
    <div className='app'>
    <div className='navbar'>
      <Navbar />
    </div>
    <div className='main'>
      <Layout>
        <div className='routes'>
        <Routes>
          <Route path='/#' element={<Homepage />}exact>
          </Route>

          <Route  path='/cryptocurrencies' element={<Cryptocurrencies />}>
          </Route>
          <Route path='/crypto/:coinId' element={<CryptoDetails />}>
          </Route>
          <Route path='/news' element={<News />}>
          </Route>
        </Routes>
        </div>
      </Layout>
    <footer className='footer' >
<Typography.Text leve={5} style={{color:'white', textAlign:'center'}}>
CryptoVerse <br/> All right reserverd
</Typography.Text>
<Space>
  <Link to='/'>Home</Link>
  <Link to='/news'>News</Link>
</Space>
</div> 
    </footer>
    </div>
  );
}

export default App
