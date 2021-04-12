import React, { FC } from 'react';
import {
    List,
    Datagrid,
    TextField,
    DeleteButton,
    useGetList,
} from 'react-admin';
import { ShowKeyResult } from './ShowKeyResult';

const Tags = ({ record }: any) => {
  const { data, loaded } = useGetList("tags");
  if (!loaded) return <span>Loading</span>
  const tagNames = loaded && record.Tags ? Object.values(data).filter(tag => record.Tags.includes(tag.id)).map(tag => tag.Nome).join(",") : "Sem tags"
  return (
    <p>{tagNames}</p>
  )
}

export const KeyResultList: FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit" expand={<ShowKeyResult />}>
      <TextField source="id" />
      <TextField label="Objetivo" source="objetivo.Nome" />
      <TextField source="nome" />
      <TextField source="descricao" />
      <TextField label="Responsável" source="responsavel.username" />
      <Tags source="Tags" />
      <DeleteButton label="Deletar" />
    </Datagrid>
  </List>
);
