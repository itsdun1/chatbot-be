import React, { useState, useEffect } from 'react';
import Chatbot, {createChatBotMessage, createClientMessage} from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../bot/config.js';
import MessageParser from '../bot/MessageParser.js';
import ActionProvider from '../bot/ActionProvider.js';
import _ from 'underscore';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

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
    await setMessages(messageList);
    console.log('===========================')
    console.log(messages, 'createChatBotMessage');
    }
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
    setMessages([...messages, { text: data.message, isUserMessage: false }]);
    setInputValue('');
  };

  return (
    // <div>
    //   <div>
    //     {messages.map((message, index) => (
    //       <div key={index} className={message.role === 'user' ? 'user-message' : 'bot-message'}>
    //         {message.content}
    //       </div>
    //     ))}
    //   </div>
    //   <form onSubmit={handleSubmit}>
    //     <input type="text" value={inputValue} onChange={handleInputChange} />
    //     <button type="submit">Send</button>
    //   </form>
    // </div>
    <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        // messageHistory={messages}
        // runInitialMessagesWithHistory={true}
      />
  );
}

export default ChatBot;
