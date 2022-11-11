import React from "react";
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomName) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((room) => room.name !== roomName)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({ ...house, rooms:[...house.rooms, room]});
    
    
    
    return (
        <div>
            <h1>{house.name}</h1>
            <ul>
            {house.rooms.map((room, index) => (
            <li key={index}>
                <label> {`${room.name} Area: ${room.area}`}</label>
                <button onClick={(e) => deleteRoom(room.name)}>Delete</button>
                </li>
                ))}
        </ul>
           
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );

};