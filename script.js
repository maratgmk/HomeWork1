alert ("Hello") 

 for(let i = 0; i<=10; i+=2){
     console.log(i);    
 }

 for(let i = 55; i>=20 ; i--){
     console.log(i)
 }

const numbers = [3, 5, 11, 2, 8, 1, 6];
  for(let i = 0; i < numbers.length; i++){
      console.log(numbers[i])
  }

console.log(`numbers = [${numbers[0]},${numbers[1]},${numbers[2]},${numbers[3]},${numbers[4]},${numbers[5]},${numbers[6]}]`)

const numbers_sqared = []
for(let i = 0; i < numbers.length; i ++){
   numbers_sqared.push(numbers[i]*numbers[i])
}
console.log(numbers_sqared)
console.log(`numbers_sqared = [${numbers_sqared[0]},${numbers_sqared[1]},${numbers_sqared[2]},${numbers_sqared[3]},${numbers_sqared[4]},${numbers_sqared[5]},${numbers_sqared[6]}]`)

const last_elem = numbers_sqared[numbers_sqared.length - 1]
console.log(`last_elem = ${last_elem}`)
console.log(`last_elem = ${numbers_sqared[numbers_sqared.length - 1]}`)

const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }
    console.log(`User's name is ${user.first_name} ${user.last_name}. He is ${user.age} yaers old.`)


