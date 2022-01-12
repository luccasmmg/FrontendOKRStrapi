import React, { FC } from "react"; 
import {
    List,
    Datagrid,
    TextField,
    DateField,
    DeleteButton,
    ReferenceField,
} from 'react-admin';
import { ShowObjective } from "./ShowObjective";
import { Tags } from "./Tag";

export const ObjectivesList: FC = (props) => (
    <List {...props}>
      <Datagrid expand={<ShowObjective />} rowClick="edit">
        <TextField source="id" />
        <TextField source="Nome" />
        <TextField source="Descricao" />
        <DateField source="DataInicio" />
        <DateField source="DataFim" />
        <ReferenceField label="Responsável por objetivo" source="responsavelObjetivo" reference="users">
          <TextField source="username" />
        </ReferenceField>
        <Tags source="Tags" />
        <DeleteButton label="Deletar" />
      </Datagrid>
    </List>
);
