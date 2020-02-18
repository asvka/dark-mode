import react, { useState, useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [isOn, setIsOn] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if (isOn == true) {
            return (document.body.classList.add('dark-mode'))
        } else if (isOn == false) {
            return (document.body.classList.remove('dark-mode'))
        }
    }, [ isOn ]);
    return [ isOn, setIsOn ];
};
export default useDarkMode;