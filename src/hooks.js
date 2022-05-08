import { useState } from "react";

export function useFormInput(initialValue){

    const [value, setValue] = useState(initialValue);

    function handleChange(e){
        const val = e==null?"":e.target.value
        setValue(val);
    }

    return{
        value, 
        onChange: handleChange
    }
}