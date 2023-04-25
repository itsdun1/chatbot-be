import React,{ useState} from 'react';
import ChatBot from './components/ChatBot';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  // return (
  //   <div>
  //     <h1 class='botName'>Mitra Learn</h1>
  //     <ChatBot />
  //   </div>
  // );
  return (
    <Router>
      <div>
	  

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/mitra-learn/:userId" element={<ChatBot />} />
         
        </Routes>
      </div>
    </Router>
  );
}
export default App;
