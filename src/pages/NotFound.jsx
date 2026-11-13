import { useEffect } from 'react'

const NotFound = () => {
  useEffect(() => {
    document.title = '404'
  }, [])

  return (
    <div>
      <h2>頁面不存在</h2>
    </div>
  )
}

export default NotFound
