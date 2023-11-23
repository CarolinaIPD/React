import React from 'react';
import { Layout, Card } from 'antd';
import data from '../../apis/datos.json';
import { useApi } from '../../hooks/useApi';

const { Meta } = Card;

const gridStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  backgroundColor: 'transparent',
};
/*const gridStyle = {
  margin:0,
  padding: 0,
  display: 'grid',
  width:'100%',
  backgroundColor: 'transparent',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap:'45px',
};*/
const cardStyle = {
  width: 240,
  marginBottom: 16,
};

const hasMovies = data.Search?.length > 0;

const Banner = () => {
  const mappedApi = useApi();
  return (
    <Layout style={gridStyle}>
      {hasMovies ? (
        mappedApi.map((movie, index) => (
          <Card
            key={movie.id}
            hoverable
            style={cardStyle}
            cover={<img alt="example" src={movie.image} />}
          >
            <Meta title={movie.title} description={movie.year} />
          </Card>
        ))
      ) : (
        <p>No hay películas disponibles</p>
      )}
    </Layout>
  );
};

export default Banner;
