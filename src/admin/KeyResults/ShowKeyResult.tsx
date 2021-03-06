import { FC } from "react"
import { Show, TextField, DateField, ReferenceManyField, DeleteButton, EditButton, Datagrid, SelectField, ReferenceField } from 'react-admin'

export const ShowKeyResult: FC = (props) => (
    <Show {...props} actions={false} >
        <ReferenceManyField label="Tarefas" reference="tarefas" target="resultado_chave">
            <Datagrid>
                <TextField source="id" />
                <DateField source="PrazoEntrega" />
                <SelectField source="status" choices={[
                    { id: "doing", name: "Fazendo"},
                    { id: "done", name: "Feito"},
                    { id: "paused", name: "Pausado"},
                    { id: "canceled", name: "Cancelado"},
                    { id: "not_started", name: "Não começado"},
                ]} />
                <TextField source="Descricao" />
                <ReferenceField label="Responsável" source="responsavel.id" reference="users">
                    <TextField source="username" />
                </ReferenceField>
                <DeleteButton label="Deletar" />
                <EditButton label="Editar" />
            </Datagrid>
        </ReferenceManyField>
    </Show>
)