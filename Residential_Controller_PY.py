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
     
    
class ColumnA:
    RangeFloor = [1,2,3,4,5,6,7,8,9,10]
        

    
ColumnA = ColumnA.RangeFloor
ElevatorA = Elevator("A","idle",2,"",0,0)
ElevatorB = Elevator("B","idle",6,"",0,0)
print(ElevatorA)
print(ElevatorB)
    
    
def MoveElevator(self,pFloorRequested,pElevator):
   
   pElevator.CloseDoor()

elevatorFloor = int pElevator.pPosition
floorRequested = int pFloorRequested

print ("Elevator Position" + int elevatorFloor)
print ("Requested Position" + floorRequested)


if floorRequested == elevatorFloor:
    print("Elevator same Floor!")
    pElevator.OpenDoor

else:
    
    move :

if floorRequested > elevatorFloor:
    pElevator.Status = "Up"
    pElevator.PositionUp
    print("Elevator Direction" + pElevator.Status)
for move in elevatorFloor : 
    print ("Elevator moved to floor" + move)
      pElevator.Position = move

else:
    pElevator.Status = "DOWN"
    pElevator.PositionDown = floorRequested
    print ("Elevator Direction" + pElevator.Status)
for move in elevatorFloor :
    print ("Elevator moved to floor" + move)
    pElevator.Positon = move 

pElevator.Status = 'idle'   
print (pElevator.Status)
print ("Elevator Arrived at Floor!")
pElevator.OpenDoor()


return "ok "

def FindELEvator(pFloorRequested,pElevatorA,pElevatorB):
    
if pElevatorA.Status = "idle" (pElevatorA.Position - pFloorRequested < (pElevatorB.Position - pFloorRequested):
bestElevator = "A"
print ("1")

else if pElevatorA.Status = "UP" (pElevatorA.Position - pFloorRequested) < (pElevatorB.Position - pFloorRequested):
bestElevator = "A"
print ("2")

else if pElevatorA.Status = "DOWN" (pElevatorA.Position - pFloorRequested) < (pElevatorB.Position - pFloorRequested):
bestElevator = "B"
print ("3")

else if pElevatorB.Status = "idle" (pElevatorB.Position - pFloorRequested) < (pElevatorA.Position - pFloorRequested):
bestElevator = "B"
print ("4")

else if pElevatorB.Status = "UP" (pElevatorB.Position - pFloorRequested) < (pElevatorA.Position - pFloorRequested):
bestElevator = "B"
print ("5")

else:
bestElevator = "A"
print("7")
    
print ("Best Elevator :" + bestElevator)
return bestElevator

def RequestElevator(pFloorRequested,pElevatorA,pElevatorB):
    
bestElevator = FindELEvator(pFloorRequested,pElevatorA,pElevatorB)




