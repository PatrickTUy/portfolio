import React, { useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Slider = () => {
  return (
    <div className="w-full h-full bg-white flex">
      
      <ArrowBackIosIcon
        className="self-center flex-start"
        sx={{ width: 70, height: 70, color: '#34343b', cursor: 'pointer' }}
      />
     

      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <div className=" flex justify-center w-[100px] h-[100px] self-center m-auto">
          <img
            className="flex self-center"
            src={process.env.PUBLIC_URL + `/assets/react.png`}
          />
        </div>

        <div className=" flex justify-center w-[100px] h-[100px] self-center m-auto">
          <img
            className="self-center"
            src={process.env.PUBLIC_URL + `/assets/react.png`}
          />
        </div>
      </div>

      <ArrowForwardIosIcon
        className="self-center flex-end"
        sx={{ width: 70, height: 70, color: '#34343b', cursor: 'pointer' }}
      /> 
    </div>
  );
};

export default Slider;
