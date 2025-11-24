import express from "express";
import os from "os";

const app = express();
const PORT = process.env.PORT || 3000;
const getNetworkAddress = () =>
   Object.values(os.networkInterfaces())
      .flat()
      .find((i) => i?.family === "IPv4" && !i.internal)?.address || "localhost";

console.log(process.env.CODE);

const networkAddress = getNetworkAddress();
app.use(express.json());

app.get("/", (req, res) => {
   res.send("OK");
});
app.get("/api/hello", (req, res) => {
   res.json({ message: "Hello, World" });
});

app.listen(PORT, () => {
   console.log(`Server is running on http://${networkAddress}:${PORT}`);
});
