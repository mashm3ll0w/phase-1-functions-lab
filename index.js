// Code your solution in this file!
function distanceFromHqInBlocks(street){
  return (street >= 42) ? street - 42 : 42 - street;
}


function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination){
  return (start > destination) ? (start - destination) * 264 : (destination - start) * 264;
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
  if(distance <= 400){
    return 0;
  }
  else if(distance > 400 && distance < 2000){
    return ((distance - 400) * 2) / 100;
  }
  else if(distance > 2000 && distance < 2500){
    return 25;
  }
  else{
    return "cannot travel that far"
  }
}
