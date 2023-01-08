import { Formik, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import { nanoid } from '@reduxjs/toolkit';
import * as yup from 'yup';
import 'yup-phone';
import {
  AddButton,
  Error,
  Input,
  Label,
  StyledForm,
  Wrapper,
} from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';

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
  const contacts = useSelector(selectContacts);
  const navigate = useNavigate();

  const submitHandler = ({ name, phone }, { resetForm }) => {
    const normilizedContacts = {
      name: name.trim(),
      phone,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase().trim()
      )
    ) {
      return toast.error(`${name} is already in your contacts`);
    }

    dispatch(addContact(normilizedContacts));
    resetForm();
    navigate('/contacts');
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
        <StyledForm autoComplete="off">
          <Wrapper>
            <Label htmlFor={nameId}>
              Contact name
              <Input
                id={nameId}
                type="text"
                name="name"
                placeholder="Enter name"
              />
            </Label>

            <Label htmlFor={phoneId}>
              Phone number
              <Input
                id={phoneId}
                type="tel"
                name="phone"
                placeholder="Enter phone number"
              />
            </Label>
          </Wrapper>
          <AddButton type="submit">Add contact</AddButton>
          <ErrorMessage component={Error} name="name" />
          <ErrorMessage component={Error} name="phone" />
        </StyledForm>
      </Formik>
    </>
  );
};
