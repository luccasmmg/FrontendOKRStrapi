export const fetchPOST = async (route, body, aditionalConfigs) => {
    const baseConfig = {
        method: 'POST',
        mode: "cors",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(body)
    }
    const config = aditionalConfigs ? {...baseConfig, aditionalConfigs} : baseConfig
    const res = await fetch(route, config)
    const data = await res.json()
    return data
}

export const fetchPUT = async (route, body, aditionalConfigs) => {
    const baseConfig = {
        method: 'PUT',
        mode: "cors",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(body)
    }
    const config = aditionalConfigs ? {...baseConfig, aditionalConfigs} : baseConfig
    const res = await fetch(route, config)
    const data = await res.json()
    return data
}

export const fetchDELETE = async (route, aditionalConfigs) => {
    const baseConfig = {
        method: 'DELETE',
        mode: "cors",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
    }
    const config = aditionalConfigs ? {...baseConfig, aditionalConfigs} : baseConfig
    const res = await fetch(route, config)
    const data = await res.json()
    return data
}

export const fetchGET = async (route, aditionalConfigs) => {
    const baseConfig = {
        method: 'GET',
        mode: "cors",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
    }
    const config = aditionalConfigs ? {...baseConfig, aditionalConfigs} : baseConfig
    const res = await fetch(route, config)
    const data = await res.json()
    return data
}