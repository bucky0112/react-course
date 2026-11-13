import { NavLink } from 'react-router'
import { useCartStore } from '../store/cartStore'
import { useFavoriteStore } from '../store/favoriteStore'

const Header = () => {
  const navClassName = ({ isActive }) => {
    return isActive ? 'nav-item on' : 'nav-item'
  }

  const items =useCartStore((state) => state.items)
  const favoriteCount = useFavoriteStore((state) => state.favoriteCount)
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    // 在這個區塊中判斷條件都是寫三元運算子或是 &&
    <header className='header'>
      <h1>好物選品店</h1>
      <nav>
        <NavLink to='/' className={navClassName}>
          首頁
        </NavLink>
        <NavLink to='/products' className={navClassName}>
          商品
        </NavLink>
        <NavLink to='/about' className={navClassName}>
          關於
        </NavLink>
        <NavLink to='/cart' className={navClassName}>
          購物車頁面
        </NavLink>
      </nav>
      <span>購物車：{count}</span>
      <span>收藏數量：{favoriteCount}</span>
    </header>
  )
}

export default Header
