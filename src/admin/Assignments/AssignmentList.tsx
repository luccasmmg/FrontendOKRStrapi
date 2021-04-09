import React, { FC } from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    DeleteButton,
    SelectField,
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
      <TextField label="Responsável" source="responsavel.username" />
      <DeleteButton label="Deletar" />
    </Datagrid>
  </List>
);
