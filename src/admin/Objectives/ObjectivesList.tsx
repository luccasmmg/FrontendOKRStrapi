import React, { FC } from 'react';
import { KeyResultList } from '../KeyResults'
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
} from 'react-admin';

export const ObjectivesList: FC = (props) => (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="Nome" />
        <TextField source="Descricao" />
        <DateField source="DataInicio" />
        <DateField source="DataFim" />
        <TextField label="Responsável por objetivo" source="responsavel.username" />
        <EditButton />
      </Datagrid>
    </List>
);
