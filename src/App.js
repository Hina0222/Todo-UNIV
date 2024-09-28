import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './page/main/Main';
import Calendar from './page/calendar/Calendar';

function App() {
  return (
    <div className='wrap'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/calendar' element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
