import { Link } from 'react-router'

const Home = () => { 
  return (
    <div className='home'>
      <h1>這是首頁</h1>
      <Link to='/products'>我要去看商品</Link>
      <Link to='/about'>關於我們</Link>
    </div>
  )
}

export default Home