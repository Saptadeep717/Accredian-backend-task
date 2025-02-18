const express = require("express");
const cors = require("cors");
const referralRoutes = require("./routes/referral.route.js");
const prisma = require("./services/prismaClient.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/referral", referralRoutes);

const PORT = process.env.PORT || 4000;
app.get('/',(req,res)=>{
    res.send("Hello Server!");  
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("SIGINT", async () => {
  console.log("Closing database connection...");
  await prisma.$disconnect();
  process.exit(0);
});
