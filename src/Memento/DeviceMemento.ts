class Device {
    private state: string = "Off";

    public setState(state: string): void {
        this.state = state;
        console.log(`Device: State set to ${state}`);
    }

    public getState(): string {
        return this.state;
    }

    public save(): DeviceMemento {
        console.log("Device: Saving current state...");
        return new DeviceMemento(this.state);
    }

    public restore(memento: DeviceMemento): void {
        this.state = memento.getState();
        console.log(`Device: Restored state to ${this.state}`);
    }
}

class DeviceMemento {
    private readonly state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}
/// caretaker shall be included Harsh
export function runMementoPatternExample() {
    const device = new Device();

    // Test Case 1: Initial state is "Off"
    console.log("\nTest Case 1: Initial State");
    console.log(`Initial state: ${device.getState()}`);

    // Test Case 2: Change state to "On" and save it
    console.log("\nTest Case 2: Change state to 'On' and save it");
    device.setState("On");
    const savedState = device.save();

    // Test Case 3: Change state to "Off" and then restore the saved state
    console.log("\nTest Case 3: Change state to 'Off' and then restore the saved state");
    device.setState("Off");
    device.restore(savedState);

    // Test Case 4: Change state to "Maintenance", save it, then restore previous "On" state
    console.log("\nTest Case 4: Change state to 'Maintenance', save it, then restore previous 'On' state");
    device.setState("Maintenance");
    const savedMaintenanceState = device.save();
    device.restore(savedState);

    // Test Case 5: Restore the "Maintenance" state
    console.log("\nTest Case 5: Restore the 'Maintenance' state");
    device.restore(savedMaintenanceState);
}

export { Device, DeviceMemento };
