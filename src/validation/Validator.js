class Validator {
  #inputArray;

  constructor(inputArray) {
    this.#inputArray = inputArray;
  }

  validateInput() {
    if (!this.#isValidateCondition()) {
      throw new Error('[ERROR] 메시지');
    }
  }

  #isValidateCondition() {
    return condition;
  }
}

export default Validator;
