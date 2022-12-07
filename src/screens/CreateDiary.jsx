import { View } from "react-native";
import React from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { getData, storeData } from "../storage/diaries";

export function CreateDiary() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function clear() {
    setContent("");
    setTitle("");
  }

  const handleCreateDiary = () => {
    if (title == "" || content == "") {
      alert("Seu diário precisa ter um título e conteúdo!");
      clear();
      return;
    }

    const date = new Date();
    const formatedDate = `${date.getDay()}/${date.getMonth()}/${date.getYear()}`;

    const data = {
      id: String(date.getTime()),
      date: formatedDate,
      title: title,
      content: content,
    };

    storeData(data);
    clear();

    navigation.navigate("Home");
  };
  return (
    <View>
      <Input
        height={50}
        value={title}
        placeholder={"Seu título"}
        onChangeText={setTitle}
      />
      <Input
        value={content}
        multiline
        numberOfLines={4}
        height={300}
        placeholder={"Digite seu diário aqui"}
        onChangeText={setContent}
      />
      <Button title={"Criar Diário"} onPress={handleCreateDiary} />
    </View>
  );
}
