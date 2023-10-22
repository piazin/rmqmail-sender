export class EmailQueuePayloadDto {
    client: {
        name: string;
        email: string;
    }
    product: {
        name: string;
        price: number;
    }
}
