class Solution
{
    factorialNumbers(N)
    {
       const factorialNumbers = [];
  let factorial = 1;
  let n = 1;

  while (factorial <= N) {
    factorialNumbers.push(factorial);
    n++;
    factorial *= n;
  }

  return factorialNumbers;
    }
}