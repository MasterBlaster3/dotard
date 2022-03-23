import { getBusinessData } from "./BusinessData.js";
import { Business } from "./Business.js";

const contentTargetAll = document.querySelector(".business-list-full");
const contentTargetNY = document.querySelector(".business-list-newYork");
const contentTargetManufacturing = document.querySelector(".business-list-manufacturing")

export const BusinessList = () => {
    const businessArray = getBusinessData()
    const nyBusinessArray = businessArray.filter(obj => obj.addressStateCode === "NY")
    const manufacturingArray = businessArray.filter(obj => obj.companyIndustry === "Manufacturing")

  businessArray.forEach((businessObject) => {
    contentTargetAll.innerHTML += Business(businessObject);
  });

  nyBusinessArray.forEach((businessObject) => {
    contentTargetNY.innerHTML += Business(businessObject);
  });

  manufacturingArray.forEach((businessObject) => {
    contentTargetManufacturing.innerHTML += Business(businessObject);
  });
}
BusinessList()