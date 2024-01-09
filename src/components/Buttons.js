import React from 'react';

const Buttons = (setElement) => {

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
        },
        {
            text: "left",
            element: "justify-content: left"
        },
        {
            text: "center",
            element: "justify-content: center"
        },
        {
            text: "right",
            element: "justify-content: right"
        }
    ];

    return (
        <div>
            {
                buttons.map((rr) => (
                    <button onClick={() => setElement(rr.element)}>
                        {rr.text}
                    </button>
                ))
            }
        </div>
    );
};

export default Buttons;