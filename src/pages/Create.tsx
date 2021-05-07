import React, {useState} from "react";

import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { checkmarkOutline } from "ionicons/icons";

import { createRecipe } from '../main.js'

const Create: React.FC = () => {
  const [name, setName] = useState<string>();
  const [time, setTime] = useState<string>();
  const [description, setDescription] = useState<string>();

  const create = () => {
    createRecipe(name, time, description);
    setName('');
    setDescription('');
    setTime('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
              <IonBackButton defaultHref="/app/browse" />
          </IonButtons>
          <IonTitle>Nouvelle recette</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel position="floating">Nom</IonLabel>
          <IonInput value={name} onIonChange={e => setName(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Temps</IonLabel>
          <IonInput value={time} onIonChange={e => setTime(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Description</IonLabel>
          <IonTextarea value={description} onIonChange={e => setDescription(e.detail.value!)}></IonTextarea>
        </IonItem>
        <IonButton onClick={create} routerLink={"/app/browse"}>
          <IonIcon slot="start" icon={checkmarkOutline} />
          Ajouter
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Create;
