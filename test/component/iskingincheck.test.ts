import { setUpChessboard } from "../../src/iskingincheck";

describe("This is the component test suite for Is King In Check. Welcome, dear reader!", () => {
  describe("The first part of this app is a component that sets up the chessboard..", () => {
    it("When the chessboard is set up, an empty board is created and the King and an other piece are placed on it", () => {
      const output: string[][] = setUpChessboard();

      expect(output.length).toBe(8); // Check for 8 rows
      output.forEach((row) => {
        expect(Array.isArray(row)).toBe(true);
        expect(row.length).toBe(8); // Check for 8 columns in each row
      });

      const hasKing = output.some((row) => row.includes("K"));
      expect(hasKing).toBe(true);

      const hasRook = output.some((row) => row.includes("R"));
      expect(hasRook).toBe(true);
    });
  });
});
