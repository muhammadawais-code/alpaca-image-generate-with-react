import React, { useRef } from 'react';

const AlpacaDownload = ({ imagePaths }) => {
  const canvasRef = useRef(null);

  const handleDownload = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 300;
    canvas.height = 300;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let src of imagePaths) {
      const img = new Image();
      img.src = src;
      await new Promise((res) => {
        img.onload = () => {
          ctx.drawImage(img, 0, 0, 300, 300);
          res();
        };
      });
    }

    const link = document.createElement('a');
    link.download = 'alpaca.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={handleDownload}>Download Alpaca</button>
    </>
  );
};

export {AlpacaDownload};
