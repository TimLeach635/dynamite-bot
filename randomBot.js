const moves = ["R", "P", "S", "D", "W"];
const nMoves = moves.length;

function randomMove() {
    // Generate a random integer between 0 and 4 (the length of the moves array)
    const randomInt = Math.floor(Math.random() * nMoves);

    return moves[randomInt];
}

class Bot {
    makeMove(gamestate) {
        return randomMove();
    }
}

module.exports = new Bot();
