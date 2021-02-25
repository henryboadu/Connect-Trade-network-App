import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { callOutline, contractOutline,home,personOutline, readerOutline } from 'ionicons/icons';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import Projects from './pages/Projects';
import Events from './pages/Events';

import {UserContext} from './';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

const user = useContext(UserContext);

  return (
  <IonApp>
    {user ? (
      <Home/>
    ) : (
      <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/Home" component={Home} exact={true} />
          <Route path="/Contact Us" component={Contact} />
          <Route path="/Account" component={Account} />
          <Route path="/Login" component={Login} exact />
          <Route path="/Register" component={Register} exact />
          <Route path="/Events" component={Events} exact />
          <Route path="/Projects" component={Projects} exact />
          <Route exact path="/" component={Login}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="About Us" href="/About Us">
            <IonIcon icon={peopleCircle} />
            <IonLabel>About Us</IonLabel>
          </IonTabButton> */}
          <IonTabButton tab="Projects" href="/Projects">
            <IonIcon icon={readerOutline} />
            <IonLabel>Projects</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Events" href="/Events">
            <IonIcon icon={contractOutline} />
            <IonLabel>Events</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="Login" href="/Login">
            <IonIcon icon={personOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton> */}
          <IonTabButton tab="Account" href="/Account">
            <IonIcon icon={personOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Contact Us" href="/Contact Us">
            <IonIcon icon={callOutline} />
            <IonLabel>Contact Us</IonLabel>
          </IonTabButton> 
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    )}
    
  </IonApp>
);
        }

export default App;
