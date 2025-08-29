import { ipads } from "../data";
export default function Ipad() {
  return (
    <div>
      {ipads.map((product: any) => {
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
