import React from 'react'
import styled from 'styled-components'

const InputField = ({labelName, name, type, value, placeholder, handleInput}) => {

    const InputBox = styled.div`
        flex: 1;

        input{
            margin-top: 8px;
            width: 100%;
            height: 40px;
            font-size: 16px;
            outline: none;
            border: 1px solid #DFEAF2;
            border-radius: 15px;
            padding-inline: 12px;
            

            &::-webkit-input-placeholder {
                font-size: 15px;
                color: #718EBF;
            }

            @media(max-width: 520px){
                font-size: 14px;

                &::-webkit-input-placeholder {
                font-size: 12px;
                color: #718EBF;
            }
            }
        }

        label{
            @media(max-width: 520px){
                font-size: 14px;
            }
        }

        @media(max-width: 520px){
            margin-top: 4px;
        }
    `;

  return (
    <InputBox>
        <label htmlFor={name}>{labelName}</label> <br />
        <input 
            type={type} 
            name={name} 
            value={value} 
            onChange={handleInput} 
            placeholder={placeholder}
        />
    </InputBox>
  )
}

export default InputField