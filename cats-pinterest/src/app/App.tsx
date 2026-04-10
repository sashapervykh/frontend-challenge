import { AllCatsProvider } from "../entities/cats/model/providers/AllCats.provider";
import { FavoriteCatsProvider } from "../entities/cats/model/providers/FavoriteCats.provider";
import { AppRouter } from "./routes/router";

function App() {
  return (
    <>
      <FavoriteCatsProvider>
        <AllCatsProvider>
          <AppRouter />
        </AllCatsProvider>
      </FavoriteCatsProvider>
    </>
  );
}

export default App;
