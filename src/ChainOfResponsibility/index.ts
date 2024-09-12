import ProductViewHandler from './ProductViewHandler';
import AddToCartHandler from './AddToCartHandler';
import CartCheckHandler from './CartCheckHandler';
import PaymentHandler from './PaymentHandler';
import InventoryHandler from './InventoryHandler';
import DiscountHandler from './DiscountHandler';
import DefaultHandler from './DefaultHandler';
import RequestHandler from './RequestHandler';

export interface HandlerConfig {
    name: string;
    instance: RequestHandler;
}

const availableHandlers: { [key: string]: () => RequestHandler } = {
    "ProductViewHandler": () => new ProductViewHandler(),
    "AddToCartHandler": () => new AddToCartHandler(),
    "CartCheckHandler": () => new CartCheckHandler(),
    "PaymentHandler": () => new PaymentHandler(),
    "InventoryHandler": () => new InventoryHandler(),
    "DiscountHandler": () => new DiscountHandler(),
    "DefaultHandler": () => new DefaultHandler()
};

// Define the order of handlers here
const handlerOrder = [
    "ProductViewHandler",
    "AddToCartHandler",
    "InventoryHandler",
    "CartCheckHandler",
    "PaymentHandler",
    "DiscountHandler",
    "DefaultHandler"
];

const handlers: HandlerConfig[] = handlerOrder.map((handlerName: string) => ({
    name: handlerName,
    instance: availableHandlers[handlerName]()
}));

export { handlers, handlerOrder };
