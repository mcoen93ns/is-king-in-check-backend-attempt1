Feature: Is king in check?

Scenario: Hard-coded, king is not in check by rook
	Given the API consumer is ready to get the outcome of Is King In Check
    When the API consumer invokes the IsKingInCheck API
    Then a valid response will be received
    And the response contains a chessboard
    And the king is placed at E1
    And the rook is placed at A5
    And an attribute is present that indicates if the king is in check or not.