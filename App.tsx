import { FC } from "react";
import { Home } from "./src/screens";
import { StatusBar, View } from "react-native";

const App: FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Home />
    </View>
  );
};

export default App;
