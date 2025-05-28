


const checkout={
    items:[],
    total:0,
    
    addItem(item){
        let price=parseFloat(item.price)

        if(!price || !item.name|| price <= 0){
            console.log(" data missing!")
            return;

        } 

        if(!isFinite(price) ||  isNaN(price) || typeof item.name !=="string" ){
             console.log("invalid data!")
             return;
        }  
        
       
        
        this.items.push({name: item.name, price});
        this.total += price;
        console.log(`${item.name} is added in the cart`)
        return
    },
    getTotal(){
        return `Total:${this.total.toFixed(2)}`
    }
}

checkout.addItem({ name: "Coffee Maker", price: "99.95" });
    
checkout.addItem({ name: "Milk", price: 3.50 });
    
console.log(checkout.getTotal()); 