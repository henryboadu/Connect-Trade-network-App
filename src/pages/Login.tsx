import React, {FC, useCallback, useState} from 'react';
import { IonContent, IonHeader, IonPage, IonButtons, IonBackButton, IonTitle, IonToolbar, IonRouterLink, IonItem, IonLabel, IonCard,IonGrid, IonRow, IonCol, IonButton, IonInput, IonAlert } from '@ionic/react';
import {useHistory} from 'react-router';
import {auth} from '../';



  const Login: React.FC = () => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [alertText , setAlertText] = useState('');
   const history = useHistory();

  //  const location = useLocation();

  //  useEffect(() => {
  //     if (auth.currentUser)history.push('/')
  //  },[history, location]);

   const onEmailChange = useCallback((e) => setEmail(e.detail?.value), []);
   const onPasswordChange =  useCallback((e) => setPassword(e.detail?.value), []);
  
  

  const onLoginClick = useCallback(() => {
    if (email.length === 0) setAlertText("Email required")
    else if (password.length === 0 ) setAlertText("Password Required")
    else {
      auth.signInWithEmailAndPassword(email, password).then((response) => {
        console.log('It Actuallly Worked', {response}) 
        history.push('/Home');
      }).catch(err => setAlertText(err.message));
    }
  }, [email, password, history]);
   
 const onDismiss = useCallback(() => setAlertText(''), []) 
  return (
    
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar color="warning">
          <IonButtons slot="start">
          <IonBackButton text="Back" icon="buttonIcon"/>
        </IonButtons>
            <IonTitle class="ion-text-center">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
    <IonCard>
      <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" placeholder="" onIonChange={onEmailChange} value={email} ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" placeholder="" onIonChange={onPasswordChange} value={password} ></IonInput>
          </IonItem>   
          <p className="ion-text-center"><IonRouterLink href="">Forgot Password</IonRouterLink> </p>
          <p className="ion-text-center">New here?</p>
          <p className="ion-text-center"><IonRouterLink href="/Register">Click here to register</IonRouterLink> </p>
    </IonCard>
    <IonGrid>
              <IonRow>
                <IonCol size="4">
                </IonCol>
                <IonCol class="ion-text-center" size="4">    
                {/* href taken out */}
                <IonButton onClick= {onLoginClick} size="large" class="ion-text-center" shape="round"color="warning">Login</IonButton> 
                </IonCol>
                <IonCol size="4">
                </IonCol>
              </IonRow>
        </IonGrid>
        <IonAlert
        isOpen={alertText.length > 0}
        onDidDismiss= {onDismiss}
        message={alertText}
        buttons={['ok']}
        />
       
        </IonContent>
    </IonPage>
    
  );
};

export default Login;
