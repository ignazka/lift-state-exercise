import React from 'react';

const Input = ({getTextFromInputMethod}) => {

    const [inputValue, setInputValue] = React.useState('')
    const onChangeInput = ({target}) => {
        console.log(target)
        setInputValue(target.value)
    }

  return <div className='Input'>
      <form onSubmit={(event) => {
        event.preventDefault();
        getTextFromInputMethod(inputValue)}} >
      <input type="text" value={inputValue} onChange={onChangeInput} placeholder="Write on me, like your french girls!"/>
      <button type='submit' >Send Input</button>
      </form>

  </div>;
};

export default Input;
