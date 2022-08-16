import React from 'react';
import { ContainerForm, InputForm, ButtonForm, Title } from './ContactsForm.styled';
import { useForm } from 'react-hook-form';
import { useAddContactsMutation,  useGetAllContactsQuery } from 'redux/contactsAPI';

const ContactsForm = () => {
  const [addContact] =useAddContactsMutation()
  const { register, handleSubmit, reset } = useForm();
  const { data= [] } = useGetAllContactsQuery();
  const contacts = data
  
  const handleSubmitAdd = async data => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already exist`);
    } else {
    if(data){
      await addContact ({name: data.name, phone: data.number }).unwrap()
      reset()
    }
  };
  }
  return (
    <ContainerForm>
      <form
        onSubmit={handleSubmit(data => {
          handleSubmitAdd(data);
        })}
      >
        <label htmlFor="name">
          <Title>Name</Title>
          <InputForm
            type="text"
            name="name"
            {...register('name', {
              register: true,
              required: 'This is required',
            })}
            placeholder="Name"
          />
        </label>
        <label>
          <Title>Number</Title>
          <InputForm
            htmlFor="number"
            type="tel"
            name="number"
            {...register('number', {
              register: true,
              required: 'This is required',
            })}
            placeholder="Number"
          />
        </label>
        <ButtonForm type="submit"></ButtonForm>
      </form>
    </ContainerForm>
  );
};

export default ContactsForm;
