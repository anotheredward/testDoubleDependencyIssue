When trying to replace the uuid library:
Calls local to the test return what I expect, but calls from the module under test do not.

Correction for code can be found here: https://github.com/testdouble/testdouble.js/issues/225

Test Output:
```
> testdoubledependencyissue@1.0.0 test /Users/ed/Documents/testDoubleDependencyIssue
> mocha test.js



  getUuid
    ✓ local call should return the mocked value
    1) call from required dependency should return the mocked value


  1 passing (16ms)
  1 failing

  1) getUuid call from required dependency should return the mocked value:

      AssertionError: 'dee470e3-855e-4a8c-88e6-e22435ede224' == '12345678-1234-4123-1234-123456789012'
      + expected - actual

      -dee470e3-855e-4a8c-88e6-e22435ede224
      +12345678-1234-4123-1234-123456789012

      at Context.<anonymous> (test.js:22:19)
```
