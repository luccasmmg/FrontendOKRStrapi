import React, { FC } from 'react';
import { KeyResultList } from '../KeyResults'
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
} from 'react-admin';

export const ObjectivesList: FC = (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="Nome" />
        <TextField source="Descricao" />
        <DateField source="DataInicio" />
        <DateField source="DataFim" />
        <TextField label="Responsável por objetivo" source="responsavel.username" />
        <DeleteButton label="Deletar" />
      </Datagrid>
    </List>
);
