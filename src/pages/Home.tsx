import React, { useState, useEffect } from 'react';
import './Home.css';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonCard, IonItem, IonCardHeader, IonCardContent, IonCardTitle, IonLabel, IonIcon } from '@ionic/react';

import {
  timerOutline
} from 'ionicons/icons';

import {simplifyString, getRecipes} from "../main.js"

const Home: React.FC = () => {
  const recipes = getRecipes();
  const [searchText, setSearchText] = useState('');
  const [filteredSearch, setFilteredSearch] = useState(recipes);

  useEffect(() => {
    let tempSearchResult = recipes.filter(recipe => simplifyString(recipe.name).includes(simplifyString(searchText)))
    setFilteredSearch([...tempSearchResult])
},[searchText])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vos recettes</IonTitle>
          <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="never"></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {filteredSearch.map(recipe => (
          <IonCard key={recipe.name}>
            <IonCardHeader>
              <IonCardTitle>{recipe.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
              <IonLabel>{recipe.description}</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={timerOutline} slot="start" />
                <IonLabel>{recipe.time} min</IonLabel>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
