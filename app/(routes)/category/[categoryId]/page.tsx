import getProducts from "@/actions/get-prodcts";

interface CategoryProps {
    params: {
        categoryId: string
    },
    searchParams: {
        colorId: string;
        sizeId: string
    }
}

const CategoryPage: React.FC<CategoryProps> = async ({
    params,
    searchParams
}) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })

  return (
    <div>
      
    </div>
  )
}

export default CategoryPage
