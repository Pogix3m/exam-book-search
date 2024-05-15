
export type TBook = {
    id: number;
    title: string;
    description: string;
    authors: number[];
};

export type TAuthor = {
    id: number;
    firstName: number;
    lastName: number;
    middleInitial?: number;
};

export type TResponse = TBook | TAuthor;
