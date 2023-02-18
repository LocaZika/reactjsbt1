import React from "react";
import "../assets/scss/contact.scss";

export default function Contact(props) {
  return (
    <div id="contact" className="contact">
      <h1>Contact</h1>
      <br />
      <p className="contact--service">
        We offer full-service catering for any event, large or small. We understand your needs and
        we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do
        not hesitate to contact us.
      </p>
      <p className="contact--address">
        <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
      </p>
      <p className="contact--info">
        You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can
        send us a message here:
      </p>
      <form className="contact--form">
        <input type="text" placeholder="Name" required />
        <input type="number" placeholder="How many people?" required />
        <input type="date" required />
        {
          
        }
        <input type="text" placeholder="Message \ Special requirements" required />
        <button type="submit">send message</button>
      </form>
    </div>
  );
}
