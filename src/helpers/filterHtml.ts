export const filterHtml = (html: string) => {
    let sanitized;
    const blackList = ["script", "meta", "link", "style", "iframe", "embed"]

    const regex = new RegExp(`<(${blackList.join("|")}).*?>.*?</\\1>`, "g")
    sanitized = html.replace(regex, "")

    return sanitized
}
