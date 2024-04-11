import {LexoRank} from 'lexorank'

// Use in initial value field by passing in the rank value of the last document
// If not value passed, generate a sensibly low rank
export default function initialRank(lastRankValue = ``): string {
  const lastRank =
    lastRankValue && typeof lastRankValue === 'string'
      ? LexoRank.parse(lastRankValue)
      : LexoRank.min()
  const nextRank = lastRank.genNext().genNext()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (nextRank as any).value
}
