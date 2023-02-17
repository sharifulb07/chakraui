import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';

import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,

  </React.StrictMode>
);


