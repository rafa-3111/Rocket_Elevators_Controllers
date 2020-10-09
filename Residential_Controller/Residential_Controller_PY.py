

class Elevator():
    def _init_(self, pId, pStatus, pPosition, pColumn, pPositionUp, pPositionDown):
        self.Id = pId 
        self.Status = pStatus
        self.Position = pPosition
        self.Column = pColumn
        self.PositionUp = pPositionUp
        self.PositionDown = pPositionDown
#Methode Elevator
    def OpenDoor(self):
        print ('open door')
        
    def CloseDoor(self):
        print ('close door')  

   

class Column():     
    def _init_(self,pArrayFloor):
        self.arrayFloor = pArrayFloor
        self.RangeFloor = []
        mynumber = self.arrayFloor
        arr = mynumber
        for i in mynumber:
            arr[i] =(i + 1)

# MethoMoveElevator 

def MoveElevator(pFloorRequested,pElevator):
 
    pElevator.CloseDoor()
    elevatorFloor = pElevator.Position 
    floorRequested = pFloorRequested
    print("Elevator Position " + str(elevatorFloor))
    print("Requested Position " + str(floorRequested))
    if floorRequested == elevatorFloor:
            print("Elevator at the same Floor!")
    pElevator.OpenDoor 
    
    if int(floorRequested) > int(elevatorFloor):        
        if pElevator.Status =="Up" and pElevator.PositionUp == floorRequested:
            print("Elevator Direction " + pElevator.Status)            
        for move in range(elevatorFloor,int(floorRequested)+1):
            print("Elevator moved to floor " + str(move))
            pElevator.Position = move
    else:                
        if pElevator.Status == "DOWN" and pElevator.PositionDown == floorRequested:
            print("Elevator Direction" + pElevator.Status)            
        for move in range(elevatorFloor,int(floorRequested)-1):
            print("Elevator moved to floor" + str(move))
            pElevator.Positon = move 

 
    pElevator.Status = 'idle'   
    print("Set Status Elevator after move to : " + pElevator.Status)
    print("Elevator Arrived at Floor!")
    pElevator.OpenDoor()
    return "Elevator moved with success"

def FindElevator(pFloorRequested,pElevatorA,pElevatorB) :  # DEF to find best elevator 
    
    if (pElevatorA.Status == "idle" and pElevatorB.Status == "idle"):
        
        if (int(pElevatorA.Position)) > int(pFloorRequested) and int(pElevatorB.Position) > int(pFloorRequested):    
            if ((pElevatorA.Position == pFloorRequested) and (pElevatorB.Position == pFloorRequested)):
                 bestElevator = "A" 
            elif (int(pElevatorA.Position) - int(pFloorRequested) > int(pElevatorB.Position) - int(pFloorRequested)):
                 bestElevator = "B"
            elif (int(pElevatorA.Position) - int(pFloorRequested) < int(pElevatorB.Position) - int(pFloorRequested)):
                 bestElevator = "A"
            else:
                bestElevator = "A"   
                
               
        elif (int(pFloorRequested) > int(pElevatorA.Position) and int(pFloorRequested) > int(pElevatorB.Position)):
            if ((pElevatorA.Position == pFloorRequested) and (pElevatorB.Position == pFloorRequested)):
                bestElevator = "A"
            elif (int(pFloorRequested) - int(pElevatorA.Position) > int(pFloorRequested) -int(pElevatorB.Position)):
                bestElevator = "B"
            elif (int(pFloorRequested) - int(pElevatorA.Position) < int(pFloorRequested) - int(pElevatorB.Position)):
                bestElevator = "A"
            else:
                bestElevator = "A"
                
           
        elif (int(pElevatorA.Position) > int(pFloorRequested) and int(pFloorRequested) > int(pElevatorB.Position)):
             if ((pElevatorA.Position == pFloorRequested) and (pElevatorB.Position == pFloorRequested)):
                bestElevator = "A"
             elif (int(pElevatorA.Position) - int(pFloorRequested) > int(pFloorRequested) - int(pElevatorB.Position)):
                bestElevator = "B"
             elif (int(pElevatorA.Position) - int(pFloorRequested) < int(pFloorRequested) - int(pElevatorB.Position)):
                bestElevator = "A"
             else:
                bestElevator = "A"
                
                  
        elif (int(pFloorRequested) > int(pElevatorA.Position) and int(pElevatorB.Position) > int(pFloorRequested)):    
                if ((pElevatorA.Position == pFloorRequested) and (pElevatorB.Position == pFloorRequested)):
                    bestElevator = "A"
                elif (int(pFloorRequested) - int(pElevatorA.Position) > int(pElevatorB.Position) -int(pFloorRequested)):
                    bestElevator = "B"
                elif (int(pFloorRequested) - int(pElevatorA.Position) < int(pElevatorB.Position) - int(pFloorRequested)):
                     bestElevator = "A"
                else:
                    bestElevator = "A" 
    
        else:
           bestElevator = "A"
      
        print("Best Elevator : " + str(bestElevator))
       

    return bestElevator

def RequestElevator (pFloorRequested,pElevatorA,pElevatorB,pElevatorCalled):

    bestElevator = pElevatorCalled
    if (pElevatorCalled == ""): 
        bestElevator = FindElevator(pFloorRequested,pElevatorA,pElevatorB)
    else:
        print("Best Elevator : " + pElevatorCalled)
    
    if (bestElevator == "A" or pElevatorCalled=="A"):
        elevatorStatus = MoveElevator(pFloorRequested,pElevatorA)
    else:  
        elevatorStatus = MoveElevator(pFloorRequested,pElevatorB)
    return elevatorStatus

def ButtonFloor():
    requestFloor = 3
    return requestFloor

# SCENARIO 1

def Main_SC1():

    Column1 = Column()
    Column1.arrayFloor = 10
    Column1.RangeFloor = 10

    ElevatorA = Elevator()    
    ElevatorA.Id = "A" 
    ElevatorA.Status = "idle"
    ElevatorA.Position = 2
    ElevatorA.Column = Column1.arrayFloor
    ElevatorA.PositionUp = 0
    ElevatorA.PositionDown = 0

    ElevatorB = Elevator()
    ElevatorB.Id = "B" 
    ElevatorB.Status = "idle"
    ElevatorB.Position = 6
    ElevatorB.Column = Column1.arrayFloor
    ElevatorB.PositionUp = 0
    ElevatorB.PositionDown = 0

    # USER REQUEST
    # SOMEONE is on floor 3 Request elevator
    userRequest = "3"
    print ("User Request elevator at : " + userRequest + " floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,"")
    print (status)
    # SOMEONE floor 3 Request to floor 7th
    userRequest = "7"
    print("User Request elevator go to : " + userRequest + "th floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorA.Id)
    print (status)


# SCENARIO 2
def Main_SC2():

    Column1 = Column()
    Column1.arrayFloor = 10
    Column1.RangeFloor = 10

    ElevatorA = Elevator()    
    ElevatorA.Id = "A" 
    ElevatorA.Status = "idle"
    ElevatorA.Position = 10
    ElevatorA.Column = Column1.arrayFloor
    ElevatorA.PositionUp = 0
    ElevatorA.PositionDown = 0

    ElevatorB = Elevator()
    ElevatorB.Id = "B" 
    ElevatorB.Status = "idle"
    ElevatorB.Position = 3
    ElevatorB.Column = Column1.arrayFloor
    ElevatorB.PositionUp = 0
    ElevatorB.PositionDown = 0

    userRequest ="1"
    print("User Request elevator at : " + userRequest + " floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,"")
    print(status)
        # SOMEONE at 1 Request to floor 6th
    userRequest = "6"
    print("User Request elevator go to : " + userRequest + " floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorB.Id)
    print(status)
        # 2 minutes later someone else is on the 3rd
    userRequest = "3" 
    print("User Request elevator at : " + userRequest + " floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,"")
    print(status)
        # SOMEONE at 3 Request to floor 5th
    userRequest = "5" 
    print("User Request elevator go to : " + userRequest + " floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorB.Id)
    print(status)
        # SOMEONE at 9 Request 
    userRequest = "9" 
    print("User Request elevator go to : " + userRequest + " floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,"")
    print(status)
        # SOMEONE at 9 Request to go 2nd floor
    userRequest = "2"
    print("User Request elevator go to : " + userRequest + " floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorA.Id)
    print(status)

def Main_SC3():

    Column1 = Column()
    Column1.arrayFloor = 10
    Column1.RangeFloor = 10


    ElevatorA = Elevator()    
    ElevatorA.Id = "A" 
    ElevatorA.Status = "idle"
    ElevatorA.Position = 10
    ElevatorA.Column = Column1.arrayFloor
    ElevatorA.PositionUp = 0
    ElevatorA.PositionDown = 0

    ElevatorB = Elevator()
    ElevatorB.Id = "B" 
    ElevatorB.Status = "idle"
    ElevatorB.Position = 6
    ElevatorB.Column = Column1.arrayFloor
    ElevatorB.PositionUp = 0
    ElevatorB.PositionDown = 0

    # USER REQUEST
       # SOMEONE is on floor 10 Request elevator
    userRequest = "10" 
    print("User Request elevator at : " + userRequest + " floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorA.Id)
    print(status)
      # SOMEONE at 1 Request to floor 6th
    userRequest = "6" 
    print("User Request elevator go to : " + userRequest + " floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorA.Id)
    print(status)
         # 5 minutes later someone else is on the 10th
    userRequest = "10" 
    print("User Request elevator at : " + userRequest + " floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,"")
    print(status)
        # SOMEONE at 10 Request to floor 3rd  
    userRequest = "3" 
    print("User Request elevator go to : " + userRequest + " floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorB.Id)
    print(status) 

print("**** STAR **********************************") 
Main_SC1()
print("**************************************") 
Main_SC2()
print("**************************************") 
Main_SC3()
print("**** END   **********************************") 