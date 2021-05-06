import React from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonIcon,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { timerOutline } from "ionicons/icons";

const Recipe: React.FC = () => {
  const recipe = JSON.parse(window.localStorage['currentRecipe']);

  if (!recipe)
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/app/browse" />
            </IonButtons>
            <IonTitle>Recette inconnue</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/app/browse" />
          </IonButtons>
          <IonTitle>{recipe.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonIcon icon={timerOutline} slot="start" />
          <IonLabel>{recipe.time} min</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>{recipe.description}</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Recipe;
