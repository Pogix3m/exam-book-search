import { TAuthor } from "./types";
import { request } from "./request";
import { THTTPResponse } from "@pogix3m/http";

export class Author {
    public async Get(id: number): Promise<TAuthor> {
        const response: THTTPResponse<TAuthor> = await request.Get(`/authors/${ id }`);

        return response.data;
    }
}
