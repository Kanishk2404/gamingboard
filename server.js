const express = require("express");
const app = express();

app.get("/top-scores", (req, res) => {
  res.json({ scores: [100, 95, 90, 85, 190, 120, 180, 200, 500, 60, 90, 9876543] });
});

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => console.log(`Leaderboard service running on http://${HOST}:${PORT}`));

module.exports = app;
