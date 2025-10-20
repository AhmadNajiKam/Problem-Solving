function getCollatzLength(n: number, memo: Map<number, number>): number {
  if (n === 1) return 1;
  if (memo.has(n)) return memo.get(n)!;

  const next = n % 2 === 0 ? n / 2 : 3 * n + 1;
  const length = 1 + getCollatzLength(next, memo);
  memo.set(n, length);

  return length;
}

function findLongestCollatzChain(limit: number): number {
  const memo = new Map<number, number>();
  let maxLength = 0;
  let maxNumber = 0;

  for (let i = 1; i < limit; i++) {
    const length = getCollatzLength(i, memo);

    if (length > maxLength) {
      maxLength = length;
      maxNumber = i;
    }
  }

  return maxNumber;
}

// Solve the problem
const result = findLongestCollatzChain(1_000_000);
console.log(`Starting number: ${result}`);
