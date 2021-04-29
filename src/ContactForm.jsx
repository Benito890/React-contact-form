import React, {useState} from 'react';
import './App.css';

// Functionnal Contact-Form using ReactHooks to store data and Fetch to send it back 

function ContactForm() {
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userComment, setUserComment] = useState();

  const postComment = { firstname: userFirstName, lastname: userLastName, email: userEmail, comment: userComment };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postComment);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postComment),
    };
    fetch('http://localhost:5000/comments', requestOptions).then((response) => response.json());
    setUserComment('');
    setUserEmail('');
    setUserFirstName('');
    setUserLastName('');
  };

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={handleSubmit}>
        <div className="ul-container">
          <div>
            <label htmlFor="name">firstname</label>
            <br></br>
            <input className="input-quote" value={userFirstName} type="text" onChange={(e) => setUserFirstName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="name">lastname</label>
            <br></br>
            <input className="input-quote" value={userLastName} type="text" onChange={(e) => setUserLastName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="name">e-mail</label>
            <br></br>
            <input className="input-quote" value={userEmail} type="text" onChange={(e) => setUserEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="message">comment</label>
            <br></br>
            <textarea className="textarea-quote" value={userComment} type="text" onChange={(e) => setUserComment(e.target.value)} required></textarea>
          </div>
          <div>
            <button type="submit">Envoyer</button>
          </div>
        </div>
      </form>
      </header>
    </div>
  );
}

export default ContactForm;
