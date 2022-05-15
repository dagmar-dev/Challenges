function combat(health, damage) {
    // Write your code here
    let life = health - damage
    if (life < 0) {
        return 0
    } else {
        return life
    }
}
