import React, { createContext } from 'react';
import Header from './components/Header';
import BodyComponent from './components/BodyComponent';
import Footer from './components/Footer';
import AuthenticationContext from './utils/AuthenticationContext';

function App() {
  const [token, setToken] = React.useState(localStorage.getItem('token'));
  console.log(token);

  React.useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  return (
    <div>
      <AuthenticationContext.Provider value={{ token, setToken }}>
        <Header />
        <BodyComponent />
        <Footer />
      </AuthenticationContext.Provider>
    </div>
  );
}

export default App;
