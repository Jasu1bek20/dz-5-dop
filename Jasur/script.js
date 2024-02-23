function test_prime(n) {
    if (n <= 1) {
        return false;
    }

    // Проверяем делители от 2 до корня из числа n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

document.writeln(test_prime(51)); // false
