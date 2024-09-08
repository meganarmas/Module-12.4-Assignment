import React, { useCallback } from "react";

const UserSelector = ({ users, onUserSelect }) => {
    
    const handleUserSelect = useCallback((event) => {
        onUserSelect(Number(event.target.value));
    }, [onUserSelect]);

    return (
        <select onChange={handleUserSelect}>
            <option value="">Select user</option>
            {users.map((user) => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ))}
        </select>
    );
};

export default UserSelector