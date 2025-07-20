function Random(){
 let Number = Math.random()*100;
 return <h1 style={{'background-color': "green"}}>
    this is random number {Math.round(Number)} </h1>
}
export default Random;