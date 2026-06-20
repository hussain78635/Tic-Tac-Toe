function initGame() {
  const boxes = Array.from(document.querySelectorAll(".box"));
  const resetBtn = document.querySelector("#reset-btn");
  const newGameBtn = document.querySelector("#new-btn");
  const msgContainer = document.querySelector(".msg-container");
  const msg = document.querySelector("#msg");

  let turnO = true;
  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  function showWinner(winner) {
    if (msg) msg.innerText = `congratulations, winner is ${winner}`;
    if (msgContainer) msgContainer.classList.remove("hide");
    boxes.forEach((b) => (b.disabled = true));
  }

  function checkWinner() {
    for (const pattern of winPatterns) {
      const pos1val = boxes[pattern[0]].innerText;
      const pos2val = boxes[pattern[1]].innerText;
      const pos3val = boxes[pattern[2]].innerText;

      if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
        if (pos1val === pos2val && pos2val === pos3val) {
          console.log("winner", pos1val);
          showWinner(pos1val);
          return true;
        }
      }
    }
    return false;
  }

  function resetGame() {
    boxes.forEach((b) => {
      b.innerText = "";
      b.disabled = false;
    });
    turnO = true;
    if (msgContainer) msgContainer.classList.add("hide");
  }

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.disabled) return;
      if (turnO) {
        box.innerText = "O";
      } else {
        box.innerText = "X";
      }
      box.disabled = true;
      checkWinner();
      turnO = !turnO;
    });
  });

  if (resetBtn) resetBtn.addEventListener("click", resetGame);
  if (newGameBtn) newGameBtn.addEventListener("click", resetGame);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGame);
} else {
  initGame();
}
