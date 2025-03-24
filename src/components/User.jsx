export const User = (props) =>{
    const name = <h1>{props.name}</h1>;
    const age = <h1>{props.age}</h1>;
    const email = <h1>{props.email}</h1>;
    return(
      <div>      
        {name}
        {age}
        {email}
      </div>);
  }