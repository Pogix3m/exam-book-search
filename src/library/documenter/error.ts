
export class DocumenterError extends Error {}

export class NotFoundError extends DocumenterError {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ErrorFormatter = (error: any): never => {
    const reason: string = error?.data?.data?.error || String(error) || "Unknown";

    // console.log("Documenter Error: ", {
    //     reason,
    // });

    if (reason.toLowerCase().includes("not found")) {
        throw new NotFoundError(reason);
    }

    throw new DocumenterError(reason);
};
