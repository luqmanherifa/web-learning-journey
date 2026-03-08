require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Private API running on port ${PORT}`);
});
