import { Button } from '@/components/ui/button';

export default async function ProductsPage(
  props
) {
    return (
      <div><Button>Click me</Button>Hello World! {(await props.searchParams).q}</div>
  );
}
