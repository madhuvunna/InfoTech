import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups, fetchMembers } from '../ActionsandReducers/authActions';


const MembersPage = () => {
    const dispatch = useDispatch();
    const groups = useSelector((state) => state.groups);
    const members = useSelector((state) => state.members);
    const [selectedGroup, setSelectedGroup] = useState(null);

    useEffect(() => {
        dispatch(fetchGroups());
    }, [dispatch]);

    useEffect(() => {
        if (selectedGroup) {
            dispatch(fetchMembers(selectedGroup.id));
        }
    }, [dispatch, selectedGroup]);

    const handleGroupClick = (group) => {
        setSelectedGroup(group);
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '30%', padding: '20px' }}>
                <h2>Groups</h2>
                <ul>
                    {groups.map((group) => (
                        <li key={group.id} onClick={() => handleGroupClick(group)}>
                            {group.name}
                        </li>
                    ))}
                </ul>
                <div>
                    <button>Add</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div style={{ width: '70%', padding: '20px' }}>
                <h2>Members</h2>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member) => (
                            <tr key={member.id}>
                                <td>{member.firstName}</td>
                                <td>{member.lastName}</td>
                                <td>{member.email}</td>
                                <td>{member.mobileNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <button>Add</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MembersPage;
