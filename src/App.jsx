import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MailboxForm from '../components/MailboxForm';
import MailboxList from '../components/MailboxList';
import MailboxDetails from '../components/MailboxDetails';
import './App.css';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (boxData) => {
    const newBox = { ...boxData, _id: mailboxes.length + 1 };
    setMailboxes([...mailboxes, newBox]);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<main><h1>Post Office</h1></main>} />
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
