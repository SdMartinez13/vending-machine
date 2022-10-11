# vending-machine lab 14

## Authors: [Stephen Martinez](https://github.com/SdMartinez13) & [Brandon Pitts](https://github.com/brandomoki)

## Project

* NFT Vending machine
  * orders data includes:
    * nft
    * rarity of nft
    * a transaction ID
    * wallet address

  * client is notified of the data when nft is in transit/delivered

## Requirements

* Your application must employ the following programming concepts:

  * A “hub” server that moderates all events
  * Multiple “clients” that connect to the hub which can both publish and subscribe to events
  * Must operate over a network

* Optional:

  * Engage an API that uses a database to store/retrieve information based on the events being triggered
  * Employ a standard “Queue” to ensure all messages are properly delivered
  * Employ a FIFO “Queue” to ensure ordered delivery of some events

## UML

![uml](/img/Untitled.png)
