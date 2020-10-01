#Methode Elevator

class Elevator:
    Id = ""
    Status = ""
    Position = ""
    Column = ""
    PositionUp = ""
    PositionDown = ""
    
def _init_(self, pId, pStatus, pPosition, pColumn, pPositionUp, pPositionDown):
    self.Id = pId 
    self.Status = pStatus
    self.Position = pPosition
    self.Column = pColumn
    self.PositionUp = pPositionUp
    self.PositionDown = pPositionDown
    def OpenDoor():
        print ("open door")
    def CloseDoor():
        print ('close door')
     
    
class Column:
  constructor(pArrayFloor)
  self.arrayFloor = pArrayFloor
  self.RangeFloor = []
  mynumber = self.arrayFloor
  arr = Array (mynumber)
    
for i in range(mynumber):arr[i] =(i + 1)

def MoveElevator(self,pFloorRequested,pElevator):
   
pElevator.CloseDoor()elevatorFloor = pElevator.pPositionfloorRequested = pFloorRequestedprint ("Elevator Position" + elevatorFloor)print ("Requested Position" + floorRequested)
if floorRequested == elevatorFloor:print("Elevator same Floor!")pElevator.OpenDoor
else:move if floorRequested > elevatorFloor:pElevator.Status = "Up"pElevator.PositionUpprint("Elevator Direction" + pElevator.Status)
for move in elevatorFloor : print ("Elevator moved to floor" + move)pElevator.Position = move
else:pElevator.Status = "DOWN"pElevator.PositionDown = floorRequestedprint ("Elevator Direction" + pElevator.Status)
for move in elevatorFloor :print ("Elevator moved to floor" + move)pElevator.Positon = move pElevator.Status = 'idle'   print (pElevator.Status)print ("Elevator Arrived at Floor!")
pElevator.OpenDoor()return "ok "

def FindELEvator(pFloorRequested,pElevatorA,pElevatorB):
    
if pElevatorA.Status = "idle" pElevatorA.Position - pFloorRequested < pElevatorB.Position - pFloorRequested:bestElevator = "A"print ("1")
elif  pElevatorA.Status = "UP" pElevatorA.Position - pFloorRequested < pElevatorB.Position - pFloorRequested:bestElevator = "A"print ("2")
elif pElevatorA.Status = "DOWN" pElevatorA.Position - pFloorRequested < pElevatorB.Position - pFloorRequested:bestElevator = "B"print ("3")
elif pElevatorB.Status = "idle" pElevatorB.Position - pFloorRequested < pElevatorA.Position - pFloorRequested:bestElevator = "B"print ("4")
elif pElevatorB.Status = "UP" pElevatorB.Position - pFloorRequested < pElevatorA.Position - pFloorRequested:bestElevator = "B"print ("5")
elif pElevatorB.Status = "DOWN" pElevatorA.Position - pFloorRequested < pElevatorB.Position - pFloorRequested:bestElevator = "A"print ("6")
else:bestElevator = "A"print("7")print ("Best Elevator :" + bestElevator)return bestElevator

def RequestElevator (pFloorRequested,pElevatorA,pElevatorB):
    
bestElevator = FindELEvator(pFloorRequested,pElevatorA,pElevatorB)elevatorStatus
if (bestElevator == "A")levatorStatus = MoveElevator(pFloorRequested,pElevatorA)
else :   elevatorStatus = MoveElevator(pFloorRequested,pElevatorB)return elevatorStatus

def ButtonFloor()requestFloorreturn requestFloor

# SCENARIO 1
def Main_SC1()

ElevatorA = Elevator("A","idle",2,Column.ColumnA,0,0)print("Elevator A : ")print(ElevatorA)
ElevatorB = Elevator("B","idle",6,Column.ColumnA,0,0)print("Elevator B : ")print(ElevatorB)
# USER REQUEST
# SOMEONE is on floor 3 Request elevator
userRequest = "3"print ("User Request elevator at : " + userRequest + " floor.")status = RequestElevator (userRequest,ElevatorA,ElevatorB)print (status)
# SOMEONE floor 3 Request to floor 7th
status = "7"print("User Request elevator go to : " + userRequest + "th floor.")
status = RequestElevator (userRequest,ElevatorA,ElevatorB)print (status)

# SCENARIO 2
def Main_SC2()

ColumnA = Column(10);print(ColumnA)
ElevatorA = Elevator("A","idle",10,ColumnA,0,0)print("Elevator B : ")print(Elevator B)
ElevatorB = Elevator("B","idle",3,ColumnA,0,0)print("Elevator B : ")print(ElevatorB)
# USER REQUEST
# SOMEONE is on floor 1 Request elevator
userRequest ="1"print("User Request elevator at : " + userRequest + " floor.")status = RequestElevator(userRequest,ElevatorA,ElevatorB)print(status)
# SOMEONE at 1 Request to floor 6th
userRequest = "6"print("User Request elevator go to : " + userRequest + " floor.")status = RequestElevator(userRequest,ElevatorA,ElevatorB)print(status)
# 2 minutes later someone else is on the 3rd
userRequest = "3" print("User Request elevator at : " + userRequest + " floor.")status = RequestElevator(userRequest,ElevatorA,ElevatorB)print(status)
# SOMEONE at 3 Request to floor 5th
userRequest = "5" print("User Request elevator go to : " + userRequest + " floor.")status = RequestElevator(userRequest,ElevatorA,ElevatorB)print(status)
# SOMEONE at 9 Request to go 2nd floor
userRequest = "2"print("User Request elevator go to : " + userRequest + " floor.")status = RequestElevator(userRequest,ElevatorA,ElevatorB)print(status)

 def Main_SC3()

ElevatorA = new Elevator("A","idle",10,ColumnA,0,0)print("Elevator A : ")print(ElevatorA)
ElevatorB = new Elevator("B","idle",6,ColumnA,0,0);print("Elevator B : ")print(ElevatorB)
# USER REQUEST
# SOMEONE is on floor 10 Request elevator
userRequest = "10" print("User Request elevator at : " + userRequest + " floor.")status = RequestElevator(userRequest,ElevatorA,ElevatorB)print(status)
# SOMEONE at 1 Request to floor 6th
userRequest = "6" print("User Request elevator go to : " + userRequest + " floor.")status = RequestElevator(userRequest,ElevatorA,ElevatorB)print(status)
# 5 minutes later someone else is on the 10th
userRequest = "10" print("User Request elevator at : " + userRequest + " floor.")status = RequestElevator(userRequest,ElevatorA,ElevatorB)print(status)
#SOMEONE at 10 Request to floor 3rd  
userRequest = "3" print("User Request elevator go to : " + userRequest + " floor.")status = RequestElevator(userRequest,ElevatorA,ElevatorB)print(status)