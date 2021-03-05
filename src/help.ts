import colors from 'colors'
import core from '@actions/core'

export function info(text: any): void {
    core.info(colors.cyan(text))
}

export function warn(text: any): void {
    core.warning(colors.yellow(text))
}

export function error(text: any): void {
    core.error(colors.red(text))
}
