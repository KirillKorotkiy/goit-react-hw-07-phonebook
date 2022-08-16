import { useState, useMemo } from 'react';
import {
  useGetAllContactsQuery,
} from 'redux/contactsAPI';

export const useFilter = () => {
  const { data = [] } = useGetAllContactsQuery();
  const contacts = data;
  const [filter, setFilter] = useState('');

  const filterByName = useMemo(() => {
    const normalaizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalaizedFilter)
    );
  }, [filter, contacts]);

  return { filterByName, filter, setFilter };
};
