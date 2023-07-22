
import PropTypes from 'prop-types'
const Button = ({color , buttonColor ,title ,height, width,onClick}) => {


  return (
  <button  onClick={onClick} style={{backgroundColor:color ,color:buttonColor , height:height, width:width}}>{title}
  </button>
  )
}

Button.defualtProps={
    color:"blue"
}

Button.prototypes={
    title:PropTypes.string,
    color:PropTypes.string
}

export default Button