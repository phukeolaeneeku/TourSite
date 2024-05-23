// src/EmailForm.js
import React, { useState } from "react";

const EmailForm = () => {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipient
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(gmailLink, "_blank");

    // const baseUrl = "https://mail.google.com/mail/u/0/?compose=cm&fs=1&tf=1";
    // const gmailLink = `${baseUrl}&to=${encodeURIComponent(
    //   recipient
    // )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    // window.open(gmailLink, "_blank"); // Opens Gmail in a new tab
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recipient</label>
        <input
          type="email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;