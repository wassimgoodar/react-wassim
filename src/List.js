import React, {Component} from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {   
  return(
  <div>
      {props.contacts.map(c => <Contact key={c.id} name={c.name})};
  </div>
  )
  }
}

export default List;
