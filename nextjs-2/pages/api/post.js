import React from 'react'

const handler = (req, res) => {
  res.status(200)
  res.json({
    message: 'Ini testing post.'
  })
}

export default handler