var pn=["Rice","Dal","Salt"];

var pq=[2,3,1]
var pp=[60,50,20];
var data=[]


for(var i=0;i<pn.length;i++){
    var product={}
    product.name=pn[i]
    product.quntity=pq[i]
    product.price=pp[i]
    product.t=pq[i]*pp[i]
    
    data.push(product)    
}

function total(data){
    var sum=0;
    for(var i=0;i<data.length;i++){
        sum+=data[i].t
    }
    console.log(sum)
}
total(data)