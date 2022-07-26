import { useAppContext } from "./CalculatorState"

export default function CalculatorScreen() {
    const calculator = useAppContext()

    return (
        <div className="screen">
            <div className="history">
                <span>Memory: {calculator.memory}</span>
                <span>Operation : {calculator.operation}</span>
                <span>Decimal: {calculator.isDecimal ? 'decimal' : 'entero'}</span>
            </div>
            <div className="value">{calculator.currentValue}{calculator.isDecimal ? '.' : ''}</div>
        </div>
    )
}