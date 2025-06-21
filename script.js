function mincost(arr) {
  if (arr.length === 0) return 0;

  const heap = [...arr];
  heap.sort((a, b) => a - b);

  let cost = 0;

  while (heap.length > 1) {
    // Step 2: Extract two smallest ropes
    const first = heap.shift();
    const second = heap.shift();

    const newRope = first + second;
    cost += newRope;

    heap.push(newRope);
    heap.sort((a, b) => a - b);
  }

  return cost;
}

module.exports = mincost;
