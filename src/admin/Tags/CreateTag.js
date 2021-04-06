import React, { FC } from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const CreateTag: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="Nome" />
    </SimpleForm>
  </Create>
);
