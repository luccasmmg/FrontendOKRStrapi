import React, { FC } from 'react';
import {
    List,
    Datagrid,
    TextField,
    DeleteButton,
} from 'react-admin';

export const TagList: FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="Nome" />
      <DeleteButton label="Deletar" />
    </Datagrid>
  </List>
);
