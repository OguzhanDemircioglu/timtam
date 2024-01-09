import React from 'react';

const Text = ({text,currentElement}) => {
    return  React.createElement(`${currentElement}`, null, `${text}`);
};

export default Text;
