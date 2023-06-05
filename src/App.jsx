import CartContent from './component/CartContent/cartContent';
import DataProvider from './component/Context/dataContext';
import Home from './component/home';
import LoginUsuario from './component/LoginUsuario/LoginUsuario';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginProvider from './component/Context/loginContext';

function App() {

  return (
    <>
      <LoginProvider>

        <DataProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<CartContent />} />
              <Route path='/login' element={<LoginUsuario />} />

            </Routes>
          </BrowserRouter>
        </DataProvider >

      </LoginProvider>
    </>
  )
}

export default App
