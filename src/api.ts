import express, { Request, Response } from "express";
import { setUpChessboard } from "./iskingincheck";

// Create a new express application instance
export const app: express.Application = express();

app.use(express.json());

// Define the POST endpoint
app.get("/game", (req: Request, res: Response) => {
  const chessboardStatus = {
    chessboard: setUpChessboard(),
  };

  res.json({
    chessboardStatus,
  });
});

// The server is listening on port 3000
export const server = app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
