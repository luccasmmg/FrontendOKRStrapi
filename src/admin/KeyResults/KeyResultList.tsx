import React, { FC } from 'react';
import {
    List,
    Datagrid,
    TextField,
    DeleteButton,
    useGetList,
    ReferenceField,
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
      <ReferenceField label="Objetivo" source="objetivo" reference="objetivos">
        <TextField source="Nome" />
      </ReferenceField>
      <TextField source="nome" />
      <TextField source="descricao" />
      <ReferenceField label="Responsável" source="responsavel" reference="users">
        <TextField source="username" />
      </ReferenceField>
      <Tags source="Tags" />
      <DeleteButton label="Deletar" />
    </Datagrid>
  </List>
);
