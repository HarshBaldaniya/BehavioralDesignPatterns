interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
}

interface Device {
    constructor: { name: string };
    receive(command: string): void;
}

class DeviceCollection {
    private devices: Device[] = []; 

    public addDevice(device: Device): void {
        this.devices.push(device);
    }

    public createIterator(): Iterator<Device> {
        return new DeviceIterator(this.devices);
    }
}

class DeviceIterator implements Iterator<Device> {
    private devices: Device[];
    private position: number = 0;

    constructor(devices: Device[]) {
        this.devices = devices;
    }

    public hasNext(): boolean {
        return this.position < this.devices.length;
    }

    public next(): Device {
        return this.devices[this.position++];
    }
}

export function runIteratorPatternExample() {
    const deviceCollection = new DeviceCollection();
    const light = new (class Light implements Device {
        constructor() {}
        receive(command: string): void {
            console.log("Light received command:", command);
        }
    })();
    const washingMachine = new (class WashingMachine implements Device {
        constructor() {}
        receive(command: string): void {
            console.log("WashingMachine received command:", command);
        }
    })();
    deviceCollection.addDevice(light);
    deviceCollection.addDevice(washingMachine);

    const iterator = deviceCollection.createIterator();
    while (iterator.hasNext()) {
        const device = iterator.next();
        console.log("Iterator: Found device -", device.constructor.name);
        device.receive("Test Command");
    }
}

// Exports
export { Device, DeviceCollection, DeviceIterator };
