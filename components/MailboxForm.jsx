import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const [boxholder, setBoxholder] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxholder, boxSize });
    navigate('/mailboxes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={boxholder}
        onChange={(e) => setBoxholder(e.target.value)}
        placeholder="Boxholder Name"
        required
      />
      <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;
