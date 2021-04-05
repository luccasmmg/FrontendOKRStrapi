import React, { FC } from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceArrayInput,
    SelectArrayInput
} from 'react-admin';

export const CreateKeyResult: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
        <TextInput source="id" />
        <TextInput source="objetivo" />
        <TextInput source="nome" />
        <TextInput source="descricao" />
        <ReferenceArrayInput source="responsavel" reference="users">
            <SelectArrayInput optionText="username" />
        </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
