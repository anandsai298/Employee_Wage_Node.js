 const IS_ABSENT=0;
 const  IS_PRESENT = 1;
 const IS_PART_TIME=2;
 const IS_FULL_TIME=3;
 const PART_TIME_HRS=4;
 const FULL_TIME_HRS=8;
 const WAGE_PER_HR=20;
 const NUM_OF_WORKING_DAYS=20;
 const MAX_HRS_IN_MONTH=100;
 let totalemphrs=0;
 let totalworkingdays=0;
 let emphrs=0;

while(totalemphrs<=NUM_OF_WORKING_DAYS && totalworkingdays<NUM_OF_WORKING_DAYS)
{
    totalworkingdays++;
    let check=Math.floor(Math.random()*10)%3;
    totalemphrs +=getWorkinghours(check);
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
 let empwage=totalemphrs*WAGE_PER_HR;
 console.log("totalworkingdays: "+totalworkingdays+"\n"+"total hrs: "+totalemphrs+"\n"+"empwage: "+empwage);


       