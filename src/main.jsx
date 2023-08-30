import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { NextUIProvider } from '@nextui-org/react';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
   <NextUIProvider>
      <App />
   </NextUIProvider>
);
