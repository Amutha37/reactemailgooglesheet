import React, { useState } from "react";

export default function Newsletter() {
  const [formData, setFormData] = useState({});
  // const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  // const sendData = async (e) => {
  const sendData = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify([
        // [name, email, message, new Date().toLocaleString()],
        [formData.email, new Date().toLocaleString()],
      ]),
    };

    fetch(
      "https://v1.nocodeapi.com/amutha/google_sheets/sDBpXXCxMheMRxIY?tabId=Newsletter",
      requestOptions
    )
      .then((response) => response.text())
      // .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // try {
    //   const response = await fetch(
    //     "https://v1.nocodeapi.com/amutha/google_sheets/KqMsubNgQgcHBGji?tabId=Newsletter",
    //     {
    //       method: "POST",
    //       body: JSON.stringify([[formData.email]]),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const json = await response.json();
    //   console.log("Success:", JSON.stringify(json));
    //   setMessage(json.message);
    // } catch (error) {
    //   console.error("Error:", error);
    //   setMessage("Error");
    // }
  };

  return (
    <div className="App">
      <form
        className="input-form"
        id="newsletter"
        name="newsletter"
        onSubmit={sendData}
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleInput}
        />
        <input name="submit" type="submit" value="Send" />
        {/* <div>{message}</div> */}
      </form>
    </div>
  );
}
