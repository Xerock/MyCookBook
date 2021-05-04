const recipes = [
    {
        id: 0,
        name: "Gratin",
        description: "Blabla le gratin",
        time: 60,
    },
    {
        id: 1,
        name: "Rougaille",
        description: "Blabla la rougaille",
        time: 45,
    },
    {
        id: 2,
        name: "Pâtes",
        description: "Blabla les pâtes",
        time: 10,
    },
];

export const getRecipes = () => recipes;
export const simplifyString = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();