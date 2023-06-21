import { FC } from "react";
import { Text, View } from "react-native";

const App: FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#131016", padding: 24 }}>
      <Text
        style={{
          color: "#FDFCFE",
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 48,
        }}
      >
        Nome do evento
      </Text>
      <Text style={{ color: "#6b6b6b", fontSize: 16 }}>
        Sexta, 4 de novembro de 2022!
      </Text>
    </View>
  );
};

export default App;
