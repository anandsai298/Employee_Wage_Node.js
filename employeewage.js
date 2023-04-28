 const  IS_ABSENT = 0;
 const IS_PART_TIME=1;
 const IS_FULL_TIME=2;
 const PART_TIME_HRS=4;
 const FULL_TIME_HRS=8;
 const WAGE_PER_HR=20;
 let emphrs=0;
 let check = Math.floor(Math.random()*10)%3;
 switch(check){
    case IS_ABSENT:
        console.log("Employee IS_ABSENT")
    case IS_PART_TIME:
        emphrs=PART_TIME_HRS;
        break;
    case IS_FULL_TIME:
        emphrs=FULL_TIME_HRS;
        break;
    default:
        emphrs=0;
 }
 let empwage=emphrs*WAGE_PER_HR;
 console.log("empwage"+empwage);


       