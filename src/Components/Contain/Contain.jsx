import React from 'react';
import Banner from '../Banner/Banner';
import Formu from '../Form/Form';
import Tabla from '../Table/Table';
import { Layout, theme } from 'antd';
const { Content } = Layout;
const Contain = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSearch = (query) => {
    
  };

  return (
    <Layout>
      <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
          height: '89vh',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: '100%',
            background: colorBgContainer,
          }}
        >
          <Formu  onSearch={handleSearch} />
          <Banner onSearch={handleSearch} />
          <Tabla />
        </div>
      </Content>
    </Layout>
  );
};

export default Contain;
