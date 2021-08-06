export function maskEmailAddress(emailAddress: string) {
    function mask(str: string) {
        const strLen = str.length
        if (strLen > 4) {
            return (
                str.substr(0, 1) +
                str.substr(1, strLen - 1).replace(/\w/g, '*') +
                str.substr(-1, 1)
            )
        }
        return str.replace(/\w/g, '*')
    }
    return emailAddress.replace(
        /([\w.]+)@([\w.]+)(\.[\w.]+)/g,
        function (m, p1, p2, p3) {
            return mask(p1) + '@' + mask(p2) + p3
        }
    )
}
