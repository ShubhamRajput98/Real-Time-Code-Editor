import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { MainRoute } from './Services/Routes/MainRoute'
import { Provider } from 'react-redux'
import {store} from './Services/Redux/Store'

function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
        <MainRoute/>
    </BrowserRouter>
    </Provider>
  )
}

export default App
