import { FavoriteCatsProvider } from "../entities/cats/model/contexts/FavoriteCats.provider";
import { AppRouter } from "./routes/router";

function App() {
  return (
    <FavoriteCatsProvider>
      <AppRouter />
    </FavoriteCatsProvider>
  );
}

export default App;
