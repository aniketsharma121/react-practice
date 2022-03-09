import React from 'react';

class HideCompo extends React.Component {
  // constructor() {
  //   super()
    
  // }
  
  render() {
    console.log(this.props);
    return (
      <>
        {
          this.props.count !== 3 ? <h2>It will be hidden on count 3</h2> : null
        }

        {
          this.props.count !== 5 ? <h2>It will be hidden on count 5</h2> : null
        }

        {
          this.props.count !== 10 ? <h2>It will be hidden on count 10</h2> : null
        }

      </>
    )
  }
}
export default HideCompo;