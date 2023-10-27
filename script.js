alert("Hello")
/*Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
 */
// function getMin(){
//     const num1 = +prompt("Input num1")
//     const num2 = +prompt("Input num2")
//     const result = Math.min(num1,num2)
//     console.log(result)
// }
// getMin()
// /*Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
//  */
// function getEven(){
//     const num1 = +prompt("Input num1")
//     const num2 = +prompt("Input num2")
//     const min = Math.min(num1,num2)
//     const max = Math.max(num1,num2)
//     for(let i = min; i <= max; i++){
//         if(i%2==0){
//             console.log(i)
//                     }
//     }
// }

// getEven()

/**Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и
 * возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
 */


// function takePow(){
//     const num1 = +prompt("Input num1")
//     const num2 = 2
//     const result = Math.pow(num1,num2)
//     console.log(result)
// }

// takePow()

/*Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
 */
//  function takeSum(){
//     const n = +prompt("Input number")
//        let sum = 0
//        for(let i = 1; i <= n; i++ ){
//            sum = sum + i 
//                } console.log(sum)
//    }

//    takeSum()

//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m.
// Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
//  
// function takeEvenOdd(){
//   const n = +prompt("Input n")
//   const m = +prompt("Input m")
//   let sumEV = 0
//   let sumOd = 0
//     for(let i = n; i <= m; i++){
//      if(i%2===0){
//      console.log(`Чётное число ${i}`)       
//              sumEV = sumEV + i 
//                 } console.log(`Сумма чётных чисел равна ${sumEV}`)}

//     for(let i = n; i <= m; i++) {
//       if(!i%2==0){
//        console.log(`Нечётное число ${i}`)
//        sumOd = sumOd + i
//      }    console.log(`Сумма нечётных чисел равна ${sumOd}`)       
//                   }
//              }      
                 
//               takeEvenOdd()



//  Программа отрабатывает отрицательный диапазон 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m.
// Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
 
function takeEvenOdd(){
   const n = +prompt("Input n")
   const m = +prompt("Input m")
   let sumEV = 0
   let sumOd = 0
     for(let i = n; i <= m; i++){
      if(i%2===0){
      console.log(`Чётное число ${i}`)       
              sumEV = sumEV + i 
                 } console.log(`Сумма чётных чисел равна ${sumEV}`)}

     for(let i = n; i <= m; i++) {
      if(i%2==1){
        console.log(`Нечётное число ${i}`)
        sumOd = sumOd + i
      }    console.log(`Сумма нечётных чисел равна ${sumOd}`)       
                   }
              }      
                 
               takeEvenOdd()

////// Программа не работает в отрицательном диапазоне ?!






//  Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива.
//  Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'
//              

// function longElem(){
//      const massive = ['jjl'.length,'hdhdhl'.length,'sgdgsdfg'.length,'bgbahahaajaja'.length,'qtywexxbnznz'.length]
     
//      if(massive.length==0){
//       console.log(null)
//     }
//       console.log(`Массив содержит ${massive.length}  элементов`)

//       for(let i = 0; i < massive.length; i++){
//           console.log(`${i}-тый элемент массива : " ${massive[i]}`)
//         }



//           for(let i = 0; i < massive.length; i++){
                    
              
//               if ( massive[i] == massive[i+1]){
//               console.log(`Первый одинаковый элемент массива на "${i}-м" месте со значением ${massive[i]}`)                
//                 }
//               if(massive[i] > massive[i+1]){
//                  console.log(`Самый длинный элемент массива "${i}-й" со значением ${massive[i]}`)
//            }
//      }
// }
 
//  longElem()


 








