import React, { FC } from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    ReferenceArrayInput,
    SelectArrayInput
} from 'react-admin';

export const CreateAssignment: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
        <DateInput source="PrazoEntrega" />
        <TextInput source="status" />
        <TextInput source="Descricao" />
        <ReferenceArrayInput source="responsavel" reference="users">
            <SelectArrayInput optionText="username" />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="resultado_chave" reference="resultado-chaves">
            <SelectArrayInput optionText="nome" />
        </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
