interface Expression {
    interpret(context: string): boolean;
}

class OnExpression implements Expression {
    public interpret(context: string): boolean {
        return context.includes("on");
    }
}

class OffExpression implements Expression {
    public interpret(context: string): boolean {
        return context.includes("off");
    }
}

export function runInterpreterPatternExample() {
    const onExpression = new OnExpression();
    const offExpression = new OffExpression();

    console.log(onExpression.interpret("turn on the light")); // true
    console.log(onExpression.interpret("turn ooooggn the light")); // false
    console.log(offExpression.interpret("turn off the light")); // true
}

export { Expression, OnExpression, OffExpression };
