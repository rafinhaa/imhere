import { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

const Home: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022!</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do evento"
        placeholderTextColor={"#6B6B6B"}
      />
    </View>
  );
};

export default Home;
