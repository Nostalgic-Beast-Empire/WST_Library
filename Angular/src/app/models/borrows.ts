import { Customer } from "./customers";
import { Book} from "./books";

export interface Borrow{
    borrowId: number,
    customerId: number,
    bookId: number,
    takenDate: Date,
    broughtDate: Date,
    book: Book,
    customer: Customer,

}