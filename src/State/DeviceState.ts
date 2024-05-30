// State Interface
interface State {
    handle(): void;
}

// Concrete States
class OffState implements State {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    public handle(): void {
        console.log("Device is in off state. Let's power it up!");
        this.device.setState(new OnState(this.device));
    }
}

class OnState implements State {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    public handle(): void {
        console.log("Device is in on state. Time for a nap...");
        this.device.setState(new StandbyState(this.device));
    }
}

class StandbyState implements State {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    public handle(): void {
        console.log("Device is in standby state. Let's power off...");
        this.device.setState(new OffState(this.device));
    }
}

// Context Class
class Device {
    private state: State;

    constructor() {
        this.state = new OffState(this);
    }

    public setState(state: State): void {
        this.state = state;
    }

    public request(): void {
        this.state.handle();
    }
}

// Test Function
export function runStatePatternExample() {
    const device = new Device();
    console.log("\nTest Case 1: Initial State - OffState");
    device.request(); // Move to OnState
    device.request(); // Move to StandbyState
    device.request(); // Move to OffState
    device.request(); // Move to OnState again
}

// Exports
export { Device, State, OnState, OffState, StandbyState };
