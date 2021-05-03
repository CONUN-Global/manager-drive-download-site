
export function getPlatform(){

  const platform = navigator.platform.toLowerCase()
  
  if (platform.includes("linux")){
    return "linux"
  }
  else if (platform.includes("mac")){
    return "mac"
  }
  else if (platform.includes("win")){
    return "windows"
  }
  else {
    return ""
  }

}