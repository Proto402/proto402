import express from "express";
import { create402, requirePayment } from "@402protocol/sdk";

const app = express();

const fourZeroTwo = create402({
  receiver: "SOLANA_RECEIVER_ADDRESS",
  rate: { unit: "second", price: 0.00001 }
});

app.get(
  "/stream",
  requirePayment(fourZeroTwo),
  (_, res) => {
    res.send("Streaming content...");
  }
);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
