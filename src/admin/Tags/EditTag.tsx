import React, { FC } from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const EditTag: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
        <TextInput source="Nome" />
    </SimpleForm>
  </Edit>
);
