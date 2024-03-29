import React from 'react';

const Buttons = ({setCurrentElement}) => {

    const buttons = [
        {
            text: "h1",
            element: "h1"
        },
        {
            text: "h2",
            element: "h2"
        },
        {
            text: "h3",
            element: "h3"
        },
        {
            text: "paragraph",
            element: "p"
        },
        {
            text: "bold",
            element: "b"
        },
        {
            text: "italic",
            element: "i"
        }
    ];

    return (
        <div>
            {
                buttons.map((rr) => (
                    <button onClick={() => setCurrentElement(rr.element)}>
                        {rr.text}
                    </button>
                ))
            }
        </div>
    );
};

export default Buttons;