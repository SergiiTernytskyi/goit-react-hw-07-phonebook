import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const ContactList = () => {
  const items = useSelector(selectContacts);

  return (
    <ul>
      {items.map(item => {
        return <ContactItem key={item.id} {...item} />;
      })}
    </ul>
  );
};
