import React, { useState } from "react";

const Input = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    function valid() {
        if (num1 === "" || num2 === "") {
            setError("Both Number are required.");
            setResult('')
            return false;
        }
        if (!/^-?\d+(\.\d+)?$/.test(num1) || !/^-?\d+(\.\d+)?$/.test(num2)) {
            setError('Error!!');
            return false;
        }
        setError('');
        return true;
    }

    function Add() {
        if (valid()) {
            const sum = parseFloat(num1) + parseFloat(num2);
            setResult(`Success: ${sum}`);
        }
    }
    function sub() {
        if (valid()) {
            const subrt = parseFloat(num1) - parseFloat(num2);
            setResult(`Success: ${subrt}`);

        }
    }
    function prod() {
        if (valid()) {
            const pr = parseFloat(num1) * parseFloat(num2);
            setResult(`Success: ${pr}`);

        }
    }
    function div() {
        if (valid()) {
            const div = parseFloat(num1) / parseFloat(num2);
            setResult(`Success: ${div}`);
        }
    }


    return (
        <div className="Main">
            <h1>React Calculator</h1>
            <input type="text" placeholder="Num1" value={num1} onChange={(e) => setNum1(e.target.value)} /> <br />
            <input type="text" placeholder="Num2" value={num2} onChange={(e) => setNum2(e.target.value)} /><br />

            <button onClick={Add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={prod}>*</button>
            <button onClick={div}>/</button>

            {result && <p style={{ color: "green" }}>{result}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}


        </div>
    )
}
export default Input;