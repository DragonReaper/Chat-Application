import logo from './logo.svg';
import {ChatEngine} from "react-chat-engine";
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="3427351c-0b1b-41a9-a8dd-b8fbb8879be9"
        userName="Miguel"
        userSecret="123123"
      />
    </div>
  );
}

export default App;
