import {
  IonCard,
  IonItem,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { timerOutline } from "ionicons/icons";

interface RecipeCardProps {
  id: number;
  name: string;
  description: string;
  time: number;
}

const RecipeCard: React.FC<RecipeCardProps> = (recipe) => {
  return (
    <IonCard
      onClick={() => {
        window.localStorage["currentRecipe"] = JSON.stringify(recipe);
      }}
      routerLink={"/app/recipe"}
    >
      <IonCardHeader>
        <IonCardTitle>{recipe.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
          <IonIcon icon={timerOutline} slot="start" />
          <IonLabel>{recipe.time} min</IonLabel>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default RecipeCard;
