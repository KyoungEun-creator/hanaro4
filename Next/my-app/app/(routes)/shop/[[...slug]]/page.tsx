type TParams = {
  params: {
    slug: string[];
  };
};

export default function ShopSlug({ params: { slug } }: TParams) {
  return <>Slug: {JSON.stringify(slug)}</>;
}
