export default function CategoryCard({cat}){
  return (<div>
    <img src={cat.image} width="200"/>
    <h3>{cat.name}</h3>
    <p>{cat.item_count} items</p>
  </div>);
}