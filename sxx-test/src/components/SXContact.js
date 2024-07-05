import { useState } from "react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineMail,
} from "react-icons/ai";

import { FaTelegramPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SXContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [text, setText] = useState("");

  async function handleForm(e) {
    e.preventDefault();
    await fetch("/api/form", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: name,
        type: "contact",
        email: email,
        city: city,
        phone: phone,
        topic: topic,
        text: text,
      }),
    })
      .then(() => {
        toast.success("Message sent", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch(err => {
        // catch them errors
        console.log(err);
      });
  }
  return (
    <section id="contact">
      <div data-aos="fade-up" className="container">
        <h3
          className="maintitle big"
          data-text="Contact Us"
          data-align="center"
          style={{ fontFamily: "font1" }}
        >
          Contact Us
        </h3>
        <div className="contactUsSocial">
          <a href="https://www.instagram.com/shinnex_production/">
            <div>
              <AiOutlineInstagram className="contactUsSocialIcon" />
              <p>@shinnex_production</p>
            </div>
          </a>
          <a href="https://www.youtube.com/@shinnex_production">
            <div>
              <AiOutlineYoutube className="contactUsSocialIcon" />
              <p>@shinnex_production</p>
            </div>
          </a>
          <a href="mailto:shinnextream@gmail.com">
            <div>
              <AiOutlineMail className="contactUsSocialIcon" />
              <p>shinnextream@gmail.com</p>
            </div>
          </a>
          <a href="https://t.me/Attackontitanhindidubb">
            <div>
              <FaTelegramPlane className="contactUsSocialIcon" />
              <p>@titandubbershindi</p>
            </div>
          </a>
        </div>
        <div className="shinnex_contact_form">
          <form
            onSubmit={handleForm}
            className="contact_form"
            id="contact_form"
            autoComplete="off"
          >
            <div className="input_list">
              <ul>
                <li>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onInput={({ target }) => {
                      setName(target.value);
                    }}
                    placeholder="Your Name *"
                  />
                </li>
                <li>
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onInput={({ target }) => {
                      setEmail(target.value);
                    }}
                    placeholder="Your Email *"
                  />
                </li>
                <li>
                  <input
                    id="tel"
                    type="text"
                    value={phone}
                    onInput={({ target }) => {
                      setPhone(target.value);
                    }}
                    placeholder="Your Phone (optional)"
                  />
                </li>
                <li>
                  <input
                    id="subject"
                    type="text"
                    value={topic}
                    onInput={({ target }) => {
                      setTopic(target.value);
                    }}
                    placeholder="Topic (optional)"
                  />
                </li>
                <li className="full">
                  <textarea
                    id="message"
                    placeholder="Your Message *"
                    defaultValue={""}
                    value={text}
                    onInput={({ target }) => {
                      setText(target.value);
                    }}
                  />
                </li>
                <li className="full">
                  <div className="mw300">
                    <button
                      style={{ border: "none" }}
                      id="send_message"
                      href="#"
                      className="ossm_btn full"
                    >
                      <span>Send Message</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="returnmessage"
              data-success="Your message has been received, We will contact you soon."
            />
            <div className="empty_notice">
              <span>! Please Fill Required Fields !</span>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};
export default SXContact;
