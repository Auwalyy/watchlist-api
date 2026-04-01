import express from "express";

const router = express.Router();

router.get("/", (res, req) => {
    res.send("Hello World");
})

export default router;