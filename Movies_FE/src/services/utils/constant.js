export const headerContentWithOutAuthorization = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': 'true'
}

export const customHeaders = token => {
    let copiedHeaderContentWithAuthorization = {
        ...headerContentWithOutAuthorization
    }
    copiedHeaderContentWithAuthorization['Authorization'] = `Bearer ${token}`
    return { headers: copiedHeaderContentWithAuthorization }
}

export const customHeadersForFile = token => {
    let copiedHeaderContentWithAuthorization = {
        ...headerContentWithOutAuthorization,
        'Content-Type': 'multipart/form-data'
    }
    copiedHeaderContentWithAuthorization['Authorization'] = `Bearer ${token}`
    return { headers: copiedHeaderContentWithAuthorization }
}