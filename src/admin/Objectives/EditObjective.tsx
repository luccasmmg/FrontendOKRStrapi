import React, { FC } from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    NumberInput,
    ReferenceInput,
    SelectArrayInput
} from 'react-admin';

export const EditObjective: FC = (props) => (
    <Edit {...props} title="Editar Objetivo">
      <SimpleForm>
        <TextInput source="Nome" />
        <TextInput source="Descricao" />
        <DateInput source="DataInicio" />
        <DateInput source="DataFim" />
      </SimpleForm>
    </Edit>
);
