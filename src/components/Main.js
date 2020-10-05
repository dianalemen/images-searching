import React, { useState } from 'react';
import Search from './Search.js';
import ImagesList from './Images-list.js';
import InfoBlock from './Info-block.js';
import getImages from '../api/Images';

export default function Main() {
  const [images, setImages] = useState([]);

  function handleClick (src) {
    getImages(src)
      .then(({ hits }) => setImages(
        hits.map(({ largeImageURL, id }) => ({ url: largeImageURL, key: id }))
      ));
  }

  return(
    <>
      <Search
        setImages={ setImages }
        onClick={ handleClick }/>

        { images.length
        ? <ImagesList images={ images }/> 
        : <InfoBlock /> }
    </>
  );
}