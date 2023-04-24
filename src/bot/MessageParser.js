// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message, 'MessageParser')
if(message) {
      actions.getRes(message);
    }
    //actions.getRes(message);
    // actions.getRes2(message);

    // if (message.includes('hello')) {
    //   actions.handleHello();
    // }
    // actions.
    // actions.handleHello(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
