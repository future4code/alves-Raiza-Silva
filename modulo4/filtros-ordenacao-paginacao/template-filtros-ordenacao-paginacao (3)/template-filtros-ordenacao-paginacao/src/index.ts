import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getOrdem } from "./endpoints/getOrdem";
import { getByName } from "./endpoints/getByName";
import { getByType } from './endpoints/getByType';
import { getPages } from './endpoints/getPages';
import { getOrdemPage } from "./endpoints/getOrdemPage";


app.get("/recipes", getAllRecipes)
app.get("/user", getByName );
app.get("/user/fullsearch", getOrdemPage);
app.get("/user/search", getOrdem);
app.get("/user/page", getPages);
app.get("/user/:type", getByType);