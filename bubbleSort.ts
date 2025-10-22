// Please run the code with this command : ts-node --compiler-options '{"module": "commonjs"}' bubbleSort.ts
enum ascendingOrDescinding {
  ASC, DECS
}
function bubbleSort(arr: number[], ascOrDecs: ascendingOrDescinding): number[] {
  const n = arr.length;

  // Outer loop - controls number of passes
  for (let i = 0; i < n - 1; i++) {
    let swapped = false; // Optimization 1: Track if any swaps occurred

    // Inner loop - compare adjacent elements
    // Optimization 2: Reduce the range each pass (n - i - 1)
    // because the largest elements is moved "bubbled" to the end
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1] && ascOrDecs === ascendingOrDescinding.ASC) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
      else if (arr[j] < arr[j + 1] && ascOrDecs === ascendingOrDescinding.DECS) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // Optimization 1: If no swaps occurred, array is sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}
// Big O cases: O(N) for an already sorted array, O(N^2) for unsorted arrays
// Test cases
const a: number[] = [34, 203, 3, 746, 200, 984, 198, 764, 9];
console.log('Original:', a);
console.log('Sorted:', bubbleSort([...a], ascendingOrDescinding.ASC)); // Use spread to avoid mutating original
console.log('bubbleSort([2, 1, 3]):', bubbleSort([2, 1, 3], ascendingOrDescinding.DECS));
console.log('bubbleSort([5, 4, 3, 2, 1]):', bubbleSort([5, 4, 3, 2, 1], ascendingOrDescinding.ASC));
console.log('bubbleSort([1, 2, 3, 4, 5]):', bubbleSort([1, 2, 3, 4, 5], ascendingOrDescinding.DECS));

// Note : Although it's not required, I've impelemnted the sorting algorithm so it can sort in ascending or decsinding order

