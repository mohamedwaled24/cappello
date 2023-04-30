import { useState , useEffect } from "react";

const useTabSwitch=(tabs , defualtTab)=>{
const [currentTab , setCurrentTab] = useState(defualtTab)

useEffect(()=>{
setCurrentTab(defualtTab)
},[defualtTab])
const handleTabSwitch=(tab)=>{
setCurrentTab(tab)
}
return [currentTab , handleTabSwitch]

}
export default useTabSwitch;