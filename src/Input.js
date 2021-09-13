import React, {useState} from 'react';

const useInput= initalValue => {
    const [value, setValue] = useState(initalValue);
    return {value};
}

const Input = () =>{
    const name = useInput("Mr.");
    return (
        <div>
            <input placeholder="Name" value={name.value}/>
        </div>
    );
}