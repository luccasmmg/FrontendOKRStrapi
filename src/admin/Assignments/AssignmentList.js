import React, { FC } from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    DeleteButton,
} from 'react-admin';

export const AssignmentList: FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="PrazoEntrega" />
      <TextField source="status" />
      <TextField source="Descricao" />
      <TextField source="responsavel.username" />
      <DeleteButton label="Deletar" />
    </Datagrid>
  </List>
);
