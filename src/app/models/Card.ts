import { Dates } from './dates';

export interface Card {
    id: string;
    cardNumber: number;
    experieringDate: Dates;
    paiementMethod: string;
    cvc: number;
    nameHolder: string;
}
