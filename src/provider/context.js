import React, { useContext, useRef, useState } from "react";
import useData from '../utils/stays.json'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [data, setData] = useState(useData)
    const modalRef = useRef()

    const closeModal = () => {
       const node = modalRef.current
      if(node.classList.contains('toggleModal')){
          node.classList.remove('toggleModal')
      }else{
        node.classList.add('toggleModal')
      }
    }
    return (
        <AppContext.Provider value={{
            data,
            modalRef,
            closeModal
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export {AppContext, AppProvider}
