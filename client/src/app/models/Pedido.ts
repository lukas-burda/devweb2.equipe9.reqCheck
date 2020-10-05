import { Produto } from './Produto';

export class Pedido{
    _id?: string;
    numeromesa: string;
    status: string;
    produtos: Produto[];
    createdAt?: Date;

}