import { createChatBotMessage } from 'react-chatbot-kit';
import BotResponse from './BotResponse';
import Tools from './Tools';

const config = {
  // initialMessages: [createChatBotMessage(`Hello world`), ],
  // initialMessages: [{message: 'You are a english teacher.', type: 'bot', id: 1200695815435, loading: true},
  // {message: 'I am Pradip, a blue collar worker from india who k…use daily work and give their hindi explaination.', type: 'user', id: 1447439195434},
  // {message: "Hello, Pradip. That's awesome! say start to start", type: 'bot', id: 1324791457816, loading: true},
  // {message: 'Hi', type: 'user', id: 839733549627}],
  initialMessages: [],
  state: {
    // botRes: []
    // messages: []
  },
  widgets: [
    {
      widgetName: "botres",
      widgetFunc: (props) => <BotResponse {...props} />,
      mapStateToProps: ["messages"],
    },
    
    {widgetName: "tools",
    widgetFunc: (props) => <Tools {...props} />,
    mapStateToProps: ["messages"],
  }
  ]

};

export default config;