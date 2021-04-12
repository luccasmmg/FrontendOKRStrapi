import BASE_URL from '../config'

export const isAuthenticated = () => {
  const permissions = localStorage.getItem('token');
  if (!permissions) {
    return false;
  }
  return true;
};

/**
 * Login to backend and store JSON web token on success
 *
 * @param identifier
 * @param password
 * @returns JSON data containing access token on success
 * @throws Error on http errors or failed attempts
 */
export const login = async (email: string, password: string) => {
  // Assert email or password is not empty
  if (!(email.length > 0) || !(password.length > 0)) {
    throw new Error('Email or password was not provided');
  }
  const formData = new FormData();
  // OAuth2 expects form data, not JSON data
  formData.append('identifier', email);
  formData.append('password', password);

  const request = new Request(`${BASE_URL}/auth/local`, {
    method: 'POST',
    body: formData,
  });

  const response = await fetch(request);

  if (response.status === 500) {
    throw new Error('Internal server error');
  }

  const data = await response.json();

  if (response.status > 400 && response.status < 500) {
    if (data.detail) {
      throw data.detail;
    }
    throw data;
  }

  if ('jwt' in data && "user" in data) {
    localStorage.setItem('token', data['jwt']);
    localStorage.setItem('permissions', data["user"]["role"]["name"]);
  }

  return data;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('permissions');
};
