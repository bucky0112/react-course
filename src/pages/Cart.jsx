import { useCartStore } from '../store/cartStore'

const Cart = () => {
  const items = useCartStore((state) => state.items)
  const count = items.reduce((sum, i) => sum + i.qty, 0)
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0)

  return (
    <div>
      <h2>購物車</h2>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.title} x {i.qty}
          </li>
        ))}
      </ul>
      <p>總數量：{count}</p>
      <p>總金額：{total}</p>
    </div>
  )
}

export default Cart
