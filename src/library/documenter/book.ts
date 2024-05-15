import { TBook } from "./types";
import { request } from "./request";
import { THTTPResponse } from "@pogix3m/http";

export class Book {
    public async Search(title: string): Promise<TBook> {
        const response: THTTPResponse<TBook> = await request.Post("/books/search", { title });

        return response.data;
    }
}
