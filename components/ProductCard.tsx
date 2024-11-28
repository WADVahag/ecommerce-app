type ProductCardProps = {
    title: string;
    price: number;
    description: string;
  };
  
  export default function ProductCard({ title, price, description }: ProductCardProps) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <strong>${price}</strong>
      </div>
    );
  }
  