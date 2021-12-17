dht11_dht22.queryData(
DHTtype.DHT11,
DigitalPin.C16,
true,
true,
true
)
basic.forever(function () {
    basic.showString(" " + dht11_dht22.readData(dataType.humidity) + "%")
    basic.showString(" " + dht11_dht22.readData(dataType.temperature) + "C")
})
