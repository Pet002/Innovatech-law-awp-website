import { createContext, useContext, useEffect, useState } from "react"



const LanguageContext = createContext()

export const useLanguage = () => {
    const context = useContext(LanguageContext)

    if (context === undefined) {
        throw new Error('useLanguage must be used wirhin a LanguageProvider')
    }
    return context;
};

export const LanguageProvider = ({children}) =>{
    const [language, setLanguage] = useState('th');
    const value = { language, setLanguage };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>

}