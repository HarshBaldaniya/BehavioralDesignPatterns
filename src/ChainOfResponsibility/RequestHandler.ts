abstract class RequestHandler {
    protected nextHandler?: RequestHandler;

    public setNext(handler: RequestHandler): RequestHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        } else {
            console.log(`RequestHandler: No handler for ${request}`);
        }
    }
}

class AlarmHandler extends RequestHandler {
    public handle(request: string): void {
        if (request === "Alarm") {
            console.log("AlarmHandler: Whoop whoop! Alarm activated!");
        } else {
            super.handle(request);
        }
    }
}

class DefaultHandler extends RequestHandler {
    public handle(request: string): void {
        console.log(`DefaultHandler: No specific handler for ${request}`);
        super.handle(request);
    }
}

export function runChainOfResponsibilityExample() {
    const alarmHandler = new AlarmHandler();
    const defaultHandler = new DefaultHandler();

    // Set up the chain
    alarmHandler.setNext(defaultHandler);

    // Test case 1: A request that is handled by AlarmHandler
    console.log("\nTest Case 1: Request = 'Alarm'");
    alarmHandler.handle("Alarm");

    // Test case 2: A request that is not handled by any specific handler
    console.log("\nTest Case 2: Request = 'NonExistent'");
    alarmHandler.handle("NonExistent");
}

export { RequestHandler, AlarmHandler, DefaultHandler };
