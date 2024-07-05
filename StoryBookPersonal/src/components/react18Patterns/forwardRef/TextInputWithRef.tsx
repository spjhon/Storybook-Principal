import { forwardRef, InputHTMLAttributes } from 'react';

const TextInputWithRef = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    return <input ref={ref} type="text" {...props} />;
  });
  
  export default TextInputWithRef;