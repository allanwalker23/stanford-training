
import React,{createContext, ReactNode,useContext, useState } from 'react';
import { ItemProps } from '../src/components/Item';

interface IContext{
    name:string,
    situation:string,
    numberCard:number,
    state:string
    setName:(name:string)=>void;
    setSituation:(situation:string)=>void;
    setNumberCard:(numberCard:number)=>void;
    setState:(state:string)=>void;

}

interface Props{
    children:ReactNode
}

export const DetailsContext = createContext({} as IContext)

function DetailsProvider({children}:Props){
    const[name,setName]=useState('')
    const[situation,setSituation]=useState('')
    const[numberCard,setNumberCard]= useState(0)
    const [state,setState]=useState('')

    return(
       <DetailsContext.Provider value={{
           name,
           numberCard,
           setName,
           setNumberCard,
           setSituation,
           setState,
           situation,
           state
       }}>
           {children}
        </DetailsContext.Provider>
    )


}

function useDetails(){
    const context = useContext(DetailsContext);

    return context;
}

export{DetailsProvider,useDetails}