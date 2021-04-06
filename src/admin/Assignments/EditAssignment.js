import React, { FC } from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    EditButton,
    ReferenceArrayInput,
    SelectArrayInput
} from 'react-admin';

export const EditAssignment: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
        <DateInput source="PrazoEntrega" />
        <TextInput source="status" />
        <TextInput source="Descricao" />
        <TextInput source="responsavel.username" />
    </SimpleForm>
  </Edit>
);
