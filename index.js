// Write your solution in this file!
var customerName = "bob"
// console.log(customerName)
upperCaseCustomerName(customerName)

function upperCaseCustomerName(cn){
    var results = cn
    // var results =cn.toUpperCase()
    // return results
    
    var r =(results.toUpperCase())
    console.log(r)
    return r
    // return (results.toUpperCase())
    


}
setBestCustomer()

function setBestCustomer(){

    var bestCustomer = "not bob"
    return bestCustomer
}
// console.log(setBestCustomer())
// console.log(bestCustomer)

function overwriteBestCustomer(bestCustomer){
    return bestCustomer = "maybe bob"

}
overwriteBestCustomer()

const leastFavoriteCustomer = "cow"

function changeLeastFavoriteCustomer(x){
    x = "chicken"
    return x

}

changeLeastFavoriteCustomer(leastFavoriteCustomer)
