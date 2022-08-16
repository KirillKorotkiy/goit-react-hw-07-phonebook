import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    tagTypes: ['Contacts'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62fa0955ffd7197707e4085c.mockapi.io/' }),
    endpoints: (builder) => ({
      getAllContacts: builder.query({
        query: () =>`contacts`,
        providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Contacts' , id })),
              { type: 'Contacts', id: 'LIST' }]
          : [{ type: 'Contacts', id: 'LIST' }],
      }),
      addContacts: builder.mutation({
        query: (body)=> ({
            url: 'contacts',
            method: 'POST',
            body,
        }),
        invalidatesTags: [{type: 'Contacts', id: 'LIST'}]
      }),
      deleteContact: builder.mutation({
        query: (id) => ({
            url: `contacts/${id}`,
            method: 'DELETE',
        }),
       invalidatesTags: [{type: 'Contacts', id: 'LIST'}]
      })
    }),
  })


  export const { useGetAllContactsQuery, useAddContactsMutation, useDeleteContactMutation } = contactsApi