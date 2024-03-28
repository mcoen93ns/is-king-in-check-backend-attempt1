# Technical debt

## Cucumber

The end to end test is currently hard-coded for a specific scenario. In reality, this test should be able to handle random outcomes from the back-end instead.

## Component tests

The test currently asserts the chessboard, while that is something that is also asserted in the unit test. The component test should be refactored to assert the interaction between the units instead.

It should also be refactored to be able to handle random outcomes.

## Unit tests

The tests for determining if the king is in check are only suitable for the hard-coded testcase and not for random chessboards.

## Source: iskingincheck.ts

Placing the piece on the chessboard:
1. Is currently done using coordinates for the row and column. In chess, this is not domain language. Chess notation should be used, like A1.
2. Is missing guardians for placing the piece outside the board.

Set up chessboard: 
1. Should use chess notation for placing pieces on the board.
2. Should pick random positions on the board instead of hard-coded ones.
3. Should pick a random piece instead of a hard-coded rook.

Determining if the king is in check: should be implemented.