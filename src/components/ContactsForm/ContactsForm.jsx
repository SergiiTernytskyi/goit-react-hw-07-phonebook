import { Formik, ErrorMessage, Form, Field } from 'formik';
// import toast from 'react-hot-toast';
import { nanoid } from '@reduxjs/toolkit';
import * as yup from 'yup';
import 'yup-phone';
import { Error } from './ContactsForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

const contactsSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("That doesn't look like a contact name")
    .trim()
    .required('Contact name is required'),
  phone: yup
    .string()
    .phone(
      'UA',
      true,
      'Number must be a valid phone number (+380 XX XXX XX XX)'
    )
    .required('Contact phone number is required'),
});

const initialValues = { name: '', phone: '' };

export const ContactsForm = () => {
  const dispatch = useDispatch();
  //   const contacts = useSelector(getContacts);

  const submitHandler = ({ name, phone }, { resetForm }) => {
    const normilizedContacts = {
      name: name.trim(),
      phone,
    };

    // if (
    //   contacts.find(
    //     contact => contact.name.toLowerCase() === name.toLowerCase().trim()
    //   )
    // ) {
    //   return toast.error(`${name} is already in your contacts`);
    // }
    dispatch(addContact(normilizedContacts));
    resetForm();
  };

  const nameId = nanoid();
  const phoneId = nanoid();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={contactsSchema}
      >
        <Form autoComplete="off">
          <div>
            <label htmlFor={nameId}>
              Name
              <Field
                id={nameId}
                type="text"
                name="name"
                placeholder="Enter name"
              />
            </label>

            <label htmlFor={phoneId}>
              Phone number
              <Field
                id={phoneId}
                type="tel"
                name="phone"
                placeholder="Enter phone number"
              />
            </label>
          </div>

          <ErrorMessage component={Error} name="name" />
          <ErrorMessage component={Error} name="phone" />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};
