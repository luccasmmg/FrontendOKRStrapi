import React, { FC } from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const EditKeyResult: FC = (props) => {
    return (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="objetivo" />
            <TextInput source="nome" />
        </SimpleForm>
    </Edit>
  )};
