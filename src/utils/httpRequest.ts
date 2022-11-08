export const Get = async (url: string, headers: Headers)=>{
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
}

interface postData { 
    headers: Headers,
    body : FormData
}

export const Post = async (url: string, { headers, body }:postData) => {
    
    const requestConfig = {
        method: "POST",
        body,
        headers
    }

    const response = await fetch(url, requestConfig)
    
    
    return response;

}