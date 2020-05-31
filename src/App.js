import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import StarshipsContainer from './containers/StarshipsContainer';
import GlobalStyles from './components/styles/GlobalStyles';
import Header from './components/Header';
import CartProvider from './context/cart';

function App() {
  const client = new ApolloClient({
    uri: 'https://swapi.apis.guru/',
  });

  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <main>
          <StarshipsContainer />
        </main>
      </CartProvider>
    </ApolloProvider>
  );
}

export default App;
