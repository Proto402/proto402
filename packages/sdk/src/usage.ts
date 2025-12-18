import { UsageRecord } from "./types";

const usageStore = new Map<string, UsageRecord>();

export function recordUsage(wallet: string, amount: number) {
  const record = usageStore.get(wallet) || { wallet, consumed: 0 };
  record.consumed += amount;
  usageStore.set(wallet, record);
}

export function getUsage(wallet: string) {
  return usageStore.get(wallet);
}
