import { Image, StyleSheet, View } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            top: 15,
          }}
        >
          <Image
            source={require("@/assets/images/crf.png")}
            style={styles.reactLogo}
          />
        </View>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">CRF</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">CLUBE DE REGATAS DO FLAMENGO</ThemedText>
        <ThemedText>A MAIOR E MELHOR SELEÇÃO DO MUNDO!!!</ThemedText>
      </ThemedView>

      <View style={styles.hr}></View>
      <ThemedText type="subtitle">Última partida:</ThemedText>
      <ThemedView style={styles.scoreContainer}>
        <Image
          source={require("@/assets/images/criciuma.png")}
          style={styles.shieldStyle}
        />
        <ThemedText type="title">0 x 3</ThemedText>
        <Image
          source={require("@/assets/images/fla.png")}
          style={styles.shieldStyle}
        />
      </ThemedView>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ThemedText type="defaultSemiBold">
          Estádio do Maracanã - 01/12/2024
        </ThemedText>
        <ThemedText type="defaultSemiBold">20:00h</ThemedText>
        <ThemedText type="defaultSemiBold">
          Campeonato Brasileiro - Série A
        </ThemedText>
      </View>
      <View style={styles.hr}></View>

      <ThemedText type="subtitle">Próxima partida:</ThemedText>
      <ThemedView style={styles.scoreContainer}>
        <Image
          source={require("@/assets/images/fla.png")}
          style={styles.shieldStyle}
        />
        <ThemedText type="title"> x </ThemedText>
        <Image
          source={require("@/assets/images/vitoria.png")}
          style={styles.shieldStyle}
        />
      </ThemedView>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ThemedText type="defaultSemiBold">
          Estádio do Maracanã - 08/12/2024
        </ThemedText>
        <ThemedText type="defaultSemiBold">16:00h</ThemedText>
        <ThemedText type="defaultSemiBold">
          Campeonato Brasileiro - Série A
        </ThemedText>
      </View>

      <View style={styles.hr}></View>
      <View>
        <ThemedText type="subtitle">História:</ThemedText>
        <ThemedText type="defaultSemiBold" style={{ top: 15 }}>
          O Clube de Regatas do Flamengo, carinhosamente chamado de Mengo, Mengão ou simplesmente Fla,
          é muito mais do que uma agremiação esportiva brasileira; é um símbolo de paixão,
          tradição e conquistas que pulsa no coração do Rio de Janeiro.
          Fundado em 17 de novembro de 1895 no charmoso bairro de Flamengo para disputar competições de remo,
          o clube rapidamente transcendeu suas origens e se tornou uma verdadeira potência no cenário esportivo nacional.
          Reconhecido mundialmente, o Mengão não é apenas um clube de futebol: é uma nação! Com uma torcida incomparável, que canta,
          vibra e emociona, o Flamengo conquistou um lugar especial no topo do esporte brasileiro,
          colecionando títulos históricos e consagrando-se como um dos clubes mais bem-sucedidos de todos os tempos.
          Seja na terra, seja no mar, o Flamengo é sinônimo de glória e paixão sem limites! 
          Aqui é Flamengo! 🔴⚫
        </ThemedText>

      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  scoreContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  reactLogo: {
    height: 200,
    width: 200,
  },
  shieldStyle: {
    margin: 10,
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  hr: {
    borderBottomColor: "#D0D0D0",
    borderBottomWidth: 1,
    width: "100%",
  },
});
