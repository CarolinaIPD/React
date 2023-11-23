import { useState } from 'react';
import data from '../apis/datos.json';
import noData from '../apis/no-datos.json';

export function useSearch(onSearch) {
  const [responseData, setResponseData] =useState([]);
  /*const info = data.Search || [];
  const mappedApi = info?.map((item) => ({
    id: item.imdbID,
    image: item.Poster,
    title: item.Title,
    year: item.Year,
    type: item.Type,
  }));*/
  const getData = async (search) => {
    if(search) {
      fetch(`www.omdbapi.com/?apikey=4287ad07&s=${search}`)
        .then((res) => res.json())
        .then((json) => {
          setResponseData(json.Search || []);
          onSearch(json.Search || []);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
      //setResponseData(data)
    }else{
      setResponseData([]);
      onSearch([]);
    }
  }
  return {responseData, getData};
}

