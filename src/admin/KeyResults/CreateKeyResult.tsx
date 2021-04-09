import React, { FC } from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectArrayInput,
    SelectInput,
} from 'react-admin';

export const CreateKeyResult: FC = (props) => (
  <Create {...props}>
    <SimpleForm redirect={false}>
        <TextInput source="nome" />
        <TextInput source="descricao" />
        <ReferenceInput source="responsavel" reference="users">
            <SelectInput optionText="username" />
        </ReferenceInput>
        <ReferenceInput source="objetivo" reference="objetivos">
            <SelectInput optionText="Nome" />
        </ReferenceInput>
        <ReferenceInput source="Tags" reference="tags">
          <SelectArrayInput optionText="Nome" />
        </ReferenceInput>
    </SimpleForm>
  </Create>
);
