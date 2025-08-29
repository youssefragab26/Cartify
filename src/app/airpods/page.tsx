import { airpods } from "../data";
export default function AirPods() {
  return (
    <div>
      {airpods.map((product: any) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <h1>{product.id}</h1>
          </div>
        );
      })}
    </div>
  );
}
