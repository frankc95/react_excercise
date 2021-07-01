import React from 'react'
import MeetupList from '../components/meetups/MeetupList'

import data from '../components/data/data'

const AllMeetups = () => {
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={data} />
        </section>
    )
}

export default AllMeetups
