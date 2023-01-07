import { ContactList } from 'components/ContactsList/ContactsList';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/* <FilterForm /> */}
      {isLoading && <div>Loading...</div>}
      {items.length === 0 && !isLoading && !error && (
        <div>There is no contacts yet</div>
      )}
      {items.length > 0 && !isLoading && <ContactList />}
      {error && <div>{error}</div>}
    </div>
  );
};
