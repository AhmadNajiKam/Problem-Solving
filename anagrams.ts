
function uniqueAnagrams(str: string): string[] {
  const results: string[] = [];
  const seen = new Set<string>();

  function permute(prefix: string, remaining: string): void {
    if (remaining.length === 0) {
      results.push(prefix);
      return;
    }

    const usedChars = new Set<string>();

    for (let i = 0; i < remaining.length; i++) {
      const char = remaining[i];

      // Skip duplicate characters at the same recursion level
      if (usedChars.has(char)) continue;
      usedChars.add(char);

      const newPrefix = prefix + char;
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      permute(newPrefix, newRemaining);
    }
  }

  permute('', str);
  return results;
}

// Example usage:
console.log(uniqueAnagrams('aab'));
// Output: [ 'aab', 'aba', 'baa' ]
// Time and Space complexity is about O(n × n!)
