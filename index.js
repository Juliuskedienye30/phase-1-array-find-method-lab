// code your solution here
function superbowlWin(record) {
  const winningYear = record.find(game => game.result === "W");
  return winningYear ? winningYear.year : undefined;
}

// Export the function so it can be used in the test
module.exports = superbowlWin;
