import React from "react";
import HouseDroids from './assets/HouseDroids.gif';

const WrongPath = () => {
  return (
    <div className='container'>
      <h1 className="display-4">
        These droids ain't what you're looking for!!
      </h1>
      <img
        src={HouseDroids}
        alt="Obi Wan Kenobi"
      />
    </div>
  );
};
export default WrongPath;