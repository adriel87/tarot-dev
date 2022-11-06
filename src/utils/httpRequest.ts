export const Get = async (url: string)=>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

interface postData { 
    headers: Headers,
    body : FormData
}

export const Post = async (url: string, { headers, body }:postData) => {
    console.log('holi');
    
    const requestConfig = {
        method: "POST",
        body,
        headers
    }

    const response = await fetch(url, requestConfig)
    
    const data = await response.json()
    
    return data;

}