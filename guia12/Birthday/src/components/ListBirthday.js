import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import moment from 'moment';
import AddBirthday from './AddBirthday';
import ActionBar from './ActionBar';
import Birthday from './Birthday';
import { db } from '../utils/firebase';
import {
  collection,
  query,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';

export default function ListBirthday(props) {
  const { user } = props;
  const [showList, setShowList] = useState(true);
  const [birthday, setBirthday] = useState([]);
  const [pasatBirthday, setPasatBirthday] = useState([]);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    setBirthday([]);
    setPasatBirthday([]);

    const fetchData = async () => {
      try {
        const q = query(collection(db, user.uid), orderBy('dateBirth', 'asc'));
        const querySnapshot = await getDocs(q);

        const itemsArray = [];
        querySnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          data.id = docSnap.id;
          itemsArray.push(data);
        });

        formatData(itemsArray);
      } catch (error) {
        console.error('Error loading data: ', error);
      }
    };

    fetchData();
    setReloadData(false);
  }, [reloadData]);
  const formatData = (items) => {
  const currentDate = moment().set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  });

  const birthdayTempArray = [];
  const pasatBirthdayTempArray = [];
};
items.forEach((item) => {
  const dateBirth = new Date(item.dateBirth.seconds * 1000);
  const dateBirthday = moment(dateBirth);
  const currentYear = moment().get('year');
  dateBirthday.set({ year: currentYear });

  const diffDate = currentDate.diff(dateBirthday, 'days');
  const itemTemp = item;
  itemTemp.dateBirth = dateBirthday;
  itemTemp.days = diffDate;

  if (diffDate <= 0) {
    birthdayTempArray.push(itemTemp);
  } else {
    pasatBirthdayTempArray.push(itemTemp);
  }
});

setBirthday(birthdayTempArray);
setPasatBirthday(pasatBirthdayTempArray);

const daleteBirthday = (birthday) => {
  Alert.alert(
    'Eliminar cumpleaños',
    `¿Estás seguro de eliminar el cumpleaños de ${birthday.name} ${birthday.lastname}?`,
    [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Eliminar',
        onPress: async () => {
          try {
            await deleteDoc(doc(db, user.uid, birthday.id));
            setReloadData(true);
          } catch (error) {
            console.error('Error deleting document: ', error);
          }
        },
      },
    ],
    { cancelable: false }
  );
};
return (
  <View style={styles.container}>
    {showList ? (
      <ScrollView style={styles.scrollView}>
        {birthday.map((item, index) => (
          <Birthday key={index} birthday={item} daleteBirthday={daleteBirthday} />
        ))}
        {pasatBirthday.map((item, index) => (
          <Birthday key={index} birthday={item} daleteBirthday={daleteBirthday} />
        ))}
      </ScrollView>
          ) : (
      <AddBirthday
        user={user}
        setShowList={setShowList}
        setReloadData={setReloadData}
      />
    )}
    <ActionBar showList={showList} setShowList={setShowList} />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
  scrollView: {
    marginBottom: 50,
    width: '100%',
  },
});