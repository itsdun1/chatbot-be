/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Chatbot, {createChatBotMessage, createClientMessage, Message} from 'react-chatbot-kit';
import './../App.css'

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
  const [currentId, setCurrentId] = useState(null);
  const [latestId, setLatestId] = useState(null)
  // const [mess, setMess] = useState();

  useEffect(() => {
    console.log(props, 'propsss')
    if(!currentId) {
      setCurrentId(props.state.messages[props.state.messages.length - 1]);
    }

    console.log(currentId, latestId)
    
//     async function fetchApi() {
//       console.log(props, 'props')
//         console.log(props.state.message2)
//     const response = await fetch('http://localhost:3001/postMessage', {
//       method: 'POST',
//       body: JSON.stringify({ message: props.state.message2.message, name: 'ADK' }),
//       headers: { 'Content-Type': 'application/json' },
//     //   mode: 'no-cors'
//     });
//     console.log(props.setState)

//     const data = await response.json();
//     // setMess(data.message);
//         console.log(data.message, 'bot--response')
//         let msg;
//         // if(data.message.role === 'user') {
//         //     msg = createClientMessage(data.message.content);
//         // } else {
//         //     msg = createChatBotMessage(data.message.content);
//         // }
//           msg = createChatBotMessage(data.message);

// console.log(1, msg);
//     // if (Array.isArray(data.message)) {
// console.log(2);
//         if (msg.message !== props.state[props.state.length - 1]) {

//         props.setState((prev) => ({
//             ...prev,
//             messages: [...prev.messages, msg],
//             isUpdateRequired: true
//           //   message2: messages
//           }));
//         }
//     //   } else {
// // console.log(3);

// //         await props.setState((prev) => ({
// //           ...prev,
// //           messages: [...prev.messages, msg],
// //           isUpdateRequired: true

// //         //   message2: data.message
  
// //         }));
// //       }

//     // await props.setState((prev) => ({
//     //     ...prev,
//     //     messages: [...prev.messages, 'hello'],
//     //     // message2: 
//     //     text: 'hello'
//     //   }));
//     console.log(props, 'final----')
//     }
    // fetchApi();


  }, [latestId]);
console.log(props);
// if(props)
  const options = [
    { text: "Basic Vocabulary", handler: () => {}, id: 100 },
    { text: "Advanced Vocabulary", handler: () => {}, id: 101 },
    { text: "Play English Games", handler: () => {}, id: 102 },
    { text: "Grammar Lessons", handler: () => {}, id: 103 },
    { text: "Pronunciation Exercises", handler: () => {}, id: 104 },
  ];

  // const optionsMarkup = options.map((option) => (
  //   // <button
  //   //   className="learning-option-button"
  //   //   key={option.id}
  //   //   onClick={option.handler}
  //   // >
  //   //   {option.text}
  //   // </button>
  //   <div
  //             className="option-item"
  //             onClick={option.handler}
  //             key={option.id}
  //           >
  //             {option.text}
  //           </div>
    

    
  // ));

  // return <div className="learning-options-container">{optionsMarkup}</div>;

  return (
    <div className="options">
      {/* <h1 className="options-header"></h1> */}
      <div className="options-container">
        {options.map((option) => {
          return (
            <div
              className="option-item"
              // onClick={props.actions.getRes2}
              onClick={() => props.actions.getRes2(option.id)}
              key={option.id}
            >
              {option.text}
            </div>
          );
        })}
      </div>
    </div>
  );
// };

  // return (
  //   <>
  //     {/* Hi i am here */}
      
  //   </>
  // );
};

export default BotResponse;