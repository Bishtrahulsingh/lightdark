import { createContext, useState} from "react";


export const ThemeContext = createContext({
    theme:'light',
    setTheme:()=>{},
});

function ThemeProvider({children}){

    const [theme,setTheme] = useState(()=>{
        const currTheme = localStorage.getItem('theme');
        if(!currTheme) return 'light';

        return currTheme;
    })

    return (
        <ThemeContext.Provider value={[theme,setTheme]}  >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;