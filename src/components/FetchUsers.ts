export async function Images(input: string) {
    const ApiKey = 'XSQ4puS00fz6lIn44t-LsHzIzeIkk09Ah_o36i5Q3UY';
    const response = await fetch((input ? `https://api.unsplash.com/search/photos?client_id=XSQ4puS00fz6lIn44t-LsHzIzeIkk09Ah_o36i5Q3UY&query=${input}` : "https://api.unsplash.com/photos?client_id=XSQ4puS00fz6lIn44t-LsHzIzeIkk09Ah_o36i5Q3UY"),{
        headers: {
            Authorization: `Client-ID ${ApiKey}`,}
    });

    const images = await response.json();
    localStorage.setItem("images", JSON.stringify(images))
    
    return images
}
