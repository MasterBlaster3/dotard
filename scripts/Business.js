// structured into html
export const Business = (businessDataObj) => {
    return `
        <section class="business">
        <h2> ${businssDataObj.companyName}</h2>
        <p>${businessDataObj.adressFullStreet}</p>
        <p>${businessDataObj.addressCity}, ${businessDataObj.addressStateCode} ${businessDataObj.addressZipCode}</p>
        </section>
    `
}