import React, { FC } from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    DeleteButton,
    SelectField,
    ReferenceField,
} from 'react-admin';

export const AssignmentList: FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="PrazoEntrega" />
      <SelectField source="status" choices={[
        { id: "doing", name: "Fazendo"},
        { id: "done", name: "Feito"},
        { id: "paused", name: "Pausado"},
        { id: "canceled", name: "Cancelado"},
        { id: "not_started", name: "Não começado"},
      ]} />
      <TextField source="Descricao" />
      <ReferenceField label="Resultado Chave" source="resultado_chave" reference="resultado-chaves">
        <TextField source="nome" />
      </ReferenceField>
      <TextField label="Responsável" source="responsavel.username" />
      <DeleteButton label="Deletar" />
    </Datagrid>
  </List>
);
