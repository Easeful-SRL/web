"use client"
import { Button } from '@/components/ui/button';
import { apiFetch } from '@/lib/utils/api.js';
import { getUserInfo } from '@/lib/apiCalls/users.js';

export default function TestClient(props) {
  const buttonClick = async () => {
    const response  = await getUserInfo();
    console.log('Users api: ', response);
  };
  return (
    <div>
      <Button onClick={buttonClick}>Test Api</Button>
    </div>
  );
}
