// src/components/ui/button.js
const Button = ({ children, className, ...props }) => (
    <button className={`px-4 py-2 ${className}`} {...props}>
      {children}
    </button>
  );
  
  export default Button;