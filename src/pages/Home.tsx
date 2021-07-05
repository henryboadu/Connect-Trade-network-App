import React, {FC, useState, useEffect} from 'react';
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
         IonFooter,
         IonSegmentButton,
         IonSegment,


        } 
         from '@ionic/react';
         
import { pin, wifi, wine, warning, walk, personOutline, peopleCircleOutline, peopleOutline, settings, medalOutline, syncCircle, accessibility } from 'ionicons/icons';

// import { auth } from '..';
// import { useHistory, useLocation } from 'react-router';

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const Home: React.FC = () => {

  // const history  = useHistory()
  // const location = useLocation();

  // useEffect(() => {
  //   // if (!auth.currentUser) history.push ('/login');
  //   // else console.log(auth.currentUser);
  // }, [history)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="ion-text-center" color="warning">
             <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="ion-text-center">
        <img src='https://i.postimg.cc/rmP2SSrG/logo-2.png' height="80" width="180" />
      </div>
    <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
      <img src="https://i.postimg.cc/prFhgCPx/3-Z7-A122611111.jpg"/>
      </IonSlide>
      <IonSlide>
        <img src="https://i.postimg.cc/kX0Mgpvz/IMG-0276-2.jpg"/>
      </IonSlide>
      <IonSlide>
      <img src="https://i.postimg.cc/s2Lxrg1d/uoload-3.jpg"/>
      </IonSlide>
      <IonSlide>
      <img src="https://i.postimg.cc/G2s2hnsB/upload-4.jpg"/>
      </IonSlide>
    </IonSlides> 
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonCard color="warning">
             <div className="ion-text-center">
            <h1>Why Connect Trade Network?</h1>
          </div>
          </IonCard>
         
        <div className="ion-text-center">
          <img src="https://i.postimg.cc/wMcKxwx8/images.png"/>
        </div> 
        <IonCard>
          <IonItem color="dark">
            <p>
        CTN® organizes large trade shows each year in various cities and countries. Our biggest event; Ghana Trade Exhibition- GTE is aimed at bringing together exhibitors from various countries. Members of CTN® are given priority in booth registration. Members of CTN® also get travel opportunities to attend and participate in trade shows internationally.
        </p>
          </IonItem>
        </IonCard>
         
          <div className="ion-text-center">
        <IonButton routerLink="/Register" color="warning">Join Now</IonButton>
        </div>
        </IonCol>  
      </IonRow>
    </IonGrid>
    <IonCard color="warning">
          <h1 className="ion-text-center">Membership Packages</h1>
          <IonItem>
          <IonIcon icon={personOutline} slot="start" />
            <IonLabel >Individual (1 Person)</IonLabel>
          </IonItem>
          <IonItem>
          <IonIcon icon={peopleOutline} slot="start" />
            <IonLabel >Business (1 - 4 Persons)</IonLabel>
          </IonItem>
          <IonItem>
          <IonIcon icon={personOutline} slot="start" />
            <IonLabel >Corporate (5+ Employees)</IonLabel>
          </IonItem>
          <IonItem>
          <IonIcon icon={personOutline} slot="start" />
            <IonLabel >Associations (10+ Employees)</IonLabel>
          </IonItem> 
        </IonCard>
        <IonCard color="dark">
             <div className="ion-text-center">
            <h1>Meet Our Team</h1>
          </div>
          </IonCard>
          <IonCard>
             <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
      <img src="https://i.postimg.cc/mk5fXc6n/founder.jpg" />
      </IonSlide>
      <IonSlide>
        <img src="https://i.postimg.cc/RFvBNxHg/derben.jpg"/>
      </IonSlide>
      <IonSlide>
      <img src="https://i.postimg.cc/gJ4Phtym/gottfried.jpg"/>
      </IonSlide>
      <IonSlide>
      <img src="https://i.postimg.cc/Gt2nxPzY/ohemeng.jpg"/>
      </IonSlide>
    </IonSlides> 
          </IonCard>
{/*          
        <IonGrid>
              <IonRow>
                <IonCol>
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
         <p>admin@connecttradnetwork.org</p>
         </div>
         <div className="ion-text-center">
           <IonButton routerLink="/Contact Us" color="warning">Contact Us Now</IonButton>
         </div>
                </IonCol>
              </IonRow>
            </IonGrid> */}
            <IonGrid>
      <IonRow>
        <IonCol>
        <IonCard>
        <IonCard >
             <div className="ion-text-center">
            <h1>About us</h1>
          </div>
          </IonCard>
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

export default Home;
