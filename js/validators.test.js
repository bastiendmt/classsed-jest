import {
  validateName,
  validateConfirmPassword,
  validateEmail,
} from "./validators";

let result;

test("validateName()", () => {
  result = validateName("John Doe");
  expect(result).not.toEqual({
    valid: true,
    error: "Must not be empty",
  });

  result = validateName(" ");
  expect(result).toEqual({
    valid: false,
    error: "Must not be empty",
  });
});

test("confimPassword()", () => {
  result = validateConfirmPassword("123456a", "123456b");

  expect(result).toEqual({
    valid: false,
    error: "Passwords must match",
  });
});

test("validateEmail()", () => {
  result = validateEmail("test@test");
  expect(result).toEqual({
    valid: false,
    error: "Must be a valid email address",
  });
});
