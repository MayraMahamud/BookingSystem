export const fetchRooms = async () => {
    const response = await fetch(`${"https://localhost:7195/cinema/rooms"}`);
    return response.json();
};


