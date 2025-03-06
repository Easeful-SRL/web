import { Button } from '@/components/ui/button';
import TestClient, { testClient } from '@/components/testClient';

export default async function ProductsPage(props) {
  return (
    <div>
      <Button>Click me</Button>Hello World! {(await props.searchParams).q}
      <TestClient/>
    </div>
  );
}
