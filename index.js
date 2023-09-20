// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    const distanceInBlocks = Math.abs(blocks - 42);
    return distanceInBlocks;
}
distanceFromHqInBlocks("43");
distanceFromHqInBlocks("50");
distanceFromHqInBlocks("34");


function distanceFromHqInFeet(blocks){
    let distanceInFeet = distanceFromHqInBlocks(blocks) * 264;
    return distanceInFeet;
  
    
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start1,destination1){
    if(destination1>start1){
    return (destination1 - start1)*264;
    }
    else if (destination1<start1){
    return (start1 - destination1)*264;
    }
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start,destination){
    const distance = Math.abs((destination - start)*264);
    let fare = 0;

    if (distance <= 400) {
        fare = 0;
      } else if (distance > 400 && distance <= 2000) {
        
        fare = (distance - 400) * 0.02;
      } else if (distance > 2000 && distance <= 2500) {
        
        fare = 25;
      } else if (distance > 2500) {
        return 'cannot travel that far';
      }
    
      return fare;
    }

