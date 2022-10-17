function digitize(nn) {
    let n = nn.toString()
    let res = []

    for (let i = n.length -1; i >= 0; i--) {
        res.push(+n[i])
    }
    return res
}