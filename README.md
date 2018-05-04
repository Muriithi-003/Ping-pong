Ping Pong
===================

- - - -
#### By **Muriithi Vionna**

## Description ##
This a web based javascript number game, it takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:
* Numbers divisible by 3 are replaced with "ping"
* Numbers divisible by 5 are replaced with "pong"
* Numbers divisible by 15 are replaced with "pingpong"

## Setup/Installation ##
* Git clone https://github.com/Muriithi-003/Ping-pong.git or download and unzip the repository from github.
* Open index.html via your web browser.

### Live demo ###
To view the page click on the link below
* https://Muriithi-003.github.io/Ping-pong/

## Specifications ##
* It counts up to the provided number
    * **Example Input** :  2
    * **Example Output** : [1,2]
    * `for(var i=1; i<=userInput; i+=1){ //count to the user input;}`
* It replaces numbers divisible by 3 with **ping**
    * **Example Input** :  4
    * **Example Output** : [1, 2, ping, 4]
    * `if(number % 3===0){ return "ping" }`

* It replaces numbers divisible by 5 with **pong**
    * **Example Input** :  6
    * **Example Output** : [1, 2, ping, 4, pong, ping]
    * `if(number % 5===0){ return "pong" }`
* It replaces numbers divisible by 15 with **pingpong**
    * **Example Input** :  17
    * **Example Output** : [1, ..., ping, 13, 14, pingpong, 16, 17]
    * `if(number % 15===0){ return "pingpong" }`

## Known Bugs ##

There are no known bugs. If you find any be sure to create an issue and I will respond to it.

## Technology used ##

* Hyper Text Markup
* Cascading Style Sheets
* Twitter's Bootstrap
* Javascript
* Jquery Library

## License ##
This project is licensed under the MIT Open Source license,
