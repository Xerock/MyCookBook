import React from "react";

import { IonSearchbar } from "@ionic/react";

const SearchBar: React.FC<{onSearchChange: (s : string) => void}> = props => {
    return (
      <IonSearchbar
          onIonChange={(e) => props.onSearchChange(e.detail.value!)}
          showCancelButton="never"
      ></IonSearchbar>
    );
}

export default SearchBar;