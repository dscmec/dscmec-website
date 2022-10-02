import React from "react";
import dotTri from "../../assets/svg/dot-tri.svg";
import objects from "../../assets/svg/objects.svg";
import triangles from "../../assets/svg/triangles.svg";
import shapes2 from "../../assets/svg/shapes-2.svg";
import { useState } from "react";
import { IoIosPaperPlane } from "react-icons/io";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import "./ContactUs.css";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [msgErr, setMsgErr] = useState("");

  const clearFields = () => {
    setName("");
    setEmail("");
    setMsg("");
    setNameErr("");
    setEmailErr("");
    setMsgErr("");
  };

  const handleContactForm = (e) => {
    e.preventDefault();

    if (name) {
      setNameErr("");
      if (email) {
        setEmailErr("");
        if (isEmail(email)) {
          const responseData = {
            name: name,
            email: email,
            msg: msg,
          };

          axios({
            method: "post",
            url: process.env.REACT_APP_FORMSPREE_API,
            data: responseData,
          })
            .then(() => {
              alert("Submitted");
            })
            .then(() => {
              clearFields();
            });
        } else {
          setEmailErr("Invalid email address");
        }
        if (msg) {
          setMsgErr("");
        } else {
          setMsgErr("Message cannot be blank");
        }
      } else {
        setEmailErr("Email cannot be blank");
      }
    } else {
      setNameErr("Name cannot be blank");
    }
  };
  return (
    <>
    <div id="contactus" className="contactus_container">
    <img src={objects} className="objects" alt="" />
        <img src={dotTri} className="dot-tri" alt="" />
        <img src={triangles} className="triangles" alt="" />
        <img src={shapes2} className="shapes-2" alt="" />
    
      <div className="contactus">
        
        <div className="contact_form">
        <h1 className="contactUs__header">Contact Us</h1>
        <form
          className="contactUs__form"
          onSubmit={handleContactForm}
          name="contact"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="contact_form_div">
            <label htmlFor="name" className="contact_form_label">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contact_form_input"
            />
            <p className="contact_form_error">{nameErr}</p>
          </div>
          <div className="contact_form_div">
            <label htmlFor="email" className="contact_form_label">
              Your Email
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contact_form_input"
            />
            <p className="contact_form_error">{emailErr}</p>
          </div>
          <div className="contact_form_div">
            <label htmlFor="message" className="contact_form_label">
              Your Message
            </label>
            <textarea
              type="text"
              name="message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="contact_form_input textarea"
            />
            <p className="contact_form_error">{msgErr}</p>
          </div>

          <button type="submit" className="contact_form_btn">
            Send
            <IoIosPaperPlane size={20} />
          </button>
        </form>
      </div>
      </div>
    </div>
    </>
  );
}

export default ContactUs;
