import React, { useState } from 'react';

const ImageRotation = () => {
  const [rotation, setRotation] = useState(0);

  const rotateLeft = () => {
    setRotation((prevRotation) => prevRotation - 90); // left rotation
  };

  const rotateRight = () => {
    setRotation((prevRotation) => prevRotation + 90); // right rotation
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: "url('https://example.com/dandiya-night-bg.jpg')", // apna background image link yahan do
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        paddingTop: "50px",
      }}
    >
      <h1 style={{ backgroundColor: "black", color: "white", display: "inline-block", padding: "10px 20px" }}>
        Dandiya Night Image Rotation
      </h1>
      <br />
      <img
        src="coffee.jpeg" // apni image ka path yahan do
        alt="Rotating"
        style={{
          height: "400px",
          width: "400px",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.5s ease",
          borderRadius: "10px",
        }}
      />
      <br />
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={rotateLeft}
          style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            color: "black",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          ⬅ Rotate Left
        </button>
        <button
          onClick={rotateRight}
          style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            color: "black",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Rotate Right ➡
        </button>
      </div>
    </div>
  );
};

export default ImageRotation;
