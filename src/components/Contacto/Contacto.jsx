import React from 'react';
import { FormStyled } from './ContactoStyles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from './Input/Input';
import Textarea from './Textarea/Textarea';
import SubmitButton from './SubmitButton/SubmitButton';

const phoneRegex = /\d{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required('Campo requerido.'),
  phone: Yup.string().matches(phoneRegex, 'Numero de telefono inválido.'),
  email: Yup.string().email('El email es inválido.').required('Campo requerido.'),
  asunto: Yup.string().max(255, 'Maximo de caracteres alcanzados').notRequired(),
});

const Contacto = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      asunto: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('ValoresForm:', values);
      resetForm();
    }
  });

  return (
    <>
      <FormStyled>
        <h2>Envianos tu consulta!</h2>

        <Input
          name='name'
          label='Nombre'
          type="text"
          isError={touched.name && errors.name}
          {...getFieldProps('name')}
        />

        <Input
          name='phone'
          label='Telefono'
          type="tel"
          isError={touched.phone && errors.phone}
          {...getFieldProps('phone')}
        />

        <Input
          name='email'
          label='Email'
          type="mail"
          isError={touched.email && errors.email}
          {...getFieldProps('email')}
        />

        <Textarea
          name="asunto"
          label='Asunto'
          isError={touched.asunto && errors.asunto}
          {...getFieldProps('asunto')}
        ></Textarea>

        <SubmitButton onSubmit={handleSubmit}/>
      </FormStyled>
    </>
  );
};

export default Contacto;