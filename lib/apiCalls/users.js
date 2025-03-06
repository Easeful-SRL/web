import { apiFetch } from '@/lib/utils/api.js';

const getUserInfo = async () => {
  return await apiFetch({ options: { service: 'users', method: 'GET' } });
}

const login = async ({ timeout = false, ...details }) => {
  const options = {
    service: 'auth',
    method: 'POST',
    body: JSON.stringify(details),
    credentials: 'include',
    timeout,
  };

  return await apiFetch({ options });
};

export { getUserInfo };