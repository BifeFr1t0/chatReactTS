import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routes from './routes';
// import {getapi, postapi} from '../myapi'


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client = {queryClient}>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
