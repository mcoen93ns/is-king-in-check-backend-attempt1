export function createEmptyChessBoard(): string[][] {
  const boardSize = 8;
  const emptySquare = "";
  const chessBoard: string[][] = [];

  for (let row = 0; row < boardSize; row += 1) {
    const chessRow: string[] = [];
    for (let col = 0; col < boardSize; col += 1) {
      chessRow.push(emptySquare);
    }
    chessBoard.push(chessRow);
  }

  return chessBoard;
}

export function placePieceOnChessboard(
  chessboard: string[][],
  row: number,
  column: number,
  piece: string
): string[][] {
  const newChessboard = chessboard.map((rowContents) => [...rowContents]);
  newChessboard[row][column] = piece;

  return newChessboard;
}

export function setUpChessboard(): string[][] {
  const chessboard = createEmptyChessBoard();
  const chessboardIncludingKing = placePieceOnChessboard(chessboard, 7, 4, "K");
  const chessboardIncludingRook = placePieceOnChessboard(
    chessboardIncludingKing,
    3,
    0,
    "R"
  );

  return chessboardIncludingRook;
}

export function determineIfKingIsInCheck(): boolean {
  return false;
}
