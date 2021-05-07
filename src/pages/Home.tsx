import React, { useState, useEffect } from "react";
import "./Home.css";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";

import { simplifyString, getRecipes } from "../main.js";

import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [filteredSearch, setFilteredSearch] = useState(getRecipes());

  const onSearchChange = (s: string) => {
    setSearchText(s);
  };

  useEffect(() => {
    let tempSearchResult = getRecipes().filter((recipe) =>
      simplifyString(recipe.name).includes(simplifyString(searchText))
    );
    setFilteredSearch([...tempSearchResult]);
  }, [searchText]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vos recettes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SearchBar onSearchChange={onSearchChange} />
        {filteredSearch.map((recipe) => (
          <RecipeCard
            key={recipe.name}
            id={recipe.id}
            name={recipe.name}
            description={recipe.description}
            time={recipe.time}
          />
        ))}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink={"/app/create"}>
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
