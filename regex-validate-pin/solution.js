function validatePIN (pin) {
    return /^[\d]{4}$|^[0-9]{6}$/.test(pin)
  }