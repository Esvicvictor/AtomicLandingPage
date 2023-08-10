import React from 'react'

export default function Button({text, color, radius, bgColor}) {
  return (
    <div>
      {`${text} ${color} ${radius} ${bgColor}`}
    </div>
  )
}
