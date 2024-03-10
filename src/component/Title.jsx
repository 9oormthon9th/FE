import React from 'react';

const Title = ({ text }) => {
  return (
    <div className={`flex text-4xl text-primary jeju-font mb-40 mt-8`}>
      {text}
    </div>
  );
};

export default Title;
