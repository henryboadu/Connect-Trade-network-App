import React, {FC, useCallback, useContext, useEffect, useState}  from 'react';
import { IonButton, IonCard, IonContent, IonHeader, IonItem, IonList, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar,} from '@ionic/react';


// import './Account.css';
import { auth, UserContext } from '..';
// import { useHistory } from 'react-router';

import { useHistory, useLocation } from 'react-router';
  

const Account: React.FC = () => {
    const history  = useHistory()
    // const location = useLocation();

useEffect(() => {
  if (!auth.currentUser) history.push ('/login');
  else console.log(auth.currentUser);
}, [history]);
console.log(auth.currentUser);

const user = useContext(UserContext);
const [isSigningOut, setIsSigningOut] = useState(false )

const onSignoutClick = useCallback(() => {
setIsSigningOut(true)
auth.signOut().catch(err => { console.log({err})
setIsSigningOut(false)
})
}, []);


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
              <IonText>Welcome {user?.email} </IonText>
            <IonCard color="warning"><p className="ion-text-center" ><IonRouterLink href="/Login">Sign Out</IonRouterLink> </p></IonCard> 
           {/* <IonButton disabled ={isSigningOut} onClick={onSignoutClick} > Sign {isSigningOut ? 'ing' : ''} Out </IonButton>  */}
            </IonItem>
          </IonList>
          
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Account;

{/* <IonRouterLink href="/">Login here</IonRouterLink> */}