import { Formik, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import 'yup-phone';
import {
  AddButton,
  Error,
  Input,
  InputWrapper,
  Placeholder,
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

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={contactsSchema}
      >
        <StyledForm autoComplete="off">
          <Wrapper>
            <InputWrapper>
              <Input type="text" name="name" required="required" />
              <Placeholder>Contact name</Placeholder>
            </InputWrapper>
            <InputWrapper>
              <Input type="tel" name="phone" required="required" />
              <Placeholder>Phone number</Placeholder>
            </InputWrapper>
          </Wrapper>

          <AddButton type="submit">Add contact</AddButton>
          <ErrorMessage component={Error} name="name" />
          <ErrorMessage component={Error} name="phone" />
        </StyledForm>
      </Formik>
    </>
  );
};
