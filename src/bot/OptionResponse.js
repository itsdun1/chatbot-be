/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Chatbot, {createChatBotMessage, createClientMessage, Message} from 'react-chatbot-kit';
import './../App.css'

const BotResponse = (props) => {
  const [currentId, setCurrentId] = useState(null);
  const [latestId, setLatestId] = useState(null)
  useEffect(() => {
    console.log(props, 'propsss')
    if(!currentId) {
      setCurrentId(props.state.messages[props.state.messages.length - 1]);
    }

    console.log(currentId, latestId)

  }, [latestId]);

//   return (
//     <div className="options">
//       {/* <h1 className="options-header"></h1> */}
//       <div className="options-container">
//         {options.map((option) => {
//           return (
//             <div
//               className="option-item"
//               // onClick={props.actions.getRes2}
//               onClick={() => props.actions.getRes2(option.text)}
//               key={option.id}
//             >
//               {option.text}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// // };

  return (
    <>
      {/* Hi i am here */}
      
    </>
  );
};

export default BotResponse;