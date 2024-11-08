import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return selectedBox ? (
    <div className="mailbox-details">
      <h2>Mailbox #{selectedBox._id}</h2>
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </div>
  ) : (
    <p>Mailbox Not Found!</p>
  );
};

export default MailboxDetails;
