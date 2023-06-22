import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Participant: FC = () => (
  <View style={styles.container}>
    <Text style={styles.name}>Participant</Text>
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
  </View>
);

export default Participant;
