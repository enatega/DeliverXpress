import * as Yup from 'yup'

// Define the validation schema using yup
const schema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters')
    .max(20, 'Password must be at most 20 characters')
})

// Validation function
export default function validateFunc(form) {
  try {
    // Validate synchronously and return undefined if valid
    schema.validateSync(form, { abortEarly: false })
    return undefined // Mimics validate.js returning undefined for no errors
  } catch (error) {
    // Transform yup errors into validate.js-like error object
    const errors = {}
    error.inner.forEach(err => {
      if (err.path) {
        errors[err.path] = errors[err.path] || []
        errors[err.path].push(err.message)
      }
    })
    return errors
  }
}
