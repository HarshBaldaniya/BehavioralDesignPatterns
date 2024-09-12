import { runTemplateMethodExample } from "./TemplateMethod/Appliance";
import { runMediatorExample } from "./Mediator/SmartHomeMediator";
// import { runEcommerceChainExample } from "./ChainOfResponsibility/index";
import { runObserverExample } from "./Observer/Sensor";
import { runCommandPatternExample } from "./Command/Command";
import { runStatePatternExample } from "./State/DeviceState";
import { runVisitorPatternExample } from "./Visitor/Visitor";
import { runInterpreterPatternExample } from "./Interpreter/Expression";
import { runIteratorPatternExample } from "./Iterator/DeviceIterator";
import { runMementoPatternExample } from "./Memento/DeviceMemento";
import { setupChain } from "./ChainOfResponsibility/setupChain";
import { handlerOrder } from "./ChainOfResponsibility";

console.log("Smart Home System Simulation Started!");

// console.log("\n--- Template Method Pattern ---");
// runTemplateMethodExample();

// console.log("\n--- Mediator Pattern ---");
// runMediatorExample();

console.log("\n--- Chain of Responsibility Pattern ---");

type StepType = 'ViewProducts' | 'AddToCart' | 'CheckCart' | 'InventoryCheck' | 'Payment' | 'Discount' | 'UnknownRequest';

const stepTypesToHandlers: Record<StepType, string> = {
    ViewProducts: 'ProductViewHandler',
    AddToCart: 'AddToCartHandler',
    CheckCart: 'CartCheckHandler',
    InventoryCheck: 'InventoryHandler',
    Payment: 'PaymentHandler',
    Discount: 'DiscountHandler',
    UnknownRequest: 'DefaultHandler'
};

function runEcommerceChainExample() {
    const handlerChain = setupChain();

    const shopName = "BestShop";

    console.log(`Welcome to ${shopName}!\n`);

    const steps: { type: StepType; data: any }[] = [
        { type: "ViewProducts", data: { type: "ViewProducts", products: ["Laptop", "Phone", "Tablet"] } },
        { type: "AddToCart", data: { type: "AddToCart", item: "Laptop" } },
        { type: "CheckCart", data: { type: "CheckCart", cart: ["Laptop", "Phone"] } },
        { type: "InventoryCheck", data: { type: "InventoryCheck", item: "InStockItem" } },
        { type: "Payment", data: { type: "Payment", amount: 1000, item: "Laptop", status: "" } },
        { type: "Discount", data: { type: "Discount", code: "DISCOUNT10", item: "Laptop" } },
        { type: "UnknownRequest", data: { type: "UnknownRequest" } }
    ];
    
    steps.forEach((step, index) => {
        const stepHandlerName = stepTypesToHandlers[step.type];
        const stepOrderIndex = handlerOrder.indexOf(stepHandlerName) + 1; // Get the order index based on handler order
        console.log(`Step ${stepOrderIndex}: ${step.type}`);
        handlerChain.handle(step.data);
        if (step.type === "Payment" && step.data.status === "failed") {
            console.log(`\nStep ${stepOrderIndex}: Process Payment (Second Attempt)`);
            handlerChain.handle(step.data);
        }
        console.log("");
    });
}

runEcommerceChainExample();

// console.log("\n--- Observer Pattern ---");
// runObserverExample();

// console.log("\n--- Command Pattern ---");
// runCommandPatternExample();

// console.log("\n--- State Pattern ---");
// runStatePatternExample();

// console.log("\n--- Visitor Pattern ---");
// runVisitorPatternExample();

// console.log("\n--- Interpreter Pattern ---");
// runInterpreterPatternExample();

// console.log("\n--- Iterator Pattern ---");
// runIteratorPatternExample();

// console.log("\n--- Memento Pattern ---");
// runMementoPatternExample();

console.log("\nSmart Home System Simulation Finished!\n\n");
