// CollectorList.js
import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { db } from "../utils/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import CollectorItem from "./CollectorItem";

export default function CollectorList() {
  const [collectors, setCollectors] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "collectors"), (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setCollectors(items);
    });

    return () => unsubscribe();
  }, []);

  return (
    <FlatList
      data={collectors}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CollectorItem collector={item} />}
    />
  );
}