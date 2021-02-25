import React, {useState} from 'react';
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
         IonImg,
         IonList,
         IonSearchbar, 
         IonFooter
         
        } 
         from '@ionic/react';
         
import { pin, wifi, wine, warning, walk,accessibility, personOutline, peopleCircleOutline, peopleOutline, } from 'ionicons/icons';

const projects: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="ion-text-center" color="warning">
             <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          {/* <div className="dropdown">
           <button className="dropbtn">Projects Undertake</button>
          <div className="dropdown-content">
          <a href="">CTN Development Seminar</a>
          <a href="">CTN Community Outreach</a>
          <a href="">CTN Incubator Program </a>
          <a href="">CTN Accelerator Competition </a>
          <a href="">CTN Grant</a>
          </div>
          </div> */}
          <IonGrid>
            <IonRow>
              <IonCol>
                 <IonItem>
               <div className="ion-text-center">
            <h1>CTN Dvelopment Seminar</h1>
          </div>
          </IonItem>
            <IonCard>
          <IonItem color="warning">
            <p>
              CTN® organizes large trade shows each year in various cities and countries. Our biggest event; Ghana Trade Exhibition- GTE is aimed at bringing together exhibitors from various countries. Members of CTN® are given priority in booth registration. Members of CTN® also get travel opportunities to attend and participate in trade shows internationally.
            </p>
          </IonItem>
        </IonCard>
        <IonItem>
               <div className="ion-text-center">
            <h1>CTN Community Outreach</h1>
          </div>
          </IonItem>
            <IonCard>
          <IonItem color="dark">
            <p>
            Once a year CTN supports a local community in a developing community. The community-giving program is in the form of donation of clothes, toys, food, household goods and supplies to clinics in rural or Peri-urban communities.  These items are donated to individuals, maternities, children, or emergency wards to save lives.  Health support will affect the lives of hundreds. The goal of this is to support a household in need.  </p>
          </IonItem>
        </IonCard>
        <IonItem>
               <div className="ion-text-center">
            <h1>CTN Incubator Program</h1>
          </div>
          </IonItem>
            <IonCard>
          <IonItem color="warning">
            <p> This is a Program aimed to train startup and other entrepreneur minded individuals how to manage a business and keep it sustainable, this is a 9-12 week training. </p>
          </IonItem>
        </IonCard>
        <IonItem>
               <div className="ion-text-center">
            <h1>CTN Accelerator Competition</h1>
          </div>
          </IonItem>
            <IonCard>
          <IonItem color="dark">
            <p>
            The Accelerator Competition is an annual programme that presents the opportunity for startups to pitch their innovations with the aim of seeking support. The competition is integrated in the second session of Ghana Trade Exhibition (GTE) in December every year.  </p>
          </IonItem>
        </IonCard>
        <IonItem>
               <div className="ion-text-center">
            <h1>CTN Grant</h1>
          </div>
          </IonItem>
            <IonCard>
          <IonItem color="warning">
            <p>As part of our humanitarian duties, CTN has made five (5) grants available to the public. This is another way we give back and connect to our communities. Recipients of the CTN Grants are announced during CTN tradeshows.  </p>
          </IonItem>
        </IonCard>
                </IonCol>
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default projects;
