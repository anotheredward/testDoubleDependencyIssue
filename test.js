'use strict'
/* global describe, it, beforeEach, afterEach */

const assert = require('assert')
const getUuid = require('./getUuid')
const td = require('testdouble')
const uuidMock = td.replace('uuid')
const uuidString = '12345678-1234-4123-1234-123456789012'

describe('getUuid', function () {
  beforeEach(function () {
    td.when(uuidMock.v4()).thenReturn(uuidString)
  })

  it('local call should return the mocked value', function () {
    const result = uuidMock.v4()
    return assert.equal(result, uuidString)
  })

  it('call from required dependency should return the mocked value', function () {
    const result = getUuid()
    return assert.equal(result, uuidString)
  })

  afterEach(function () {
    td.reset()
  })
})
