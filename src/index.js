/**
 * Validate every validator in the array.
 *
 * @param {Function[]} validators - List of validations to preform.
 * @returns {Function} - Function running all validators.
 */
export function every(...validators) {
    return params => validators.every(validator => validator(params))
}

/**
 * Validate either validator in the parameters.
 *
 * @param {Function} first - First validator.
 * @param {Function} second - Second validator.
 * @returns {Function} - Function testing first || second.
 */
export function either(first, second) {
    return params => first(params) || second(params)
}

/**
 * Validate any validator in the parameters.
 *
 * @param {Function[]} validators - An array of validators.
 * @returns {Function} - Function testing any of the validators pass.
 */
export function any(...validators) {
    return params => validators.some(validator => validator(params))
}


// Types
export const isArray = value => Array.isArray(value)
export const isBoolean = value => typeof value === 'boolean'
export const isInteger = value => Number.isInteger(value)
export const isNull = value => value === null
export const isObject = value => typeof value === 'object'
export const isString = value => typeof value === 'string'

// Attributes
export const hasLength = value => value.length > 0
export const hasText = text => value => value === text
export const isColor = value => /^#[0-9A-F]{6}$/i.test(value)
export const isEmptyString = value => value === ''
export const isPositive = value => value > 0
