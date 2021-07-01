import React from 'react'
import MeetupItem from './MeetupItem'
import styles from './MeetupList.module.css'

const MeetupList = (props) => {
    return (
        <ul className={styles.list}>
            {props.meetups.map(meetup => (
                <MeetupItem 
                    key={meetup._id} 
                    id={meetup._id} 
                    image={meetup.image} 
                    title={meetup.title} 
                    address={meetup.address} 
                    description={meetup.description}   
                    />
            ))}
        </ul>
    )
}

export default MeetupList
