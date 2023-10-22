export class CreateEmailQueueDto {
    client: {
        name: string;
        email: string;
    }
    product: {
        name: string;
        price: number;
    }
}
