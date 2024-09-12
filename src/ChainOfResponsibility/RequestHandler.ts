abstract class RequestHandler {
    protected nextHandler?: RequestHandler;

    public setNext(handler: RequestHandler): RequestHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: any): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        } else {
            console.log(`${this.constructor.name}: No handler for ${request.type}`);
        }
    }
}

export default RequestHandler;
