import { Device } from "../Iterator/DeviceIterator";

class SmartHomeMediator {
    private devices: Device[] = [];

    public addDevice(device: Device): void {
        this.devices.push(device);
    }

    public send(command: string, sender: Device): void {
        console.log(`Mediator: Sending command "${command}" from ${sender.constructor.name}`);
        for (const device of this.devices) {
            device.receive(command);
        }
    }
}

abstract class AbstractDevice implements Device {
    protected mediator: SmartHomeMediator;

    constructor(mediator: SmartHomeMediator) {
        this.mediator = mediator;
    }

    public abstract receive(command: string): void;
}

class Light extends AbstractDevice {
    public receive(command: string): void {
        if (command === "Lights On") {
            console.log("Light: Brightening up the mood!");
        }
    }
}

class Fan extends AbstractDevice {
    public receive(command: string): void {
        if (command === "Fan On") {
            console.log("Fan: Making it breezy!");
        }
    }
}

export function runMediatorExample() {
    const mediator = new SmartHomeMediator();
    const light = new Light(mediator);
    const fan = new Fan(mediator);
    mediator.addDevice(light);
    mediator.addDevice(fan);
    mediator.send("Lights On", light);
    mediator.send("Fan On", fan);
}

export { AbstractDevice as Device, Light, SmartHomeMediator };
