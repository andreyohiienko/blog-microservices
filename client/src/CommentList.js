import React from 'react'

const CommentList = ({ comments }) => {
  const rendredComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>
  })

  return <ul>{rendredComments}</ul>
}

export default CommentList
