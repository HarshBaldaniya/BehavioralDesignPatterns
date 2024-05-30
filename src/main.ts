import { runTemplateMethodExample } from "./TemplateMethod/Appliance";
import { runMediatorExample } from "./Mediator/SmartHomeMediator";
import { runChainOfResponsibilityExample } from "./ChainOfResponsibility/RequestHandler";
import { runObserverExample } from "./Observer/Sensor";
import { runCommandPatternExample } from "./Command/Command";
import { runStatePatternExample } from "./State/DeviceState";
import { runVisitorPatternExample } from "./Visitor/Visitor";
import { runInterpreterPatternExample } from "./Interpreter/Expression";
import { runIteratorPatternExample } from "./Iterator/DeviceIterator";
import { runMementoPatternExample } from "./Memento/DeviceMemento";

console.log("Smart Home System Simulation Started!");

console.log("\n--- Template Method Pattern ---");
runTemplateMethodExample();

console.log("\n--- Mediator Pattern ---");
runMediatorExample();

console.log("\n--- Chain of Responsibility Pattern ---");
runChainOfResponsibilityExample();

console.log("\n--- Observer Pattern ---");
runObserverExample();

console.log("\n--- Command Pattern ---");
runCommandPatternExample();

console.log("\n--- State Pattern ---");
runStatePatternExample();

console.log("\n--- Visitor Pattern ---");
runVisitorPatternExample();

console.log("\n--- Interpreter Pattern ---");
runInterpreterPatternExample();

console.log("\n--- Iterator Pattern ---");
runIteratorPatternExample();

console.log("\n--- Memento Pattern ---");
runMementoPatternExample();

console.log("Smart Home System Simulation Finished!");
