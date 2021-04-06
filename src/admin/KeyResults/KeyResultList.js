import React, { FC } from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton
} from 'react-admin';

const ListOfAssignments: FC<Props> = ({id, record, resource}) => {
    return(
      <ul>
        {record.tarefas.map(tarefa => (
            <li>
              <h3>{tarefa.id}</h3>
              <p>{tarefa.Descricao}</p>
            </li>
        ))}
      </ul>
    )
}

export const KeyResultList: FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit" expand={<ListOfAssignments />}>
      <TextField source="id" />
      <TextField source="objetivo" />
      <TextField source="nome" />
      <TextField source="descricao" />
      <TextField source="responsavel.username" />
      <DeleteButton label="Deletar" />
    </Datagrid>
  </List>
);
