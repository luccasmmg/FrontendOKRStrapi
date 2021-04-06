import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
} from 'react-admin';

export const EditObjective = (props) => (
    <Edit {...props} title="Editar Objetivo">
      <SimpleForm>
        <TextInput source="Nome" />
        <TextInput source="Descricao" />
        <DateInput source="DataInicio" />
        <DateInput source="DataFim" />
      </SimpleForm>
    </Edit>
);
