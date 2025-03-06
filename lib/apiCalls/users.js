import { apiFetch } from '@/lib/utils/api.js';

const getUserInfo = async () => {
  return await apiFetch({ options: { service: 'users', method: 'GET' } });
}

export { getUserInfo };