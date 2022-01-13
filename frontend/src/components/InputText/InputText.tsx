import React from 'react';
import { InputTextWrapper } from './InputTextStyle';

interface Props {
  value?: string;
  onChange?: (e: any) => any;
  onBlur?: (e: any) => any;
  placeholder?: string;
  style?: React.CSSProperties;
  type?: string;
  maxlength?: string;
}

const InputText = (props: Props) => {
  return (
    <InputTextWrapper>
      <input
        type={props.type}
        style={props.style}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.maxlength && (
        <div className="max_length_place">
          <span>{props.maxlength}</span>
        </div>
      )}
    </InputTextWrapper>
  );
};

export default InputText;
