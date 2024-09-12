import RequestHandler from './RequestHandler';

class DefaultHandler extends RequestHandler {
    public handle(request: any): void {
        console.log(`DefaultHandler: No specific handler for ${request.type}`);
        super.handle(request);
    }
}

export default DefaultHandler;
