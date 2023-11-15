/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  Mon,
  Tue,
  Wen,
  Thu,
  Fri,
  Set,
  Sun,
}

function isWeekend(day: Days): boolean {
  if (day === 5 || day === 6) {
    return true;
  }
  return false;
}
