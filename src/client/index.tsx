import * as React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App';

// Define all of our global CSS
const GlobalStyle = injectGlobal`
  * {
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
  }
  body {
    margin: 0;
  }
`;

// Function to render our root component to our HTML template
const renderRoot = (Component: any) => {
  render(
    <Component/>,
    document.getElementById('root')
  );
};

// Render our root component
renderRoot(App);

// Enables hot module replacement in development mode
if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderRoot(require('./components/App').default);
  });
}
