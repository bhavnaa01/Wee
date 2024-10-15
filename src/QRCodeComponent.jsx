import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeComponent = () => {
  // URL where the image will be shown after scanning
  const qrUrl = 'https://wee-bhavna-rauts-projects-d60823a4.vercel.app/WE.mp4'; // Update to your production URL when deploying

  return (
    <div >
      <h1 style={{marginTop: '20px',display: 'flex',justifyContent: 'center'}}>Scan the QR Code to View the Image</h1>
      {/* QR Code that links to /show-image */}
      <div style={{marginTop: '20px',display: 'flex',justifyContent: 'center'}}>
         <QRCodeSVG value={qrUrl} size={200} />
       </div>
    </div>
  );
};

export default QRCodeComponent;

