import { Device } from "../Iterator/DeviceIterator";

// DeviceVisitor Interface
interface DeviceVisitor {
    visitLight(light: Light): void;
    visitWashingMachine(washingMachine: WashingMachine): void;
}

// Concrete Devices
class Light implements Device {
    public accept(visitor: DeviceVisitor): void {
        visitor.visitLight(this);
    }

    public receive(command: string): void {
        console.log("Light received command:", command);
    }
}

class WashingMachine implements Device {
    public accept(visitor: DeviceVisitor): void {
        visitor.visitWashingMachine(this);
    }

    public receive(command: string): void {
        console.log("WashingMachine received command:", command);
    }
}

// Concrete Visitor
class MaintenanceVisitor implements DeviceVisitor {
    public visitLight(light: Light): void {
        console.log("MaintenanceVisitor: Checking the light's glow.");
    }

    public visitWashingMachine(washingMachine: WashingMachine): void {
        console.log("MaintenanceVisitor: Ensuring the washing machine's groove.");
    }
}

// Test Function
export function runVisitorPatternExample() {
    const light = new Light();
    const washingMachine = new WashingMachine();
    
    const maintenanceVisitor = new MaintenanceVisitor();
    
    console.log("\nTesting Light with MaintenanceVisitor:");
    light.accept(maintenanceVisitor);
    light.receive("Turn On");

    console.log("\nTesting WashingMachine with MaintenanceVisitor:");
    washingMachine.accept(maintenanceVisitor);
    washingMachine.receive("Start Washing");
}

// Exports
export { DeviceVisitor, Light, WashingMachine, MaintenanceVisitor };
