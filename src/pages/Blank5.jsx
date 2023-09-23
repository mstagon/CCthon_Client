import React, { Component } from 'react';
import axios from 'axios';

class Blank5 extends Component {


  render() {
    return (
      <div>
           <div style={{
                  margin: 20,
                  marginLeft:150,

                    }}>
        <iframe
          src="https://linkareer.com/list/recruit?filterBy_activityTypeID=5&filterBy_status=OPEN&orderBy_direction=DESC&orderBy_field=RECENT&page=1"
          width="90%"
          height="700"
        ></iframe>
      </div>
      </div>
    );
  }
}

export default Blank5;
