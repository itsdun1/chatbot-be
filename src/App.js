import React,{ useState} from 'react';
import ChatBot from './components/ChatBot';

function App() {
  const [user, setUser] = useState('');
  function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
  }
  
  return (
    <div>
      {!user ? 
      <input type="text" placeholder="Enter text" onblur={getVal()}></input>
      : ''}
      <h1>Mitra</h1>
      <ChatBot />
    </div>
  );
}

export default App;