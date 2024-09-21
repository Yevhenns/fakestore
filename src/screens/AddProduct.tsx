import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Button} from '../components/Button';
import {HomeScreenNavigationProp} from '../navigation/StackNavigation';
import {Formik} from 'formik';
import * as Yup from 'yup';

type AddProductProps = {
  navigation: HomeScreenNavigationProp;
};

const AddProductFormSchema = Yup.object().shape({
  title: Yup.string().max(100, 'Title is too long').required('Required'),
  price: Yup.number().min(1, 'Min 1 number').required('Required'),
  description: Yup.string().required('Required'),
});

export function AddProduct({navigation}: AddProductProps) {
  const submit = (data: {
    title: string;
    price: number;
    description: string;
  }) => {
    const newItem: ApiItem = {
      id: 20,
      title: data.title,
      price: Number(data.price),
      description: data.description,
      category: '',
      image: '',
      rating: {rate: 0, count: 0},
    };
    console.log(newItem);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.layout}>
      <Formik
        initialValues={{
          title: '',
          price: '',
          description: '',
        }}
        onSubmit={values => {
          const formattedValues = {
            ...values,
            price: values.price ? Number(values.price) : 0,
          };
          submit(formattedValues);
        }}
        validationSchema={AddProductFormSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={values.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
            />
            {touched.title && <Text>{errors.title}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Price"
              value={values.price.toString()}
              onChangeText={handleChange('price')}
              onBlur={handleBlur('price')}
              keyboardType="phone-pad"
            />
            {touched.title && <Text>{errors.price}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Description"
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
            />
            {touched.title && <Text>{errors.description}</Text>}

            <Button
              onPress={handleSubmit as (e?: GestureResponderEvent) => void}>
              Add product
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 10,
    gap: 10,
    backgroundColor: '#DACAB0',
  },

  input: {
    width: '100%',
    padding: 12,
    borderRadius: 5,
    borderColor: '#de612b',
    borderWidth: 1,
  },
});
