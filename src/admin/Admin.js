import React, { FC } from 'react';
import { fetchUtils, Admin as ReactAdmin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-strapi-rest';
import authProvider from './authProvider';

import { ObjectivesList, CreateObjective, EditObjective } from './Objectives';
import { KeyResultList, CreateKeyResult, EditKeyResult } from './KeyResults';
import { AssignmentList, CreateAssignment, EditAssignment } from './Assignments';

const httpClient = (url: any, options: any) => {
  if (!options) {
    options = {};
  }
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider('', httpClient);

export const Admin: FC = () => {
  return (
    <ReactAdmin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
            name="objetivos"
            list={ObjectivesList}
            create={CreateObjective}
            edit={EditObjective}
        />
        <Resource
            name="resultado-chaves"
            list={KeyResultList}
            create={CreateKeyResult}
            edit={EditKeyResult}
        />
        <Resource
            name="tarefas"
            list={AssignmentList}
            create={CreateAssignment}
            edit={EditAssignment}
        />
        <Resource
            name="users"
        />
    </ReactAdmin>
  );
};
