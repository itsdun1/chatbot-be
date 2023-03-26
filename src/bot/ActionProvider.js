// in ActionProvider.jsx
import React from 'react';

const ActionProvider =  ({ createChatBotMessage, setState, children }) => {
  // const handleHello = (message) => {
  //   const botMessage = createChatBotMessage('Hello. Nice to meet you.');
  //   console.log(message, 'ddd')
  //   setState((prev) => ({
  //     ...prev,
  //     messages: [...prev.messages, botMessage],
  //   }));
  //   // console.log(messages)
  // };
  const addMessageToBotState = (messages) => {
    console.log('Inside action')
    // if (Array.isArray(messages)) {
    //   setState((prev) => ({
    //     ...prev,
    //     messages: [...prev.messages, messages],
    //     message2: messages
    //   }));
    // } else {
    //   setState((prev) => ({
    //     ...prev,
    //     messages: [...prev.messages, messages],
    //     message2: messages

    //   }));
    // }

  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, messages],
    message2: messages

  }));
  };


  // const addMessageToBotState2 = (messages) => {
  //   // if (Array.isArray(messages)) {
  //   //   setState((prev) => ({
  //   //     ...prev,
  //   //     messages2: [...prev.messages, messages],
  //   //   }));
  //   // } else {
  //   //   setState((prev) => ({
  //   //     ...prev,
  //   //     messages2: [...prev.messages2, messages],
  //   //   }));
  //   // }
  //     setState((prev) => ({
  //       ...prev,
  //       messages2: messages,
  //     }));
  // };

  const getRes = (message2) => {
    console.log('inside getRes');
    const message = createChatBotMessage(
      message2,
      {
        withAvatar: true,
        widget: "botres",
      }
    );
    addMessageToBotState(message);
  };


  const getRes2 = (message2) => {
    console.log('inside getRes');
    const message = createChatBotMessage(
      message2,
      {
        withAvatar: true,
        widget: "tools",
      }
    );
    addMessageToBotState(message);
  };


  // const parse = (message) => {
  //   // if (message.includes('hello')) {
  //   //   console.log('hi');
  //   // }
  //   console.log(message, 'here')
  // };

  console.log("here")

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          // parse: parse,
          actions: {
            // handleHello,
            getRes,
            getRes2
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;