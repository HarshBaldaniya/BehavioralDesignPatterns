import { handlers } from '.';
import RequestHandler from './RequestHandler';

export function setupChain(): RequestHandler {
    for (let i = 0; i < handlers.length - 1; i++) {
        handlers[i].instance.setNext(handlers[i + 1].instance);
    }
    return handlers[0].instance; // Return the head of the chain
}
