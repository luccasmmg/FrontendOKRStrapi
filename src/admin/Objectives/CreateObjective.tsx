import React, { FC } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  NumberInput,
  ReferenceArrayInput,
  SelectInput,
  SelectArrayInput
} from 'react-admin';

export const CreateObjective: FC = (props) => (
    <Create {...props} title="Criar Objetivo">
      <SimpleForm>
        <TextInput source="Nome" />
        <TextInput source="Descricao" />
        <DateInput source="DataInicio" />
        <DateInput source="DataFim" />
        <ReferenceArrayInput source="responsavel" reference="users">
          <SelectInput optionText="username" />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="Tags" reference="tags">
          <SelectArrayInput optionText="Nome" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
);
