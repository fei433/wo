function baoshuyouxi(){
    for(var i=1;i<=(32*3);i++)
    {
        if(i%3==0&&i%5==0){
            console.log("第"+i+"个同学报数："+"FizzBizz");
            continue;
        }
        if(i%3==0){
            console.log("第"+i+"个同学报数："+"Fizz");
            continue;
        }
        if(i%5==0){
            console.log("第"+i+"个同学报数："+"Bizz");
            continue;
        }
        console.log("第"+i+"个同学报数："+i);
    }
}
var no=23;
console.log("从学号："+no+"号小朋友开始，看着座位接下去");
baoshuyouxi();