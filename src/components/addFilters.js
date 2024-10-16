import{getCampaignTypes,getClient} from "/src/services/listService.js"

export async function returnFilters() {
    const nameFilter = document.createElement("input");
    nameFilter.type = "text";
    nameFilter.placeholder = "Enter a project name";

    const campaignFilter = document.createElement("select");
    const listCampaign = await getCampaignTypes();
    const defaultCampaignOption = document.createElement("option");
    defaultCampaignOption.value = "";
    defaultCampaignOption.text = "Select a campaign";
    campaignFilter.appendChild(defaultCampaignOption);
    listCampaign.forEach(myCampaign =>{
        const option = document.createElement("option");
        option.value = myCampaign.id;
        option.text = myCampaign.name;
        campaignFilter.appendChild(option);
    })

    const clientFilter = document.createElement("select");
    const listClient = await getClient();
    const defaultClientOption = document.createElement("option");
    defaultClientOption.value = "";  
    defaultClientOption.text = "Select a client"; 
    clientFilter.appendChild(defaultClientOption);
    listClient.forEach(myClient =>{
        const option = document.createElement("option");
        option.value = myClient.id;
        option.text = myClient.email;
        clientFilter.appendChild(option);
    })

    return { nameFilter, campaignFilter, clientFilter };
}

export default {returnFilters}