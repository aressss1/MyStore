import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-prodcts";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalide = 0

export default async function  HomePage() {
  //get the billboard Id
  const billboard = await getBillboard('22')
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>
        <div className="space-y-10 pb-10 " >
            <Billboard data={billboard} />
        </div>
        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-6" >
            <ProductList 
              title="Featured Products" 
              items={products}
              />
        </div>
    </Container>
  )
}
