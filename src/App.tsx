import AppRoutes from "./routes/AppRoutes";
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import './GlobalStyles.css'

const App = () => {

  return(
    <Router>
      <Menu />
      <AppRoutes />
    </Router>
  )
}

export default App;