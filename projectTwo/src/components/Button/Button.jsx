/* eslint-disable react/prop-types */
import './button.css'

const Button = ({isOutline,icon,text}) => {
  return (
    <button className={isOutline ? "outline_btn" : "primary_btn"}>
      
      {icon}
      {text}
    </button>
  )
}

export default Button
