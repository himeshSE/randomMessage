const messages = ['Airbus A380 seating capacity - 853', 'Airbus A330 seating capacity- 406','Airbus A320 - 180', 'B777 seating capacity - 350']

//Function to generate numbers between 0 and 3 (0 and 3 inclusive) 
const randNum = () =>{
    return Math.floor(Math.random() * (3 - 0 + 1) + 0);
}
console.log('Hello, folowing is the random message related to aircrafts.');
console.log(messages[randNum()]);