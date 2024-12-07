export default function Hooks () {
  const isFormValid = (form) => {
    if (!form) return false

    // Check all form fields for validity
    return Object.entries(form).every(([key, field]) => {
      // Skip validation if the field is optional and not filled
      if (!field.required && !field.value.trim()) return true

      // Perform required field validation
      if (field.required && !field.value.trim()) {
        field.error = true
        field.msg = field.requiredMsg || `${key} is required`
        return false
      }

      // Additional validations (e.g., email format)
      if (field.email && key === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())) {
        field.error = true
        field.msg = field.emailMsg || 'Invalid email address'
        return false
      }

      // Reset errors if validation passes
      field.error = false
      field.msg = ''
      return true
    })
  }

  const validateInput = (form, field) => {
    if (!field || !form[field]) return

    const value = form[field].value.trim()
    const isEmail = field === 'email' && form[field].email
    const required = form[field].required

    if (required && !value) {
      form[field].error = true
      form[field].msg = form[field].requiredMsg || `${field} is required`
    } else if (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      form[field].error = true
      form[field].msg = form[field].emailMsg || 'Invalid email address'
    } else {
      form[field].error = false
      form[field].msg = ''
    }
  }

  return { isFormValid, validateInput }
}
