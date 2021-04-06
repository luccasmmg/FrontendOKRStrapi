import SelectInput from '@material-ui/core/Select/SelectInput';
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
        <SelectInput source="status" choices={[
          { id: "doing", name: "Fazendo"},
          { id: "done", name: "Feito"},
          { id: "paused", name: "Pausado"},
          { id: "canceled", name: "Cancelado"},
          { id: "not_started", name: "Não começado"},
        ]} />
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
