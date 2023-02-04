let set1=[3,1,7,9];
let set2=[2,4,1,9,3];
let sum=0;
for(let i=0;i<(set1.length);i++)
{
    for(let j=0;j<(set2.length);j++)
    {
        if(set1[i]==set2[j])
        {
            sum=sum+set1[i];
        }
        else{
            continue;
        }
    }
}
console.log("distinct element sum = ",sum)
let ksum =0;
for(let i=0;i<(set1.length);i++)
{
    for(let j=0;j<(set2.length);j++)
    {
        if(set1[i]==set2[j])
        {
           break;
        }
        else{
            if(j==((set2.length)-1))
            {
                ksum=ksum+set1[i];
            }
        }
    }
}
for(let i=0;i<(set2.length);i++)
{
    for(let j=0;j<(set1.length);j++)
    {
        if(set2[i]==set1[j])
        {
            break;
        }
        else{
            if(j==((set1.length)-1))
            {
                ksum=ksum+set2[i];
            }
        }
    }
}
console.log("non-distinct element sum = ",ksum)