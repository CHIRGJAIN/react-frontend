// const sql = require("mssql");

// // Database Configuration
// const dbConfig = {
//   user: "sa",
//   password: "Chirag@09",
//   server: "CHIRAGJAIN",
//   database: "ProductDB",
//   options: {
//     encrypt: false, // For Azure SQL
//     trustServerCertificate: true, // Change to false in production
//   },
// };

// // Connect to Database
// const connectDB = async () => {
//   try {
//     await sql.connect(dbConfig);
//     console.log("✅ Connected to SQL Server");
//   } catch (error) {
//     console.error("❌ Database Connection Failed:", error.message);
//     process.exit(1); // Stop the server if the DB connection fails
//   }
// };

// module.exports = connectDB; // ✅ Export function correctly

