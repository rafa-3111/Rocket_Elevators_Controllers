// OBJECT 

//syntax 
class Elevator{
    constructor (pId, pStatus,pPosition,pColumn,pPositionUp,pPositionDown) {
    this.ID = pId;
    this.Status = pStatus;                          // idle / up / down 
    this.Position = pPosition;                      // position real time
    this.Column = pColumn;                          // column 
    this.PositionUp = pPositionUp;                  // position to go UP  
    this.PositionDown = pPositionDown;              // position to go DOWN
    this.OpenDoor = function() {
        // No interface with Door, only message log.
        console.log("Open Door!");
      };
    this.CloseDoor = function() {
        // No interface with Door, only message log
        console.log("Close Door!");
      };

  }
}

 //let Column = {
 //   ColumnA : {
 //           RangeFloor : [1,2,3,4,5,6,7,8,9,10]     // Residential 1 column 2 elevators
 //             }
 //}

class Column{
    constructor (pArrayFloor) {
    this.arrayFloor = pArrayFloor;
    this.RangeFloor = function() {
        var mynumber = this.arrayFloor;
        var arr = new Array(mynumber);
        
        for (var i = 0; i < mynumber; i++) {
            arr[i] = (i + 1).toString();
        }
      }    
    }
 }




 //// NEXT LIST DYNAMICS- START
function ListPositionUp(pRangeFloor) {              // Function to creat up list dynamic

    var rangeFloor = pRangeFloor;    
    var listePosition = [rangeFloor.length];

    var floor;   

    for (floor = 0; floor < rangeFloor.length; floor++){
        //console.log(rangeFloor[floor]);
        listePosition.floor = rangeFloor[floor];
        listePosition.requested = false;
                       
    }        
     
    return listePosition;

}
function ListPositionDown(pRangeFloor) {            // Function to creat up list dynamic

    var rangeFloor = pRangeFloor;    
    var listePosition = [rangeFloor.length];    
   
    var floor;
    
    for (floor = rangeFloor.length-1; floor >= 0; floor--){
        //console.log(rangeFloor[floor]);   
        listePosition.Floor = rangeFloor[floor];
        listePosition.Requested = false;
            
    }   
    return listePosition;

}

//// NEXT LIST DYNAMICS - END


function MoveElevator(pFloorRequested,pElevator){

    // Close Door For move.
    pElevator.CloseDoor();

    var elevatorFloor = parseInt(pElevator.Position);
    var floorRequested = parseInt(pFloorRequested);
    
    console.log("Elevator Position : " + parseInt(elevatorFloor));
    console.log("Requested Position : " + floorRequested);


    if (floorRequested == elevatorFloor ){
        console.log("Elevator same Floor!");
        pElevator.OpenDoor();
    }else{
        
        var move;
        if (floorRequested > elevatorFloor){
            //console.log("1");
            pElevator.Status = "UP";
            pElevator.PositionUp = floorRequested;
            console.log("Elevator Direction : " + pElevator.Status);
            for (move = elevatorFloor; floorRequested >= move ;move++){

                console.log("Elevator moved to floor : " + move);   
                pElevator.Position = move;
                
            }   
        }else{
           //console.log("2");
            pElevator.Status = "DOWN";
            pElevator.PositionDown = floorRequested;
             console.log("Elevator Direction : " + pElevator.Status);
            for (move = elevatorFloor; floorRequested <= move ;move--){

                console.log("Elevator moved to floor : " + move);   
                pElevator.Position = move;
                
            } 
        }
        pElevator.Status = "idle";
        console.log(pElevator.Status);
        console.log("Elevator Arrived at Floor!");
        pElevator.OpenDoor();
        
    }

    return "ok";


}


function FindElevator(pFloorRequested,pElevatorA,pElevatorB){   // Function to find best elevator 

    
    // Si elevator A iqual idle and position smaller then B , sent A 
    if (pElevatorA.Status = "idle" && (pElevatorA.Position - pFloorRequested) < (pElevatorB.Position - pFloorRequested)){
        bestElevator = "A";
        console.log("1");

    // Si elevator A iqual UP and position smaller then B , sent A 
    }else if (pElevatorA.Status = "UP" && (pElevatorA.Position - pFloorRequested) < (pElevatorB.Position - pFloorRequested)){
        bestElevator = "A";
        console.log("2");
    
    // Si elevator A iqual DOWNS and position smaller then B , sent B 
    }else if (pElevatorA.Status = "DOWN" && (pElevatorA.Position - pFloorRequested) < (pElevatorB.Position - pFloorRequested)){
        bestElevator = "B";
        console.log("3");

    }else if (pElevatorB.Status = "idle" && (pElevatorB.Position - pFloorRequested) < (pElevatorA.Position - pFloorRequested)){
        bestElevator = "B";
        console.log("4");
    
    }else if (pElevatorB.Status = "UP" && (pElevatorB.Position - pFloorRequested) < (pElevatorA.Position - pFloorRequested)){
        bestElevator = "B";
        console.log("5");
    
    // Si elevator A iqual DOWNS and position smaller then B , sent B 
    }else if (pElevatorB.Status = "DOWN" && (pElevatorB.Position - pFloorRequested) < (pElevatorA.Position - pFloorRequested)){
        bestElevator = "A";
        console.log("6");

    }else{
        bestElevator = "A";
        console.log("7");
    }
    
        console.log("Best Elevator : " + bestElevator); 
    


    return bestElevator;

}


function RequestElevator(pFloorRequested,pElevatorA,pElevatorB){
    
    var bestElevator = FindElevator(pFloorRequested,pElevatorA,pElevatorB);
    var elevatorStatus;
    if (bestElevator == "A"){
        elevatorStatus = MoveElevator(pFloorRequested,pElevatorA)
    }else{
        elevatorStatus = MoveElevator(pFloorRequested,pElevatorB)
    }
    return elevatorStatus;
}

function ButtonFloor()
{
    var requestFloor;



    return requestFloor;
}

////// MAIN //////
// SCENARIO 1
function Main_SC1(){

// INSTANCE Elevator A
//const ElevatorA = new Elevator("A","idle",2,Column.ColumnA,ListPositionUp(Column.ColumnA.RangeFloor,"UP"),ListPositionDown(Column.ColumnA.RangeFloor,"DOWN"));
const ElevatorA = new Elevator("A","idle",2,Column.ColumnA,0,0);
console.log("Elevator A : ");
console.log(ElevatorA);

// INSTANCE Elevator B
//const ElevatorB = new Elevator("B","idle",6,Column.ColumnA,ListPositionUp(Column.ColumnA.RangeFloor,"UP"),ListPositionDown(Column.ColumnA.RangeFloor,"DOWN"));
const ElevatorB = new Elevator("B","idle",6,Column.ColumnA,0,0);
console.log("Elevator B : ");
console.log(ElevatorB);

// USER REQUEST

// SOMEONE is on floor 3 Request elevator
var userRequest = "3"; 
console.log("User Request elevator at : " + userRequest + " floor.");

var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
console.log(status);

// SOMEONE floor 3 Request to floor 7th
var userRequest = "7"; 
console.log("User Request elevator go to : " + userRequest + "th floor.");

var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
console.log(status);

}


// SCENARIO 2
function Main_SC2(){

    const ColumnA = new Column(10);
    console.log(ColumnA);
    // INSTANCE Elevator A
    //const ElevatorA = new Elevator("A","idle",10,Column.ColumnA,ListPositionUp(Column.ColumnA.RangeFloor,"UP"),ListPositionDown(Column.ColumnA.RangeFloor,"DOWN"));
    const ElevatorA = new Elevator("A","idle",10,ColumnA,0,0);
    console.log("Elevator A : ");
    console.log(ElevatorA);
    
    // INSTANCE Elevator B
    //const ElevatorB = new Elevator("B","idle",6,Column.ColumnA,ListPositionUp(Column.ColumnA.RangeFloor,"UP"),ListPositionDown(Column.ColumnA.RangeFloor,"DOWN"));
    const ElevatorB = new Elevator("B","idle",3,ColumnA,0,0);
    console.log("Elevator B : ");
    console.log(ElevatorB);
    
    // USER REQUEST
    
    // SOMEONE is on floor 1 Request elevator
    var userRequest = "1"; 
    console.log("User Request elevator at : " + userRequest + " floor.");
    
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
    console.log(status);
    
    // SOMEONE at 1 Request to floor 6th
    var userRequest = "6"; 
    console.log("User Request elevator go to : " + userRequest + " floor.");
    
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
    console.log(status);
    
    // 2 minutes later someone else is on the 3rd
    var userRequest = "3"; 
    console.log("User Request elevator at : " + userRequest + " floor.");

    var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
    console.log(status);

    // SOMEONE at 3 Request to floor 5th
    var userRequest = "5"; 
    console.log("User Request elevator go to : " + userRequest + " floor.");
       
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
    console.log(status);

    // SOMEONE at 9 Request 
    var userRequest = "9"; 
    console.log("User Request elevator go to : " + userRequest + " floor.");
   
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
    console.log(status);

     // SOMEONE at 9 Request to go 2nd floor
     var userRequest = "2"; 
     console.log("User Request elevator go to : " + userRequest + " floor.");
    
     var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
     console.log(status);

    
    }


// SCENARIO 3
function Main_SC3(){

    // INSTANCE Elevator A
    //const ElevatorA = new Elevator("A","idle",10,Column.ColumnA,ListPositionUp(Column.ColumnA.RangeFloor,"UP"),ListPositionDown(Column.ColumnA.RangeFloor,"DOWN"));
    const ElevatorA = new Elevator("A","idle",10,ColumnA,0,0);
    console.log("Elevator A : ");
    console.log(ElevatorA);
    
    // INSTANCE Elevator B
    //const ElevatorB = new Elevator("B","idle",6,Column.ColumnA,ListPositionUp(Column.ColumnA.RangeFloor,"UP"),ListPositionDown(Column.ColumnA.RangeFloor,"DOWN"));
    const ElevatorB = new Elevator("B","idle",6,ColumnA,0,0);
    console.log("Elevator B : ");
    console.log(ElevatorB);
    
    // USER REQUEST
    
    // SOMEONE is on floor 10 Request elevator
    var userRequest = "10"; 
    console.log("User Request elevator at : " + userRequest + " floor.");
    
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
    console.log(status);

    // SOMEONE at 1 Request to floor 6th
    var userRequest = "6"; 
    console.log("User Request elevator go to : " + userRequest + " floor.");
    
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
    console.log(status);

    // 5 minutes later someone else is on the 10th
    var userRequest = "10"; 
    console.log("User Request elevator at : " + userRequest + " floor.");

    var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
    console.log(status);

    // SOMEONE at 10 Request to floor 3rd
    var userRequest = "3"; 
    console.log("User Request elevator go to : " + userRequest + " floor.");
       
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
    console.log(status);

}



    function Main_Dinamic(){

        // INSTANCE Elevator A
        //const ElevatorA = new Elevator("A","idle",2,Column.ColumnA,ListPositionUp(Column.ColumnA.RangeFloor,"UP"),ListPositionDown(Column.ColumnA.RangeFloor,"DOWN"));
        const ElevatorA = new Elevator("A","idle",10,ColumnA,0,0);
        console.log("Elevator A : ");
        console.log(ElevatorA);
        
        // INSTANCE Elevator B
        //const ElevatorB = new Elevator("B","idle",6,Column.ColumnA,ListPositionUp(Column.ColumnA.RangeFloor,"UP"),ListPositionDown(Column.ColumnA.RangeFloor,"DOWN"));
        const ElevatorB = new Elevator("B","idle",3,ColumnA,0,0);
        console.log("Elevator B : ");
        console.log(ElevatorB);
        
        // USER REQUEST ENTREE
        var userRequest = ButtomnFloor(); 
        console.log("User Request elevator at : " + userRequest + " floor.");
        
        var status = RequestElevator(userRequest,ElevatorA,ElevatorB);
        console.log(status);
        
    }
    

