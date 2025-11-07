// import { createContext, useState } from "react";

// const AppContext = createContext()

// function AppProvider(props){

//     const [state, setState]=useState({
//         cart:[],
//         product:[]
//     })

//     return(
//         <AppContext.Provider value={[state, setState]}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }

// export {AppProvider}
// export default AppContext

import { createContext, useState } from "react";

const AppContext = createContext()

function AppProvider(props) {
  const [state, setState] = useState({
    cart: [],
    products: []   // 
  })

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppProvider }
export default AppContext
