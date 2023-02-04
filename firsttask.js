let text= "React is a javascript library."
let vowels=["a","e","i","o","u"];
let nword=0;
let nvowels=0;
for(let i=0;i<(text.length);i++)
{
    if((text[i]==" ")||(text[i]=="."))
    {
        nword=nword+1;
    }
    else{
        continue;
    }
}
console.log("the number of words =",nword);
for(let i=0;i<(text.length);i++)
{
    for(let j=0;j<(vowels.length);j++)
    {
        if(text[i]==vowels[j])
        {
            nvowels=nvowels+1;
        }
        else{
            continue;
        }
    }
}
console.log("the number of vowels are =",nvowels)