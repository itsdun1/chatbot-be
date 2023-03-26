/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Chatbot, {createChatBotMessage, createClientMessage, Message} from 'react-chatbot-kit';

// import TextField from "@material-ui/core/TextField";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";

//http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=54dadd0dc2a3fe8d31eb9d376a84c24d
//http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=54dadd0dc2a3fe8d31eb9d376a84c24d
//defination  of WeatherInfo widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const BotResponse = (props) => {
  const [data, setData] = useState(null);
  const [mess, setMess] = useState();

  useEffect(() => {
    async function fetchApi() {
        console.log(props.state.message2)
    const response = await fetch('http://localhost:3001/postMessage', {
      method: 'POST',
      body: JSON.stringify({ message: props.state.message2.message, name: 'ADK' }),
      headers: { 'Content-Type': 'application/json' },
    //   mode: 'no-cors'
    });
    console.log(props.setState)

    const data = await response.json();
    // setMess(data.message);
        console.log(data.message, 'bot--response')
        let msg;
        // if(data.message.role === 'user') {
        //     msg = createClientMessage(data.message.content);
        // } else {
        //     msg = createChatBotMessage(data.message.content);
        // }
          msg = createChatBotMessage(data.message);

console.log(1, msg);
    // if (Array.isArray(data.message)) {
console.log(2);
        if (msg.message !== props.state[props.state.length - 1]) {

        props.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, msg],
            isUpdateRequired: true
          //   message2: messages
          }));
        }
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
    console.log(props, 'final----')
    }
    fetchApi();
  }, []);

  return (
    <>
      {/* Hi i am here */}
    </>
  );
};

export default BotResponse;