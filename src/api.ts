import express, { Request, Response } from "express";
import cors from "cors";
import { determineIfKingIsInCheck, setUpChessboard } from "./iskingincheck";

// Create a new express application instance
export const app: express.Application = express();

// Configure CORS
const corsOptions = {
  origin: "http://localhost",  // Allow all incoming calls from localhost
};

app.use(cors(corsOptions));  // Use CORS middleware with the specified options
app.use(express.json());

// Define the GET endpoint
app.get("/game", (req: Request, res: Response) => {
  const chessboardStatus = {
    chessboard: setUpChessboard(),
    isKingInCheck: determineIfKingIsInCheck(),
  };

  res.json({
    chessboardStatus,
  });
});

// The server is listening on port 3000
export const server = app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});

// Adding a cynical joke as requested
console.log("Why did Arthur bring a ladder to the bar? Because he heard the drinks were on the house and somehow thought he'd need it to get one!");
