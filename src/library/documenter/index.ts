import { Author } from "./author";
import { Book } from "./book";

export * from "./error";
export * from "./types";

export default {
    Author: new Author(),
    Book: new Book(),
};

