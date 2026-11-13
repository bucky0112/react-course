import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useCartStore } from '../store/cartStore'
import { useFavoriteStore } from '../store/favoriteStore'

const ProductCard = ({ title, price, thumbnail, id }) => {
  const [liked, setLiked] = useState(false)
  const navigate = useNavigate()
  const add = useCartStore((state) => state.add)
  const addFavorite = useFavoriteStore((state) => state.addFavorite)

  const handleFavorite = () => {
    addFavorite()
    setLiked(!liked)
  }

  return (
    <div className='card'>
      <img
        src={thumbnail}
        alt={title}
        onClick={() => navigate(`/product/${id}`)}
      />
      <h3>{title}</h3>
      <p className='price'>${price}</p>
      <div className='card-actions'>
        <button onClick={() => add({ id, title, price, thumbnail })}>加入購物車</button>
        <button onClick={handleFavorite}>
          {liked ? '♥ 已收藏' : '♡ 收藏'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
