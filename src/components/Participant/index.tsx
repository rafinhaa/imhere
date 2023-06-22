import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
  name: string;
  onRemove: (name: string) => void;
};

const Participant: FC<ParticipantProps> = ({ name, onRemove }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <TouchableOpacity style={styles.button} onPress={() => onRemove(name)}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
  </View>
);

export default Participant;
