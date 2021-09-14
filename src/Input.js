import React, {useState} from 'react';

const useInput= initalValue => {
    const [value] = useState(initalValue);
    const onClick = () => {
        console.log(value);
    }
    return {value,onClick};
}

const Input = () =>{
    const name = useInput("Mr.");
    return (
        <div>
            <input placeholder="Name" {...name}/>
        </div>
    );
}
export default Input;