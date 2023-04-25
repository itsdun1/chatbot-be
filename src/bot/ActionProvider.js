// in ActionProvider.jsx
import React from 'react';
import {useParams} from "react-router-dom";
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
    message2: messages,
    latestId: messages.id

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

  const getRes = async (message2) => {
    console.log('inside getRes');
	//console.log(useParams())
  	let userId = localStorage.getItem("userId")
	  async function fetchApi() {
      // console.log(props, 'props')
        // console.log(props.state.message2)
    const response = await fetch('http://10.0.0.231:3001/postMessage', {
      method: 'POST',
      body: JSON.stringify({ message: message2, name: 'ADK', userId }),
      headers: { 'Content-Type': 'application/json' },
    //   mode: 'no-cors'
    });
    // console.log(props.setState)

    const data = await response.json();
    // setMess(data.message);
        console.log(data.message, 'bot--response')
        let msg;
        // if(data.message.role === 'user') {
        //     msg = createClientMessage(data.message.content);
        // } else {
        //     msg = createChatBotMessage(data.message.content);
        // }
          msg = createChatBotMessage(data.message, {
            withAvatar: true,
            widget: "botres",
          });

console.log(1, msg);
    // if (Array.isArray(data.message)) {
console.log(2);
        // if (msg.message !== props.state[props.state.length - 1]) {

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, msg],
            isUpdateRequired: true,
            latestMessageId: msg.id
          //   message2: messages
          }));
        // }
    //   } else {
// console.log(3);

//         await props.setState((prev) => ({
//           ...prev,
//           messages: [...prev.messages, msg],
//           isUpdateRequired: true

//         //   message2: data.message
  
//         }));
//       }

    // await props.setState((prev) => ({
    //     ...prev,
    //     messages: [...prev.messages, 'hello'],
    //     // message2: 
    //     text: 'hello'
    //   }));
    // console.log(props, 'final----')
    }
    fetchApi();
    // const message = createChatBotMessage(
    //   'Test',
    //   {
    //     withAvatar: true,
    //     widget: "botres",
    //   }
    // );
    // addMessageToBotState(message);
  };


  const getRes2 = (message2) => {
    console.log('inside getRes');
	//console.log(useParams())  
    console.log(message2)
	   let userId = localStorage.getItem("userId")
    async function fetchApi() {
      // console.log(props, 'props')
        // console.log(props.state.message2)
    const response = await fetch('http://10.0.0.231:3001/postMessage', {
      method: 'POST',
      body: JSON.stringify({ message: message2, name: 'ADK', userId }),
      headers: { 'Content-Type': 'application/json' },
    //   mode: 'no-cors'
    });
    const data = await response.json();
    // setMess(data.message);
        console.log(data.message, 'bot--response')
        let msg;
          msg = createChatBotMessage(data.message, {
            withAvatar: true,
            // widget: "botres",
          });
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, msg],
            isUpdateRequired: true,
            latestMessageId: msg.id
          //   message2: messages
          }));
  };
  fetchApi();

}


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
