function repeat(s, n) {
    return (n > 0) ? s.concat(repeat(s, --n)) : "";
}
