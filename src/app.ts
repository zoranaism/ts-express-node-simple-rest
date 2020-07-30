// common JS import syntax
// const express = require('express');

// ES modules import syntax is the one   that TS supports
import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import todoRoutes from "./routes/todos";

const app = express();


// json middleware
// parse the body of all incoming requests
app.use(json());

// middleware function
app.use("/todos", todoRoutes);

// with err as first parameter and 4 in total, this is a error middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
