import React from 'react';
import { Switch } from 'react-router';
import { MainComponent } from './components/Main.component';
import { MainPage } from './pages/Main.pages';

function App() {
  return (
    <Switch >
      <MainPage />
    </Switch>
  );
}

export default App;
