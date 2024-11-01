import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab3 = ({ navigation }) => {
  // Simulando a presença do usuário na academia (ex: dias da semana)
  const [weekProgress, setWeekProgress] = useState([true, false, true, true, false, true, false]); // Ex: [S, T, W, T, F, S, S]
  const daysOfWeek = ["S", "T", "W", "T", "F", "S", "S"]; // Dias da semana

  // Função para lidar com o clique em um dia da semana
  const toggleWorkoutDay = (index) => {
    const updatedProgress = [...weekProgress];
    updatedProgress[index] = !updatedProgress[index]; // Alterna o estado do dia clicado
    setWeekProgress(updatedProgress); // Atualiza o estado
  };

  // Função de navegação para cada item
  const navigateToPage = (page) => {
    // Substitua por suas páginas de navegação
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      {/* Foto de fundo (capa) */}
      <Image
        source={require("./img/background.jpg")} // Substitua pelo caminho da sua imagem de fundo
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />

      {/* Foto do usuário */}
      <Image
        source={require("./img/cr7.jpg")} // Substitua pelo caminho da foto do usuário
        style={styles.profileImage}
      />

      {/* Nome do usuário */}
      <Text style={styles.userName}>Cristiano Ronaldo</Text>

      {/* Nome do usuário */}
      <Text style={styles.memberSince}>Member Since: 2024</Text>

      {/* Progresso da semana */}
      <Text style={styles.progressTitle}>Your Week Progress</Text>

      <View style={styles.weekContainer}>
        {weekProgress.map((workedOut, index) => (
          <TouchableOpacity key={index} onPress={() => toggleWorkoutDay(index)} style={styles.dayCircleContainer}>
            <View
              style={[
                styles.dayCircle,
                { backgroundColor: workedOut ? "#FFA500" : "#ccc" }, // Laranja se foi à academia, cinza se não
              ]}
            />
            <Text style={styles.dayText}>{daysOfWeek[index]}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de opções */}
      <View style={styles.optionsContainer}>
        {["Account", "Privacy", "Payments", "Invite a Friend"].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionItem}
            onPress={() => navigateToPage(item)}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000", // Fundo preto
  },
  backgroundImage: {
    position: "absolute",
    top: 0, // Inicia no topo
    left: 0, // Inicia na esquerda
    width: "100%", // Ocupa toda a largura
    height: "30%", // Ocupa até a metade da altura da tela
    resizeMode: "cover", // Mantém a proporção da imagem, cobrindo todo o espaço
    opacity: 0.5, // Ajusta a opacidade da imagem de fundo
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Um overlay escuro
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Faz a imagem ser circular
    borderWidth: 3,
    borderColor: "#FFA500", // Borda laranja
    position: "absolute", // Posiciona a imagem em relação ao container
    top: "23.5%", // Centraliza a imagem de perfil entre o topo e o fundo
    alignSelf: "center", // Centraliza horizontalmente
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: "75%", // Espaçamento a partir do topo da imagem de perfil
    marginBottom: 10,
  },
  memberSince: {
    fontSize: 10,
    color: "#FFF",
    marginTop: "0%", // Espaçamento a partir do topo da imagem de perfil
    marginBottom: "3%",
  },
  progressTitle: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 5,
  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dayCircleContainer: {
    alignItems: "center", // Centraliza os itens dentro do container
    marginHorizontal: 5,
  },
  dayCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginBottom: 5, // Espaçamento entre a bolinha e o dia da semana
  },
  dayText: {
    color: "#FFF", // Cor do texto dos dias
    fontWeight: "bold",
  },
  optionsContainer: {
    marginTop: 30,
    width: "85%",
  },
  optionItem: {
    backgroundColor: "#333", // Cor preta clara
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  optionText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default Tab3;
