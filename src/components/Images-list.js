import React from 'react';

export default function ImagesList({ images }) {
  return(
    <div className="images-list">
      { images.map(({ key, url }) => <div key={ key }>
        <div className="image-container" style={ { backgroundImage: "url("+url+")" } }></div>
      </div>) }
    </div>
  );
}