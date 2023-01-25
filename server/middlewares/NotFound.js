const notFoundRoute = (req, res) => {
  res.status(404);
  if (req.accepts("json")) {
    res.json({ error: "404 ROUTE NOT FOUND 😭" });
  } else {
    res.type("txt").send("404 ROUTE NOT FOUND 😭");
  }
};

module.exports = notFoundRoute;
