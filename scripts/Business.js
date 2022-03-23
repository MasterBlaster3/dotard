// structured into html
export const Business = (businessObject) => {
    return `
    <section class="business">
    <h2 class="business__companyName">${businessObject.companyName}</h2>
    <div class="business__venue">
        <p class="business__address">${businessObject.addressFullStreet}</br>
        ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
    </div>
</section>
    `
}