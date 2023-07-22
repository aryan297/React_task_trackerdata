import Button from "./Button" 

const Header = (props) => {


    const onCheck=()=>{
        console.log("first time clicked");
    }
  return (
    <header>
        <h1 style={headerStyle}>{props.title}</h1>
        <button style={{color:"white", border:"2px solid white" , borderRadius:"10px" , height:"80px", width:"100px" , backgroundColor:"black"}}>Add </button>
        <Button title="Add" color="black" buttonColor="white" height="100px" width="100px" />
        <Button title="Add" color="white" buttonColor="red" height="100px" width="100px"  onClick={onCheck}/>

    </header>
  )
}

const headerStyle={
    color:"red"
  }

export default Header