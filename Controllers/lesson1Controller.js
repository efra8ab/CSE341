
const testingRoute = ('/testing', (req, res) => {
    res.send("This is a test");
});

const helloRoute = ("/", (req, res) => {
  res.send("Helloooo dog");
});

module.exports = {
    helloRoute,
    testingRoute
}
