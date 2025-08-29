import { macs } from "../data";
export default function Macs() {
  return (
    <div>
      {macs.map((product: any) => {
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
