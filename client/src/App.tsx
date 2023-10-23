import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from "./routes/routes";
import './index.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 30_000,
    },
  },
});

export const App = () => (
      <QueryClientProvider client={queryClient}>
          <BrowserRouter basename="/">
              <AppRoutes />
          </BrowserRouter>
      </QueryClientProvider>
);

export default App;
