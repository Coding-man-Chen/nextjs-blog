import React, { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

const sendData = async (contactDetail) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetail),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
};

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestState, setRequestState] = useState();
  const [requestErrorMessage, setRequestErrorMessage] = useState();
  let notification;
  const handlerMessageSubmit = async (e) => {
    e.preventDefault();
    try {
      setRequestState("pending");
      await sendData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestState("success");
      setEnteredEmail("");
      setEnteredMessage("");
      setEnteredName("");
    } catch (error) {
      setRequestState("error");
      setRequestErrorMessage(error.message);
    }
  };
  if (requestState === "pending") {
    notification = {
      status: "pending",
      title: "Sending message... ",
      message: "Your message is on its way",
    };
  }
  if (requestState === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "We have received your message",
    };
  }
  if (requestState === "error") {
    notification = {
      status: "error",
      title: "Error! ",
      message: requestErrorMessage,
    };
  }
  useEffect(() => {
    if (requestState === "error" || requestState === "success") {
      const timer = setTimeout(() => {
        setRequestState(null);
        setRequestErrorMessage(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestState]);
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handlerMessageSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Your Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
