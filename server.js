const express = require("express");
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(ejsLayouts);
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.render("index", { title: "Home | Suchit Parte" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About | Suchit Parte" });
});

app.get("/projects", (req, res) => {
  const projects = [
    {
      title: "Campus Connect",
      image: "/assets/campus-connect.png",
      description: "A student-faculty portal for announcements, messaging, and event updates.",
      link: "https://kzmg8dp5188yw517z22g.lite.vusercontent.net/"
    },
    {
      title: "Razer Website Clone",
      image: "/assets/razer-clone.png",
      description: "A stylish product page and cart system showcasing Razer products.",
      link: "https://suchit-05.github.io/razer-website-cloning/"
    }
  ];

  res.render("projects", { title: "Projects | Suchit Parte", projects });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact | Suchit Parte" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
