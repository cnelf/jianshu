import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { GlobalStyle } from './style'
import { GlobalIconStyle } from './static/iconfont/iconfont'
import Header from './common/header'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIconStyle />
        <Header />
      </Provider>
    </div>
  );
}

export default App;
