// checking for overlapping interval
let a= [[1,5],[6,10],[12,15],[3,7]];
for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        if((a[i][1]>a[j][0])&&(a[i][1]<a[j][1]))
        {
            console.log(a[i],a[j],"  ","intervals overlap");
        }
    }
}
//checking for non-overlapping
let b= [[1,5],[6,10],[12,15]];
for(let i=0;i<b.length;i++)
{
    for(let j=i+1;j<b.length;j++)
    {
        if((b[i][1]>b[j][0])&&(b[i][1]<b[j][1]))
        {
            console.log(b[i],b[j]," ","intervals overlap")
        }
        else{
            console.log(b[i],b[j]," ","intervals do not overlap")
        }
    }
} 