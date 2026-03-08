require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log(`Public API running on port ${PORT}`);
});
