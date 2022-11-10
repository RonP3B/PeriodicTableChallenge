const express = require("express");
const { engine } = require("express-handlebars");
const home = require("./routes/home");
const path = require("path");
const equal = require("./helpers/hbs/expressions");
const breakCol = require("./helpers/hbs/custom/breakCol");
const {
  groupLatanidosActinidos,
  excludeLatanidosActinidos,
} = require("./helpers/hbs/custom/elementsManagement");

const app = express();
const port = process.env.PORT || 5000;

app.engine(
  "hbs",
  engine({
    helpers: {
      equal,
      breakCol,
      groupLatanidosActinidos,
      excludeLatanidosActinidos,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(home);
app.use((req, res, next) =>
  res.status(404).render("notFound", { layout: false })
);

app.listen(port, () => console.log(`listening on port ${port}...`));
