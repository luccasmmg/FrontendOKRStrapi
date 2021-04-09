import React, { FC } from 'react';
import { fetchUtils, Admin as ReactAdmin, Resource, Layout } from 'react-admin';
import raStrapiRest from './ra-strapi-rest';
import authProvider from './authProvider';

import { ObjectivesList, CreateObjective, EditObjective, ShowObjective } from './Objectives';
import { KeyResultList, CreateKeyResult, EditKeyResult } from './KeyResults';
import { AssignmentList, CreateAssignment, EditAssignment } from './Assignments';
import { TagList, CreateTag, EditTag } from './Tags';
import { Login } from '../views';

import MyAppBar from './MyAppBar';
import MyDashboard from './MyDashboard';

import BASE_URL from '../config';

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

const dataProvider = raStrapiRest(`${BASE_URL}`, httpClient);

const MyLayout = props => <Layout
    {...props}
    appBar={MyAppBar}
/>;

export const Admin: FC = () => {
  return (
    <ReactAdmin layout={MyLayout} dashboard={MyDashboard} loginPage={Login} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
            name="objetivos"
            list={ObjectivesList}
            create={CreateObjective}
            edit={EditObjective}
            show={ShowObjective}
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
            name="tags"
            list={TagList}
            create={CreateTag}
            edit={EditTag}
        />
        <Resource
            name="users"
        />
    </ReactAdmin>
  );
};
