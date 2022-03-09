import React from 'react'
 
class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     movies: [ "Star Wars", "Return of the Jedi", "Empire Strikes Back" ]
   }
 }
 
 render() {
   return (
     <div>
       {this.state.movies.map(movie => {
         return (
           <div key={movie}>
             {movie}
           </div>
         )
       })}
     </div>
   )
 }
}
 
export default App;