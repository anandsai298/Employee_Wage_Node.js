 const IS_ABSENT=0;
 const  IS_PRESENT = 1;
 const IS_PART_TIME=2;
 const IS_FULL_TIME=3;
 const PART_TIME_HRS=4;
 const FULL_TIME_HRS=8;
 const WAGE_PER_HR=20;
 const NUM_OF_WORKING_DAYS=20;
 let emphrs=0;

 for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
 {
    let check = Math.floor(Math.random()*10)%3;
    emphrs +=getWorkinghours(check);
 }
 function getWorkinghours(check)
 {
    switch(check)
    {
        case IS_PRESENT:
            console.log("Employee IS_PRESENT");
        
        case IS_PART_TIME:
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
     }
 }
 let empwage=emphrs*WAGE_PER_HR;
 console.log("total hrs: "+emphrs+"\n"+"empwage: "+empwage);


       