import RequestHandler from './RequestHandler';

class ProductViewHandler extends RequestHandler {
    public handle(request: any): void {
        if (request.type === "ViewProducts") {
            console.log("ProductViewHandler: Displaying all products...");
            console.log(`Available products: ${request.products.join(", ")}`);
        } else {
            super.handle(request);
        }
    }
}

export default ProductViewHandler;
