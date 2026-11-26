
import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Vaga() {
  const [vagas, setVagas] = useState(5);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Reserva de Vagas</Text>

      <Text style={styles.texto}>
        Vagas disponíveis: {vagas}
      </Text>

      <Button
        title="Reservar vaga"
        onPress={() => setVagas(vagas - 1)}
        disabled={vagas === 0}
      />

      {vagas === 0 && (
        <Text style={styles.erro}>
          Turma lotada!
        </Text>
      )}

      <View style={styles.espaco} />

      <Button
        title="Voltar ao menu"
        onPress={() => router.push("/")}
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
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  erro: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  espaco: {
    marginTop: 30,
  },
});
