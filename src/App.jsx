import { Outlet } from 'react-router';
import './App.css'
import { Toaster } from 'sonner';

function App() {

  return (
    <div>
      <Toaster />
      <Outlet />
    </div>
  )
}

export default App
