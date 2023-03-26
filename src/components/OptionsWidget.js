import React, { useState, useEffect, Text, Button } from 'react';
import Chatbot, {createChatBotMessage, createClientMessage, Message} from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../bot/config.js';
import MessageParser from '../bot/MessageParser.js';
import ActionProvider from '../bot/ActionProvider.js';
import _ from 'underscore';

// const config = {
//     // initialMessages: [createChatBotMessage(`Hello world`), ],
//     initialMessages: [
//     // {message: 'You are a english teacher.', type: 'bot', id: 1200695815435, loading: true},
//     // {message: 'I am Pradip, a blue collar worker from india who k…use daily work and give their hindi explaination.', type: 'user', id: 1447439195434},
//     // {message: "Hello, Pradip. That's awesome! say start to start", type: 'bot', id: 1324791457816, loading: true},
//     // {message: 'Hi', type: 'user', id: 839733549627}
// ]
//   };

function Options() {


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
    console.log(messageList, 'list');
    // config.initialMessages = messageList;
    setMessages(messageList);
    // config.initialMessages = messageList;
    // setTimeout( () => {
    //     console.log(messages)
    // }, 1000)
    console.log('===========================')
    console.log(messages, 'createChatBotMessage');
    
    setUpdate(true);
    // return () => setValue(value => value + 1); // update state to force render

    }
    fetchData();
  }, [update]);


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
        <Button> Play A Game</Button>
      </div>
  );
}

export default Options;
