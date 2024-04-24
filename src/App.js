function App() {
  fetch("http://localhost:4000/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key: "testing" }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Server response:", data);
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });

  return <div className="App">{process.env.REACT_APP_DB_SERVER}</div>;
}

export default App;
