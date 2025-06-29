import React from 'react';
import ReactDOM from 'react-dom/client';

// const element = React.createElement(
//   'h1',
//   { className: 'greeting', id: 'greeting' },
//   'Hello, world!'
// );
// We will use jsx syntax in the future

const headingJsx = () => (
    <h1 className="greeting" id="greeting">
        Hello, world from jsx!
    </h1>
);

console.log(headingJsx);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headingJsx);