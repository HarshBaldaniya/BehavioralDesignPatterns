import RequestHandler from './RequestHandler';

class PaymentHandler extends RequestHandler {
    private attemptCount: number = 0;

    public handle(request: any): void {
        if (request.type === "Payment") {
            this.attemptCount++;
            if (this.attemptCount === 1) {
                console.log("PaymentHandler: Payment failed on first attempt.");
                request.status = "failed";
                super.handle(request);
            } else {
                console.log("PaymentHandler: Processing payment...");
                console.log(`Payment of ${request.amount} for ${request.item} processed.`);
                request.status = "success";
            }
        } else {
            super.handle(request);
        }
    }
}

export default PaymentHandler;
