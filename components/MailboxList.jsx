import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => (
  <div className="mailbox-list">
    {mailboxes.map((mailbox) => (
      <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id} className="mail-box">
        <div>
          <h2>Mailbox #{mailbox._id}</h2>
          <p>{mailbox.boxholder}</p>
        </div>
      </Link>
    ))}
  </div>
);

export default MailboxList;
