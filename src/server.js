const app = require('./app');
const { PORT } = require('./config/env');
const { connectDB } = require('./config/db');

// Connect to Database
connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Documentation available at http://localhost:${PORT}/api-docs`);
});
