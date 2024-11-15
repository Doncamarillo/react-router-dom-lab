import { useState } from 'react';

const MailboxForm = ({ addBox }) => {
  const [boxholder, setBoxholder] = useState('');
  const [boxSize, setBoxSize] = useState('Small');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxholder, boxSize });
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
