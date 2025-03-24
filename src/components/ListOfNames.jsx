export const ListOfNames = () => {
    const names = ['Shine', 'Gundi', 'Dudulu Baya', 'Pupulu', 'Dusta Gundi'];
    return(<div>{names.map((name, key)=>{
        return <h1 key={key}> {name} </h1>
    })}</div>);
}