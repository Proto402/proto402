import { Request, Response, NextFunction } from "express";

export function requirePayment(fourZeroTwo: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const wallet = req.headers["x-wallet-address"] as string;

    if (!wallet) {
      return res.status(402).json({
        error: "Payment Required",
        reason: "Missing wallet address"
      });
    }

    const isPaid = await fourZeroTwo.verify(wallet, 1);

    if (!isPaid) {
      return res.status(402).json({
        error: "Payment Required",
        instructions: "Send payment and retry request"
      });
    }

    next();
  };
}
