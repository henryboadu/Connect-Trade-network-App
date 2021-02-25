import React, {FC, useContext}  from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar,} from '@ionic/react';


// import './Account.css';
import { auth, UserContext } from '..';
// import { useHistory } from 'react-router';

import { useHistory, useLocation } from 'react-router';
  

const Account: React.FC = () => {
    // const history  = useHistory()
    // // const location = useLocation();

// useEffect(() => {
  // if (!auth.currentUser) history.push ('/login');
  // else console.log(auth.currentUser);
// }, [history, location]);
// console.log(auth.currentUser);

const user = useContext(UserContext);

  return (
    <IonPage >
      <IonHeader>
          <IonToolbar class="ion-text-center" color="warning">
            <IonTitle>Account</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        <div className="pgbackground">
          <IonList>
            <IonItem>
              <IonTitle> Welcome {user?.email}!</IonTitle>
           <IonButton> Sign out</IonButton> 
            </IonItem>
          </IonList>
          
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Account;
