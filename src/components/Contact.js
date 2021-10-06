import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../App.css";

export default function Contact() {
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  const [formData, setFormData] = useState({});
  // const [messagee, setMessagee] = useState("");

  // const { name, email, message } = data;

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
    // setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    // email (get service,template id and intergration user id. e.target are the input data)
    // stella
    // emailjs
    //   .sendForm(
    //     "service_8wvri2s",
    //     "template_l28p8xt",
    //     e.target,
    //     "user_A0rfHSP2yohzhMSJ4oDEU"
    //   )
    // Amutha
    emailjs
      .sendForm(
        "service_1lpa9id",
        "template_n6n6r8p",
        e.target,
        "user_etuc4QBUGfJPQyWZealTj"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    // googlesheet
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify([
        // [formData.name, formData.email, formData.message],
        [formData.email, formData.message, new Date().toLocaleString()],
      ]),
    };

    fetch(
      "https://v1.nocodeapi.com/amutha/google_sheets/sDBpXXCxMheMRxIY?tabId=Contact",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // try {

    //   const response = await fetch(
    //     "https://v1.nocodeapi.com/amutha/google_sheets/KqMsubNgQgcHBGji?tabId=Feedback",
    //     {
    //       method: "POST",
    //       body: JSON.stringify([[name, email, message]]),
    //       //   body: JSON.stringify([
    //       //     [formData.name, formData.email, formData.message],
    //       //   ]),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const json = await response.json();
    //   console.log("Success:", JSON.stringify(json));
    //   setMessagee("Success");
    // } catch (error) {
    //   console.error("Error:", error);
    //   setMessagee("Error");
    // }
  };

  return (
    <div className="App">
      <form
        className="input-form"
        id="contact"
        name="contact"
        onSubmit={sendData}
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleInput}
        />
        <textarea name="message" placeholder="Message" onChange={handleInput} />
        <input name="submit" type="submit" value="Send" />

        {/* <div>{message}</div> */}
      </form>
    </div>
  );
}
