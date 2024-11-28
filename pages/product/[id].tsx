import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Product } from '../../types';

const ProductPage = ({ product }: { product: Product }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <div className="flex">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="object-cover rounded-xl shadow-lg"
          priority // Устанавливаем приоритет для изображений, чтобы они загружались раньше
        />
        <div className="ml-8">
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">{product.price} ₽</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/products/${params?.id}`);
  const product = await res.json();

  return { props: { product } };
};

export default ProductPage;
