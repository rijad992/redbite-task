import { QueryClient, QueryClientProvider } from 'react-query';
import { Flex } from './components';
import { Repositories } from './modules/repositories/Repositories';
import GlobalStyles from './styles/global';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Flex flex={1} flexDirection='column'>
          <Repositories />
        </Flex>
      </QueryClientProvider>
    </>
  );
}

export default App;
