interface Command {
    execute(): void;
}

class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.turnOn();
    }
}

class Light {
    public turnOn(): void {
        console.log("Light: Let there be light!");
    }
}

export function runCommandPatternExample() {
    const light = new Light();
    const lightOnCommand = new LightOnCommand(light);
    lightOnCommand.execute();
}

export { Command, Light, LightOnCommand };
