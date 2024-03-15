import CreditCard from "./CreditCard";
import InputFields from "./InputFields";
import { Provider } from "react-redux";
import { store } from "./appStore";

function App() {
  return (
    <Provider store={store}>
      <div className="flex gap-32">
        <CreditCard />
        <InputFields />
      </div>
    </Provider>
  );
}

export default App;
