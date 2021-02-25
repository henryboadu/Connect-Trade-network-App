import React from 'react';
import { 
         IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar,
         IonCol,
         IonGrid, 
         IonRow,IonCard, 
         IonCardHeader, 
         IonCardSubtitle, 
         IonCardTitle, 
         IonCardContent, 
         IonItem, 
         IonIcon, 
         IonLabel, 
         IonButton,
         IonSlide,
         IonSlides,
         IonSegment,
         IonSegmentButton,
         
        } 
         from '@ionic/react';
         
import { pin, wifi, wine, warning, walk, settings, medalOutline, syncCircle, accessibility } from 'ionicons/icons';
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="ion-text-center" color="warning">
             <IonTitle> </IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="ion-text-center">
        <img src='https://i.postimg.cc/k5qfK1Y1/best-about-us-pages.jpg' />
      </div>
      <IonContent>
      <IonGrid>
      <IonRow>
        <IonCol>
        <IonCard>
          <IonItem color="dark">
              <p>
              The Connect Trade Network (CTN®) is a 
              resource community of individuals and businesses 
              of all ages and stages who connect,share ideas, 
              collaborate and utilize each other's resources 
              to grow their businesses globally.
              </p> 
          </IonItem>
          <IonItem color="warning">
          <p>The network provides members with opportunities 
              for personal,skills and organizational development 
              through corporate visits, round table discussions, 
              training sessions, events, exhibitions and forums with 
              stakeholders from diverse industries. </p>
          </IonItem>
          <IonItem color="dark">
          <p>CTN® is designed to provide a platform for manufacturers 
              and suppliers with interest in marketing and selling 
              their services and goods globally. CTN® is a prime trade 
              platform for prospective buyers to directly engage with 
              business representatives and discover the products and services of members. 
              </p>
          </IonItem>
        </IonCard>
        <IonSegment>
          <IonSegmentButton  value="friends" >
            <IonLabel>Mision</IonLabel>
            {/* <p>Developing global partnerships through sustainable networks.</p> */}
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonLabel>Vision</IonLabel>
            {/* <p>To be a world class organization providing connectivity in the trade industry.</p> */}
          </IonSegmentButton>
        </IonSegment>
        <IonCard color="warning">
          <p className="ion-text-center">Core Values</p>
          <IonItem className="ion-activated">
            <IonIcon icon={accessibility} slot="start" />
            <IonLabel >EMPOWERMENT</IonLabel>
          </IonItem>
          <IonItem >
            <IonIcon icon={settings} slot="start" />
            <IonLabel>SERVICE</IonLabel>
          </IonItem>
          <IonItem className="ion-activated">
            <IonIcon icon={medalOutline} slot="start" />
            <IonLabel>IMPACT</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={syncCircle} slot="start" />
            <IonLabel>SUSTAINABILITY</IonLabel>
          </IonItem>
        </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default About;
