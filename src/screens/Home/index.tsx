import { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const Home: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022!</Text>
    </View>
  );
};

export default Home;
