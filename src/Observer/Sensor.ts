interface Observer {
    update(state: string): void;
}

class Sensor {
    private observers: Observer[] = [];

    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    public notify(state: string): void {
        for (const observer of this.observers) {
            observer.update(state);
        }
    }

    public detectMotion(): void {
        console.log("Sensor: Uh-oh! Motion detected!");
        this.notify("Motion Detected");
    }
}

class LightObserver implements Observer {
    public update(state: string): void {
        if (state === "Motion Detected") {
            console.log("LightObserver: Who turned on the lights?");
        }
    }
}

export function runObserverExample() {
    const sensor = new Sensor();
    const lightObserver = new LightObserver();
    sensor.addObserver(lightObserver);
    sensor.detectMotion();
}

export { Sensor, Observer, LightObserver };
