import BASE_URL from "../config";

type loginFormType = {
  username: string;
  password: string;
};

const authProvider = {
  login: ({ username, password }: loginFormType) => {
    let formData = new FormData();
    formData.append('identifier', username);
    formData.append('password', password);
    const request = new Request(`${BASE_URL}/auth/local`, {
      method: 'POST',
      body: formData,
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        console.log(response.json())
        return response.json();
      })
      .then(({ jwt, user }) => {
        localStorage.setItem('token', jwt);
        localStorage.setItem('permissions', user.role.roleName);
      });
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    return Promise.resolve("/login");
  },
  checkError: (error: { status: number }) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    const role = localStorage.getItem('permissions')
    return role ? Promise.resolve(role) : Promise.reject();
  },
};

export default authProvider;
