import { Link } from 'react-router'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    document.title = '關於我們'
  }, [])

  return (
    <div>
      <h2>這是關於頁面</h2>
      <Link to='/'>回到首頁</Link>
    </div>
  )
}

export default About
