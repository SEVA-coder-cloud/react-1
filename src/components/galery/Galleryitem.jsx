export default function GalleryItem({title, price, author, quantity, url}) {
  return(<>
      <img src={url} alt={title} width={300}/>
      <h2>{title}</h2>
      <p>price: {price}</p>
      <p>quantity {quantity}</p>
  </>)
}
