let choices = ["rock", "paper", "scissors"];

while (true) {
    function player() {
        let playerChoice = prompt("Please choose either (rock, paper, scissors)").toLowerCase();
    
        while (!choices.includes(playerChoice)) {
            userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
        }
        return playerChoice;
    }
    
    function computer() {
        let randomIndex = Math.floor(Math.random() * 3);
        let computerChoice = choices[randomIndex];
        alert("Computer choice: " + computerChoice);
        return computerChoice;
    }
    
    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "rock")
        ) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }
    
    function playGame() {
        let playerChoice = player();
        let computerChoice = computer();
        let result = determineWinner(playerChoice, computerChoice);
        alert(result);
    }

    playGame();
}



