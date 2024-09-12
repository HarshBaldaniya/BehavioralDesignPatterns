import RequestHandler from './RequestHandler';

class DiscountHandler extends RequestHandler {
    public handle(request: any): void {
        if (request.type === "Discount") {
            console.log("DiscountHandler: Applying discount...");
            if (request.code === "DISCOUNT10") {
                console.log(`10% discount applied on ${request.item}.`);
            } else {
                console.log(`No discount available for code ${request.code}.`);
            }
        } else {
            super.handle(request);
        }
    }
}

export default DiscountHandler;
