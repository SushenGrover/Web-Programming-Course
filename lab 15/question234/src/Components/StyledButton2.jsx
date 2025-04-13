import React from 'react'

const StyledButton2 = () => {
  const style1=`
  button{
  background-color:skyblue;
  padding:5px;
  font-size:10px;
  }
  `;
    return (
    <div>
        <style>{style1}</style>
        <button>Button2</button>
    </div>
  )
}

export default StyledButton2