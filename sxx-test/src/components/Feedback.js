import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Feedback = () => {
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
        type: "feedback",
        email: email,
        city: city,
        phone: phone,
        topic: topic,
        text: text,
      }),
    })
      .then(() => {
        toast.success("Feedback sent", {
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
    <section id="contact" style={{ margin: "1rem", padding: 0 }}>
      <div className="container">
        <h3
          className="maintitle big AnimePollTitle"
          data-text="Give Your Feedback"
          data-align="center"
          style={{ fontFamily: "font1" }}
        >
          Give Your Feedback
        </h3>
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
                    id="city"
                    type="text"
                    value={city}
                    onInput={({ target }) => {
                      setCity(target.value);
                    }}
                    placeholder="Your City"
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
                    placeholder="Your Valuable Feedback *"
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
                      className="ossm_btn full"
                    >
                      <span>Send</span>
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
export default Feedback;
