import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '../style/MyCalender.css'
import * as events from "events";

// const MyCalender = () => {
//     return <div>This is Blank page4</div>;
// };
//
// export default MyCalender;

class MyCalendar extends Component {

    constructor(props){
        super(props);
    }

    dateClick=(info)=>{
    const clickedDate = info.dateStr;
    const clickedEvent = this.props.events.find(event => event.date === clickedDate);

}
    render() {
        return (
          <div className="MyCalender">
              <div style={{
                  margin: 20,
                  marginLeft:50,
                  color:"#AFBDD1",
                  fontSize:11,
                  backgroundColor: "#212936",

                    }}>
            <FullCalendar
                 plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                    initialView={'dayGridMonth'}
                    headerToolbar={
                        {
                            start: 'prev,today',
                            center: 'title',
                            end: 'next'
                        }
                    }
                 firstDay={1}
                 height={"80vh"}
                 dateClick = {this.dateClick}
                events={[
                    {title: 'LG 공고', date: '2023-10-23',color:'#111111' },
                    {title : '삼성전자 공고', start:'2023-09-05', end:'2023-09-14', color:'#b1aee5'},
                ]}
                 editable={true}
            />
              </div>
          </div>
        );
    }
}

export default MyCalendar;

