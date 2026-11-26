
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Menu Principal</Text>

      <Button
        title="Tela de Vagas"
        onPress={() => router.push("/vaga")}
      />

      <View style={styles.espaco} />

      <Button
        title="Tela de Senha"
        onPress={() => router.push("/senha")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
  espaco: {
    marginTop: 20,
  },
});
