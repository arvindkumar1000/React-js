import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


// function MyApp(){
//   return(
//     <div>
//       <h1>Custom React! chai</h1>
//     </div>
//   )
// }


// const reactElement = {
//     type: 'a',
//     props: {
//         herf: 'https://google.com',
//         target: 'blank'
//     },
//     Children: 'click me to visit googel'
// }

// const anotherElement=(
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'click me to visit google!'
// )




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App /> 

   <MyApp /> 

</StrictMode>


)

