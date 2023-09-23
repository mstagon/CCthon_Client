import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blank5 = () => {
  return (
    <div>
      <iframe
        src="https://linkareer.com/list/recruit?filterBy_activityTypeID=5&filterBy_status=OPEN&orderBy_direction=DESC&orderBy_field=RECENT&page=1"
        width="80%"
        height="500"
      ></iframe>
    </div>
  );
};

export default Blank5;