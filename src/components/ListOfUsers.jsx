export const ListOfUsers = () =>{
    const users = [{ name: "Shine", age: 10 },{  name: "Gundi", age: 15 },{  name: "Pupulu", age: 20 }];    
    return(<div>
        {users.map((user, key) => {
            return <h1 key={key}>{user.name} {user.age}</h1>
        })}
    </div>);
}