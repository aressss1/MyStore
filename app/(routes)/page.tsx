import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-prodcts";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard('c1c6d389-c23d-48a0-9b57-293f3f354862')
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>
      <div className="space-y-10 pb-10 " >
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-6" >
          <ProductList
            title="Featured Products"
            items={products}
          />
        </div>
      </div>
    </Container>
  )
}
