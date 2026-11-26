
import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Senha() {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Confirmação de Senha</Text>

      <TextInput
        style={styles.campo}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        style={styles.campo}
        placeholder="Confirme sua senha"
        secureTextEntry={true}
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      {confirmarSenha !== "" && (
        <Text
          style={[
            styles.mensagem,
            senha === confirmarSenha
              ? styles.correto
              : styles.erro,
          ]}
        >
          {senha === confirmarSenha
            ? "As senhas coincidem"
            : "As senhas são diferentes"}
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
  campo: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  mensagem: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  correto: {
    color: "green",
  },
  erro: {
    color: "red",
  },
  espaco: {
    marginTop: 30,
  },
});
