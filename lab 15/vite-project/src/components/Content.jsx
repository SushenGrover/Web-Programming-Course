import React from 'react'

const Content = (props) => {
  return (
    <div>
        <p>{props.getJoke()}</p>
    </div>
  )
}

export default Content