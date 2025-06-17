function createBankAccount(current_amount){
 
    let amount =current_amount;
    function deposit(depositeAmount){
      amount+=depositeAmount;
      return amount;
    }
    function withdraw(withdrawAmount){
      
      if(amount>=withdrawAmount){
        amount-=withdrawAmount;
        return amount;
      }
      
    }
    function getBalance(){
      return amount;
    }
    return {deposit,withdraw,getBalance}
  }
  
  const account = createBankAccount(100);
  
  console.log(account.deposit(50)); // Output: 150
  
  console.log(account.withdraw(30)); // Output: 120
  
  console.log(account.getBalance()); // Output: 120
  
  