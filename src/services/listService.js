export async function getCampaignTypes() {
    let config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        
        },
        mode: 'cors',
        cache: 'default'
    };

    try {
        const response = await fetch(`http://127.0.0.1:5067/api/v1/CampaignType`, config);
        if (response.ok) {
            let result = await response.json();
            return result;
        } else {
            alert("Error en la respuesta del servidor");
            let errorDetails = await response.json(); // Obtener detalles del error
            alert(JSON.stringify(errorDetails));
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

export async function getClient() {
    let config = {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch( `http://localhost:5067/api/v1/Client`, config);
        let result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}

export async function getInteractionTypes() {
    let config = {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch( `http://localhost:5067/api/v1/InteractionTypes`, config);
        let result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}

export async function getTaskStatus() {
    let config = {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch( `http://localhost:5067/api/v1/TaskStatus`, config);
        let result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}

export async function getUser() {
    let config = {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch( `http://localhost:5067/api/v1/User`, config);
        let result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}

export default {
    getCampaignTypes,
    getClient,
    getInteractionTypes,
    getTaskStatus,
    getUser
}