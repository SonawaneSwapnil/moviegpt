import Body from "./Components/Body";
import appStore from "./utills/appStore";
import { Provider } from "react-redux";
function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
