'use client' // 에러 컴포넌트는 클라이언트 컴포넌트로 만들어야합니다.
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // 세그먼트를 재 렌더링 하여 복구를 시도합니다.
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}