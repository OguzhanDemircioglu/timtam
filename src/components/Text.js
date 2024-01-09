import React from 'react';

const Text = ({element,text}) => {
    return  React.createContext(`${element}`, null, `${text}`);
};

export default Text;
