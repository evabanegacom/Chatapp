import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/chatFeed';

function App() {
  return (
    <ChatEngine 
      height='100vh'
      projectID='188836ac-47f9-4da5-9f6b-9e4950b567dc'
      userName='javascript'
      userSecret='123123'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
