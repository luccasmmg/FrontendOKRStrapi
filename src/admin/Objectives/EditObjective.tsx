import ChatBubbleIcon  from '@material-ui/icons/ChatBubble';
import React, { FC } from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    Button,
    Link,
} from 'react-admin';

const AddNewKeyResultButton = ({ record }: any) => (
  <Button
    component={Link}
    to={{
      pathname: "/resultado-chaves/create",
      state: { record: { objetivo: record.id } }
    }}
    label="Adicionar resultado chave"
    >
      <ChatBubbleIcon />
    </Button>

)

export const EditObjective: FC = (props) => (
    <Edit {...props} title="Editar Objetivo">
      <SimpleForm>
        <TextInput source="Nome" />
        <TextInput source="Descricao" />
        <DateInput source="DataInicio" />
        <DateInput source="DataFim" />
        <AddNewKeyResultButton source="id" />
      </SimpleForm>
    </Edit>
);
