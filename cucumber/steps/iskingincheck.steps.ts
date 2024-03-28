// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
// eslint-disable-next-line import/no-extraneous-dependencies
import request, { Response } from "supertest";
import { app, server } from "../../src/api";

const feature = loadFeature("./cucumber/features/iskingincheck.feature");

defineFeature(feature, (test) => {
  test("Hard-coded, king is not in check by rook", ({
    given,
    when,
    then,
    and,
  }) => {
    let response: Response;

    afterAll(() => {
      server.close();
    });

    given(
      "the API consumer is ready to get the outcome of Is King In Check",
      () => {}
    );

    when("the API consumer invokes the IsKingInCheck API", async () => {
      response = await request(app).get("/game").send();
    });

    then("a valid response will be received", () => {
      expect(response.statusCode).toBe(200);
    });

    and("the response contains a chessboard", () => {
      expect(response.body.chessboardStatus).toHaveProperty("chessboard");
    });

    and("the king is placed at E1", () => {
      expect(response.body.chessboardStatus.chessboard[7][4]).toBe("K");
    });

    and("the rook is placed at A5", () => {
      expect(response.body.chessboardStatus.chessboard[3][0]).toBe("R");
    });

    and(
      "an attribute is present that indicates if the king is in check or not.",
      () => {
        expect(response.body.chessboardStatus.isKingInCheck).toBeDefined();
        expect(response.body.chessboardStatus.isKingInCheck).toBeFalsy();
      }
    );
  });
});
