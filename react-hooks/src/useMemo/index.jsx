import React, { useState, useMemo } from 'react'


export default () => {
  const [a, setA] = useState(1)
  const [b, setB] = useState(2)
  // 依赖a，b 如果a+b结果不变，不会更新
  const memoValue = useMemo(() => a+b , [a, b])
  return (
    <div>
      useMemo:
      {memoValue}
    </div>
  )
}
