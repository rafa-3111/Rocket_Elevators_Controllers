#method elevator 
class Elevator_Other
    attr_accessor :pId, :pStatus, :pPosition, :pColumn, :pPositionUp, :pPositionDown
    def initialize args = {}
        self.ID = args[:pId]
        self.Status = args[:pStatus]                   
        self.Position = args[:pPosition]                    
        self.Column = args[:pColumn]                      
        self.PositionUp = args[:pPositionUp]                
        self.PositionDown = args[:pPositionDown] 
    end 
end 

class Elevator
    def initialize(pId, pStatus, pPosition, pColumn, pPositionUp, pPositionDown)
        @ID = pId
        @Status = pStatus                      
        @Position = pPosition                      
        @Column = pColumn                        
        @PositionUp = pPositionUp                 
        @PositionDown = pPositionDown              
        @OpenDoor = def OpenDoor
                        puts"Open Door!"
                    end
        @CloseDoor = def CloseDoor 
                        puts"Close Door!"
                     end   
    end
end   


class Column     
    def initialize(pArrayFloor)
        @arrayFloor = pArrayFloor
        @RangeFloor = []
    
        mynumber = @arrayFloor
        arr = mynumber
        
        for i in 0..(mynumber) do
            arr[i] =i + 1
        end
    end    
end    
      
def MoveElevator(pFloorRequested,pElevator)
 
    pElevator.CloseDoor[]
    elevatorFloor = pElevator.Position 
    floorRequested = pFloorRequested
    puts("Elevator Position " + str(elevatorFloor))
    puts("Requested Position " + str(floorRequested))
    if floorRequested == elevatorFloor
            puts("Elevator at the same Floor!")
    pElevator.OpenDoor 
    
    if int(floorRequested) > int(elevatorFloor)        
        if pElevator.Status =="Up" and pElevator.PositionUp == floorRequested
            puts("Elevator Direction " + pElevator.Status)            
        for move in range(elevatorFloor,int(floorRequested)+1)
            puts("Elevator moved to floor " + str(move))
            pElevator.Position = move
        end    
          
    else                
        if pElevator.Status == "DOWN" and pElevator.PositionDown == floorRequested
            puts("Elevator Direction" + pElevator.Status)            
        for move in range(elevatorFloor,int(floorRequested)-1)
            puts("Elevator moved to floor" + str(move))
            pElevator.Positon = move 
        end
 
    pElevator.Status = 'idle'   
    puts("Set Status Elevator after move to : " + pElevator.Status)
    puts("Elevator Arrived at Floor!")
    pElevator.OpenDoor[]
    return "Elevator moved with success"

    end 
end  
end   
end    
end   

def FindElevator(pFloorRequested,pElevatorA,pElevatorB) 
    
    if (pElevatorA.Status == "idle" and pElevatorB.Status == "idle") 
        if ((int(pElevatorA.Position) > int(pFloorRequested)) and int(pElevatorB.Position) > int(pFloorRequested))
            if ((pElevatorA.Position == pFloorRequested) and (pElevatorB.Position == pFloorRequested))
                 bestElevator = "A" 
            elsif (int(pElevatorA.Position) - int(pFloorRequested) > int(pElevatorB.Position) - int(pFloorRequested))
                 bestElevator = "B"
            elsif (int(pElevatorA.Position) - int(pFloorRequested) < int(pElevatorB.Position) - int(pFloorRequested))
                 bestElevator = "A"
            else
                bestElevator = "A"   
            end
        elsif (int(pFloorRequested) > int(pElevatorA.Position) and int(pFloorRequested) > int(pElevatorB.Position))
            if ((pElevatorA.Position == pFloorRequested) and (pElevatorB.Position == pFloorRequested))
                bestElevator = "A"
            elsif (int(pFloorRequested) - int(pElevatorA.Position) > int(pFloorRequested) -int(pElevatorB.Position))
                bestElevator = "B"
            elsif (int(pFloorRequested) - int(pElevatorA.Position) < int(pFloorRequested) - int(pElevatorB.Position))
                bestElevator = "A"
            else
                bestElevator = "A"
            end
        elsif (int(pElevatorA.Position) > int(pFloorRequested) and int(pFloorRequested) > int(pElevatorB.Position))
            if ((pElevatorA.Position == pFloorRequested) and (pElevatorB.Position == pFloorRequested)) 
                bestElevator = "A"
            elsif (int(pElevatorA.Position) - int(pFloorRequested) > int(pFloorRequested) - int(pElevatorB.Position))
                bestElevator = "B"
            elsif (int(pElevatorA.Position) - int(pFloorRequested) < int(pFloorRequested) - int(pElevatorB.Position))
                bestElevator = "A"
            else
                bestElevator = "A"
            end   
        elsif (int(pFloorRequested) > int(pElevatorA.Position) and int(pElevatorB.Position) > int(pFloorRequested))   
            if ((pElevatorA.Position == pFloorRequested) and (pElevatorB.Position == pFloorRequested))
                bestElevator = "A"
            elsif (int(pFloorRequested) - int(pElevatorA.Position) > int(pElevatorB.Position) -int(pFloorRequested))
                bestElevator = "B"
            elsif (int(pFloorRequested) - int(pElevatorA.Position) < int(pElevatorB.Position) - int(pFloorRequested))
                bestElevator = "A"
            else
                bestElevator = "A" 
            end
        else
           bestElevator = "A"
        end
    end    
    puts("Best Elevator : " + str(bestElevator))
       
    return bestElevator

end
def RequestElevator (pFloorRequested,pElevatorA,pElevatorB,pElevatorCalled)

    bestElevator = pElevatorCalled
    if (pElevatorCalled == "") 
        bestElevator = FindElevator(pFloorRequested,pElevatorA,pElevatorB)
    else
        puts("Best Elevator : " + pElevatorCalled)
    end    
    
    if (bestElevator == "A" or pElevatorCalled=="A")
        elevatorStatus = MoveElevator(pFloorRequested,pElevatorA)
    else  
        elevatorStatus = MoveElevator(pFloorRequested,pElevatorB)
    end    
    return elevatorStatus

end

def Main_SC1()

    Column1 = Column.new(10,10)
    Column1.arrayFloor = 10
    Column1.RangeFloor = 10

    ElevatorA = Elevator.new
    ElevatorA.Id = "A" 
    ElevatorA.Status = "idle"
    ElevatorA.Position = 2
    ElevatorA.Column = Column1.arrayFloor
    ElevatorA.PositionUp = 0
    ElevatorA.PositionDown = 0

    ElevatorB = Elevator.new
    ElevatorB.Id = "B" 
    ElevatorB.Status = "idle"
    ElevatorB.Position = 6
    ElevatorB.Column = Column1.arrayFloor
    ElevatorB.PositionUp = 0
    ElevatorB.PositionDown = 0

    # USER REQUEST
    # SOMEONE is on floor 3 Request elevator
    userRequest = "3"
    puts ("User Request elevator at : " + userRequest + " floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,"")
    puts (status)
    # SOMEONE floor 3 Request to floor 7th
    userRequest = "7"
    puts("User Request elevator go to : " + userRequest + "th floor.")
    status = RequestElevator(userRequest,ElevatorA,ElevatorB,ElevatorA.Id)
    puts(status)
end  