var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var tags2 = [];
for(var string of tags) {
    if (tags2.includes(string)) continue;
    tags2.push((string))
}
console.log(tags)
console.log(tags2)
for (var teg of Object.values(tags)){
    console.log(teg)
}
for (var i =0; i < tags.length; i++){
    if (tags2[tags[i]]){
        tags2[tags[i]]++;
    }else tags2[tags[i]] =1;
}
console.log(tags2)



var numbers = [2,1,5,5,4,2,7,6,5,8,1,2,43,55,66,2,7,9,100];
var numbers2 = numbers[0];
for (var i = 0; i < numbers.length; i++){
    if (numbers [i] > numbers2) {
        numbers2 = numbers[i];
    }

}
console.log(numbers)
console.log(numbers2)






