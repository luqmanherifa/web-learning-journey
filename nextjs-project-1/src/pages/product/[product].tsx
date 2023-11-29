import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { fetcher } from '@/lib/swr/fetcher';
import DetailProduct from '@/views/DetailProduct';
import { ProductType } from '@/types/product.type';

const DetailProductPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();

  // Client-Side Rendering
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${query.product}`,
  //   fetcher
  // );

  return (
    <div>
      {/* Client-Side Rendering */}
      {/* <DetailProduct product={isLoading ? {} : data.data} /> */}

      {/* Server-Side Rendering */}
      <DetailProduct product={product} />
    </div>
  )
}

export default DetailProductPage

export async function getServerSideProps({ params }: { params: { product: string } }) {
  const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
  const response = await res.json();

  return {
    props: {
      product: response.data
    }
  }
}