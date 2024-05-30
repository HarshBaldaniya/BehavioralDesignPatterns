abstract class Appliance {
    public run(): void {
        this.turnOn();
        this.performFunction();
        this.turnOff();
    }

    protected abstract turnOn(): void;
    protected abstract performFunction(): void;
    protected abstract turnOff(): void;
}

class WashingMachine extends Appliance {
    protected turnOn(): void {
        console.log("Washing Machine: Let's get this laundry party started!");
    }

    protected performFunction(): void {
        console.log("Washing Machine: Spinning like a disco ball!");
    }

    protected turnOff(): void {
        console.log("Washing Machine: Party's over, going to sleep...");
    }
}

export function runTemplateMethodExample() {
    const washingMachine = new WashingMachine();
    washingMachine.run();
}

export { Appliance, WashingMachine };
