import colors from 'colors'

export function info(text: any): void {
    console.info(colors.cyan(text))
}

export function warn(text: any): void {
    console.warn(colors.yellow(text))
}

export function error(text: any): void {
    console.error(colors.red(text))
}
