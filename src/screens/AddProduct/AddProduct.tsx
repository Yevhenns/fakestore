import React from 'react';
import {GestureResponderEvent, TextInput, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';

import {Formik} from 'formik';

import {categories} from '../../assets/categories';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import {AddProductFormSchema} from '../../schemas/AddProductFormSchema';
import {useAppDispatch} from '../../store/hooks';
import {addProduct} from '../../store/products/productsSlice';
import {addProductStyles} from './AddProduct.styles';

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
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={addProductStyles.layout}>
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
                  style={addProductStyles.input}
                  placeholder="Title"
                  value={values.title}
                  onChangeText={handleChange('title')}
                  placeholderTextColor={'grey'}
                />
                <View style={addProductStyles.errorWrapper}>
                  {errors.title && <Paragraph error>{errors.title}</Paragraph>}
                </View>

                <Paragraph>Price</Paragraph>
                <TextInput
                  style={addProductStyles.input}
                  placeholder="Price"
                  value={values.price.toString()}
                  onChangeText={handleChange('price')}
                  keyboardType="phone-pad"
                  placeholderTextColor={'grey'}
                />
                <View style={addProductStyles.errorWrapper}>
                  {errors.price && <Paragraph error>{errors.price}</Paragraph>}
                </View>

                <Paragraph>Description</Paragraph>
                <TextInput
                  style={addProductStyles.input}
                  placeholder="Description"
                  value={values.description}
                  onChangeText={handleChange('description')}
                  placeholderTextColor={'grey'}
                  numberOfLines={5}
                  textAlignVertical="top"
                />
                <View style={addProductStyles.errorWrapper}>
                  {errors.description && (
                    <Paragraph error>{errors.description}</Paragraph>
                  )}
                </View>

                <Paragraph>Category</Paragraph>
                <Dropdown
                  style={addProductStyles.input}
                  data={categories}
                  onChange={item => setFieldValue('category', item.value)}
                  labelField="label"
                  valueField="value"
                  value={values.category}
                  placeholder="Select category"
                  placeholderStyle={addProductStyles.dropdownPlaceholderStyle}
                  itemTextStyle={addProductStyles.dropdownTextStyle}
                  selectedTextStyle={addProductStyles.dropdownTextStyle}
                />
                <View style={addProductStyles.errorWrapper}>
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
