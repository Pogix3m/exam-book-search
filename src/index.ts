import { createInterface, Interface } from "node:readline";
import Documenter, { NotFoundError, TBook } from "./library/documenter";

const SearchBook = async(title: string) => {
    try {
        console.log(`Searching for '${ title }'`);
        return await Documenter.Book.Search(title);
    }
    catch (error) {
        if (error instanceof NotFoundError) {
            console.log("Book not found");
        }
        else {
            console.log("Unable to search book");
        }
    }
};

const GetAuthor = async(id: number) => {
    try {
        const { firstName: fn, lastName: ln, middleInitial: mi = "" } = await Documenter.Author.Get(id);

        return `${ fn } ${ mi } ${ ln }`.replaceAll("  ", " ");
    }
    catch (error) {
        console.log("Unable to get author");
    }

    return "";
};

const ReadCommand = () => {
    // source: https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs
    const readLine: Interface = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readLine.question(`\nBook to search: `, async(title: string) => {
        const book: TBook | undefined = await SearchBook(title);
        if (book) {
            const authors: string[] = await Promise.all(book.authors.map((author: number) => GetAuthor(author)));

            console.log("\nBook found!");
            console.log(`Title: ${ book.title }`);
            console.log(`Description: ${ book.description }`);
            console.log(`Authors:`);
            authors.filter((author: string) => author)
                .forEach((author: string) => console.log(`\t- ${ author }`));
        }

        readLine.close();
        ReadCommand();
    });
};

ReadCommand();
