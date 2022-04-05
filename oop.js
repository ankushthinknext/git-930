// Encapsulation, Abstraction, Inheritance, Polymorphism

class TeleVision {
  constructor(modelNo, color) {
    this.modelNo = modelNo;
    this.color = color;
  }
  //properties

  #isRunning = false;
  #currentVolume = 0;
  #MAX_VOLUME = 10;
  #MIN_VOLUME = 0;
  //Getter
  get isRunning() {
    return this.#isRunning;
  }
  get volume() {
    return this.#currentVolume;
  }
  // setter Functions
  set volume(value) {
    //check if number and within range
    if (
      typeof value === "number" &&
      value >= this.#MIN_VOLUME &&
      value <= this.#MAX_VOLUME
    ) {
      this.#currentVolume = value;
    } else {
      console.error("In valid value for volume");
    }
  }

  //Methods
  volDown() {
    if (this.#currentVolume <= this.#MIN_VOLUME)
      throw new Error("Minimum volume reached...");
    this.#currentVolume--;
    console.log("Volume", this.#currentVolume);
  }

  volUp() {
    if (this.#currentVolume >= this.#MAX_VOLUME)
      throw new Error("Maximum volume reached...");
    this.#currentVolume++;
    console.log("Volume", this.#currentVolume);
  }

  off() {
    if (!this.#isRunning) throw new Error("Tv hasn't started yet");
    this.#isRunning = false;
    console.log("Tv is turnning off..");
  }
  on() {
    if (this.#isRunning) throw new Error("Tv is running...");
    this.#isRunning = true;
    console.log("Tv is on...");
  }
}
