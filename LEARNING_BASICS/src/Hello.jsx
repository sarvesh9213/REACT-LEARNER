function Hello () {
  let myname = "sarvesh";
  let age = ()=> {
    return 500/250*10 ;
  }
  // let fullname = () => {
  //   return 'sarvesh kumar';
  // }
  function fullname() {
    return 'sarvesh pandey';
  }
  return <h3>
    this is ur master {fullname()} and my age is {age()}</h3>;
    
}
export default Hello;