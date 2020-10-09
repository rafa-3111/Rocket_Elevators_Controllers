
defmodule Column do
  def sleep() do
    :timer.sleep(1000)
  end
end

defmodule Elevator do

  def _New(number) do
    IO.puts "\t\t== New Elevator Created"
    _elevator = %{:number => number, 4 => :b}
  end

  def openDoor() do
    IO.puts "\t\tDoor is openning"
    File.open()
    IO.puts "\t\tDoor is open"
    File.open()
    closeDoor()
  end

  def closeDoor() do
    IO.puts "\t\tBe careful door is closing"
    File.closed()
    IO.puts "\t\tDoor is close"
    File.closed()
  end

end

defmodule MoveElevator do
  def moveElevator(requestedFloor, currentFloor) do
    if requestedFloor > currentFloor do
      moveUp(requestedFloor, currentFloor)
    else
      moveDown(requestedFloor, currentFloor)
    end
  end
  def moveUp(requestedFloor, currentFloor) do
    if requestedFloor == currentFloor do
      IO.puts "\t\t Your are comming on floor #{currentFloor}"
      Elevator.openDoor()
    else
      IO.puts "\t\t Moving from #{currentFloor} to #{currentFloor + 1}"
      Tools.sleep()
      moveUp(requestedFloor, currentFloor + 1)
    end
  end

  def moveDown(requestedFloor, currentFloor) do
    if requestedFloor == currentFloor do
      IO.puts "\t\t Your are comming on floor #{currentFloor}"
      Elevator.openDoor()
    else
      IO.puts "\t\t Moving from #{currentFloor} to #{currentFloor - 1}"
      File.t()
      moveDown(requestedFloor, currentFloor - 1)
    end
  end
end

defmodule Column do
end

MoveElevator.moveElevator(10, 5)
MoveElevator.moveElevator(5, 10)

elevator = Elevator._New("Elev")

IO.puts elevator[:name]

