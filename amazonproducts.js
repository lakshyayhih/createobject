// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

var amazon = [
    {name:"Speakers", price:5400, rating:4},
    {name:"headphones", price:3000, rating:3},
    {name:"playstation",price:20000, rating:5}
];

function productandrating(amazon){
    for(var i=0;i<amazon.length;i++){
        console.log(i+1+"."+amazon[i].name+" rating="+amazon[i].rating)
    }
}
productandrating(amazon)
function averagerating(amazon){
    var sum=0
    for(var i=0;i<amazon.length;i++){
        sum+=amazon[i].rating
    }
    console.log("average rating is="+sum/amazon.length)
}

averagerating(amazon)

function minprice(amazon){
    var min=amazon[0].price
    var product=amazon[0].name
    for(var i=1;i<amazon.length;i++){
        if(amazon[i].price<min){
            min=amazon[i].price
            product=amazon[i].name
        }
    }
    console.log("cheapest product is="+product)
}

minprice(amazon)

