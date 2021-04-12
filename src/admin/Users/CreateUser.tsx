import React, { FC } from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const CreateUser: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
);
