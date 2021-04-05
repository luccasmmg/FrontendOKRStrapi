import React, { FC } from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    ReferenceArrayInput,
    SelectArrayInput
} from 'react-admin';

export const EditKeyResult: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
        <TextInput source="id" />
        <TextInput source="objetivo" />
        <TextInput source="nome" />
        <TextInput source="descricao" />
    </SimpleForm>
  </Edit>
);
