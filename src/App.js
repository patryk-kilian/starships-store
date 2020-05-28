import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import StarshipsContainer from './containers/StarshipsContainer';
import GlobalStyles from './components/styles/GlobalStyles';

function App() {
  const client = new ApolloClient({
    uri: 'https://swapi.apis.guru/',
  });

  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <main>
        <StarshipsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
