import React, {useState} from "react";


const Counter = () => {
    const [value, setValue] = useState(0);
         // value =0
    const onAdd = () => {
        // value += 1;
        setValue(value + 1);

    }
    const onSub = () => {
        //value -= 1
        setValue(value - 1);

    }

    return(
        <div>
            <button onClick={onAdd}>Add </button>
            <h2>{value}</h2>
        <button onClick={onSub}>
                Sub
            </button>
        </div>
    )
}

export default Counter;
