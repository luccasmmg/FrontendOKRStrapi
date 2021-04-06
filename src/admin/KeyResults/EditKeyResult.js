import React, { FC } from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    ReferenceArrayInput,
    SelectArrayInput,
    useQuery,
    Loading,
    Error
} from 'react-admin';

const Users = ({ userId }) => {
    const { data, loading, error } = useQuery({ 
        type: 'getList',
        resource: 'users',
    });

    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!data) return null;

    return (
        <ul>
            <li>Name: {data.name}</li>
        </ul>
    )
};

export const EditKeyResult: FC = (props) => {
    return (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="objetivo" />
            <TextInput source="nome" />
        </SimpleForm>
    </Edit>
  )};
