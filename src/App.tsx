import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonPage,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Create from './pages/Create';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonPage>
        <IonRouterOutlet>
          <Route path="/" render={() => <Redirect to="/app/browse" />} exact={true} />
          <Route path="/app/" render={() => <Redirect to="/app/browse" />} exact={true} />
          <Route path="/app/browse" component={Home} exact={true} />
          <Route path="/app/recipe" component={Recipe} exact={true} />
          <Route path="/app/create" component={Create} exact={true} />
        </IonRouterOutlet>
    </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
