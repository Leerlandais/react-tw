import Button from "./Button";
export default function Calculator(props) {
    return (
        <div className="p-8 rounded-lg shadow-xl border-2 border-gray-500 mb-10 w-[20%] mx-auto mt-4">

            <input type="text"
                   id="calcWindow"
                   className="w-full bg-gray-200 text-right p-4 mb-4 border border-gray-300 rounded-md focus:outline-none"
                   placeholder="0"
                   readOnly/>

            <div className="grid grid-cols-4 gap-1">
                <Button onClick="clearResult()" bgColor="bg-gray-600" btnName="C" />
                <Button onClick="appendCharacter('(')" bgColor="bg-black" btnName="(" />
                <Button onClick="appendCharacter(')')" bgColor="bg-black" btnName=")" />
                <Button onClick="appendCharacter('/')" bgColor="bg-black" btnName="/" />
                <Button onClick="appendCharacter('7')" bgColor="bg-black" btnName="7" />
                <Button onClick="appendCharacter('8')" bgColor="bg-black" btnName="8" />
                <Button onClick="appendCharacter('9')" bgColor="bg-black" btnName="9" />
                <Button onClick="appendCharacter('*')" bgColor="bg-black" btnName="*" />
                <Button onClick="appendCharacter('4')" bgColor="bg-black" btnName="4" />
                <Button onClick="appendCharacter('5')" bgColor="bg-black" btnName="5" />
                <Button onClick="appendCharacter('6')" bgColor="bg-black" btnName="6" />
                <Button onClick="appendCharacter('-')" bgColor="bg-black" btnName="-" />
                <Button onClick="appendCharacter('1')" bgColor="bg-black" btnName="1" />
                <Button onClick="appendCharacter('2')" bgColor="bg-black" btnName="2" />
                <Button onClick="appendCharacter('3')" bgColor="bg-black" btnName="3" />
                <Button onClick="appendCharacter('+')" bgColor="bg-black" btnName="+" />
                <Button onClick="appendCharacter('0')" bgColor="bg-black" btnName="0" />
                <Button onClick="appendCharacter('.')" bgColor="bg-black" btnName="." />
                <Button onClick="calculateResult()"    bgColor="bg-green-800" btnName="=" />
                <Button onClick="appendCharacter('%')" bgColor="bg-black" btnName="%" />
            </div>
        </div>
    )
}

