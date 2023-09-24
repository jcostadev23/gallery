export async function Users() {
    const ApiKey = 'XSQ4puS00fz6lIn44t-LsHzIzeIkk09Ah_o36i5Q3UY';
    const response = await fetch("https://api.unsplash.com/photos/random?count=10",{
        headers: {
            Authorization: `Client-ID ${ApiKey}`,}
    });
    const users = await response.json();
    localStorage.setItem("users", JSON.stringify(users))
    return users
}
