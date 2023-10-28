import React from 'react';
import './styles/mapstyle.css'; // Import the new CSS file here
import PText from '../../components/homepage/PText';

export default function Map() {
  return (
    <div className="map">
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here</h3>
          <PText>Bangkok,Thailand</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/%E0%B9%84%E0%B8%AD%E0%B8%94%E0%B8%B5%E0%B9%82%E0%B8%AD+%E0%B9%82%E0%B8%A1%E0%B8%9A%E0%B8%B4+%E0%B8%A7%E0%B8%87%E0%B8%A8%E0%B9%8C%E0%B8%AA%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87-%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%8A%E0%B8%99%E0%B8%88%E0%B9%8C/@13.8181805,100.5317933,17.88z/data=!4m6!3m5!1s0x30e29c78de198587:0x703a39cc93ea3959!8m2!3d13.8188721!4d100.5317414!16s%2Fg%2F11cp7kjfdp?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
    </div>
  );
}
