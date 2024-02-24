const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

//for static file
app.use(express.static(path.join(__dirname, "public")));

//for handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs.engine({
  defaultLayout: "main",
  helpers: {
    // defined helper
    limit: function (array, limit) {
      return array.slice(0, limit);
    }
  }
}));
app.set("view engine", "handlebars");

//routes
app.use("/", require(path.join(__dirname, "routes/route.js")));

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
