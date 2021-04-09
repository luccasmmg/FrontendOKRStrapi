import React, { FC } from 'react';
import ChatBubbleIcon  from '@material-ui/icons/ChatBubble';
import {
    Edit,
    SimpleForm,
    TextInput,
    Button,
    Link,
} from 'react-admin';

const AddAssignmentButton = ({ record }: any) => (
  <Button
    component={Link}
    to={{
      pathname: "/tarefas/create",
      state: { record: { resultado_chave: record.id } }
    }}
    label="Adicionar tarefa"
    >
      <ChatBubbleIcon />
    </Button>

)

export const EditKeyResult: FC = (props) => {
    return (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="objetivo" />
            <TextInput source="nome" />
            <AddAssignmentButton source="id" />
        </SimpleForm>
    </Edit>
  )};
