import https from "https";
import HTTP, { IHTTP } from "@pogix3m/http";
import { TResponse } from "./types";
import { ErrorFormatter } from "./error";

// source: https://documenter.getpostman.com/view/15757300/UzXNVJCg
const url: string = "https://ejditq67mwuzeuwrlp5fs3egwu0yhkjz.lambda-url.us-east-2.on.aws/api";

export const request: IHTTP<TResponse> = new HTTP<TResponse>(
    url,
    {
        httpsAgent: new https.Agent({ keepAlive: true }),
        headers: {
            accept: "application/json",
            "content-type": "application/json",
        },
    },
    {
        errorFormatter: ErrorFormatter,
    },
);
