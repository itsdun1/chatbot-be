import React from "react";
// import Button from "@material-ui/core/Button";

//defination  of Tools widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const Tools = (props) => {
    // props.setState((prev) => ({
    //     ...prev,
    //     messages: [...prev.messages],
    //     isUpdateRequired: true
    //   //   message2: messages
    //   }));
  return (
    <>
      <ul>
        <li>
          <button
            className="my-1"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.res}
            value="1"
          >
            Basic Vocabulary
          </button>
        </li>
        <li>
          <button
            className="my-1"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.res}
            value="2"
          >
            Advanced Vocabulary
          </button>
        </li>
        <li>
          <button
            className="my-1"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.res}
            value="3"
          >
            Play Vocabulary Games
          </button>
        </li>
        <li>
          <button
            className="my-1"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.res}
            value="4"
          >
            Grammar Lessons
          </button>
        </li>
      </ul>
    </>
  );
};
export default Tools;