import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Card } from "../components/Card";
import { getData, clearAll } from "../storage/diaries";

export default function Home({ route, navigation }) {
  const [gretting, setNewGretting] = useState("");
  const [diariesList, setDiariesList] = useState([]);

  const handleClearAll = async () => {
    await clearAll();
    setDiariesList([]);
  };

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setNewGretting("bom dia");
    } else if (currentHour >= 12 && currentHour < 18) {
      setNewGretting("boa tarde");
    } else {
      setNewGretting("boa noite");
    }
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const getDiariesList = async () => {
        const newDiariesList = await getData();
        if (newDiariesList) {
          setDiariesList(newDiariesList);
        }
      };
      getDiariesList();
    }, [])
  );

  return (
    <View>
      <View style={styles.headerWrapper}>
        <View>
          <Text style={styles.gretting}>Olá, {gretting}!</Text>
          <Text style={styles.totalDiaries}>
            Total de diários:
            <Text style={{ fontWeight: "900" }}>
              {" "}
              {diariesList.length || 0}
            </Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.deleteButton} onPress={handleClearAll}>
          <Text style={styles.buttonText}>Apagar todos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardWrapper}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={diariesList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card title={item.title} date={item.date} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#0EA5E9",
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gretting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0EA5E9",
  },
  totalDiaries: {
    color: "#828282",
    fontWeight: "500",
    fontSize: 14,
  },
  cardWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 150,
  },
  deleteButton: {
    backgroundColor: "#e01115",
    width: 140,
    padding: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
