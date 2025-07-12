import React, { useState } from 'react'

export default function FilterBar({ onFilter }) {
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [keyword, setKeyword] = useState('')

  const apply = () => {
    onFilter({ category, location, price, keyword })
  }

  return (
    <div className="flex space-x-4 mb-4">
      <select value={category} onChange={e=>setCategory(e.target.value)} className="input">
        <option value="">全部類別</option>
        <option value="strength">重量訓練</option>
        <option value="cardio">有氧</option>
        <option value="yoga">瑜伽</option>
      </select>
      <select value={location} onChange={e=>setLocation(e.target.value)} className="input">
        <option value="">全部地區</option>
        <option value="taipei">台北</option>
        <option value="taichung">台中</option>
      </select>
      <select value={price} onChange={e=>setPrice(e.target.value)} className="input">
        <option value="">價格範圍</option>
        <option value="0-100">0–100</option>
        <option value="100-200">100–200</option>
      </select>
      <input
        type="text" placeholder="搜尋教練"
        value={keyword} onChange={e=>setKeyword(e.target.value)}
        className="input flex-grow"
      />
      <button onClick={apply} className="btn-secondary">篩選</button>
    </div>
  )
}
