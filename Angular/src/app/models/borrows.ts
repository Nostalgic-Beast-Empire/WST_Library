import { Customer } from "./customers";
import { Book} from "./books";

export interface Borrow{
    borrowId: number,
    customerId: number,
    bookId: number,
    takenDate: string,
    broughtDate: string,
    book?: Book,
    customer?: Customer,

}