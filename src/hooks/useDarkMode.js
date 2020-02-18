import react, { useState, useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

export const useDarkMode = (isOn) => {
    const [value, setValue] = useLocalStorage(isOn);

    useEffect(() => {
        if (value == true) {
            return (document.body.classList.add('dark-mode'))
        } else if (value == false) {
            return (document.body.classList.remove('dark-mode'))
        }
    })
    return [ value, setValue];
};