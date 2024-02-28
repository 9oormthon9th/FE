import React from 'react';
import { primaryColor } from './../theme/color';

const Title = ({ text }) => {
    return (
        <div
            className={`flex text-4xl text-[${primaryColor}] jeju-font mb-40 mt-8`}
        >
            {text}
        </div>
    );
};

export default Title;
