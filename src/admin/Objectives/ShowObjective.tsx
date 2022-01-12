import { FC } from "react"
import { Show, TextField, ReferenceManyField, DeleteButton, EditButton, Datagrid, ReferenceField } from 'react-admin'
import { Tags } from './Tag'

export const ShowObjective: FC = (props) => {
    return(<Show {...props} actions={false} >
        <ReferenceManyField label="Resultados Chaves" reference="resultado-chaves" target="objetivo" source="id">
            <Datagrid>
                <TextField source="nome" />
                <TextField source="descricao" />
                <ReferenceField label="Objetivo" source="objetivo" reference="objetivos">
                    <TextField source="Nome" />
                </ReferenceField>
                <ReferenceField label="Responsável" source="responsavel" reference="users">
                    <TextField source="username" />
                </ReferenceField>
                <Tags source="Tags" />
                <DeleteButton label="Deletar" />
                <EditButton label="Editar" />
            </Datagrid>
        </ReferenceManyField>
    </Show>)
}