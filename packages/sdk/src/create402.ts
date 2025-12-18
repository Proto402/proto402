import { Create402Config } from "./types";
import { verifyPayment } from "./solana";

export function create402(config: Create402Config) {
  return {
    config,
    async verify(wallet: string, amount: number) {
      return verifyPayment(wallet, config.receiver, amount);
    }
  };
}
