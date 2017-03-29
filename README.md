When trying to replace the uuid library:
Calls local to the test return what I expect, calls with one layer of indirection work, but as soon as we have two layers of indirection things stop working properly

Original issue has been fixed according to: https://github.com/testdouble/testdouble.js/issues/225

Test Output:
```
> testdoubledependencyissue@1.0.0 test /Users/ed/Documents/testDoubleDependencyIssue
> mocha test.js



  getUuid
    ✓ local call should return the mocked value
    ✓ call from required dependency should return the mocked value
    1) call from required dependency of the required dependency should return the mocked value


  2 passing (45ms)
  1 failing

  1) getUuid call from required dependency of the required dependency should return the mocked value:
     AssertionError: undefined == '12345678-1234-4123-1234-123456789012'
      at Context.<anonymous> (test.js:30:19)
```
