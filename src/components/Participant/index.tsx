import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
  name: string;
};

const Participant: FC<ParticipantProps> = ({ name }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
  </View>
);

export default Participant;
