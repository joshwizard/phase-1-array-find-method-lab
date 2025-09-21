// code your solution here

function superbowlWin(record) {
  // Use .find() to locate the first object where result is "W"
  const winningSeason = record.find(game => game.result === "W");

  // If found, return the year, otherwise return undefined
  return winningSeason ? winningSeason.year : undefined;
}

// Example usage:
const record = [
  { year: "2018", result: "N/A" },
  { year: "2019", result: "N/A" },
  { year: "2020", result: "W" }
];

console.log(superbowlWin(record)); // 👉 "2020"
