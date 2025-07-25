import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeContextProvider} from './contexts/theme';
import {UserContextProvider} from './contexts/user';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const client = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
      <ThemeContextProvider>
        <UserContextProvider>
          <QueryClientProvider client={client} >
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </UserContextProvider>
      </ThemeContextProvider>
  </StrictMode>
);
