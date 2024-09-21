import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import uuid from 'react-native-uuid';

import {Formik} from 'formik';
import * as Yup from 'yup';

import {categories} from '../assets/categories';
import {Button} from '../components/Button';
import {HomeScreenNavigationProp} from '../navigation/HomeStackNavigation';
import {useAppDispatch} from '../store/hooks';
import {addProduct} from '../store/products/productsSlice';

type AddProductProps = {
  navigation: HomeScreenNavigationProp;
};

const AddProductFormSchema = Yup.object().shape({
  title: Yup.string().max(100, 'Title is too long').required('Required'),
  price: Yup.number().min(1, 'Min 1 number').required('Required'),
  description: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
});

export function AddProduct({navigation}: AddProductProps) {
  const dispatch = useAppDispatch();

  const submit = (data: {
    title: string;
    price: number;
    description: string;
    category: string;
  }) => {
    const newItem: Product = {
      id: uuid.v4() as string,
      title: data.title,
      price: Number(data.price),
      description: data.description,
      category: data.category,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      rating: {rate: 0, count: 0},
    };
    dispatch(addProduct(newItem));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.layout}>
      <Formik
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: '',
        }}
        onSubmit={(values, {resetForm}) => {
          const formattedValues = {
            ...values,
            price: values.price ? Number(values.price) : 0,
          };
          submit(formattedValues);
          resetForm();
        }}
        validationSchema={AddProductFormSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }) => (
          <>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Title"
                value={values.title}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
              />
              <View style={styles.errorWrapper}>
                {touched.title && errors.title && (
                  <Text style={styles.errorMessage}>{errors.title}</Text>
                )}
              </View>

              <TextInput
                style={styles.input}
                placeholder="Price"
                value={values.price.toString()}
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                keyboardType="phone-pad"
              />
              <View style={styles.errorWrapper}>
                {touched.price && errors.price && (
                  <Text style={styles.errorMessage}>{errors.price}</Text>
                )}
              </View>

              <TextInput
                style={styles.input}
                placeholder="Description"
                value={values.description}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
              />
              <View style={styles.errorWrapper}>
                {touched.description && errors.description && (
                  <Text style={styles.errorMessage}>{errors.description}</Text>
                )}
              </View>

              <Dropdown
                style={styles.input}
                data={categories}
                onChange={item => setFieldValue('category', item.value)}
                labelField="label"
                valueField="value"
                placeholder="Select category"
              />
              <View style={styles.errorWrapper}>
                {touched.category && errors.category && (
                  <Text style={styles.errorMessage}>{errors.category}</Text>
                )}
              </View>
            </View>

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

  errorWrapper: {
    height: 20,
  },

  errorMessage: {
    color: 'red',
  },
});
