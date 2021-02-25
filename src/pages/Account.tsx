import React, {FC, useEffect}  from 'react';
import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar,} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';


// import './Account.css';
// import { auth } from '..';
// import { useHistory } from 'react-router';


const Account: React.FC = () => {

// const history  = useHistory()
// useEffect(() => {
//   if (!auth.currentUser) history.push ('/login');
//   else console.log(auth.currentUser);
// }, [history])

  return (
    <IonPage >
      <IonHeader>
          <IonToolbar class="ion-text-center" color="warning">
            <IonTitle>Account</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        <div className="pgbackground">
            
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Account;
