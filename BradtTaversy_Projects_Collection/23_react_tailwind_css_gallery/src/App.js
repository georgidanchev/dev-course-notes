/* eslint no-unused-expressions: 0 */

import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCards';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.error(err))
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 class="text-5xl text-center mx-auto mt-2">No images found!</h1>}

      {
        isLoading ? <h1 class="text-6xl text-center mx-auto mt-2">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      }
    </div>
  );
}

export default App;
