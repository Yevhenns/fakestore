import React from 'react';
import {GestureResponderEvent, StyleSheet, TextInput, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';

import {Formik} from 'formik';

import {categories} from '../assets/categories';
import {colors, fonts} from '../assets/styleVariables';
import {Button} from '../components/Button';
import {Paragraph} from '../components/Paragraph';
import {HomeScreenNavigationProp} from '../navigation/HomeStackNavigation';
import {AddProductFormSchema} from '../schemas/AddProductFormSchema';
import {useAppDispatch} from '../store/hooks';
import {addProduct} from '../store/products/productsSlice';

type AddProductProps = {
  navigation: HomeScreenNavigationProp;
};

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
      title: data.title.trim(),
      price: Number(data.price),
      description: data.description.trim(),
      category: data.category,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      rating: {rate: 0, count: 0},
    };
    dispatch(addProduct(newItem));
    navigation.navigate('Home');
  };

  return (
    <GestureHandlerRootView style={styles.layout}>
      <ScrollView>
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
          {({handleChange, handleSubmit, setFieldValue, values, errors}) => (
            <>
              <View>
                <Paragraph>Title</Paragraph>
                <TextInput
                  style={styles.input}
                  placeholder="Title"
                  value={values.title}
                  onChangeText={handleChange('title')}
                  placeholderTextColor={'grey'}
                />
                <View style={styles.errorWrapper}>
                  {errors.title && <Paragraph error>{errors.title}</Paragraph>}
                </View>

                <Paragraph>Price</Paragraph>
                <TextInput
                  style={styles.input}
                  placeholder="Price"
                  value={values.price.toString()}
                  onChangeText={handleChange('price')}
                  keyboardType="phone-pad"
                  placeholderTextColor={'grey'}
                />
                <View style={styles.errorWrapper}>
                  {errors.price && <Paragraph error>{errors.price}</Paragraph>}
                </View>

                <Paragraph>Description</Paragraph>
                <TextInput
                  style={styles.input}
                  placeholder="Description"
                  value={values.description}
                  onChangeText={handleChange('description')}
                  placeholderTextColor={'grey'}
                  numberOfLines={5}
                  textAlignVertical="top"
                />
                <View style={styles.errorWrapper}>
                  {errors.description && (
                    <Paragraph error>{errors.description}</Paragraph>
                  )}
                </View>

                <Paragraph>Category</Paragraph>
                <Dropdown
                  style={styles.input}
                  data={categories}
                  onChange={item => setFieldValue('category', item.value)}
                  labelField="label"
                  valueField="value"
                  value={values.category}
                  placeholder="Select category"
                  placeholderStyle={styles.dropdownPlaceholderStyle}
                  itemTextStyle={styles.dropdownTextStyle}
                  selectedTextStyle={styles.dropdownTextStyle}
                />
                <View style={styles.errorWrapper}>
                  {errors.category && (
                    <Paragraph error>{errors.category}</Paragraph>
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
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 10,
    gap: 10,
    backgroundColor: colors.mainBackgroundColor,
  },

  input: {
    width: '100%',
    padding: 12,
    borderRadius: 5,
    borderColor: colors.accentColor,
    borderWidth: 2,
    color: colors.blackColor,
    fontSize: 18,
    fontFamily: fonts.mainFont,
  },

  dropdownPlaceholderStyle: {
    color: colors.greyColor,
    fontSize: 18,
    fontFamily: fonts.mainFont,
  },

  dropdownTextStyle: {
    color: colors.blackColor,
    fontSize: 18,
    fontFamily: fonts.mainFont,
  },

  errorWrapper: {
    height: 20,
  },
});
