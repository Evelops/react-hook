import React, {useState} from 'react';

//input react hooks 
const useInput= (initalValue,validator) => {
    const [value,setValue] = useState(initalValue);
    const onChange = (event) => {
        const{
            target:{value}
        } = event;
        let willUpdate=true;
        if(typeof validator ==="function"){
            willUpdate = validator(value);
        }
        if(willUpdate){
            setValue(value);
        }
    }
    return {value,onChange};
}

const Input = () =>{ 
    const maxLen = value => value.length <= 10;
    const name = useInput("Mr.",maxLen);
    return (
        <div>
            <input placeholder="Name" {...name}/>
        </div>
    );
}
export default Input;