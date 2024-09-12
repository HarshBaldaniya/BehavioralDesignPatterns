import RequestHandler from './RequestHandler';

class CartCheckHandler extends RequestHandler {
    public handle(request: any): void {
        if (request.type === "CheckCart") {
            console.log("CartCheckHandler: Checking cart contents...");
            console.log(`Cart contains: ${request.cart.join(", ")}`);
        } else {
            super.handle(request);
        }
    }
}

export default CartCheckHandler;
