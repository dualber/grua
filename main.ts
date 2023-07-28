Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    soundExpression.hello.playUntilDone()
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 33, 0)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 0, 70)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Light, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 33, 0)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 0, 70)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.init(Pins.P8)
