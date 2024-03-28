import {
  createEmptyChessBoard,
  placePieceOnChessboard,
  determineIfKingIsInCheck
} from "../../src/iskingincheck";

describe("Greetings reader, welcome to the unit test suite for Is King In Check. Here you shall find all the itty gritty details on how this works.", () => {
  describe("Since this is based on chess, we need a chessboard..", () => {
    it("So an empty chessboard needs to be created, consisting of 8 rows and columns.", () => {
      const output = createEmptyChessBoard();

      expect(Array.isArray(output)).toBeTruthy();
      expect(output.length).toBe(8);
      output.forEach((row) => {
        expect(Array.isArray(row)).toBeTruthy();
        expect(row.length).toBe(8);
      });

      output.forEach((row) => {
        row.forEach((cell) => {
          expect(cell).toBe("");
        });
      });
    });
  });
  describe("Now that we have a board, we need to be able to place a piece on that board.", () => {
    it("We should be able to place a King at E1", () => {
      const chessboard = createEmptyChessBoard();
      const row = 7;
      const column = 4;
      const piece = "K";

      const output = placePieceOnChessboard(chessboard, row, column, piece);

      expect(output[row][column]).toBe("K");
    });
    it("And we should also be able to place a Rook at A5", () => {
      const chessboard = createEmptyChessBoard();
      const row = 3;
      const column = 0;
      const piece = "R";

      const output = placePieceOnChessboard(chessboard, row, column, piece);

      expect(output[row][column]).toBe("R");
    });
  });
  describe("When the board is all set up and ready to go, we have to determine if the King is in check or not.", () => {
    it("For now, we have a hard-coded outcome. Namely: false", () => {
      const output = determineIfKingIsInCheck();

      expect(output).toBeFalsy();
    });
  });
});
