import React from 'react';
import { Layout, Typography } from 'antd';
const { Header } = Layout;

const Head = () => {
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Typography.Title
          level={2}
          style={{
            margin: 0,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        >
          Cartelera
        </Typography.Title>
      </Header>
    </Layout>
  );
};

export default Head;
