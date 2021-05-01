const router = require("express").Router();

module.exports = (db) => {
  const userId = 1;

  // Gets users favourites
  router.get("/:userId/favourites", (req, res) => {
    // const userID = req.params.id;
    db.query(
      `
      SELECT f.id, f.building_id, f.user_id, b.name, b.image_url, b.address FROM favourites f 
      JOIN buildings b ON f.building_id = b.id 
      WHERE user_id = $1
      `,
      [userId]
    )
      .then((favourites) => {
        res.json(favourites.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Delete a favourite
  router.delete("/:userId/favourites/:favouriteId", (req, res) => {
    const favouriteId = req.params.favouriteId;

    db.query(
      `
      DELETE FROM favourites
      WHERE id = $1
      `,
      [favouriteId]
    )
      .then(() => res.send("Deleted from favourites"))
      .catch((err) => {
        res.status(204).json({ error: err.message });
      });
  });
  return router;
};
