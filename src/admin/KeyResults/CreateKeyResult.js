import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceArrayInput,
    SelectArrayInput,
    SelectInput,
} from 'react-admin';

export const CreateKeyResult = (props) => (
  <Create {...props}>
    <SimpleForm>
        <TextInput source="nome" />
        <TextInput source="descricao" />
        <ReferenceArrayInput source="responsavel" reference="users">
            <SelectInput optionText="username" />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="objetivo" reference="objetivos">
            <SelectInput optionText="Nome" />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="Tags" reference="tags">
          <SelectArrayInput optionText="Nome" />
        </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
