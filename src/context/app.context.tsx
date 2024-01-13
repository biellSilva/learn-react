import { createContext, useContext } from "react";
import { useLocalStorage } from "usehooks-ts";


interface IAppContext {
    lang: string;
    setLang(lang: string): void;
}
  
const AppContext = createContext({} as IAppContext)
  
export function AppProvider (props: any) {
    const [lang, setLang] = useLocalStorage('lang', 'en')

    return <AppContext.Provider value={{lang, setLang}}>{props.children}</AppContext.Provider>
}

export function useAppContext () {
    return useContext(AppContext) as IAppContext;
}