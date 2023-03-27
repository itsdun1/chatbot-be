import React, { useState, useEffect, Text, Button } from 'react';
import Chatbot, {createChatBotMessage, createClientMessage, Message} from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../bot/config.js';
import MessageParser from '../bot/MessageParser.js';
import ActionProvider from '../bot/ActionProvider.js';
import _ from 'underscore';
import './../App.css'
// const config = {
//     // initialMessages: [createChatBotMessage(`Hello world`), ],
//     initialMessages: [
//     // {message: 'You are a english teacher.', type: 'bot', id: 1200695815435, loading: true},
//     // {message: 'I am Pradip, a blue collar worker from india who k…use daily work and give their hindi explaination.', type: 'user', id: 1447439195434},
//     // {message: "Hello, Pradip. That's awesome! say start to start", type: 'bot', id: 1324791457816, loading: true},
//     // {message: 'Hi', type: 'user', id: 839733549627}
// ]
//   };

function ChatBot() {


  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
const [update, setUpdate] = useState(false);
const [value, setValue] = useState(0); // integer state
const [isUpdateRequired, setUpdateRequired] = useState(false)
  
function useForceUpdate(){
    // A function that increment 👆🏻 the previous state like here 
    // is better than directly setting `setValue(value + 1)`
}
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch('http://localhost:3001/getAllMessageForUser?name=ADK', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        // mode: 'no-cors'
      });
      const data = await response.json();
    //   console.log(data);
      // ...
    //   messages = _.pluck
    const messageList = [];
    _.each(data.messages, message => {
        if(message.role === 'user') {
            messageList.push(createClientMessage(message.content));
        } else {
            messageList.push(createChatBotMessage(message.content));
        }
    })
    if(!data.messages || data.messages.length === 0) {
      messageList.push(createChatBotMessage('Namastey! Mai Aapki English Teacher hu. Boliye app kya seekhna chahenge ? App Muje type kr ke bhi jawab de sakte hai.',{ 
          withAvatar: true,
          widget: "botres",
        }));
    }
    console.log(messageList, 'list');
    // config.initialMessages = messageList;
    setMessages(messageList);
    // config.initialMessages = messageList;
    // setTimeout( () => {
    //     console.log(messages)
    // }, 1000)
    console.log('===========================')
    console.log(messages, 'createChatBotMessage');
    // if(messages.length === 0) {
    //   // messageList.push(createChatBotMessage('Hi I am your english teacher', {}))
    //   const msg = createChatBotMessage('Hi I am your english teacher', {
    //     withAvatar: true,
    //     widget: "botres",
    //   });

    //   setMessages([msg])
    //   console.log(messages, 'createChatBotMessage');
    //   setUpdate(true);
    // }

    setUpdate(true);
    // return () => setValue(value => value + 1); // update state to force render

    }
    fetchData();
  }, [update]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//     //   setTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
  
// async function fetchMessages() {
//     const response = await fetch('http://localhost:3001/getAllMessageForUser?name=ADK')
//     let data = await response.json();
//     // data = data.messages;
//     return data.messages;
//   }

//   useEffect(() => {
//     async function fetchData() {
//       const data = await fetchMessages();
//       setMessages(data);
//     }
//     fetchData();
//   }, []);
  
//   useEffect(() => {
//     // Fetch history messages from API
//     fetch('http://localhost:3001/getAllMessageForUser?name=ADK')
//       .then(response => response.json())
//       .then(data => {
//         // Format the data into an array of objects
//         const messageList = [];
//         _.each(data.messages, message => {
//             if(message.role === 'user') {
//                 messageList.push(createClientMessage(message.content));
//             } else {
//                 messageList.push(createChatBotMessage(message.content));
//             }
//         })

//         // Set the messages state variable
//         setMessages(messageList);
//         console.log(setMessages);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);


// useEffect(() => {
//     const fetchData = async () => {
//     const response = await fetch('http://localhost:3001/getAllMessageForUser?name=ADK')
//     const data = await response.json();
//     console.log(data)
//       const chatbotMessages = data.messages.map(message => createChatBotMessage(message.content));
//       setMessages(chatbotMessages);
//       console.log(messages);
//     };

//     fetchData();
//   }, []);
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

const steps = [
  {
    id: 'hello',
    message: 'Hi there, how can I help you today?',
    trigger: 'options',
  },
  {
    id: 'options',
    message: 'Please choose an option:',
    trigger: 'menu',
  },
  {
    id: 'menu',
    options: [
      { value: 'option1', label: 'Option 1', trigger: 'option1' },
      { value: 'option2', label: 'Option 2', trigger: 'option2' },
    ],
  },
  {
    id: 'option1',
    message: 'You chose option 1',
    end: true,
  },
  {
    id: 'option2',
    message: 'You chose option 2',
    end: true,
  },
];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/postMessage', {
      method: 'POST',
      body: JSON.stringify({ message: inputValue, name: 'ADK' }),
      headers: { 'Content-Type': 'application/json' },
    //   mode: 'no-cors'
    });
    const data = await response.json();
    console.log(data, 'ChatbotData')
    setMessages([...messages, { text: inputValue, isUserMessage: true }]);
    setMessages([...messages, { text: data.messages, isUserMessage: false }]);
    setInputValue('');
  };

  const saveMessages = async () => {
    console.log('here')
  }
  return (
  
      <div className="App mx-auto col-md-6 col-sm-8 col-lg-4 cpl-xl-3 my-5">
        {/* {
            <Button> Play a Game</Button>
        } */}
       {(messages.length || isUpdateRequired) &&  <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          messageHistory={messages}
          saveMessages={saveMessages}
          // config={config}
          steps={steps} 
        ></Chatbot>}
      </div>
  );
}

export default ChatBot;
