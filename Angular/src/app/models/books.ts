import { Author } from "./authors";

export interface Book{
    bookId: number,
    authorId: number,
    bookName: string,
    pagecount: number,
    author?: Author

}