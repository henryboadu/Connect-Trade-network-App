  import React, {useState} from 'react';
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonIcon, IonInput, IonItemDivider, IonCard, IonTextarea, IonGrid, IonRow, IonCol } from '@ionic/react';
  import ExploreContainer from '../components/ExploreContainer';
  import './Contact.css';
  import { logoFacebook, logoInstagram, logoTwitter, people } from 'ionicons/icons';

  const Contact: React.FC = () => {
    
    return (
      
      <IonPage>
        <IonContent fullscreen>
          <IonHeader>
            <IonToolbar color="warning">
              <IonTitle class="ion-text-center">Contact Us</IonTitle>
            </IonToolbar>
          </IonHeader>

      <IonCard>
        <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput type="text" placeholder=""></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="text" placeholder=""></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Telephone Number</IonLabel>
              <IonInput type="number" placeholder=""></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Message</IonLabel>
              <IonTextarea placeholder=""></IonTextarea>
            </IonItem>     
      </IonCard>
      <IonGrid>
              <IonRow>
                <IonCol size="4">
                </IonCol>
                <IonCol class="ion-text-center" size="4">
                <IonButton size="large" href="#" class="ion-text-center" shape="round"color="warning">Submit</IonButton>
                </IonCol>
                <IonCol size="4">
                </IonCol>
              </IonRow>
        </IonGrid> <h2 className="ion-text-center">Let's Connect Now</h2>
            <IonGrid>
              <IonRow>
                <IonCol size="3">
                </IonCol>
                <IonCol class="ion-text-center" size="9">
                  <IonRow>
                    <IonCol size="2">
                      <IonIcon size="large" icon={logoTwitter}></IonIcon>
                    </IonCol>
                    <IonCol size="4">
                      <IonIcon size="large" icon={logoFacebook}></IonIcon>
                    </IonCol>
                    <IonCol size="2">
                      <IonIcon size="large" icon={logoInstagram}></IonIcon>
                    </IonCol>
                  </IonRow> 
                </IonCol>
                <IonCol size="3">
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonItem>
                {/* just space for gap between social handles and address */}
            </IonItem>
            <IonCard>
                  <div className="ion-text-center">
              <img src="https://i.postimg.cc/cLrT1G3S/address.png" height="20" width="20"/>
            </div> 
          <div className="ion-text-center">
            <p>P.0 Box CT 4030 Cantonments.Accra</p>
            </div>
            <div className="ion-text-center">
              <img src="https://i.postimg.cc/3N95hQvG/phone.png" height="20" width="20"/>
            </div> 
          <div className="ion-text-center">
            <p>(233) 205 214. 755 (Ghana)</p>
            </div>
            <div className="ion-text-center">
              <img src="https://i.postimg.cc/3N95hQvG/phone.png" height="20" width="20"/>
            </div> 
          <div className="ion-text-center">
            <p>(+1).213.528.0955 (USA)</p>
            </div>
            <div className="ion-text-center">
              <img src="https://i.postimg.cc/yNrywQxN/email.png" height="20" width="20"/>
            </div> 
          <div className="ion-text-center">
            <p>Info@Connecttradnetwork.Com</p>
            </div>
            </IonCard>
            
         <IonItem>
           
         </IonItem>
          </IonContent>
      </IonPage>
    );
  };

  export default Contact;
