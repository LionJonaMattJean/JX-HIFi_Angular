import { Dates } from './dates';

export interface Card {
    id: string;
    cardNumber: number;
    experieringDate: Dates;
    paymentMethod: string;
    cvc: number;
    nameHolder: string;
}
