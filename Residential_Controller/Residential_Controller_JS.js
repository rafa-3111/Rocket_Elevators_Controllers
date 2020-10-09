// OBJECT 

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
        PrintResult("Open Door!"); 
      };
    this.CloseDoor = function() {
        // No interface with Door, only message log
        console.log("Close Door!");
        PrintResult("Close Door!"); 
      };

  }
}

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


function MoveElevator(pFloorRequested,pElevator){

    // Close Door For move.
    pElevator.CloseDoor();

    var elevatorFloor = parseInt(pElevator.Position);
    var floorRequested = parseInt(pFloorRequested);
    
    console.log("Elevator Position : " + parseInt(elevatorFloor));
    console.log("Requested Position : " + floorRequested);
    PrintResult("Elevator Position : " + parseInt(elevatorFloor)); 
    PrintResult("Requested Position : " + floorRequested); 


    if (floorRequested == elevatorFloor ){
        console.log("Elevator same Floor!");
        PrintResult("Elevator same Floor!"); 
        pElevator.OpenDoor();
    }else{
        
        var move;
        if (floorRequested > elevatorFloor){
            
            pElevator.Status = "UP";
            pElevator.PositionUp = floorRequested;
            console.log("Elevator Direction : " + pElevator.Status);
            PrintResult("Elevator Direction : " + pElevator.Status); 
            for (move = elevatorFloor; floorRequested >= move ;move++){

                console.log("Elevator moved to floor : " + move);
                PrintResult("Elevator moved to floor : " + move);   
                pElevator.Position = move;
                
            }   
        }else{
           
            pElevator.Status = "DOWN";
            pElevator.PositionDown = floorRequested;
             console.log("Elevator Direction : " + pElevator.Status);
             PrintResult("Elevator Direction : " + pElevator.Status);
            for (move = elevatorFloor; floorRequested <= move ;move--){

                console.log("Elevator moved to floor : " + move); 
                PrintResult("Elevator moved to floor : " + move); 
                pElevator.Position = move;
                
            } 
        }
        pElevator.Status = "idle";
        console.log("Set Status Elevator after move to : " + pElevator.Status);
        console.log("Elevator Arrived at Floor!");
        PrintResult("Set Status Elevator after move to : " + pElevator.Status);
        PrintResult("Elevator Arrived at Floor!");
        
        pElevator.OpenDoor();
        
    }

    return "Elevator moved with success";


}



function FindElevator(pFloorRequested,pElevatorA,pElevatorB){   // Function to find best elevator 
    
    if (pElevatorA.Status == "idle" && pElevatorB.Status == "idle"){
        
        if ((pElevatorA.Position > pFloorRequested) && (pElevatorB.Position > pFloorRequested)){    
            if ((pElevatorA.Position == pFloorRequested) && (pElevatorB.Position == pFloorRequested)){bestElevator = "A"; }
            else if ((pElevatorA.Position - pFloorRequested) > (pElevatorB.Position - pFloorRequested)){bestElevator = "B";}
            else if ((pElevatorA.Position - pFloorRequested) < (pElevatorB.Position - pFloorRequested)){bestElevator = "A";}
            else{
                bestElevator = "A";    
            }   
        }else if ((pFloorRequested > pElevatorA.Position  ) && (pFloorRequested > pElevatorB.Position)){
            if ((pElevatorA.Position == pFloorRequested) && (pElevatorB.Position == pFloorRequested)){bestElevator = "A";}
            else if ((pFloorRequested - pElevatorA.Position) > (pFloorRequested - pElevatorB.Position)){bestElevator = "B";}
            else if ((pFloorRequested - pElevatorA.Position) < (pFloorRequested - pElevatorB.Position)){bestElevator = "A";}
            else{
                bestElevator = "A";
            }  
        } else if ((pElevatorA.Position > pFloorRequested) && (pFloorRequested > pElevatorB.Position)){
            if ((pElevatorA.Position == pFloorRequested) && (pElevatorB.Position == pFloorRequested)){bestElevator = "A";}
            else if ((pElevatorA.Position - pFloorRequested) > (pFloorRequested - pElevatorB.Position)){bestElevator = "B";}
            else if ((pElevatorA.Position - pFloorRequested) < (pFloorRequested - pElevatorB.Position)){bestElevator = "A";}
            else{
                bestElevator = "A"; 
            }       
        } else if ((pFloorRequested > pElevatorA.Position) && (pElevatorB.Position > pFloorRequested)){    
                if ((pElevatorA.Position == pFloorRequested) && (pElevatorB.Position == pFloorRequested)){bestElevator = "A";}
                else if ((pFloorRequested - pElevatorA.Position) > (pElevatorB.Position - pFloorRequested)){bestElevator = "B";}
                else if ((pFloorRequested - pElevatorA.Position) < (pElevatorB.Position - pFloorRequested)){bestElevator = "A";}
                else{
                    bestElevator = "A"; 
                }   
            }
    }else{
        bestElevator = "A";
    }
    
        console.log("Best Elevator : " + bestElevator); 
        PrintResult("Best Elevator : " + bestElevator);

    return bestElevator;

}


function RequestElevator(pFloorRequested,pElevatorA,pElevatorB,pElevatorCalled){
    
    if (pElevatorCalled == ""){
        var bestElevator = FindElevator(pFloorRequested,pElevatorA,pElevatorB);
    }else {
        console.log("Best Elevator : " + pElevatorCalled); 
        PrintResult("Best Elevator : " + pElevatorCalled);
    }

    var elevatorStatus;
    if (bestElevator == "A" || pElevatorCalled=="A"){
        elevatorStatus = MoveElevator(pFloorRequested,pElevatorA)
    }else{
        elevatorStatus = MoveElevator(pFloorRequested,pElevatorB)
    }
    return elevatorStatus;
}
////// MAIN //////
// SCENARIO 1
function Main_SC1(){

// INSTANCE Elevator A
const ElevatorA = new Elevator("A","idle",2,Column.ColumnA,0,0);
PrintResult("Elevator A Set.");
console.log("Elevator A : ");
console.log(ElevatorA);

// INSTANCE Elevator B
const ElevatorB = new Elevator("B","idle",6,Column.ColumnA,0,0);
PrintResult("Elevator B Set.");
console.log("Elevator B : ");
console.log(ElevatorB);

// USER REQUEST

// SOMEONE is on floor 3 Request elevator
var userRequest = "3"; 
console.log("User Request elevator at : " + userRequest + " floor.");
PrintResult("User Request elevator at : " + userRequest + " floor.");

var status = RequestElevator(userRequest,ElevatorA,ElevatorB,"");
console.log(status);
PrintResult(status);

// SOMEONE floor 3 Request to floor 7th
var userRequest = "7"; 
console.log("User Request elevator go to : " + userRequest + "th floor.");
PrintResult("User Request elevator go to : " + userRequest + "th floor.");

var status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorA.ID);
//console.log(status);
PrintResult(status);

}


// SCENARIO 2
function Main_SC2(){

    const ColumnA = new Column(10);
    console.log(ColumnA);
    // INSTANCE Elevator A
    const ElevatorA = new Elevator("A","idle",10,ColumnA,0,0);
    PrintResult("Elevator A Set.");
    console.log("Elevator A : ");
    console.log(ElevatorA);
    
    // INSTANCE Elevator B
    const ElevatorB = new Elevator("B","idle",3,ColumnA,0,0);
    PrintResult("Elevator B Set.");
    console.log("Elevator B : ");
    console.log(ElevatorB);
    
    // USER REQUEST
    
    // SOMEONE is on floor 1 Request elevator
    var userRequest = "1"; 
    console.log("User Request elevator at : " + userRequest + " floor.");
    PrintResult("User Request elevator at : " + userRequest + " floor.");
    
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB,"");
    console.log(status);
    PrintResult(status);
    
    // SOMEONE at 1 Request to floor 6th
    var userRequest = "6"; 
    console.log("User Request elevator go to : " + userRequest + " floor.");
    PrintResult("User Request elevator go to : " + userRequest + " floor.");
    
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorB.ID);
    console.log(status);
    PrintResult(status);
    
    // 2 minutes later someone else is on the 3rd
    var userRequest = "3"; 
    console.log("User Request elevator at : " + userRequest + " floor.");
    PrintResult("User Request elevator at : " + userRequest + " floor.");

    var status = RequestElevator(userRequest,ElevatorA,ElevatorB,"");
    console.log(status);
    PrintResult(status);

    // SOMEONE at 3 Request to floor 5th
    var userRequest = "5"; 
    console.log("User Request elevator go to : " + userRequest + " floor.");
    PrintResult("User Request elevator go to : " + userRequest + " floor.");
       
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorB.ID);
    console.log(status);
    PrintResult(status);

    // SOMEONE at 9 Request 
    var userRequest = "9"; 
    console.log("User Request elevator go to : " + userRequest + " floor.");
    PrintResult("User Request elevator go to : " + userRequest + " floor.");
   
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB,"");
    console.log(status);
    PrintResult(status);

     // SOMEONE at 9 Request to go 2nd floor
     var userRequest = "2"; 
     console.log("User Request elevator go to : " + userRequest + " floor.");
     PrintResult("User Request elevator go to : " + userRequest + " floor.");
    
     var status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorA.ID);
     console.log(status);
     PrintResult(status);

    }


// SCENARIO 3
function Main_SC3(){

    const ColumnA = new Column(10);
    console.log(ColumnA);

    // INSTANCE Elevator A
    const ElevatorA = new Elevator("A","idle",10,ColumnA,0,0);
    PrintResult("Elevator A Set.");
    console.log("Elevator A : ");
    console.log(ElevatorA);
    
    // INSTANCE Elevator B
    const ElevatorB = new Elevator("B","idle",6,ColumnA,0,0);
    PrintResult("Elevator B Set.");
    console.log("Elevator B : ");
    console.log(ElevatorB);
    
    // USER REQUEST
    
    // SOMEONE is on floor 10 Request elevator
    var userRequest = "10"; 
    console.log("User Request elevator at : " + userRequest + " floor.");
    PrintResult("User Request elevator at : " + userRequest + " floor.");
    
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorA.ID);
    console.log(status);
    PrintResult(status);

    // SOMEONE at 1 Request to floor 6th
    var userRequest = "6"; 
    console.log("User Request elevator go to : " + userRequest + " floor.");
    PrintResult("User Request elevator go to : " + userRequest + " floor.");
    
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorA.ID);
    console.log(status);
    PrintResult(status);

    // 5 minutes later someone else is on the 10th
    var userRequest = "10"; 
    console.log("User Request elevator at : " + userRequest + " floor.");
    PrintResult("User Request elevator at : " + userRequest + " floor.");

    var status = RequestElevator(userRequest,ElevatorA,ElevatorB,"");
    console.log(status);
    PrintResult(status);

    // SOMEONE at 10 Request to floor 3rd
    var userRequest = "3"; 
    console.log("User Request elevator go to : " + userRequest + " floor.");
    PrintResult("User Request elevator go to : " + userRequest + " floor.");
       
    var status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorB.ID);
    console.log(status);
    PrintResult(status);

}



function Main_Dinamic(){

        // INSTANCE Elevator A
        nbEtages = document.getElementById("nbFloors").value;
        positionElevateurA = document.getElementById("nbElevatorAStartPosition").value;
        positionElevateurB = document.getElementById("nbElevatorBStartPosition").value;
        requestPosition = document.getElementById("nbFloorRequest").value;


        const ColumnA = new Column(nbEtages);
        console.log(ColumnA);

        const ElevatorA = new Elevator("A","idle",positionElevateurA,ColumnA,0,0);
        PrintResult("Elevator A Set.");
        
        // INSTANCE Elevator B
        const ElevatorB = new Elevator("B","idle",positionElevateurB,ColumnA,0,0);
        PrintResult("Elevator B Set.");
        
        // USER REQUEST ENTREE
        var userRequest = requestPosition;
        console.log("User Request elevator at : " + userRequest + " floor.");
        PrintResult("User Request elevator at : " + userRequest + " floor.");
        
        var status = RequestElevator(userRequest,ElevatorA,ElevatorB,"");
        PrintResult(status);

        
}
    

/////////////////////////////////// interface code

function displayDivSelecteur()
{
    var divSelection = document.getElementById("dropDownSelection").value;
                
    if (divSelection =="0")
    {
        document.getElementById("entreeDate").style.display = 'none';
                
    }	
    else if (divSelection =="1")
    {
        document.getElementById("nbColumns").value = "1";
        document.getElementById("nbColumns").disabled = true;
        document.getElementById("nbFloors").value = "10";
        document.getElementById("nbFloors").disabled = true;
        document.getElementById("nbElevatorAStartPosition").value = "2";
        document.getElementById("nbElevatorAStartPosition").disabled = true;
        document.getElementById("nbElevatorBStartPosition").value = "6";
        document.getElementById("nbElevatorBStartPosition").disabled = true;
        document.getElementById("nbFloorRequest").value = "3";
        document.getElementById("nbFloorRequest").disabled = true;        
			
        document.getElementById("entreeDate").style.display = 'inline';

    }
    else if (divSelection =="2")
    {
        document.getElementById("nbColumns").value = "1";
        document.getElementById("nbColumns").disabled = true;
        document.getElementById("nbFloors").value = "10";
        document.getElementById("nbFloors").disabled = true;
        document.getElementById("nbElevatorAStartPosition").value = "10";
        document.getElementById("nbElevatorAStartPosition").disabled = true;
        document.getElementById("nbElevatorBStartPosition").value = "3";
        document.getElementById("nbElevatorBStartPosition").disabled = true;
        document.getElementById("nbFloorRequest").value = "1";
        document.getElementById("nbFloorRequest").disabled = true;    

        document.getElementById("entreeDate").style.display = 'inline';
    }
    else if (divSelection =="3")
    {
        document.getElementById("nbColumns").value = "1";
        document.getElementById("nbColumns").disabled = true;
        document.getElementById("nbFloors").value = "10";
        document.getElementById("nbFloors").disabled = true;
        document.getElementById("nbElevatorAStartPosition").value = "10";
        document.getElementById("nbElevatorAStartPosition").disabled = true;
        document.getElementById("nbElevatorBStartPosition").value = "6";
        document.getElementById("nbElevatorBStartPosition").disabled = true;
        document.getElementById("nbFloorRequest").value = "3";
        document.getElementById("nbFloorRequest").disabled = true;

        document.getElementById("entreeDate").style.display = 'inline';
            
    }
    else if (divSelection =="4")
    {
        document.getElementById("nbColumns").value = "1";
        document.getElementById("nbColumns").disabled = true;
        document.getElementById("nbFloors").value = "10";
        document.getElementById("nbFloors").disabled = true;
        document.getElementById("nbElevatorAStartPosition").value = "";
        document.getElementById("nbElevatorAStartPosition").disabled = false;
        document.getElementById("nbElevatorBStartPosition").value = "";
        document.getElementById("nbElevatorBStartPosition").disabled = false;
        document.getElementById("nbFloorRequest").value = "";
        document.getElementById("nbFloorRequest").disabled = false;

        document.getElementById("entreeDate").style.display = 'inline';
            
    }

}
  

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}


function Simulateur()
{
    var divSelection = document.getElementById("dropDownSelection").value;
    
            
    if (divSelection =="0")
    {        
        document.getElementById("idResult1").innerText = "";   
    }	
    else if (divSelection =="1")
    {
        document.getElementById("idResult1").innerText = "";
        Main_SC1();
    }
    else if (divSelection =="2")
    {
        document.getElementById("idResult1").innerText = "";
        Main_SC2();
    }
    else if (divSelection =="3")
    {
        document.getElementById("idResult1").innerText = "";
        Main_SC3();            
    }
    else if (divSelection =="4")
    {
        document.getElementById("idResult1").innerText = "";
        Main_Dinamic();            
    }

}

function PrintResult(strAEcrire)
{    
    strResult = document.getElementById("idResult1").innerText + "\n" + strAEcrire;
    document.getElementById("idResult1").innerText = strResult;
    
}




