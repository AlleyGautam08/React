export default function Product(){
     // const products = ["Laptop", "Phone", "Modem"];
     const products = [{id:1, name:"laptop", price:50000},{id:12, name:"phone", price:5000},{id:17, name:"charger", price:500},{id:18, name:"cover", price:50} ]
     const productlist =products.map((product) => <h3 key={product.id}>{product.name}: ${product.price}</h3>);
     return(
          <div>
              {productlist}
          </div>
     );
}