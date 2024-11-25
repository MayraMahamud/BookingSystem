export const fetchRooms = async () => {
    const response = await fetch(`${"https://localhost:7195/cinema/rooms"}`);
    return response.json();
};


/*export const AddBooking = async (booking) => {
    console.log(booking)
    booking.Id=1
   
   
    try{
    const response = await fetch(`${"https://boolean-uk-api-server.fly.dev/MayraMahamud/post"}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',}, 
            body: JSON.stringify(post),
        });
        if(!response.ok){
            throw new Error('Failed creating post');
        }
        const data =await response.json();
        return data;
    }
    catch (error) {
        console.error('error', error);
        throw error;
    }
       
    };
*/