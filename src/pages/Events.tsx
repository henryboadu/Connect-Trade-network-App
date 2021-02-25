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
import './Home.css';
import './main.js';


const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const Events: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="ion-text-center" color="warning">
             <IonTitle>Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          {/* <div className="dropdown">
           <button className="dropbtn">GTE EVENTS</button>
          <div className="dropdown-content">
          <a href="">GTE 2019</a>
          <a href="">GTE 2020</a>
          <a href="">GTE 2021 </a>
          </div>
          </div> */}
          {/* <IonCard> */}
            {/* images of Gte will be put here */}
            {/* <IonSlides pager={true} options={slideOpts}>
              <IonSlide>
                <img src="https://i.postimg.cc/kX0Mgpvz/IMG-0276-2.jpg"/>
              </IonSlide>
              <IonSlide>
              <img src="https://i.postimg.cc/s2Lxrg1d/uoload-3.jpg"/>
              </IonSlide>
              <IonSlide>
              <img src="https://i.postimg.cc/G2s2hnsB/upload-4.jpg"/>
              </IonSlide>
            </IonSlides>  */}
          {/* </IonCard> */}
          {/* <div className="dropdown">
           <button className="dropbtn">CTE EVENTS</button>
          <div className="dropdown-content">
          <a href="">CTE 2019</a>
          <a href="">CTE 2020</a>
          <a href="">CTE 2021 </a>
          </div>
          </div> */}
          {/* <IonCard>
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
          </IonCard> */}
           <IonItem>
               <div className="ion-text-center">
            <h1>GTE EVENTS</h1>
          </div>
          </IonItem>
          <IonCard color="warning">
             <div className="ion-text-center">
            <h1>GTE 2020</h1>
          </div>
          </IonCard>
          <IonCard>
             <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
            <img src="https://i.postimg.cc/yYrrtz6g/20201.jpg" />
            </IonSlide>
            <IonSlide>
              <img src="https://i.postimg.cc/prLqcsgJ/20202.jpg"/>
            </IonSlide>
            <IonSlide>
            <img src="https://i.postimg.cc/HW6S8CyZ/20203.jpg"/>
            </IonSlide>
            <IonSlide>
            <img src="https://i.postimg.cc/KYhQhG6z/20204.jpg"/>
            </IonSlide>
            <IonSlide>
            <img src="https://i.postimg.cc/c46FQ57s/20206.jpg"/>
            </IonSlide>
            <IonSlide>
            <img src="https://i.postimg.cc/rwrgH0Y3/20207.jpg"/>
            </IonSlide>
            <IonSlide>
            <img src="https://i.postimg.cc/k5NsJrCy/20208.jpg"/>
            </IonSlide>
            <IonSlide>
            <img src="https://i.postimg.cc/SN5DV7Vc/20209.jpg"/>
            </IonSlide>
          </IonSlides> 
                </IonCard>
                <IonCard color="warning">
             <div className="ion-text-center">
            <h1>GTE 2019</h1>
          </div>
          </IonCard>
          <IonCard>
             <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
            <img src="https://i.postimg.cc/0QXTc1hf/20191.jpg" />
            </IonSlide>
            <IonSlide>
              <img src="https://i.postimg.cc/XJqhZDXy/20192.jpg"/>
            </IonSlide>
            <IonSlide>
            <img src="https://i.postimg.cc/rwG77rvz/20193.jpg"/>
            </IonSlide>
            <IonSlide>
            <img src="https://i.postimg.cc/pdq4LtVH/20194.jpg"/>
            </IonSlide>
            <IonSlide>
            <img src="https://i.postimg.cc/GmnZMQgZ/20195.jpg"/>
            </IonSlide>
            <IonSlide>
            <img src="https://i.postimg.cc/ZKdGFgH8/20196.jpg"/>
            </IonSlide>
            <IonSlide>
            <img src="https://i.postimg.cc/zfJ4Nfr7/20197.jpg"/>
            </IonSlide>
            </IonSlides> 
                </IonCard>
                <IonItem>
               <div className="ion-text-center">
            <h1>CTE EVENTS</h1>
          </div>
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Events;
