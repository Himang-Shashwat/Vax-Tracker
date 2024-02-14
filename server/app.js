const express = require("express");
const userRouter = require("./routers/userRoutes");
const vaccineRouter = require("./routers/vaccineRoutes");
const childRouter = require("./routers/childRoutes");
const immunizationRouter = require("./routers/immunizationRoutes");
const globalErrorHandler = require("./controllers/errorController");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/vaccines", vaccineRouter);
app.use("/api/v1/child/", childRouter);
app.use("/api/v1/immunizations", immunizationRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
