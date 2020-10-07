import { Produto } from './Produto';

export class Pedido{
    _id?: string;
    numeromesa: string;
    subtotal: Number;
    status?: string;
    produtos: Produto[];
    createdAt?: Date;

}