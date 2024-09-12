import RequestHandler from './RequestHandler';

class AddToCartHandler extends RequestHandler {
    public handle(request: any): void {
        if (request.type === "AddToCart") {
            console.log(`${this.constructor.name}: Adding product to cart...`);
            console.log(`Added ${request.item} to cart.`);
        } else {
            super.handle(request);
        }
    }
}

export default AddToCartHandler;
