import React, { useState, useEffect } from "react";
import "./Home.css";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { simplifyString, getRecipes, store } from "../main.js";

import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

const Home: React.FC = () => {
  const recipes = getRecipes();
  const [searchText, setSearchText] = useState<string>("");
  const [filteredSearch, setFilteredSearch] = useState(recipes);

  const onSearchChange = (s: string) => {
    setSearchText(s);
  };

  useEffect(() => {
    let tempSearchResult = recipes.filter((recipe) =>
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
      </IonContent>
    </IonPage>
  );
};

export default Home;
