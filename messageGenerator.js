const messages = ['Airbus A380 seating capacity - 853', 'Airbus A330 seating capacity- 406','Airbus A320 - 180', 'B777 seating capacity - 350']

//Function to generate numbers between 0 and 3 (0 and 3 inclusive) 
const randNum = () =>{
    return Math.floor(Math.random() * (3 - 0 + 1) + 0);
    
}
console.log('Test branch');
console.log(messages[randNum()]);
