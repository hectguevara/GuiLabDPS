import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function AddBirthday(props) {
  const { user, setShowList, setReloadData } = props;

  const [formData, setFormData] = useState({});
  const [isDatePicketVisible, setIsDatePicketVisible] = useState(false);
  const [formError, setFormError] = useState({});

  const hideDatePicker = () => setIsDatePicketVisible(false);
  const showDatePicker = () => setIsDatePicketVisible(true);

  const handlerConfirm = (date) => {
    date.setHours(0, 0, 0, 0);
    setFormData({ ...formData, dateBirth: date });
    hideDatePicker();
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const onSubmit = async () => {
    let errors = {};

    if (!formData.name || !formData.lastname || !formData.dateBirth) {
      if (!formData.name) errors.name = true;
      if (!formData.lastname) errors.lastname = true;
      if (!formData.dateBirth) errors.dateBirth = true;
    } else {
      const data = { ...formData };
      const now = new Date();
      data.dateBirth.setFullYear(now.getFullYear()); // año actual

      try {
        await addDoc(collection(db, user.uid), data);
        setReloadData(true);
        setShowList(true);
      } catch (error) {
        setFormError({ name: true, lastname: true, dateBirth: true });
        console.error('Error adding document: ', error);
      }
    }

    setFormError(errors);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={[styles.input, formError.name && { borderColor: '#940c0c' }]}
          placeholder="Nombre"
          placeholderTextColor="#969696"
          onChange={(e) => onChange(e, 'name')}
        />
        <TextInput
          style={[styles.input, formError.lastname && { borderColor: '#940c0c' }]}
          placeholder="Apellidos"
          placeholderTextColor="#969696"
          onChange={(e) => onChange(e, 'lastname')}
        />
        <View
          style={[
            styles.input,
            styles.datepicker,
            formError.dateBirth && { borderColor: '#940c0c' },
          ]}
        >
          <Text
            style={{
              color: formData.dateBirth ? '#fff' : '#969696',
              fontSize: 18,
            }}
            onPress={showDatePicker}
          >
            {formData.dateBirth
              ? moment(formData.dateBirth).format('LL')
              : 'Fecha de nacimiento'}
          </Text>
        </View>
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.addButton}>Crear cumpleaños</Text>
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDatePicketVisible}
        mode="date"
        onConfirm={handlerConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    color: '#fff',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1e3040',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1e3040',
  },
  datepicker: {
    justifyContent: 'center',
  },
  addButton: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#1e3040',
  },
});