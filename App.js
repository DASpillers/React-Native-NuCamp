import React from "react";
import Main from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import Loading from "./components/LoadingComponent";


const { persistor, store } = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate        //MUST WRAP MAIN COMPONENT. HELPS INTEGRATE IT WITH REACT ANDD NATIVE APP. PREVENTS APP FROM RENDEDRING UNTIL THE REDUX STORE HAS REHYDDRATEDD FROM CLIENT SIDED STORAGE.
          loading={<Loading />} //THIS IS WHAT IS SHOWN WHILE REDUX STORE IS REHYDRATING
          persistor={persistor}> //
        <Main />
      </PersistGate>
    </Provider>
  );
}
