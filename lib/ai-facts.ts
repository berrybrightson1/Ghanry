import { ghanaFactsPool, FactData } from "./ghana-facts-expanded";

export type { FactData };

/**
 * Returns a fact from the static pool, excluding any IDs already seen.
 * Falls back to full pool when everything has been seen (resets cycle).
 */
export function getDidYouKnowFact(excludeIds: number[] = []): FactData {
    const available = ghanaFactsPool.filter(f => !excludeIds.includes(f.id));
    const pool = available.length > 0 ? available : ghanaFactsPool; // reset when all seen
    return pool[Math.floor(Math.random() * pool.length)];
}
