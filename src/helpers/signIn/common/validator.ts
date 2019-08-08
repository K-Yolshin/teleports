/**
 * Type for validate function
 */
type validateFn = (value: string | number) => boolean;

/**
 * Interface for FormData object
 * */
interface FormData {
  /**
   * key - any prop name
   */
  [key: string]: {
    /**
     * Value of prop name
     */
    value: string | number,
    /**
     * Error of prop name
     */
    error?: boolean | string,
  };
}

/**
 * Interface for Validator object
 */
interface Validator {
  /**
   * key - any prop name
   */
  [key: string]: {
    /**
     * Function for validate prop name
     */
    validate: validateFn,
    /**
     * Error of prop name
     */
    error?: boolean | string,
  };
}

interface ValidatorResult {
  /**
   * Result of Validate Form
   */
  valid: boolean;
  /**
   * Objects of error
   */
  errors: {
    /**
     * Name - error
     */
    [key: string]: boolean | string,
  };
}

/**
 * Validate form field
 * @param value
 * @param validate
 */
const validateField = (value: string | number, validate: validateFn): boolean => validate(value);

/**
 * Validate form
 * @param formData
 * @param validator
 */
const validateForm = (formData: FormData, validator: Validator): ValidatorResult => {
  const formFields = Object.keys(formData);

  const errors = {};

  formFields
    .filter((field: string) => (
      validator[field] && validator[field].validate ?
        !validateField(formData[field].value, validator[field].validate) :
        false
    ))
    .forEach((field: string) => {
      errors[field] = validator[field].error || false;
    });

  return { errors, valid: Object.keys(errors).length === 0 };
};

export default validateForm;
