const { app, port } = require("./app/server");

// http://localhost:3001/
app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.listen(port, () => {
  console.log(`App Listening on Port: ${port}...`);
});
