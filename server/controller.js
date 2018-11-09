module.exports = {
  getHouses: (req, res) => {
    let db = req.app.get("db");

    db.get_houses()
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log("you fucked something up", err);
      });
  },
  addHouse(req, res) {
    let db = req.app.get("db");
    let { name, address, city, state, zip } = req.body;
    db.add_house({ name, address, city, state, zip }).then(dbRes => {
      res.status(200).send(dbRes);
    });
  }
};
