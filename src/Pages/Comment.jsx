import React from 'react'
import Button from '../components/Button'

export default function Comment() {
  return (
    <div>
        <h1>Hello Commenters</h1>
        <p>Click on the link below to</p>
      <Button 
      text = "Comment here"
      color = "text-[#3e45ff]"
      bgColor = "bg-[#444444]"
      radius ="rounded"
      />
    </div>
  )
}
