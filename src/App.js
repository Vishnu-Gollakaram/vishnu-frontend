import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://spring-backend-3lbq.onrender.com/api/hello")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => setMessage("Error fetching data"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello from Frontend!</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
