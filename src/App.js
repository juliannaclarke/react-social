import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { SocialFeedPage } from './components/pages/SocialFeedPage';
import {ProfilePage} from './components/pages/ProfilePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <SocialFeedPage />
        </Route>
        <Route path="/me">
          <ProfilePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;