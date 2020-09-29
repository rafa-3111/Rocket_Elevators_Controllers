class Elevator:
    Id = ''
    Status = ''
    Position = ''
    Column = ''
    PositionUp = ''
    PositionDown = ''
    
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
pass      
    
class ColumnA:
    RangeFloor = [1,2,3,4,5,6,7,8,9,10]
        
pass
    
ColumnA = ColumnA.RangeFloor;
ElevatorA = Elevator("A","idle",2,'',0,0);
ElevatorB = Elevator("B","idle",6,"",0,0);
print(ElevatorA);
print(ElevatorB);
    
    
    
  