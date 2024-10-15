import React from 'react';

const ShowImage = () => {
  // This is the URL of the image hosted in the public folder
  const imageUrl = 'http://localhost:3000/natureeee.jpeg';  // Update to your production URL when deploying

  return (
    <div>
      <h1>Here is the Image:</h1>
      <img src={imageUrl} alt="Noodiee" style={{ width: '300px' }} />
    </div>
  );
};

export default ShowImage;
