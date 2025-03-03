import { Button } from '@/components/ui/button';

export default async function ProductsPage(
  props: {
    searchParams: Promise<{ q: string; offset: string }>;
  }
) {
    return (
      <div><Button>Click me</Button>Hello World! {(await props.searchParams).q}</div>
  );
}
