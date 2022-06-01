import {useState} from "react";

export const useTogglerState = (initialValue?: boolean) => {
    const [value, setValue] = useState(initialValue);
    const toggleValue = () => setValue(current => !current);

    return [value, toggleValue] as const;
}