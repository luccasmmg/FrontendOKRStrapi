import React, { FC } from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    DateInput,
} from 'react-admin';

export const EditAssignment: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
        <DateInput source="PrazoEntrega" />
        <SelectInput source="status" choices={[
          { id: "doing", name: "Fazendo"},
          { id: "done", name: "Feito"},
          { id: "paused", name: "Pausado"},
          { id: "canceled", name: "Cancelado"},
          { id: "not_started", name: "Não começado"},
        ]} />
        <TextInput source="Descricao" />
        <TextInput source="responsavel.username" />
    </SimpleForm>
  </Edit>
);
