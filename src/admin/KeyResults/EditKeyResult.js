import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const EditKeyResult = (props) => {
    return (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="objetivo" />
            <TextInput source="nome" />
        </SimpleForm>
    </Edit>
  )};
