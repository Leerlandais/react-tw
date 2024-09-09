export default function Calculator(props) {
    return (
        <div className="p-8 rounded-lg shadow-xl border-2 border-gray-500 mb-10 w-[20%] mx-auto mt-4">

            <input type="text"
                   id="calcWindow"
                   className="w-full bg-gray-200 text-right p-4 mb-4 border border-gray-300 rounded-md focus:outline-none"
                   placeholder="0"
                   readOnly/>

            <div className="grid grid-cols-4 gap-2">
                <button onClick="clearResult()">C</button>
                <button onClick="appendCharacter('(')">(</button>
                <button onClick="appendCharacter(')')">)</button>
                <button onClick="appendCharacter('/')" className="symButtons symButton">/</button>
                <button onClick="appendCharacter('7')">7</button>
                <button onClick="appendCharacter('8')">8</button>
                <button onClick="appendCharacter('9')">9</button>
                <button onClick="appendCharacter('*')" className="symButtons symButton">*</button>
                <button onClick="appendCharacter('4')">4</button>
                <button onClick="appendCharacter('5')">5</button>
                <button onClick="appendCharacter('6')">6</button>
                <button onClick="appendCharacter('-')" className="symButton">-</button>
                <button onClick="appendCharacter('1')">1</button>
                <button onClick="appendCharacter('2')">2</button>
                <button onClick="appendCharacter('3')">3</button>
                <button onClick="appendCharacter('+')" className="symButtons symButton">+</button>
                <button onClick="appendCharacter('0')">0</button>
                <button onClick="appendCharacter('.')">.</button>
                <button onClick="calculateResult()" className="symButtons symButton">=</button>
                <button onClick="appendCharacter('%')" className="symButtons symButton">%</button>
            </div>
        </div>
    )
}

