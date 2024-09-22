import * as Yup from 'yup';

export const AddProductFormSchema = Yup.object().shape({
  title: Yup.string()
    .transform(value => value.trim())
    .max(50, 'Title is too long')
    .required('Required'),
  price: Yup.number()
    .transform(value => Number(value.toString().trim()))
    .test(
      'len',
      'Max 6 numbers',
      val => val !== undefined && val.toString().length <= 6,
    )
    .required('Required'),
  description: Yup.string()
    .transform(value => value.trim())
    .max(200, 'Description is too long')
    .required('Required'),
  category: Yup.string().required('Required'),
});
