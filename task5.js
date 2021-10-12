alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1, 2, won't reach to 3
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1 cause it's the first operand and then undefined cause it searches for the falsy value
alert( null || 2 && 3 || 4 );  // will check 2 && 3 first, cause && is higher than ||, neither 2 nor 3 are falsy so it just stops on 3, then checks 3 || 4, they're both truthy so it chooses the first one (3), it comes to null || 3, null is falsy so the answer is 3
if (age >= 14 && age <= 90)
if (!(age >= 14 && age <= 90))
//?
// ?
