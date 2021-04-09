import React, { FC } from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    ReferenceInput,
    SelectInput,
} from 'react-admin';

export const CreateAssignment: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
        <DateInput source="PrazoEntrega" />
        <SelectInput source="status" choices={[
          { id: "doing", name: "Fazendo"},
          { id: "done", name: "Feito"},
          { id: "paused", name: "Pausado"},
          { id: "canceled", name: "Cancelado"},
          { id: "not_started", name: "Não começado"},
        ]} />
        <TextInput multiline source="Descricao" />
        <ReferenceInput source="responsavel" reference="users">
            <SelectInput optionText="username" />
        </ReferenceInput>
        <ReferenceInput source="resultado_chave" reference="resultado-chaves">
            <SelectInput optionText="nome" />
        </ReferenceInput>
    </SimpleForm>
  </Create>
);
