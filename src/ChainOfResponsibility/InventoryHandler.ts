import RequestHandler from './RequestHandler';

class InventoryHandler extends RequestHandler {
    public handle(request: any): void {
        if (request.type === "InventoryCheck") {
            console.log("InventoryHandler: Checking inventory...");
            if (request.item === "InStockItem") {
                console.log(`${request.item} is in stock.`);
            } else {
                console.log(`${request.item} is out of stock.`);
            }
        } else {
            super.handle(request);
        }
    }
}

export default InventoryHandler;
