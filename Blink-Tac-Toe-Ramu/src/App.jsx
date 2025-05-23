import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import GameContainer from './components/GameContainer.jsx';
import { ThemeProvider } from './contexts/ThemeContext';
import GameContextProvider from './contexts/GameContext';


function App() {
  return (
    <div >
    <ThemeProvider>
      <GameContextProvider>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameContainer/>} />
      </Routes>
    </Router>
    </GameContextProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
