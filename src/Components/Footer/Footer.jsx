import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const Foot = () => {
  return (
    <Layout>
      <Footer
        style={{
          position: 'fixed',
          bottom: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 30,
          padding: 0,
        }}
      >
        ©2023 Created by Carolina Pineda
      </Footer>
    </Layout>
  );
};

export default Foot;
