import { WINNING_COMBINATIONS } from "./winning_combinations"

export const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
}

export const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X"

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O"
  }

  return currentPlayer
}

export function deriveGameBoard(gameTurns, INITIAL_GAME_BOARD) {
  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }

  return gameBoard
}

export function deriveWinner(gameBoard, players) {
  let winner

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column]
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column]
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol) {
      winner = players[firstSquareSymbol]
    }
  }

  return winner
}
