class App {
  play() {
    class App {
      async run() {
        const validatedInput = await this.getValidatedInput();
        const instance = new YourClass(validatedInput);
        const result = instance.methodName();

        this.printResult(result);
      }

      // TODO: 입력 검증 로직
      async getValidatedInput() {
        while (true) {
          try {
            const input = await this.#getInput();
            const validator = new Validator(input);
            validator.validateMethod();

            return input;
          } catch (error) {
            ConsoleOutput.writeError(error.message);
          }
        }
      }

      // TODO: UserInput 파싱
      async #getInput() {
        const input = await ConsoleInput.read('입력 프롬프트 메시지');
        return input.split(',').map((item) => item.trim());
      }

      // TODO: 출력값 맞춰 출력
      printResult(result) {
        ConsoleOutput.write(`출력 형식`);
      }
    }
  }
}

const app = new App();

app.play();

module.exports = App;
