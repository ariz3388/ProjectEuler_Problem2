// JavaScript source code
function doTheMath()
{
    var term1 = 1;
    var term2 = 2;
    var sumofAll = 0;
    var counter = 0;

    while ((term1 + term2) < 4000000)
    {
        var ans = term1 + term2;

        if (isEven(ans))
        {
            sumofAll += ans;
            counter++;
        }

        term1 = term2;
        term2 = ans;
    }

    return sumofAll;

}

function isEven(number)
{
    if (number % 2 == 0) return true;
    return false;
}