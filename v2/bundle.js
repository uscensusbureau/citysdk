(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],3:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],4:[function(require,module,exports){
(function (Buffer){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this,require("buffer").Buffer)
},{"base64-js":2,"buffer":4,"ieee754":9}],5:[function(require,module,exports){
module.exports = {
  "100": "Continue",
  "101": "Switching Protocols",
  "102": "Processing",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "204": "No Content",
  "205": "Reset Content",
  "206": "Partial Content",
  "207": "Multi-Status",
  "208": "Already Reported",
  "226": "IM Used",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "302": "Found",
  "303": "See Other",
  "304": "Not Modified",
  "305": "Use Proxy",
  "307": "Temporary Redirect",
  "308": "Permanent Redirect",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "URI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "421": "Misdirected Request",
  "422": "Unprocessable Entity",
  "423": "Locked",
  "424": "Failed Dependency",
  "425": "Unordered Collection",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "451": "Unavailable For Legal Reasons",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "508": "Loop Detected",
  "509": "Bandwidth Limit Exceeded",
  "510": "Not Extended",
  "511": "Network Authentication Required"
}

},{}],6:[function(require,module,exports){
(function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

}).call(this,{"isBuffer":require("../../is-buffer/index.js")})
},{"../../is-buffer/index.js":11}],7:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var objectCreate = Object.create || objectCreatePolyfill
var objectKeys = Object.keys || objectKeysPolyfill
var bind = Function.prototype.bind || functionBindPolyfill

function EventEmitter() {
  if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
    this._events = objectCreate(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

var hasDefineProperty;
try {
  var o = {};
  if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
  hasDefineProperty = o.x === 0;
} catch (err) { hasDefineProperty = false }
if (hasDefineProperty) {
  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      // check whether the input is a positive number (whose value is zero or
      // greater and not a NaN).
      if (typeof arg !== 'number' || arg < 0 || arg !== arg)
        throw new TypeError('"defaultMaxListeners" must be a positive number');
      defaultMaxListeners = arg;
    }
  });
} else {
  EventEmitter.defaultMaxListeners = defaultMaxListeners;
}

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    if (arguments.length > 1)
      er = arguments[1];
    if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Unhandled "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
      // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
      // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = objectCreate(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
          listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
            existing.length + ' "' + String(type) + '" listeners ' +
            'added. Use emitter.setMaxListeners() to ' +
            'increase limit.');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        if (typeof console === 'object' && console.warn) {
          console.warn('%s: %s', w.name, w.message);
        }
      }
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    switch (arguments.length) {
      case 0:
        return this.listener.call(this.target);
      case 1:
        return this.listener.call(this.target, arguments[0]);
      case 2:
        return this.listener.call(this.target, arguments[0], arguments[1]);
      case 3:
        return this.listener.call(this.target, arguments[0], arguments[1],
            arguments[2]);
      default:
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i)
          args[i] = arguments[i];
        this.listener.apply(this.target, args);
    }
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = bind.call(onceWrapper, state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = objectCreate(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else
          spliceOne(list, position);

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = objectCreate(null);
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = objectCreate(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = objectKeys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = objectCreate(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (!events)
    return [];

  var evlistener = events[type];
  if (!evlistener)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function objectCreatePolyfill(proto) {
  var F = function() {};
  F.prototype = proto;
  return new F;
}
function objectKeysPolyfill(obj) {
  var keys = [];
  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) {
    keys.push(k);
  }
  return k;
}
function functionBindPolyfill(context) {
  var fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
}

},{}],8:[function(require,module,exports){
var http = require('http')
var url = require('url')

var https = module.exports

for (var key in http) {
  if (http.hasOwnProperty(key)) https[key] = http[key]
}

https.request = function (params, cb) {
  params = validateParams(params)
  return http.request.call(this, params, cb)
}

https.get = function (params, cb) {
  params = validateParams(params)
  return http.get.call(this, params, cb)
}

function validateParams (params) {
  if (typeof params === 'string') {
    params = url.parse(params)
  }
  if (!params.protocol) {
    params.protocol = 'https:'
  }
  if (params.protocol !== 'https:') {
    throw new Error('Protocol "' + params.protocol + '" not supported. Expected "https:"')
  }
  return params
}

},{"http":30,"url":36}],9:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],10:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],11:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],12:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],13:[function(require,module,exports){
(function (process){
'use strict';

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


}).call(this,require('_process'))
},{"_process":14}],14:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],15:[function(require,module,exports){
(function (global){
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],16:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],17:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],18:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":16,"./encode":17}],19:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};
},{"./_stream_readable":21,"./_stream_writable":23,"core-util-is":6,"inherits":10,"process-nextick-args":13}],20:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

'use strict';

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":22,"core-util-is":6,"inherits":10}],21:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = require('events').EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var debugUtil = require('util');
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = require('./internal/streams/BufferList');
var destroyImpl = require('./internal/streams/destroy');
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./_stream_duplex":19,"./internal/streams/BufferList":24,"./internal/streams/destroy":25,"./internal/streams/stream":26,"_process":14,"core-util-is":6,"events":7,"inherits":10,"isarray":12,"process-nextick-args":13,"safe-buffer":29,"string_decoder/":27,"util":3}],22:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}
},{"./_stream_duplex":19,"core-util-is":6,"inherits":10}],23:[function(require,module,exports){
(function (process,global,setImmediate){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = require('./internal/streams/destroy');

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("timers").setImmediate)
},{"./_stream_duplex":19,"./internal/streams/destroy":25,"./internal/streams/stream":26,"_process":14,"core-util-is":6,"inherits":10,"process-nextick-args":13,"safe-buffer":29,"timers":34,"util-deprecate":38}],24:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = require('safe-buffer').Buffer;
var util = require('util');

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}
},{"safe-buffer":29,"util":3}],25:[function(require,module,exports){
'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};
},{"process-nextick-args":13}],26:[function(require,module,exports){
module.exports = require('events').EventEmitter;

},{"events":7}],27:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}
},{"safe-buffer":29}],28:[function(require,module,exports){
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_duplex.js":19,"./lib/_stream_passthrough.js":20,"./lib/_stream_readable.js":21,"./lib/_stream_transform.js":22,"./lib/_stream_writable.js":23}],29:[function(require,module,exports){
/* eslint-disable node/no-deprecated-api */
var buffer = require('buffer')
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}

},{"buffer":4}],30:[function(require,module,exports){
(function (global){
var ClientRequest = require('./lib/request')
var response = require('./lib/response')
var extend = require('xtend')
var statusCodes = require('builtin-status-codes')
var url = require('url')

var http = exports

http.request = function (opts, cb) {
	if (typeof opts === 'string')
		opts = url.parse(opts)
	else
		opts = extend(opts)

	// Normally, the page is loaded from http or https, so not specifying a protocol
	// will result in a (valid) protocol-relative url. However, this won't work if
	// the protocol is something else, like 'file:'
	var defaultProtocol = global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : ''

	var protocol = opts.protocol || defaultProtocol
	var host = opts.hostname || opts.host
	var port = opts.port
	var path = opts.path || '/'

	// Necessary for IPv6 addresses
	if (host && host.indexOf(':') !== -1)
		host = '[' + host + ']'

	// This may be a relative url. The browser should always be able to interpret it correctly.
	opts.url = (host ? (protocol + '//' + host) : '') + (port ? ':' + port : '') + path
	opts.method = (opts.method || 'GET').toUpperCase()
	opts.headers = opts.headers || {}

	// Also valid opts.auth, opts.mode

	var req = new ClientRequest(opts)
	if (cb)
		req.on('response', cb)
	return req
}

http.get = function get (opts, cb) {
	var req = http.request(opts, cb)
	req.end()
	return req
}

http.ClientRequest = ClientRequest
http.IncomingMessage = response.IncomingMessage

http.Agent = function () {}
http.Agent.defaultMaxSockets = 4

http.globalAgent = new http.Agent()

http.STATUS_CODES = statusCodes

http.METHODS = [
	'CHECKOUT',
	'CONNECT',
	'COPY',
	'DELETE',
	'GET',
	'HEAD',
	'LOCK',
	'M-SEARCH',
	'MERGE',
	'MKACTIVITY',
	'MKCOL',
	'MOVE',
	'NOTIFY',
	'OPTIONS',
	'PATCH',
	'POST',
	'PROPFIND',
	'PROPPATCH',
	'PURGE',
	'PUT',
	'REPORT',
	'SEARCH',
	'SUBSCRIBE',
	'TRACE',
	'UNLOCK',
	'UNSUBSCRIBE'
]
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/request":32,"./lib/response":33,"builtin-status-codes":5,"url":36,"xtend":39}],31:[function(require,module,exports){
(function (global){
exports.fetch = isFunction(global.fetch) && isFunction(global.ReadableStream)

exports.writableStream = isFunction(global.WritableStream)

exports.abortController = isFunction(global.AbortController)

exports.blobConstructor = false
try {
	new Blob([new ArrayBuffer(1)])
	exports.blobConstructor = true
} catch (e) {}

// The xhr request to example.com may violate some restrictive CSP configurations,
// so if we're running in a browser that supports `fetch`, avoid calling getXHR()
// and assume support for certain features below.
var xhr
function getXHR () {
	// Cache the xhr value
	if (xhr !== undefined) return xhr

	if (global.XMLHttpRequest) {
		xhr = new global.XMLHttpRequest()
		// If XDomainRequest is available (ie only, where xhr might not work
		// cross domain), use the page location. Otherwise use example.com
		// Note: this doesn't actually make an http request.
		try {
			xhr.open('GET', global.XDomainRequest ? '/' : 'https://example.com')
		} catch(e) {
			xhr = null
		}
	} else {
		// Service workers don't have XHR
		xhr = null
	}
	return xhr
}

function checkTypeSupport (type) {
	var xhr = getXHR()
	if (!xhr) return false
	try {
		xhr.responseType = type
		return xhr.responseType === type
	} catch (e) {}
	return false
}

// For some strange reason, Safari 7.0 reports typeof global.ArrayBuffer === 'object'.
// Safari 7.1 appears to have fixed this bug.
var haveArrayBuffer = typeof global.ArrayBuffer !== 'undefined'
var haveSlice = haveArrayBuffer && isFunction(global.ArrayBuffer.prototype.slice)

// If fetch is supported, then arraybuffer will be supported too. Skip calling
// checkTypeSupport(), since that calls getXHR().
exports.arraybuffer = exports.fetch || (haveArrayBuffer && checkTypeSupport('arraybuffer'))

// These next two tests unavoidably show warnings in Chrome. Since fetch will always
// be used if it's available, just return false for these to avoid the warnings.
exports.msstream = !exports.fetch && haveSlice && checkTypeSupport('ms-stream')
exports.mozchunkedarraybuffer = !exports.fetch && haveArrayBuffer &&
	checkTypeSupport('moz-chunked-arraybuffer')

// If fetch is supported, then overrideMimeType will be supported too. Skip calling
// getXHR().
exports.overrideMimeType = exports.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false)

exports.vbArray = isFunction(global.VBArray)

function isFunction (value) {
	return typeof value === 'function'
}

xhr = null // Help gc

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],32:[function(require,module,exports){
(function (process,global,Buffer){
var capability = require('./capability')
var inherits = require('inherits')
var response = require('./response')
var stream = require('readable-stream')
var toArrayBuffer = require('to-arraybuffer')

var IncomingMessage = response.IncomingMessage
var rStates = response.readyStates

function decideMode (preferBinary, useFetch) {
	if (capability.fetch && useFetch) {
		return 'fetch'
	} else if (capability.mozchunkedarraybuffer) {
		return 'moz-chunked-arraybuffer'
	} else if (capability.msstream) {
		return 'ms-stream'
	} else if (capability.arraybuffer && preferBinary) {
		return 'arraybuffer'
	} else if (capability.vbArray && preferBinary) {
		return 'text:vbarray'
	} else {
		return 'text'
	}
}

var ClientRequest = module.exports = function (opts) {
	var self = this
	stream.Writable.call(self)

	self._opts = opts
	self._body = []
	self._headers = {}
	if (opts.auth)
		self.setHeader('Authorization', 'Basic ' + new Buffer(opts.auth).toString('base64'))
	Object.keys(opts.headers).forEach(function (name) {
		self.setHeader(name, opts.headers[name])
	})

	var preferBinary
	var useFetch = true
	if (opts.mode === 'disable-fetch' || ('requestTimeout' in opts && !capability.abortController)) {
		// If the use of XHR should be preferred. Not typically needed.
		useFetch = false
		preferBinary = true
	} else if (opts.mode === 'prefer-streaming') {
		// If streaming is a high priority but binary compatibility and
		// the accuracy of the 'content-type' header aren't
		preferBinary = false
	} else if (opts.mode === 'allow-wrong-content-type') {
		// If streaming is more important than preserving the 'content-type' header
		preferBinary = !capability.overrideMimeType
	} else if (!opts.mode || opts.mode === 'default' || opts.mode === 'prefer-fast') {
		// Use binary if text streaming may corrupt data or the content-type header, or for speed
		preferBinary = true
	} else {
		throw new Error('Invalid value for opts.mode')
	}
	self._mode = decideMode(preferBinary, useFetch)
	self._fetchTimer = null

	self.on('finish', function () {
		self._onFinish()
	})
}

inherits(ClientRequest, stream.Writable)

ClientRequest.prototype.setHeader = function (name, value) {
	var self = this
	var lowerName = name.toLowerCase()
	// This check is not necessary, but it prevents warnings from browsers about setting unsafe
	// headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
	// http-browserify did it, so I will too.
	if (unsafeHeaders.indexOf(lowerName) !== -1)
		return

	self._headers[lowerName] = {
		name: name,
		value: value
	}
}

ClientRequest.prototype.getHeader = function (name) {
	var header = this._headers[name.toLowerCase()]
	if (header)
		return header.value
	return null
}

ClientRequest.prototype.removeHeader = function (name) {
	var self = this
	delete self._headers[name.toLowerCase()]
}

ClientRequest.prototype._onFinish = function () {
	var self = this

	if (self._destroyed)
		return
	var opts = self._opts

	var headersObj = self._headers
	var body = null
	if (opts.method !== 'GET' && opts.method !== 'HEAD') {
		if (capability.arraybuffer) {
			body = toArrayBuffer(Buffer.concat(self._body))
		} else if (capability.blobConstructor) {
			body = new global.Blob(self._body.map(function (buffer) {
				return toArrayBuffer(buffer)
			}), {
				type: (headersObj['content-type'] || {}).value || ''
			})
		} else {
			// get utf8 string
			body = Buffer.concat(self._body).toString()
		}
	}

	// create flattened list of headers
	var headersList = []
	Object.keys(headersObj).forEach(function (keyName) {
		var name = headersObj[keyName].name
		var value = headersObj[keyName].value
		if (Array.isArray(value)) {
			value.forEach(function (v) {
				headersList.push([name, v])
			})
		} else {
			headersList.push([name, value])
		}
	})

	if (self._mode === 'fetch') {
		var signal = null
		var fetchTimer = null
		if (capability.abortController) {
			var controller = new AbortController()
			signal = controller.signal
			self._fetchAbortController = controller

			if ('requestTimeout' in opts && opts.requestTimeout !== 0) {
				self._fetchTimer = global.setTimeout(function () {
					self.emit('requestTimeout')
					if (self._fetchAbortController)
						self._fetchAbortController.abort()
				}, opts.requestTimeout)
			}
		}

		global.fetch(self._opts.url, {
			method: self._opts.method,
			headers: headersList,
			body: body || undefined,
			mode: 'cors',
			credentials: opts.withCredentials ? 'include' : 'same-origin',
			signal: signal
		}).then(function (response) {
			self._fetchResponse = response
			self._connect()
		}, function (reason) {
			global.clearTimeout(self._fetchTimer)
			if (!self._destroyed)
				self.emit('error', reason)
		})
	} else {
		var xhr = self._xhr = new global.XMLHttpRequest()
		try {
			xhr.open(self._opts.method, self._opts.url, true)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}

		// Can't set responseType on really old browsers
		if ('responseType' in xhr)
			xhr.responseType = self._mode.split(':')[0]

		if ('withCredentials' in xhr)
			xhr.withCredentials = !!opts.withCredentials

		if (self._mode === 'text' && 'overrideMimeType' in xhr)
			xhr.overrideMimeType('text/plain; charset=x-user-defined')

		if ('requestTimeout' in opts) {
			xhr.timeout = opts.requestTimeout
			xhr.ontimeout = function () {
				self.emit('requestTimeout')
			}
		}

		headersList.forEach(function (header) {
			xhr.setRequestHeader(header[0], header[1])
		})

		self._response = null
		xhr.onreadystatechange = function () {
			switch (xhr.readyState) {
				case rStates.LOADING:
				case rStates.DONE:
					self._onXHRProgress()
					break
			}
		}
		// Necessary for streaming in Firefox, since xhr.response is ONLY defined
		// in onprogress, not in onreadystatechange with xhr.readyState = 3
		if (self._mode === 'moz-chunked-arraybuffer') {
			xhr.onprogress = function () {
				self._onXHRProgress()
			}
		}

		xhr.onerror = function () {
			if (self._destroyed)
				return
			self.emit('error', new Error('XHR error'))
		}

		try {
			xhr.send(body)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}
	}
}

/**
 * Checks if xhr.status is readable and non-zero, indicating no error.
 * Even though the spec says it should be available in readyState 3,
 * accessing it throws an exception in IE8
 */
function statusValid (xhr) {
	try {
		var status = xhr.status
		return (status !== null && status !== 0)
	} catch (e) {
		return false
	}
}

ClientRequest.prototype._onXHRProgress = function () {
	var self = this

	if (!statusValid(self._xhr) || self._destroyed)
		return

	if (!self._response)
		self._connect()

	self._response._onXHRProgress()
}

ClientRequest.prototype._connect = function () {
	var self = this

	if (self._destroyed)
		return

	self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode, self._fetchTimer)
	self._response.on('error', function(err) {
		self.emit('error', err)
	})

	self.emit('response', self._response)
}

ClientRequest.prototype._write = function (chunk, encoding, cb) {
	var self = this

	self._body.push(chunk)
	cb()
}

ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function () {
	var self = this
	self._destroyed = true
	global.clearTimeout(self._fetchTimer)
	if (self._response)
		self._response._destroyed = true
	if (self._xhr)
		self._xhr.abort()
	else if (self._fetchAbortController)
		self._fetchAbortController.abort()
}

ClientRequest.prototype.end = function (data, encoding, cb) {
	var self = this
	if (typeof data === 'function') {
		cb = data
		data = undefined
	}

	stream.Writable.prototype.end.call(self, data, encoding, cb)
}

ClientRequest.prototype.flushHeaders = function () {}
ClientRequest.prototype.setTimeout = function () {}
ClientRequest.prototype.setNoDelay = function () {}
ClientRequest.prototype.setSocketKeepAlive = function () {}

// Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
var unsafeHeaders = [
	'accept-charset',
	'accept-encoding',
	'access-control-request-headers',
	'access-control-request-method',
	'connection',
	'content-length',
	'cookie',
	'cookie2',
	'date',
	'dnt',
	'expect',
	'host',
	'keep-alive',
	'origin',
	'referer',
	'te',
	'trailer',
	'transfer-encoding',
	'upgrade',
	'via'
]

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"./capability":31,"./response":33,"_process":14,"buffer":4,"inherits":10,"readable-stream":28,"to-arraybuffer":35}],33:[function(require,module,exports){
(function (process,global,Buffer){
var capability = require('./capability')
var inherits = require('inherits')
var stream = require('readable-stream')

var rStates = exports.readyStates = {
	UNSENT: 0,
	OPENED: 1,
	HEADERS_RECEIVED: 2,
	LOADING: 3,
	DONE: 4
}

var IncomingMessage = exports.IncomingMessage = function (xhr, response, mode, fetchTimer) {
	var self = this
	stream.Readable.call(self)

	self._mode = mode
	self.headers = {}
	self.rawHeaders = []
	self.trailers = {}
	self.rawTrailers = []

	// Fake the 'close' event, but only once 'end' fires
	self.on('end', function () {
		// The nextTick is necessary to prevent the 'request' module from causing an infinite loop
		process.nextTick(function () {
			self.emit('close')
		})
	})

	if (mode === 'fetch') {
		self._fetchResponse = response

		self.url = response.url
		self.statusCode = response.status
		self.statusMessage = response.statusText
		
		response.headers.forEach(function (header, key){
			self.headers[key.toLowerCase()] = header
			self.rawHeaders.push(key, header)
		})

		if (capability.writableStream) {
			var writable = new WritableStream({
				write: function (chunk) {
					return new Promise(function (resolve, reject) {
						if (self._destroyed) {
							reject()
						} else if(self.push(new Buffer(chunk))) {
							resolve()
						} else {
							self._resumeFetch = resolve
						}
					})
				},
				close: function () {
					global.clearTimeout(fetchTimer)
					if (!self._destroyed)
						self.push(null)
				},
				abort: function (err) {
					if (!self._destroyed)
						self.emit('error', err)
				}
			})

			try {
				response.body.pipeTo(writable).catch(function (err) {
					global.clearTimeout(fetchTimer)
					if (!self._destroyed)
						self.emit('error', err)
				})
				return
			} catch (e) {} // pipeTo method isn't defined. Can't find a better way to feature test this
		}
		// fallback for when writableStream or pipeTo aren't available
		var reader = response.body.getReader()
		function read () {
			reader.read().then(function (result) {
				if (self._destroyed)
					return
				if (result.done) {
					global.clearTimeout(fetchTimer)
					self.push(null)
					return
				}
				self.push(new Buffer(result.value))
				read()
			}).catch(function (err) {
				global.clearTimeout(fetchTimer)
				if (!self._destroyed)
					self.emit('error', err)
			})
		}
		read()
	} else {
		self._xhr = xhr
		self._pos = 0

		self.url = xhr.responseURL
		self.statusCode = xhr.status
		self.statusMessage = xhr.statusText
		var headers = xhr.getAllResponseHeaders().split(/\r?\n/)
		headers.forEach(function (header) {
			var matches = header.match(/^([^:]+):\s*(.*)/)
			if (matches) {
				var key = matches[1].toLowerCase()
				if (key === 'set-cookie') {
					if (self.headers[key] === undefined) {
						self.headers[key] = []
					}
					self.headers[key].push(matches[2])
				} else if (self.headers[key] !== undefined) {
					self.headers[key] += ', ' + matches[2]
				} else {
					self.headers[key] = matches[2]
				}
				self.rawHeaders.push(matches[1], matches[2])
			}
		})

		self._charset = 'x-user-defined'
		if (!capability.overrideMimeType) {
			var mimeType = self.rawHeaders['mime-type']
			if (mimeType) {
				var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/)
				if (charsetMatch) {
					self._charset = charsetMatch[1].toLowerCase()
				}
			}
			if (!self._charset)
				self._charset = 'utf-8' // best guess
		}
	}
}

inherits(IncomingMessage, stream.Readable)

IncomingMessage.prototype._read = function () {
	var self = this

	var resolve = self._resumeFetch
	if (resolve) {
		self._resumeFetch = null
		resolve()
	}
}

IncomingMessage.prototype._onXHRProgress = function () {
	var self = this

	var xhr = self._xhr

	var response = null
	switch (self._mode) {
		case 'text:vbarray': // For IE9
			if (xhr.readyState !== rStates.DONE)
				break
			try {
				// This fails in IE8
				response = new global.VBArray(xhr.responseBody).toArray()
			} catch (e) {}
			if (response !== null) {
				self.push(new Buffer(response))
				break
			}
			// Falls through in IE8	
		case 'text':
			try { // This will fail when readyState = 3 in IE9. Switch mode and wait for readyState = 4
				response = xhr.responseText
			} catch (e) {
				self._mode = 'text:vbarray'
				break
			}
			if (response.length > self._pos) {
				var newData = response.substr(self._pos)
				if (self._charset === 'x-user-defined') {
					var buffer = new Buffer(newData.length)
					for (var i = 0; i < newData.length; i++)
						buffer[i] = newData.charCodeAt(i) & 0xff

					self.push(buffer)
				} else {
					self.push(newData, self._charset)
				}
				self._pos = response.length
			}
			break
		case 'arraybuffer':
			if (xhr.readyState !== rStates.DONE || !xhr.response)
				break
			response = xhr.response
			self.push(new Buffer(new Uint8Array(response)))
			break
		case 'moz-chunked-arraybuffer': // take whole
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING || !response)
				break
			self.push(new Buffer(new Uint8Array(response)))
			break
		case 'ms-stream':
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING)
				break
			var reader = new global.MSStreamReader()
			reader.onprogress = function () {
				if (reader.result.byteLength > self._pos) {
					self.push(new Buffer(new Uint8Array(reader.result.slice(self._pos))))
					self._pos = reader.result.byteLength
				}
			}
			reader.onload = function () {
				self.push(null)
			}
			// reader.onerror = ??? // TODO: this
			reader.readAsArrayBuffer(response)
			break
	}

	// The ms-stream case handles end separately in reader.onload()
	if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
		self.push(null)
	}
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"./capability":31,"_process":14,"buffer":4,"inherits":10,"readable-stream":28}],34:[function(require,module,exports){
(function (setImmediate,clearImmediate){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this,require("timers").setImmediate,require("timers").clearImmediate)
},{"process/browser.js":14,"timers":34}],35:[function(require,module,exports){
var Buffer = require('buffer').Buffer

module.exports = function (buf) {
	// If the buffer is backed by a Uint8Array, a faster version will work
	if (buf instanceof Uint8Array) {
		// If the buffer isn't a subarray, return the underlying ArrayBuffer
		if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
			return buf.buffer
		} else if (typeof buf.buffer.slice === 'function') {
			// Otherwise we need to get a proper copy
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)
		}
	}

	if (Buffer.isBuffer(buf)) {
		// This is the slow version that will work with any Buffer
		// implementation (even in old browsers)
		var arrayCopy = new Uint8Array(buf.length)
		var len = buf.length
		for (var i = 0; i < len; i++) {
			arrayCopy[i] = buf[i]
		}
		return arrayCopy.buffer
	} else {
		throw new Error('Argument must be a Buffer')
	}
}

},{"buffer":4}],36:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var punycode = require('punycode');
var util = require('./util');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

},{"./util":37,"punycode":15,"querystring":18}],37:[function(require,module,exports){
'use strict';

module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};

},{}],38:[function(require,module,exports){
(function (global){

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],39:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],40:[function(require,module,exports){
(function (process,Buffer){
/**
 * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
 *
 * This can be used with JS designed for browsers to improve reuse of code and
 * allow the use of existing libraries.
 *
 * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
 *
 * @author Dan DeFelippi <dan@driverdan.com>
 * @contributor David Ellis <d.f.ellis@ieee.org>
 * @license MIT
 */

var Url = require("url");
var spawn = require("child_process").spawn;
var fs = require("fs");

exports.XMLHttpRequest = function() {
  "use strict";

  /**
   * Private variables
   */
  var self = this;
  var http = require("http");
  var https = require("https");

  // Holds http.js objects
  var request;
  var response;

  // Request settings
  var settings = {};

  // Disable header blacklist.
  // Not part of XHR specs.
  var disableHeaderCheck = false;

  // Set some default headers
  var defaultHeaders = {
    "User-Agent": "node-XMLHttpRequest",
    "Accept": "*/*",
  };

  var headers = {};
  var headersCase = {};

  // These headers are not user setable.
  // The following are allowed but banned in the spec:
  // * user-agent
  var forbiddenRequestHeaders = [
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "content-transfer-encoding",
    "cookie",
    "cookie2",
    "date",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "via"
  ];

  // These request methods are not allowed
  var forbiddenRequestMethods = [
    "TRACE",
    "TRACK",
    "CONNECT"
  ];

  // Send flag
  var sendFlag = false;
  // Error flag, used when errors occur or abort is called
  var errorFlag = false;

  // Event listeners
  var listeners = {};

  /**
   * Constants
   */

  this.UNSENT = 0;
  this.OPENED = 1;
  this.HEADERS_RECEIVED = 2;
  this.LOADING = 3;
  this.DONE = 4;

  /**
   * Public vars
   */

  // Current state
  this.readyState = this.UNSENT;

  // default ready state change handler in case one is not set or is set late
  this.onreadystatechange = null;

  // Result & response
  this.responseText = "";
  this.responseXML = "";
  this.status = null;
  this.statusText = null;
  
  // Whether cross-site Access-Control requests should be made using
  // credentials such as cookies or authorization headers
  this.withCredentials = false;

  /**
   * Private methods
   */

  /**
   * Check if the specified header is allowed.
   *
   * @param string header Header to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpHeader = function(header) {
    return disableHeaderCheck || (header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1);
  };

  /**
   * Check if the specified method is allowed.
   *
   * @param string method Request method to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpMethod = function(method) {
    return (method && forbiddenRequestMethods.indexOf(method) === -1);
  };

  /**
   * Public methods
   */

  /**
   * Open the connection. Currently supports local server requests.
   *
   * @param string method Connection method (eg GET, POST)
   * @param string url URL for the connection.
   * @param boolean async Asynchronous connection. Default is true.
   * @param string user Username for basic authentication (optional)
   * @param string password Password for basic authentication (optional)
   */
  this.open = function(method, url, async, user, password) {
    this.abort();
    errorFlag = false;

    // Check for valid request method
    if (!isAllowedHttpMethod(method)) {
      throw new Error("SecurityError: Request method not allowed");
    }

    settings = {
      "method": method,
      "url": url.toString(),
      "async": (typeof async !== "boolean" ? true : async),
      "user": user || null,
      "password": password || null
    };

    setState(this.OPENED);
  };

  /**
   * Disables or enables isAllowedHttpHeader() check the request. Enabled by default.
   * This does not conform to the W3C spec.
   *
   * @param boolean state Enable or disable header checking.
   */
  this.setDisableHeaderCheck = function(state) {
    disableHeaderCheck = state;
  };

  /**
   * Sets a header for the request or appends the value if one is already set.
   *
   * @param string header Header name
   * @param string value Header value
   */
  this.setRequestHeader = function(header, value) {
    if (this.readyState !== this.OPENED) {
      throw new Error("INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN");
    }
    if (!isAllowedHttpHeader(header)) {
      console.warn("Refused to set unsafe header \"" + header + "\"");
      return;
    }
    if (sendFlag) {
      throw new Error("INVALID_STATE_ERR: send flag is true");
    }
    header = headersCase[header.toLowerCase()] || header;
    headersCase[header.toLowerCase()] = header;
    headers[header] = headers[header] ? headers[header] + ', ' + value : value;
  };

  /**
   * Gets a header from the server response.
   *
   * @param string header Name of header to get.
   * @return string Text of the header or null if it doesn't exist.
   */
  this.getResponseHeader = function(header) {
    if (typeof header === "string"
      && this.readyState > this.OPENED
      && response
      && response.headers
      && response.headers[header.toLowerCase()]
      && !errorFlag
    ) {
      return response.headers[header.toLowerCase()];
    }

    return null;
  };

  /**
   * Gets all the response headers.
   *
   * @return string A string with all response headers separated by CR+LF
   */
  this.getAllResponseHeaders = function() {
    if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
      return "";
    }
    var result = "";

    for (var i in response.headers) {
      // Cookie headers are excluded
      if (i !== "set-cookie" && i !== "set-cookie2") {
        result += i + ": " + response.headers[i] + "\r\n";
      }
    }
    return result.substr(0, result.length - 2);
  };

  /**
   * Gets a request header
   *
   * @param string name Name of header to get
   * @return string Returns the request header or empty string if not set
   */
  this.getRequestHeader = function(name) {
    if (typeof name === "string" && headersCase[name.toLowerCase()]) {
      return headers[headersCase[name.toLowerCase()]];
    }

    return "";
  };

  /**
   * Sends the request to the server.
   *
   * @param string data Optional data to send as request body.
   */
  this.send = function(data) {
    if (this.readyState !== this.OPENED) {
      throw new Error("INVALID_STATE_ERR: connection must be opened before send() is called");
    }

    if (sendFlag) {
      throw new Error("INVALID_STATE_ERR: send has already been called");
    }

    var ssl = false, local = false;
    var url = Url.parse(settings.url);
    var host;
    // Determine the server
    switch (url.protocol) {
      case "https:":
        ssl = true;
        // SSL & non-SSL both need host, no break here.
      case "http:":
        host = url.hostname;
        break;

      case "file:":
        local = true;
        break;

      case undefined:
      case null:
      case "":
        host = "localhost";
        break;

      default:
        throw new Error("Protocol not supported.");
    }

    // Load files off the local filesystem (file://)
    if (local) {
      if (settings.method !== "GET") {
        throw new Error("XMLHttpRequest: Only GET method is supported");
      }

      if (settings.async) {
        fs.readFile(url.pathname, "utf8", function(error, data) {
          if (error) {
            self.handleError(error);
          } else {
            self.status = 200;
            self.responseText = data;
            setState(self.DONE);
          }
        });
      } else {
        try {
          this.responseText = fs.readFileSync(url.pathname, "utf8");
          this.status = 200;
          setState(self.DONE);
        } catch(e) {
          this.handleError(e);
        }
      }

      return;
    }

    // Default to port 80. If accessing localhost on another port be sure
    // to use http://localhost:port/path
    var port = url.port || (ssl ? 443 : 80);
    // Add query string if one is used
    var uri = url.pathname + (url.search ? url.search : "");

    // Set the defaults if they haven't been set
    for (var name in defaultHeaders) {
      if (!headersCase[name.toLowerCase()]) {
        headers[name] = defaultHeaders[name];
      }
    }

    // Set the Host header or the server may reject the request
    headers.Host = host;
    if (!((ssl && port === 443) || port === 80)) {
      headers.Host += ":" + url.port;
    }

    // Set Basic Auth if necessary
    if (settings.user) {
      if (typeof settings.password === "undefined") {
        settings.password = "";
      }
      var authBuf = new Buffer(settings.user + ":" + settings.password);
      headers.Authorization = "Basic " + authBuf.toString("base64");
    }

    // Set content length header
    if (settings.method === "GET" || settings.method === "HEAD") {
      data = null;
    } else if (data) {
      headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);

      if (!headers["Content-Type"]) {
        headers["Content-Type"] = "text/plain;charset=UTF-8";
      }
    } else if (settings.method === "POST") {
      // For a post with no data set Content-Length: 0.
      // This is required by buggy servers that don't meet the specs.
      headers["Content-Length"] = 0;
    }

    var options = {
      host: host,
      port: port,
      path: uri,
      method: settings.method,
      headers: headers,
      agent: false,
      withCredentials: self.withCredentials
    };

    // Reset error flag
    errorFlag = false;

    // Handle async requests
    if (settings.async) {
      // Use the proper protocol
      var doRequest = ssl ? https.request : http.request;

      // Request is being sent, set send flag
      sendFlag = true;

      // As per spec, this is called here for historical reasons.
      self.dispatchEvent("readystatechange");

      // Handler for the response
      var responseHandler = function responseHandler(resp) {
        // Set response var to the response we got back
        // This is so it remains accessable outside this scope
        response = resp;
        // Check for redirect
        // @TODO Prevent looped redirects
        if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
          // Change URL to the redirect location
          settings.url = response.headers.location;
          var url = Url.parse(settings.url);
          // Set host var in case it's used later
          host = url.hostname;
          // Options for the new request
          var newOptions = {
            hostname: url.hostname,
            port: url.port,
            path: url.path,
            method: response.statusCode === 303 ? "GET" : settings.method,
            headers: headers,
            withCredentials: self.withCredentials
          };

          // Issue the new request
          request = doRequest(newOptions, responseHandler).on("error", errorHandler);
          request.end();
          // @TODO Check if an XHR event needs to be fired here
          return;
        }

        response.setEncoding("utf8");

        setState(self.HEADERS_RECEIVED);
        self.status = response.statusCode;

        response.on("data", function(chunk) {
          // Make sure there's some data
          if (chunk) {
            self.responseText += chunk;
          }
          // Don't emit state changes if the connection has been aborted.
          if (sendFlag) {
            setState(self.LOADING);
          }
        });

        response.on("end", function() {
          if (sendFlag) {
            // Discard the end event if the connection has been aborted
            setState(self.DONE);
            sendFlag = false;
          }
        });

        response.on("error", function(error) {
          self.handleError(error);
        });
      };

      // Error handler for the request
      var errorHandler = function errorHandler(error) {
        self.handleError(error);
      };

      // Create the request
      request = doRequest(options, responseHandler).on("error", errorHandler);

      // Node 0.4 and later won't accept empty data. Make sure it's needed.
      if (data) {
        request.write(data);
      }

      request.end();

      self.dispatchEvent("loadstart");
    } else { // Synchronous
      // Create a temporary file for communication with the other Node process
      var contentFile = ".node-xmlhttprequest-content-" + process.pid;
      var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
      fs.writeFileSync(syncFile, "", "utf8");
      // The async request the other Node process executes
      var execString = "var http = require('http'), https = require('https'), fs = require('fs');"
        + "var doRequest = http" + (ssl ? "s" : "") + ".request;"
        + "var options = " + JSON.stringify(options) + ";"
        + "var responseText = '';"
        + "var req = doRequest(options, function(response) {"
        + "response.setEncoding('utf8');"
        + "response.on('data', function(chunk) {"
        + "  responseText += chunk;"
        + "});"
        + "response.on('end', function() {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: null, data: {statusCode: response.statusCode, headers: response.headers, text: responseText}}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + "response.on('error', function(error) {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: error}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + "}).on('error', function(error) {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: error}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + (data ? "req.write('" + JSON.stringify(data).slice(1,-1).replace(/'/g, "\\'") + "');":"")
        + "req.end();";
      // Start the other Node Process, executing this string
      var syncProc = spawn(process.argv[0], ["-e", execString]);
      while(fs.existsSync(syncFile)) {
        // Wait while the sync file is empty
      }
      var resp = JSON.parse(fs.readFileSync(contentFile, 'utf8'));
      // Kill the child process once the file has data
      syncProc.stdin.end();
      // Remove the temporary file
      fs.unlinkSync(contentFile);

      if (resp.err) {
        self.handleError(resp.err);
      } else {
        response = resp.data;
        self.status = resp.data.statusCode;
        self.responseText = resp.data.text;
        setState(self.DONE);
      }
    }
  };

  /**
   * Called when an error is encountered to deal with it.
   */
  this.handleError = function(error) {
    this.status = 0;
    this.statusText = error;
    this.responseText = error.stack;
    errorFlag = true;
    setState(this.DONE);
    this.dispatchEvent('error');
  };

  /**
   * Aborts a request.
   */
  this.abort = function() {
    if (request) {
      request.abort();
      request = null;
    }

    headers = defaultHeaders;
    this.status = 0;
    this.responseText = "";
    this.responseXML = "";

    errorFlag = true;

    if (this.readyState !== this.UNSENT
        && (this.readyState !== this.OPENED || sendFlag)
        && this.readyState !== this.DONE) {
      sendFlag = false;
      setState(this.DONE);
    }
    this.readyState = this.UNSENT;
    this.dispatchEvent('abort');
  };

  /**
   * Adds an event listener. Preferred method of binding to events.
   */
  this.addEventListener = function(event, callback) {
    if (!(event in listeners)) {
      listeners[event] = [];
    }
    // Currently allows duplicate callbacks. Should it?
    listeners[event].push(callback);
  };

  /**
   * Remove an event callback that has already been bound.
   * Only works on the matching funciton, cannot be a copy.
   */
  this.removeEventListener = function(event, callback) {
    if (event in listeners) {
      // Filter will return a new array with the callback removed
      listeners[event] = listeners[event].filter(function(ev) {
        return ev !== callback;
      });
    }
  };

  /**
   * Dispatch any events, including both "on" methods and events attached using addEventListener.
   */
  this.dispatchEvent = function(event) {
    if (typeof self["on" + event] === "function") {
      self["on" + event]();
    }
    if (event in listeners) {
      for (var i = 0, len = listeners[event].length; i < len; i++) {
        listeners[event][i].call(self);
      }
    }
  };

  /**
   * Changes readyState and calls onreadystatechange.
   *
   * @param int state New state
   */
  var setState = function(state) {
    if (state == self.LOADING || self.readyState !== state) {
      self.readyState = state;

      if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
        self.dispatchEvent("readystatechange");
      }

      if (self.readyState === self.DONE && !errorFlag) {
        self.dispatchEvent("load");
        // @TODO figure out InspectorInstrumentation::didLoadXHR(cookie)
        self.dispatchEvent("loadend");
      }
    }
  };
};

}).call(this,require('_process'),require("buffer").Buffer)
},{"_process":14,"buffer":4,"child_process":1,"fs":1,"http":30,"https":8,"url":36}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*!
 * XRegExp.build 4.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2012-present MIT License
 */
var _default = function _default(XRegExp) {
  var REGEX_DATA = 'xregexp';
  var subParts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
  var parts = XRegExp.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, subParts], 'g', {
    conjunction: 'or'
  });
  /**
   * Strips a leading `^` and trailing unescaped `$`, if both are present.
   *
   * @private
   * @param {String} pattern Pattern to process.
   * @returns {String} Pattern with edge anchors removed.
   */

  function deanchor(pattern) {
    // Allow any number of empty noncapturing groups before/after anchors, because regexes
    // built/generated by XRegExp sometimes include them
    var leadingAnchor = /^(?:\(\?:\))*\^/;
    var trailingAnchor = /\$(?:\(\?:\))*$/;

    if (leadingAnchor.test(pattern) && trailingAnchor.test(pattern) && // Ensure that the trailing `$` isn't escaped
    trailingAnchor.test(pattern.replace(/\\[\s\S]/g, ''))) {
      return pattern.replace(leadingAnchor, '').replace(trailingAnchor, '');
    }

    return pattern;
  }
  /**
   * Converts the provided value to an XRegExp. Native RegExp flags are not preserved.
   *
   * @private
   * @param {String|RegExp} value Value to convert.
   * @param {Boolean} [addFlagX] Whether to apply the `x` flag in cases when `value` is not
   *   already a regex generated by XRegExp
   * @returns {RegExp} XRegExp object with XRegExp syntax applied.
   */


  function asXRegExp(value, addFlagX) {
    var flags = addFlagX ? 'x' : '';
    return XRegExp.isRegExp(value) ? value[REGEX_DATA] && value[REGEX_DATA].captureNames ? // Don't recompile, to preserve capture names
    value : // Recompile as XRegExp
    XRegExp(value.source, flags) : // Compile string as XRegExp
    XRegExp(value, flags);
  }

  function interpolate(substitution) {
    return substitution instanceof RegExp ? substitution : XRegExp.escape(substitution);
  }

  function reduceToSubpatternsObject(subpatterns, interpolated, subpatternIndex) {
    subpatterns["subpattern".concat(subpatternIndex)] = interpolated;
    return subpatterns;
  }

  function embedSubpatternAfter(raw, subpatternIndex, rawLiterals) {
    var hasSubpattern = subpatternIndex < rawLiterals.length - 1;
    return raw + (hasSubpattern ? "{{subpattern".concat(subpatternIndex, "}}") : '');
  }
  /**
   * Provides tagged template literals that create regexes with XRegExp syntax and flags. The
   * provided pattern is handled as a raw string, so backslashes don't need to be escaped.
   *
   * Interpolation of strings and regexes shares the features of `XRegExp.build`. Interpolated
   * patterns are treated as atomic units when quantified, interpolated strings have their special
   * characters escaped, a leading `^` and trailing unescaped `$` are stripped from interpolated
   * regexes if both are present, and any backreferences within an interpolated regex are
   * rewritten to work within the overall pattern.
   *
   * @memberOf XRegExp
   * @param {String} [flags] Any combination of XRegExp flags.
   * @returns {Function} Handler for template literals that construct regexes with XRegExp syntax.
   * @example
   *
   * const h12 = /1[0-2]|0?[1-9]/;
   * const h24 = /2[0-3]|[01][0-9]/;
   * const hours = XRegExp.tag('x')`${h12} : | ${h24}`;
   * const minutes = /^[0-5][0-9]$/;
   * // Note that explicitly naming the 'minutes' group is required for named backreferences
   * const time = XRegExp.tag('x')`^ ${hours} (?<minutes>${minutes}) $`;
   * time.test('10:59'); // -> true
   * XRegExp.exec('10:59', time).minutes; // -> '59'
   */


  XRegExp.tag = function (flags) {
    return function (literals) {
      for (var _len = arguments.length, substitutions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        substitutions[_key - 1] = arguments[_key];
      }

      var subpatterns = substitutions.map(interpolate).reduce(reduceToSubpatternsObject, {});
      var pattern = literals.raw.map(embedSubpatternAfter).join('');
      return XRegExp.build(pattern, subpatterns, flags);
    };
  };
  /**
   * Builds regexes using named subpatterns, for readability and pattern reuse. Backreferences in
   * the outer pattern and provided subpatterns are automatically renumbered to work correctly.
   * Native flags used by provided subpatterns are ignored in favor of the `flags` argument.
   *
   * @memberOf XRegExp
   * @param {String} pattern XRegExp pattern using `{{name}}` for embedded subpatterns. Allows
   *   `({{name}})` as shorthand for `(?<name>{{name}})`. Patterns cannot be embedded within
   *   character classes.
   * @param {Object} subs Lookup object for named subpatterns. Values can be strings or regexes. A
   *   leading `^` and trailing unescaped `$` are stripped from subpatterns, if both are present.
   * @param {String} [flags] Any combination of XRegExp flags.
   * @returns {RegExp} Regex with interpolated subpatterns.
   * @example
   *
   * const time = XRegExp.build('(?x)^ {{hours}} ({{minutes}}) $', {
   *   hours: XRegExp.build('{{h12}} : | {{h24}}', {
   *     h12: /1[0-2]|0?[1-9]/,
   *     h24: /2[0-3]|[01][0-9]/
   *   }, 'x'),
   *   minutes: /^[0-5][0-9]$/
   * });
   * time.test('10:59'); // -> true
   * XRegExp.exec('10:59', time).minutes; // -> '59'
   */


  XRegExp.build = function (pattern, subs, flags) {
    flags = flags || ''; // Used with `asXRegExp` calls for `pattern` and subpatterns in `subs`, to work around how
    // some browsers convert `RegExp('\n')` to a regex that contains the literal characters `\`
    // and `n`. See more details at <https://github.com/slevithan/xregexp/pull/163>.

    var addFlagX = flags.indexOf('x') !== -1;
    var inlineFlags = /^\(\?([\w$]+)\)/.exec(pattern); // Add flags within a leading mode modifier to the overall pattern's flags

    if (inlineFlags) {
      flags = XRegExp._clipDuplicates(flags + inlineFlags[1]);
    }

    var data = {};

    for (var p in subs) {
      if (subs.hasOwnProperty(p)) {
        // Passing to XRegExp enables extended syntax and ensures independent validity,
        // lest an unescaped `(`, `)`, `[`, or trailing `\` breaks the `(?:)` wrapper. For
        // subpatterns provided as native regexes, it dies on octals and adds the property
        // used to hold extended regex instance data, for simplicity.
        var sub = asXRegExp(subs[p], addFlagX);
        data[p] = {
          // Deanchoring allows embedding independently useful anchored regexes. If you
          // really need to keep your anchors, double them (i.e., `^^...$$`).
          pattern: deanchor(sub.source),
          names: sub[REGEX_DATA].captureNames || []
        };
      }
    } // Passing to XRegExp dies on octals and ensures the outer pattern is independently valid;
    // helps keep this simple. Named captures will be put back.


    var patternAsRegex = asXRegExp(pattern, addFlagX); // 'Caps' is short for 'captures'

    var numCaps = 0;
    var numPriorCaps;
    var numOuterCaps = 0;
    var outerCapsMap = [0];
    var outerCapNames = patternAsRegex[REGEX_DATA].captureNames || [];
    var output = patternAsRegex.source.replace(parts, function ($0, $1, $2, $3, $4) {
      var subName = $1 || $2;
      var capName;
      var intro;
      var localCapIndex; // Named subpattern

      if (subName) {
        if (!data.hasOwnProperty(subName)) {
          throw new ReferenceError("Undefined property ".concat($0));
        } // Named subpattern was wrapped in a capturing group


        if ($1) {
          capName = outerCapNames[numOuterCaps];
          outerCapsMap[++numOuterCaps] = ++numCaps; // If it's a named group, preserve the name. Otherwise, use the subpattern name
          // as the capture name

          intro = "(?<".concat(capName || subName, ">");
        } else {
          intro = '(?:';
        }

        numPriorCaps = numCaps;
        var rewrittenSubpattern = data[subName].pattern.replace(subParts, function (match, paren, backref) {
          // Capturing group
          if (paren) {
            capName = data[subName].names[numCaps - numPriorCaps];
            ++numCaps; // If the current capture has a name, preserve the name

            if (capName) {
              return "(?<".concat(capName, ">");
            } // Backreference

          } else if (backref) {
            localCapIndex = +backref - 1; // Rewrite the backreference

            return data[subName].names[localCapIndex] ? // Need to preserve the backreference name in case using flag `n`
            "\\k<".concat(data[subName].names[localCapIndex], ">") : "\\".concat(+backref + numPriorCaps);
          }

          return match;
        });
        return "".concat(intro).concat(rewrittenSubpattern, ")");
      } // Capturing group


      if ($3) {
        capName = outerCapNames[numOuterCaps];
        outerCapsMap[++numOuterCaps] = ++numCaps; // If the current capture has a name, preserve the name

        if (capName) {
          return "(?<".concat(capName, ">");
        } // Backreference

      } else if ($4) {
        localCapIndex = +$4 - 1; // Rewrite the backreference

        return outerCapNames[localCapIndex] ? // Need to preserve the backreference name in case using flag `n`
        "\\k<".concat(outerCapNames[localCapIndex], ">") : "\\".concat(outerCapsMap[+$4]);
      }

      return $0;
    });
    return XRegExp(output, flags);
  };
};

exports.default = _default;
module.exports = exports["default"];
},{}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*!
 * XRegExp.matchRecursive 4.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2009-present MIT License
 */
var _default = function _default(XRegExp) {
  /**
   * Returns a match detail object composed of the provided values.
   *
   * @private
   */
  function row(name, value, start, end) {
    return {
      name: name,
      value: value,
      start: start,
      end: end
    };
  }
  /**
   * Returns an array of match strings between outermost left and right delimiters, or an array of
   * objects with detailed match parts and position data. An error is thrown if delimiters are
   * unbalanced within the data.
   *
   * @memberOf XRegExp
   * @param {String} str String to search.
   * @param {String} left Left delimiter as an XRegExp pattern.
   * @param {String} right Right delimiter as an XRegExp pattern.
   * @param {String} [flags] Any native or XRegExp flags, used for the left and right delimiters.
   * @param {Object} [options] Lets you specify `valueNames` and `escapeChar` options.
   * @returns {Array} Array of matches, or an empty array.
   * @example
   *
   * // Basic usage
   * let str = '(t((e))s)t()(ing)';
   * XRegExp.matchRecursive(str, '\\(', '\\)', 'g');
   * // -> ['t((e))s', '', 'ing']
   *
   * // Extended information mode with valueNames
   * str = 'Here is <div> <div>an</div></div> example';
   * XRegExp.matchRecursive(str, '<div\\s*>', '</div>', 'gi', {
   *   valueNames: ['between', 'left', 'match', 'right']
   * });
   * // -> [
   * // {name: 'between', value: 'Here is ',       start: 0,  end: 8},
   * // {name: 'left',    value: '<div>',          start: 8,  end: 13},
   * // {name: 'match',   value: ' <div>an</div>', start: 13, end: 27},
   * // {name: 'right',   value: '</div>',         start: 27, end: 33},
   * // {name: 'between', value: ' example',       start: 33, end: 41}
   * // ]
   *
   * // Omitting unneeded parts with null valueNames, and using escapeChar
   * str = '...{1}.\\{{function(x,y){return {y:x}}}';
   * XRegExp.matchRecursive(str, '{', '}', 'g', {
   *   valueNames: ['literal', null, 'value', null],
   *   escapeChar: '\\'
   * });
   * // -> [
   * // {name: 'literal', value: '...',  start: 0, end: 3},
   * // {name: 'value',   value: '1',    start: 4, end: 5},
   * // {name: 'literal', value: '.\\{', start: 6, end: 9},
   * // {name: 'value',   value: 'function(x,y){return {y:x}}', start: 10, end: 37}
   * // ]
   *
   * // Sticky mode via flag y
   * str = '<1><<<2>>><3>4<5>';
   * XRegExp.matchRecursive(str, '<', '>', 'gy');
   * // -> ['1', '<<2>>', '3']
   */


  XRegExp.matchRecursive = function (str, left, right, flags, options) {
    flags = flags || '';
    options = options || {};
    var global = flags.indexOf('g') !== -1;
    var sticky = flags.indexOf('y') !== -1; // Flag `y` is controlled internally

    var basicFlags = flags.replace(/y/g, '');
    var _options = options,
        escapeChar = _options.escapeChar;
    var vN = options.valueNames;
    var output = [];
    var openTokens = 0;
    var delimStart = 0;
    var delimEnd = 0;
    var lastOuterEnd = 0;
    var outerStart;
    var innerStart;
    var leftMatch;
    var rightMatch;
    var esc;
    left = XRegExp(left, basicFlags);
    right = XRegExp(right, basicFlags);

    if (escapeChar) {
      if (escapeChar.length > 1) {
        throw new Error('Cannot use more than one escape character');
      }

      escapeChar = XRegExp.escape(escapeChar); // Example of concatenated `esc` regex:
      // `escapeChar`: '%'
      // `left`: '<'
      // `right`: '>'
      // Regex is: /(?:%[\S\s]|(?:(?!<|>)[^%])+)+/

      esc = new RegExp("(?:".concat(escapeChar, "[\\S\\s]|(?:(?!").concat( // Using `XRegExp.union` safely rewrites backreferences in `left` and `right`.
      // Intentionally not passing `basicFlags` to `XRegExp.union` since any syntax
      // transformation resulting from those flags was already applied to `left` and
      // `right` when they were passed through the XRegExp constructor above.
      XRegExp.union([left, right], '', {
        conjunction: 'or'
      }).source, ")[^").concat(escapeChar, "])+)+"), // Flags `gy` not needed here
      flags.replace(/[^imu]+/g, ''));
    }

    while (true) {
      // If using an escape character, advance to the delimiter's next starting position,
      // skipping any escaped characters in between
      if (escapeChar) {
        delimEnd += (XRegExp.exec(str, esc, delimEnd, 'sticky') || [''])[0].length;
      }

      leftMatch = XRegExp.exec(str, left, delimEnd);
      rightMatch = XRegExp.exec(str, right, delimEnd); // Keep the leftmost match only

      if (leftMatch && rightMatch) {
        if (leftMatch.index <= rightMatch.index) {
          rightMatch = null;
        } else {
          leftMatch = null;
        }
      } // Paths (LM: leftMatch, RM: rightMatch, OT: openTokens):
      // LM | RM | OT | Result
      // 1  | 0  | 1  | loop
      // 1  | 0  | 0  | loop
      // 0  | 1  | 1  | loop
      // 0  | 1  | 0  | throw
      // 0  | 0  | 1  | throw
      // 0  | 0  | 0  | break
      // The paths above don't include the sticky mode special case. The loop ends after the
      // first completed match if not `global`.


      if (leftMatch || rightMatch) {
        delimStart = (leftMatch || rightMatch).index;
        delimEnd = delimStart + (leftMatch || rightMatch)[0].length;
      } else if (!openTokens) {
        break;
      }

      if (sticky && !openTokens && delimStart > lastOuterEnd) {
        break;
      }

      if (leftMatch) {
        if (!openTokens) {
          outerStart = delimStart;
          innerStart = delimEnd;
        }

        ++openTokens;
      } else if (rightMatch && openTokens) {
        if (! --openTokens) {
          if (vN) {
            if (vN[0] && outerStart > lastOuterEnd) {
              output.push(row(vN[0], str.slice(lastOuterEnd, outerStart), lastOuterEnd, outerStart));
            }

            if (vN[1]) {
              output.push(row(vN[1], str.slice(outerStart, innerStart), outerStart, innerStart));
            }

            if (vN[2]) {
              output.push(row(vN[2], str.slice(innerStart, delimStart), innerStart, delimStart));
            }

            if (vN[3]) {
              output.push(row(vN[3], str.slice(delimStart, delimEnd), delimStart, delimEnd));
            }
          } else {
            output.push(str.slice(innerStart, delimStart));
          }

          lastOuterEnd = delimEnd;

          if (!global) {
            break;
          }
        }
      } else {
        throw new Error('Unbalanced delimiter found in string');
      } // If the delimiter matched an empty string, avoid an infinite loop


      if (delimStart === delimEnd) {
        ++delimEnd;
      }
    }

    if (global && !sticky && vN && vN[0] && str.length > lastOuterEnd) {
      output.push(row(vN[0], str.slice(lastOuterEnd), lastOuterEnd, str.length));
    }

    return output;
  };
};

exports.default = _default;
module.exports = exports["default"];
},{}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*!
 * XRegExp Unicode Base 4.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2008-present MIT License
 */
var _default = function _default(XRegExp) {
  /**
   * Adds base support for Unicode matching:
   * - Adds syntax `\p{..}` for matching Unicode tokens. Tokens can be inverted using `\P{..}` or
   *   `\p{^..}`. Token names ignore case, spaces, hyphens, and underscores. You can omit the
   *   braces for token names that are a single letter (e.g. `\pL` or `PL`).
   * - Adds flag A (astral), which enables 21-bit Unicode support.
   * - Adds the `XRegExp.addUnicodeData` method used by other addons to provide character data.
   *
   * Unicode Base relies on externally provided Unicode character data. Official addons are
   * available to provide data for Unicode categories, scripts, blocks, and properties.
   *
   * @requires XRegExp
   */
  // ==--------------------------==
  // Private stuff
  // ==--------------------------==
  // Storage for Unicode data
  var unicode = {}; // Reuse utils

  var dec = XRegExp._dec;
  var hex = XRegExp._hex;
  var pad4 = XRegExp._pad4; // Generates a token lookup name: lowercase, with hyphens, spaces, and underscores removed

  function normalize(name) {
    return name.replace(/[- _]+/g, '').toLowerCase();
  } // Gets the decimal code of a literal code unit, \xHH, \uHHHH, or a backslash-escaped literal


  function charCode(chr) {
    var esc = /^\\[xu](.+)/.exec(chr);
    return esc ? dec(esc[1]) : chr.charCodeAt(chr[0] === '\\' ? 1 : 0);
  } // Inverts a list of ordered BMP characters and ranges


  function invertBmp(range) {
    var output = '';
    var lastEnd = -1;
    XRegExp.forEach(range, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, function (m) {
      var start = charCode(m[1]);

      if (start > lastEnd + 1) {
        output += "\\u".concat(pad4(hex(lastEnd + 1)));

        if (start > lastEnd + 2) {
          output += "-\\u".concat(pad4(hex(start - 1)));
        }
      }

      lastEnd = charCode(m[2] || m[1]);
    });

    if (lastEnd < 0xFFFF) {
      output += "\\u".concat(pad4(hex(lastEnd + 1)));

      if (lastEnd < 0xFFFE) {
        output += '-\\uFFFF';
      }
    }

    return output;
  } // Generates an inverted BMP range on first use


  function cacheInvertedBmp(slug) {
    var prop = 'b!';
    return unicode[slug][prop] || (unicode[slug][prop] = invertBmp(unicode[slug].bmp));
  } // Combines and optionally negates BMP and astral data


  function buildAstral(slug, isNegated) {
    var item = unicode[slug];
    var combined = '';

    if (item.bmp && !item.isBmpLast) {
      combined = "[".concat(item.bmp, "]").concat(item.astral ? '|' : '');
    }

    if (item.astral) {
      combined += item.astral;
    }

    if (item.isBmpLast && item.bmp) {
      combined += "".concat(item.astral ? '|' : '', "[").concat(item.bmp, "]");
    } // Astral Unicode tokens always match a code point, never a code unit


    return isNegated ? "(?:(?!".concat(combined, ")(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-\uFFFF]))") : "(?:".concat(combined, ")");
  } // Builds a complete astral pattern on first use


  function cacheAstral(slug, isNegated) {
    var prop = isNegated ? 'a!' : 'a=';
    return unicode[slug][prop] || (unicode[slug][prop] = buildAstral(slug, isNegated));
  } // ==--------------------------==
  // Core functionality
  // ==--------------------------==

  /*
   * Add astral mode (flag A) and Unicode token syntax: `\p{..}`, `\P{..}`, `\p{^..}`, `\pC`.
   */


  XRegExp.addToken( // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
  /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/, function (match, scope, flags) {
    var ERR_DOUBLE_NEG = 'Invalid double negation ';
    var ERR_UNKNOWN_NAME = 'Unknown Unicode token ';
    var ERR_UNKNOWN_REF = 'Unicode token missing data ';
    var ERR_ASTRAL_ONLY = 'Astral mode required for Unicode token ';
    var ERR_ASTRAL_IN_CLASS = 'Astral mode does not support Unicode tokens within character classes'; // Negated via \P{..} or \p{^..}

    var isNegated = match[1] === 'P' || !!match[2]; // Switch from BMP (0-FFFF) to astral (0-10FFFF) mode via flag A

    var isAstralMode = flags.indexOf('A') !== -1; // Token lookup name. Check `[4]` first to avoid passing `undefined` via `\p{}`

    var slug = normalize(match[4] || match[3]); // Token data object

    var item = unicode[slug];

    if (match[1] === 'P' && match[2]) {
      throw new SyntaxError(ERR_DOUBLE_NEG + match[0]);
    }

    if (!unicode.hasOwnProperty(slug)) {
      throw new SyntaxError(ERR_UNKNOWN_NAME + match[0]);
    } // Switch to the negated form of the referenced Unicode token


    if (item.inverseOf) {
      slug = normalize(item.inverseOf);

      if (!unicode.hasOwnProperty(slug)) {
        throw new ReferenceError("".concat(ERR_UNKNOWN_REF + match[0], " -> ").concat(item.inverseOf));
      }

      item = unicode[slug];
      isNegated = !isNegated;
    }

    if (!(item.bmp || isAstralMode)) {
      throw new SyntaxError(ERR_ASTRAL_ONLY + match[0]);
    }

    if (isAstralMode) {
      if (scope === 'class') {
        throw new SyntaxError(ERR_ASTRAL_IN_CLASS);
      }

      return cacheAstral(slug, isNegated);
    }

    return scope === 'class' ? isNegated ? cacheInvertedBmp(slug) : item.bmp : "".concat((isNegated ? '[^' : '[') + item.bmp, "]");
  }, {
    scope: 'all',
    optionalFlags: 'A',
    leadChar: '\\'
  });
  /**
   * Adds to the list of Unicode tokens that XRegExp regexes can match via `\p` or `\P`.
   *
   * @memberOf XRegExp
   * @param {Array} data Objects with named character ranges. Each object may have properties
   *   `name`, `alias`, `isBmpLast`, `inverseOf`, `bmp`, and `astral`. All but `name` are
   *   optional, although one of `bmp` or `astral` is required (unless `inverseOf` is set). If
   *   `astral` is absent, the `bmp` data is used for BMP and astral modes. If `bmp` is absent,
   *   the name errors in BMP mode but works in astral mode. If both `bmp` and `astral` are
   *   provided, the `bmp` data only is used in BMP mode, and the combination of `bmp` and
   *   `astral` data is used in astral mode. `isBmpLast` is needed when a token matches orphan
   *   high surrogates *and* uses surrogate pairs to match astral code points. The `bmp` and
   *   `astral` data should be a combination of literal characters and `\xHH` or `\uHHHH` escape
   *   sequences, with hyphens to create ranges. Any regex metacharacters in the data should be
   *   escaped, apart from range-creating hyphens. The `astral` data can additionally use
   *   character classes and alternation, and should use surrogate pairs to represent astral code
   *   points. `inverseOf` can be used to avoid duplicating character data if a Unicode token is
   *   defined as the exact inverse of another token.
   * @example
   *
   * // Basic use
   * XRegExp.addUnicodeData([{
   *   name: 'XDigit',
   *   alias: 'Hexadecimal',
   *   bmp: '0-9A-Fa-f'
   * }]);
   * XRegExp('\\p{XDigit}:\\p{Hexadecimal}+').test('0:3D'); // -> true
   */

  XRegExp.addUnicodeData = function (data) {
    var ERR_NO_NAME = 'Unicode token requires name';
    var ERR_NO_DATA = 'Unicode token has no character data ';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (!item.name) {
          throw new Error(ERR_NO_NAME);
        }

        if (!(item.inverseOf || item.bmp || item.astral)) {
          throw new Error(ERR_NO_DATA + item.name);
        }

        unicode[normalize(item.name)] = item;

        if (item.alias) {
          unicode[normalize(item.alias)] = item;
        }
      } // Reset the pattern cache used by the `XRegExp` constructor, since the same pattern and
      // flags might now produce different results

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    XRegExp.cache.flush('patterns');
  };
  /**
   * @ignore
   *
   * Return a reference to the internal Unicode definition structure for the given Unicode
   * Property if the given name is a legal Unicode Property for use in XRegExp `\p` or `\P` regex
   * constructs.
   *
   * @memberOf XRegExp
   * @param {String} name Name by which the Unicode Property may be recognized (case-insensitive),
   *   e.g. `'N'` or `'Number'`. The given name is matched against all registered Unicode
   *   Properties and Property Aliases.
   * @returns {Object} Reference to definition structure when the name matches a Unicode Property.
   *
   * @note
   * For more info on Unicode Properties, see also http://unicode.org/reports/tr18/#Categories.
   *
   * @note
   * This method is *not* part of the officially documented API and may change or be removed in
   * the future. It is meant for userland code that wishes to reuse the (large) internal Unicode
   * structures set up by XRegExp.
   */


  XRegExp._getUnicodeProperty = function (name) {
    var slug = normalize(name);
    return unicode[slug];
  };
};

exports.default = _default;
module.exports = exports["default"];
},{}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _blocks = _interopRequireDefault(require("../../tools/output/blocks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * XRegExp Unicode Blocks 4.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
var _default = function _default(XRegExp) {
  /**
   * Adds support for all Unicode blocks. Block names use the prefix 'In'. E.g.,
   * `\p{InBasicLatin}`. Token names are case insensitive, and any spaces, hyphens, and
   * underscores are ignored.
   *
   * Uses Unicode 11.0.0.
   *
   * @requires XRegExp, Unicode Base
   */
  if (!XRegExp.addUnicodeData) {
    throw new ReferenceError('Unicode Base must be loaded before Unicode Blocks');
  }

  XRegExp.addUnicodeData(_blocks.default);
};

exports.default = _default;
module.exports = exports["default"];
},{"../../tools/output/blocks":50}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _categories = _interopRequireDefault(require("../../tools/output/categories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * XRegExp Unicode Categories 4.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
var _default = function _default(XRegExp) {
  /**
   * Adds support for Unicode's general categories. E.g., `\p{Lu}` or `\p{Uppercase Letter}`. See
   * category descriptions in UAX #44 <http://unicode.org/reports/tr44/#GC_Values_Table>. Token
   * names are case insensitive, and any spaces, hyphens, and underscores are ignored.
   *
   * Uses Unicode 11.0.0.
   *
   * @requires XRegExp, Unicode Base
   */
  if (!XRegExp.addUnicodeData) {
    throw new ReferenceError('Unicode Base must be loaded before Unicode Categories');
  }

  XRegExp.addUnicodeData(_categories.default);
};

exports.default = _default;
module.exports = exports["default"];
},{"../../tools/output/categories":51}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _properties = _interopRequireDefault(require("../../tools/output/properties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * XRegExp Unicode Properties 4.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2012-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
var _default = function _default(XRegExp) {
  /**
   * Adds properties to meet the UTS #18 Level 1 RL1.2 requirements for Unicode regex support. See
   * <http://unicode.org/reports/tr18/#RL1.2>. Following are definitions of these properties from
   * UAX #44 <http://unicode.org/reports/tr44/>:
   *
   * - Alphabetic
   *   Characters with the Alphabetic property. Generated from: Lowercase + Uppercase + Lt + Lm +
   *   Lo + Nl + Other_Alphabetic.
   *
   * - Default_Ignorable_Code_Point
   *   For programmatic determination of default ignorable code points. New characters that should
   *   be ignored in rendering (unless explicitly supported) will be assigned in these ranges,
   *   permitting programs to correctly handle the default rendering of such characters when not
   *   otherwise supported.
   *
   * - Lowercase
   *   Characters with the Lowercase property. Generated from: Ll + Other_Lowercase.
   *
   * - Noncharacter_Code_Point
   *   Code points permanently reserved for internal use.
   *
   * - Uppercase
   *   Characters with the Uppercase property. Generated from: Lu + Other_Uppercase.
   *
   * - White_Space
   *   Spaces, separator characters and other control characters which should be treated by
   *   programming languages as "white space" for the purpose of parsing elements.
   *
   * The properties ASCII, Any, and Assigned are also included but are not defined in UAX #44. UTS
   * #18 RL1.2 additionally requires support for Unicode scripts and general categories. These are
   * included in XRegExp's Unicode Categories and Unicode Scripts addons.
   *
   * Token names are case insensitive, and any spaces, hyphens, and underscores are ignored.
   *
   * Uses Unicode 11.0.0.
   *
   * @requires XRegExp, Unicode Base
   */
  if (!XRegExp.addUnicodeData) {
    throw new ReferenceError('Unicode Base must be loaded before Unicode Properties');
  }

  var unicodeData = _properties.default; // Add non-generated data

  unicodeData.push({
    name: 'Assigned',
    // Since this is defined as the inverse of Unicode category Cn (Unassigned), the Unicode
    // Categories addon is required to use this property
    inverseOf: 'Cn'
  });
  XRegExp.addUnicodeData(unicodeData);
};

exports.default = _default;
module.exports = exports["default"];
},{"../../tools/output/properties":52}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _scripts = _interopRequireDefault(require("../../tools/output/scripts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * XRegExp Unicode Scripts 4.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
var _default = function _default(XRegExp) {
  /**
   * Adds support for all Unicode scripts. E.g., `\p{Latin}`. Token names are case insensitive,
   * and any spaces, hyphens, and underscores are ignored.
   *
   * Uses Unicode 11.0.0.
   *
   * @requires XRegExp, Unicode Base
   */
  if (!XRegExp.addUnicodeData) {
    throw new ReferenceError('Unicode Base must be loaded before Unicode Scripts');
  }

  XRegExp.addUnicodeData(_scripts.default);
};

exports.default = _default;
module.exports = exports["default"];
},{"../../tools/output/scripts":53}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xregexp = _interopRequireDefault(require("./xregexp"));

var _build = _interopRequireDefault(require("./addons/build"));

var _matchrecursive = _interopRequireDefault(require("./addons/matchrecursive"));

var _unicodeBase = _interopRequireDefault(require("./addons/unicode-base"));

var _unicodeBlocks = _interopRequireDefault(require("./addons/unicode-blocks"));

var _unicodeCategories = _interopRequireDefault(require("./addons/unicode-categories"));

var _unicodeProperties = _interopRequireDefault(require("./addons/unicode-properties"));

var _unicodeScripts = _interopRequireDefault(require("./addons/unicode-scripts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _build.default)(_xregexp.default);
(0, _matchrecursive.default)(_xregexp.default);
(0, _unicodeBase.default)(_xregexp.default);
(0, _unicodeBlocks.default)(_xregexp.default);
(0, _unicodeCategories.default)(_xregexp.default);
(0, _unicodeProperties.default)(_xregexp.default);
(0, _unicodeScripts.default)(_xregexp.default);
var _default = _xregexp.default;
exports.default = _default;
module.exports = exports["default"];
},{"./addons/build":41,"./addons/matchrecursive":42,"./addons/unicode-base":43,"./addons/unicode-blocks":44,"./addons/unicode-categories":45,"./addons/unicode-properties":46,"./addons/unicode-scripts":47,"./xregexp":49}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*!
 * XRegExp 4.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2007-present MIT License
 */

/**
 * XRegExp provides augmented, extensible regular expressions. You get additional regex syntax and
 * flags, beyond what browsers support natively. XRegExp is also a regex utility belt with tools to
 * make your client-side grepping simpler and more powerful, while freeing you from related
 * cross-browser inconsistencies.
 */
// ==--------------------------==
// Private stuff
// ==--------------------------==
// Property name used for extended regex instance data
var REGEX_DATA = 'xregexp'; // Optional features that can be installed and uninstalled

var features = {
  astral: false,
  namespacing: false
}; // Native methods to use and restore ('native' is an ES3 reserved keyword)

var nativ = {
  exec: RegExp.prototype.exec,
  test: RegExp.prototype.test,
  match: String.prototype.match,
  replace: String.prototype.replace,
  split: String.prototype.split
}; // Storage for fixed/extended native methods

var fixed = {}; // Storage for regexes cached by `XRegExp.cache`

var regexCache = {}; // Storage for pattern details cached by the `XRegExp` constructor

var patternCache = {}; // Storage for regex syntax tokens added internally or by `XRegExp.addToken`

var tokens = []; // Token scopes

var defaultScope = 'default';
var classScope = 'class'; // Regexes that match native regex syntax, including octals

var nativeTokens = {
  // Any native multicharacter token in default scope, or any single character
  'default': /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
  // Any native multicharacter token in character class scope, or any single character
  'class': /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
}; // Any backreference or dollar-prefixed character in replacement strings

var replacementToken = /\$(?:{([\w$]+)}|<([\w$]+)>|(\d\d?|[\s\S]))/g; // Check for correct `exec` handling of nonparticipating capturing groups

var correctExecNpcg = nativ.exec.call(/()??/, '')[1] === undefined; // Check for ES6 `flags` prop support

var hasFlagsProp = /x/.flags !== undefined; // Shortcut to `Object.prototype.toString`

var _ref = {},
    toString = _ref.toString;

function hasNativeFlag(flag) {
  // Can't check based on the presence of properties/getters since browsers might support such
  // properties even when they don't support the corresponding flag in regex construction (tested
  // in Chrome 48, where `'unicode' in /x/` is true but trying to construct a regex with flag `u`
  // throws an error)
  var isSupported = true;

  try {
    // Can't use regex literals for testing even in a `try` because regex literals with
    // unsupported flags cause a compilation error in IE
    new RegExp('', flag);
  } catch (exception) {
    isSupported = false;
  }

  return isSupported;
} // Check for ES6 `u` flag support


var hasNativeU = hasNativeFlag('u'); // Check for ES6 `y` flag support

var hasNativeY = hasNativeFlag('y'); // Tracker for known flags, including addon flags

var registeredFlags = {
  g: true,
  i: true,
  m: true,
  u: hasNativeU,
  y: hasNativeY
};
/**
 * Attaches extended data and `XRegExp.prototype` properties to a regex object.
 *
 * @private
 * @param {RegExp} regex Regex to augment.
 * @param {Array} captureNames Array with capture names, or `null`.
 * @param {String} xSource XRegExp pattern used to generate `regex`, or `null` if N/A.
 * @param {String} xFlags XRegExp flags used to generate `regex`, or `null` if N/A.
 * @param {Boolean} [isInternalOnly=false] Whether the regex will be used only for internal
 *   operations, and never exposed to users. For internal-only regexes, we can improve perf by
 *   skipping some operations like attaching `XRegExp.prototype` properties.
 * @returns {RegExp} Augmented regex.
 */

function augment(regex, captureNames, xSource, xFlags, isInternalOnly) {
  regex[REGEX_DATA] = {
    captureNames: captureNames
  };

  if (isInternalOnly) {
    return regex;
  } // Can't auto-inherit these since the XRegExp constructor returns a nonprimitive value


  if (regex.__proto__) {
    regex.__proto__ = XRegExp.prototype;
  } else {
    for (var p in XRegExp.prototype) {
      // An `XRegExp.prototype.hasOwnProperty(p)` check wouldn't be worth it here, since this
      // is performance sensitive, and enumerable `Object.prototype` or `RegExp.prototype`
      // extensions exist on `regex.prototype` anyway
      regex[p] = XRegExp.prototype[p];
    }
  }

  regex[REGEX_DATA].source = xSource; // Emulate the ES6 `flags` prop by ensuring flags are in alphabetical order

  regex[REGEX_DATA].flags = xFlags ? xFlags.split('').sort().join('') : xFlags;
  return regex;
}
/**
 * Removes any duplicate characters from the provided string.
 *
 * @private
 * @param {String} str String to remove duplicate characters from.
 * @returns {String} String with any duplicate characters removed.
 */


function clipDuplicates(str) {
  return nativ.replace.call(str, /([\s\S])(?=[\s\S]*\1)/g, '');
}
/**
 * Copies a regex object while preserving extended data and augmenting with `XRegExp.prototype`
 * properties. The copy has a fresh `lastIndex` property (set to zero). Allows adding and removing
 * flags g and y while copying the regex.
 *
 * @private
 * @param {RegExp} regex Regex to copy.
 * @param {Object} [options] Options object with optional properties:
 *   - `addG` {Boolean} Add flag g while copying the regex.
 *   - `addY` {Boolean} Add flag y while copying the regex.
 *   - `removeG` {Boolean} Remove flag g while copying the regex.
 *   - `removeY` {Boolean} Remove flag y while copying the regex.
 *   - `isInternalOnly` {Boolean} Whether the copied regex will be used only for internal
 *     operations, and never exposed to users. For internal-only regexes, we can improve perf by
 *     skipping some operations like attaching `XRegExp.prototype` properties.
 *   - `source` {String} Overrides `<regex>.source`, for special cases.
 * @returns {RegExp} Copy of the provided regex, possibly with modified flags.
 */


function copyRegex(regex, options) {
  if (!XRegExp.isRegExp(regex)) {
    throw new TypeError('Type RegExp expected');
  }

  var xData = regex[REGEX_DATA] || {};
  var flags = getNativeFlags(regex);
  var flagsToAdd = '';
  var flagsToRemove = '';
  var xregexpSource = null;
  var xregexpFlags = null;
  options = options || {};

  if (options.removeG) {
    flagsToRemove += 'g';
  }

  if (options.removeY) {
    flagsToRemove += 'y';
  }

  if (flagsToRemove) {
    flags = nativ.replace.call(flags, new RegExp("[".concat(flagsToRemove, "]+"), 'g'), '');
  }

  if (options.addG) {
    flagsToAdd += 'g';
  }

  if (options.addY) {
    flagsToAdd += 'y';
  }

  if (flagsToAdd) {
    flags = clipDuplicates(flags + flagsToAdd);
  }

  if (!options.isInternalOnly) {
    if (xData.source !== undefined) {
      xregexpSource = xData.source;
    } // null or undefined; don't want to add to `flags` if the previous value was null, since
    // that indicates we're not tracking original precompilation flags


    if (xData.flags != null) {
      // Flags are only added for non-internal regexes by `XRegExp.globalize`. Flags are never
      // removed for non-internal regexes, so don't need to handle it
      xregexpFlags = flagsToAdd ? clipDuplicates(xData.flags + flagsToAdd) : xData.flags;
    }
  } // Augment with `XRegExp.prototype` properties, but use the native `RegExp` constructor to avoid
  // searching for special tokens. That would be wrong for regexes constructed by `RegExp`, and
  // unnecessary for regexes constructed by `XRegExp` because the regex has already undergone the
  // translation to native regex syntax


  regex = augment(new RegExp(options.source || regex.source, flags), hasNamedCapture(regex) ? xData.captureNames.slice(0) : null, xregexpSource, xregexpFlags, options.isInternalOnly);
  return regex;
}
/**
 * Converts hexadecimal to decimal.
 *
 * @private
 * @param {String} hex
 * @returns {Number}
 */


function dec(hex) {
  return parseInt(hex, 16);
}
/**
 * Returns a pattern that can be used in a native RegExp in place of an ignorable token such as an
 * inline comment or whitespace with flag x. This is used directly as a token handler function
 * passed to `XRegExp.addToken`.
 *
 * @private
 * @param {String} match Match arg of `XRegExp.addToken` handler
 * @param {String} scope Scope arg of `XRegExp.addToken` handler
 * @param {String} flags Flags arg of `XRegExp.addToken` handler
 * @returns {String} Either '' or '(?:)', depending on which is needed in the context of the match.
 */


function getContextualTokenSeparator(match, scope, flags) {
  if ( // No need to separate tokens if at the beginning or end of a group
  match.input[match.index - 1] === '(' || match.input[match.index + match[0].length] === ')' || // No need to separate tokens if before or after a `|`
  match.input[match.index - 1] === '|' || match.input[match.index + match[0].length] === '|' || // No need to separate tokens if at the beginning or end of the pattern
  match.index < 1 || match.index + match[0].length >= match.input.length || // No need to separate tokens if at the beginning of a noncapturing group or lookahead.
  // The way this is written relies on:
  // - The search regex matching only 3-char strings.
  // - Although `substr` gives chars from the end of the string if given a negative index,
  //   the resulting substring will be too short to match. Ex: `'abcd'.substr(-1, 3) === 'd'`
  nativ.test.call(/^\(\?[:=!]/, match.input.substr(match.index - 3, 3)) || // Avoid separating tokens when the following token is a quantifier
  isQuantifierNext(match.input, match.index + match[0].length, flags)) {
    return '';
  } // Keep tokens separated. This avoids e.g. inadvertedly changing `\1 1` or `\1(?#)1` to `\11`.
  // This also ensures all tokens remain as discrete atoms, e.g. it avoids converting the syntax
  // error `(? :` into `(?:`.


  return '(?:)';
}
/**
 * Returns native `RegExp` flags used by a regex object.
 *
 * @private
 * @param {RegExp} regex Regex to check.
 * @returns {String} Native flags in use.
 */


function getNativeFlags(regex) {
  return hasFlagsProp ? regex.flags : // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or concatenation
  // with an empty string) allows this to continue working predictably when
  // `XRegExp.proptotype.toString` is overridden
  nativ.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(regex))[1];
}
/**
 * Determines whether a regex has extended instance data used to track capture names.
 *
 * @private
 * @param {RegExp} regex Regex to check.
 * @returns {Boolean} Whether the regex uses named capture.
 */


function hasNamedCapture(regex) {
  return !!(regex[REGEX_DATA] && regex[REGEX_DATA].captureNames);
}
/**
 * Converts decimal to hexadecimal.
 *
 * @private
 * @param {Number|String} dec
 * @returns {String}
 */


function hex(dec) {
  return parseInt(dec, 10).toString(16);
}
/**
 * Checks whether the next nonignorable token after the specified position is a quantifier.
 *
 * @private
 * @param {String} pattern Pattern to search within.
 * @param {Number} pos Index in `pattern` to search at.
 * @param {String} flags Flags used by the pattern.
 * @returns {Boolean} Whether the next nonignorable token is a quantifier.
 */


function isQuantifierNext(pattern, pos, flags) {
  var inlineCommentPattern = '\\(\\?#[^)]*\\)';
  var lineCommentPattern = '#[^#\\n]*';
  var quantifierPattern = '[?*+]|{\\d+(?:,\\d*)?}';
  return nativ.test.call(flags.indexOf('x') !== -1 ? // Ignore any leading whitespace, line comments, and inline comments
  /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/ : // Ignore any leading inline comments
  /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/, pattern.slice(pos));
}
/**
 * Determines whether a value is of the specified type, by resolving its internal [[Class]].
 *
 * @private
 * @param {*} value Object to check.
 * @param {String} type Type to check for, in TitleCase.
 * @returns {Boolean} Whether the object matches the type.
 */


function isType(value, type) {
  return toString.call(value) === "[object ".concat(type, "]");
}
/**
 * Adds leading zeros if shorter than four characters. Used for fixed-length hexadecimal values.
 *
 * @private
 * @param {String} str
 * @returns {String}
 */


function pad4(str) {
  while (str.length < 4) {
    str = "0".concat(str);
  }

  return str;
}
/**
 * Checks for flag-related errors, and strips/applies flags in a leading mode modifier. Offloads
 * the flag preparation logic from the `XRegExp` constructor.
 *
 * @private
 * @param {String} pattern Regex pattern, possibly with a leading mode modifier.
 * @param {String} flags Any combination of flags.
 * @returns {Object} Object with properties `pattern` and `flags`.
 */


function prepareFlags(pattern, flags) {
  // Recent browsers throw on duplicate flags, so copy this behavior for nonnative flags
  if (clipDuplicates(flags) !== flags) {
    throw new SyntaxError("Invalid duplicate regex flag ".concat(flags));
  } // Strip and apply a leading mode modifier with any combination of flags except g or y


  pattern = nativ.replace.call(pattern, /^\(\?([\w$]+)\)/, function ($0, $1) {
    if (nativ.test.call(/[gy]/, $1)) {
      throw new SyntaxError("Cannot use flag g or y in mode modifier ".concat($0));
    } // Allow duplicate flags within the mode modifier


    flags = clipDuplicates(flags + $1);
    return '';
  }); // Throw on unknown native or nonnative flags

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = flags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var flag = _step.value;

      if (!registeredFlags[flag]) {
        throw new SyntaxError("Unknown regex flag ".concat(flag));
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return {
    pattern: pattern,
    flags: flags
  };
}
/**
 * Prepares an options object from the given value.
 *
 * @private
 * @param {String|Object} value Value to convert to an options object.
 * @returns {Object} Options object.
 */


function prepareOptions(value) {
  var options = {};

  if (isType(value, 'String')) {
    XRegExp.forEach(value, /[^\s,]+/, function (match) {
      options[match] = true;
    });
    return options;
  }

  return value;
}
/**
 * Registers a flag so it doesn't throw an 'unknown flag' error.
 *
 * @private
 * @param {String} flag Single-character flag to register.
 */


function registerFlag(flag) {
  if (!/^[\w$]$/.test(flag)) {
    throw new Error('Flag must be a single character A-Za-z0-9_$');
  }

  registeredFlags[flag] = true;
}
/**
 * Runs built-in and custom regex syntax tokens in reverse insertion order at the specified
 * position, until a match is found.
 *
 * @private
 * @param {String} pattern Original pattern from which an XRegExp object is being built.
 * @param {String} flags Flags being used to construct the regex.
 * @param {Number} pos Position to search for tokens within `pattern`.
 * @param {Number} scope Regex scope to apply: 'default' or 'class'.
 * @param {Object} context Context object to use for token handler functions.
 * @returns {Object} Object with properties `matchLength`, `output`, and `reparse`; or `null`.
 */


function runTokens(pattern, flags, pos, scope, context) {
  var i = tokens.length;
  var leadChar = pattern[pos];
  var result = null;
  var match;
  var t; // Run in reverse insertion order

  while (i--) {
    t = tokens[i];

    if (t.leadChar && t.leadChar !== leadChar || t.scope !== scope && t.scope !== 'all' || t.flag && !(flags.indexOf(t.flag) !== -1)) {
      continue;
    }

    match = XRegExp.exec(pattern, t.regex, pos, 'sticky');

    if (match) {
      result = {
        matchLength: match[0].length,
        output: t.handler.call(context, match, scope, flags),
        reparse: t.reparse
      }; // Finished with token tests

      break;
    }
  }

  return result;
}
/**
 * Enables or disables implicit astral mode opt-in. When enabled, flag A is automatically added to
 * all new regexes created by XRegExp. This causes an error to be thrown when creating regexes if
 * the Unicode Base addon is not available, since flag A is registered by that addon.
 *
 * @private
 * @param {Boolean} on `true` to enable; `false` to disable.
 */


function setAstral(on) {
  features.astral = on;
}
/**
 * Adds named capture groups to the `groups` property of match arrays. See here for details:
 * https://github.com/tc39/proposal-regexp-named-groups
 *
 * @private
 * @param {Boolean} on `true` to enable; `false` to disable.
 */


function setNamespacing(on) {
  features.namespacing = on;
}
/**
 * Returns the object, or throws an error if it is `null` or `undefined`. This is used to follow
 * the ES5 abstract operation `ToObject`.
 *
 * @private
 * @param {*} value Object to check and return.
 * @returns {*} The provided object.
 */


function toObject(value) {
  // null or undefined
  if (value == null) {
    throw new TypeError('Cannot convert null or undefined to object');
  }

  return value;
} // ==--------------------------==
// Constructor
// ==--------------------------==

/**
 * Creates an extended regular expression object for matching text with a pattern. Differs from a
 * native regular expression in that additional syntax and flags are supported. The returned object
 * is in fact a native `RegExp` and works with all native methods.
 *
 * @class XRegExp
 * @constructor
 * @param {String|RegExp} pattern Regex pattern string, or an existing regex object to copy.
 * @param {String} [flags] Any combination of flags.
 *   Native flags:
 *     - `g` - global
 *     - `i` - ignore case
 *     - `m` - multiline anchors
 *     - `u` - unicode (ES6)
 *     - `y` - sticky (Firefox 3+, ES6)
 *   Additional XRegExp flags:
 *     - `n` - explicit capture
 *     - `s` - dot matches all (aka singleline)
 *     - `x` - free-spacing and line comments (aka extended)
 *     - `A` - astral (requires the Unicode Base addon)
 *   Flags cannot be provided when constructing one `RegExp` from another.
 * @returns {RegExp} Extended regular expression object.
 * @example
 *
 * // With named capture and flag x
 * XRegExp(`(?<year>  [0-9]{4} ) -?  # year
 *          (?<month> [0-9]{2} ) -?  # month
 *          (?<day>   [0-9]{2} )     # day`, 'x');
 *
 * // Providing a regex object copies it. Native regexes are recompiled using native (not XRegExp)
 * // syntax. Copies maintain extended data, are augmented with `XRegExp.prototype` properties, and
 * // have fresh `lastIndex` properties (set to zero).
 * XRegExp(/regex/);
 */


function XRegExp(pattern, flags) {
  if (XRegExp.isRegExp(pattern)) {
    if (flags !== undefined) {
      throw new TypeError('Cannot supply flags when copying a RegExp');
    }

    return copyRegex(pattern);
  } // Copy the argument behavior of `RegExp`


  pattern = pattern === undefined ? '' : String(pattern);
  flags = flags === undefined ? '' : String(flags);

  if (XRegExp.isInstalled('astral') && !(flags.indexOf('A') !== -1)) {
    // This causes an error to be thrown if the Unicode Base addon is not available
    flags += 'A';
  }

  if (!patternCache[pattern]) {
    patternCache[pattern] = {};
  }

  if (!patternCache[pattern][flags]) {
    var context = {
      hasNamedCapture: false,
      captureNames: []
    };
    var scope = defaultScope;
    var output = '';
    var pos = 0;
    var result; // Check for flag-related errors, and strip/apply flags in a leading mode modifier

    var applied = prepareFlags(pattern, flags);
    var appliedPattern = applied.pattern;
    var appliedFlags = applied.flags; // Use XRegExp's tokens to translate the pattern to a native regex pattern.
    // `appliedPattern.length` may change on each iteration if tokens use `reparse`

    while (pos < appliedPattern.length) {
      do {
        // Check for custom tokens at the current position
        result = runTokens(appliedPattern, appliedFlags, pos, scope, context); // If the matched token used the `reparse` option, splice its output into the
        // pattern before running tokens again at the same position

        if (result && result.reparse) {
          appliedPattern = appliedPattern.slice(0, pos) + result.output + appliedPattern.slice(pos + result.matchLength);
        }
      } while (result && result.reparse);

      if (result) {
        output += result.output;
        pos += result.matchLength || 1;
      } else {
        // Get the native token at the current position
        var _XRegExp$exec = XRegExp.exec(appliedPattern, nativeTokens[scope], pos, 'sticky'),
            _XRegExp$exec2 = _slicedToArray(_XRegExp$exec, 1),
            token = _XRegExp$exec2[0];

        output += token;
        pos += token.length;

        if (token === '[' && scope === defaultScope) {
          scope = classScope;
        } else if (token === ']' && scope === classScope) {
          scope = defaultScope;
        }
      }
    }

    patternCache[pattern][flags] = {
      // Use basic cleanup to collapse repeated empty groups like `(?:)(?:)` to `(?:)`. Empty
      // groups are sometimes inserted during regex transpilation in order to keep tokens
      // separated. However, more than one empty group in a row is never needed.
      pattern: nativ.replace.call(output, /(?:\(\?:\))+/g, '(?:)'),
      // Strip all but native flags
      flags: nativ.replace.call(appliedFlags, /[^gimuy]+/g, ''),
      // `context.captureNames` has an item for each capturing group, even if unnamed
      captures: context.hasNamedCapture ? context.captureNames : null
    };
  }

  var generated = patternCache[pattern][flags];
  return augment(new RegExp(generated.pattern, generated.flags), generated.captures, pattern, flags);
} // Add `RegExp.prototype` to the prototype chain


XRegExp.prototype = /(?:)/; // ==--------------------------==
// Public properties
// ==--------------------------==

/**
 * The XRegExp version number as a string containing three dot-separated parts. For example,
 * '2.0.0-beta-3'.
 *
 * @static
 * @memberOf XRegExp
 * @type String
 */

XRegExp.version = '4.2.0'; // ==--------------------------==
// Public methods
// ==--------------------------==
// Intentionally undocumented; used in tests and addons

XRegExp._clipDuplicates = clipDuplicates;
XRegExp._hasNativeFlag = hasNativeFlag;
XRegExp._dec = dec;
XRegExp._hex = hex;
XRegExp._pad4 = pad4;
/**
 * Extends XRegExp syntax and allows custom flags. This is used internally and can be used to
 * create XRegExp addons. If more than one token can match the same string, the last added wins.
 *
 * @memberOf XRegExp
 * @param {RegExp} regex Regex object that matches the new token.
 * @param {Function} handler Function that returns a new pattern string (using native regex syntax)
 *   to replace the matched token within all future XRegExp regexes. Has access to persistent
 *   properties of the regex being built, through `this`. Invoked with three arguments:
 *   - The match array, with named backreference properties.
 *   - The regex scope where the match was found: 'default' or 'class'.
 *   - The flags used by the regex, including any flags in a leading mode modifier.
 *   The handler function becomes part of the XRegExp construction process, so be careful not to
 *   construct XRegExps within the function or you will trigger infinite recursion.
 * @param {Object} [options] Options object with optional properties:
 *   - `scope` {String} Scope where the token applies: 'default', 'class', or 'all'.
 *   - `flag` {String} Single-character flag that triggers the token. This also registers the
 *     flag, which prevents XRegExp from throwing an 'unknown flag' error when the flag is used.
 *   - `optionalFlags` {String} Any custom flags checked for within the token `handler` that are
 *     not required to trigger the token. This registers the flags, to prevent XRegExp from
 *     throwing an 'unknown flag' error when any of the flags are used.
 *   - `reparse` {Boolean} Whether the `handler` function's output should not be treated as
 *     final, and instead be reparseable by other tokens (including the current token). Allows
 *     token chaining or deferring.
 *   - `leadChar` {String} Single character that occurs at the beginning of any successful match
 *     of the token (not always applicable). This doesn't change the behavior of the token unless
 *     you provide an erroneous value. However, providing it can increase the token's performance
 *     since the token can be skipped at any positions where this character doesn't appear.
 * @example
 *
 * // Basic usage: Add \a for the ALERT control code
 * XRegExp.addToken(
 *   /\\a/,
 *   () => '\\x07',
 *   {scope: 'all'}
 * );
 * XRegExp('\\a[\\a-\\n]+').test('\x07\n\x07'); // -> true
 *
 * // Add the U (ungreedy) flag from PCRE and RE2, which reverses greedy and lazy quantifiers.
 * // Since `scope` is not specified, it uses 'default' (i.e., transformations apply outside of
 * // character classes only)
 * XRegExp.addToken(
 *   /([?*+]|{\d+(?:,\d*)?})(\??)/,
 *   (match) => `${match[1]}${match[2] ? '' : '?'}`,
 *   {flag: 'U'}
 * );
 * XRegExp('a+', 'U').exec('aaa')[0]; // -> 'a'
 * XRegExp('a+?', 'U').exec('aaa')[0]; // -> 'aaa'
 */

XRegExp.addToken = function (regex, handler, options) {
  options = options || {};
  var _options = options,
      optionalFlags = _options.optionalFlags;

  if (options.flag) {
    registerFlag(options.flag);
  }

  if (optionalFlags) {
    optionalFlags = nativ.split.call(optionalFlags, '');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = optionalFlags[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var flag = _step2.value;
        registerFlag(flag);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  } // Add to the private list of syntax tokens


  tokens.push({
    regex: copyRegex(regex, {
      addG: true,
      addY: hasNativeY,
      isInternalOnly: true
    }),
    handler: handler,
    scope: options.scope || defaultScope,
    flag: options.flag,
    reparse: options.reparse,
    leadChar: options.leadChar
  }); // Reset the pattern cache used by the `XRegExp` constructor, since the same pattern and flags
  // might now produce different results

  XRegExp.cache.flush('patterns');
};
/**
 * Caches and returns the result of calling `XRegExp(pattern, flags)`. On any subsequent call with
 * the same pattern and flag combination, the cached copy of the regex is returned.
 *
 * @memberOf XRegExp
 * @param {String} pattern Regex pattern string.
 * @param {String} [flags] Any combination of XRegExp flags.
 * @returns {RegExp} Cached XRegExp object.
 * @example
 *
 * while (match = XRegExp.cache('.', 'gs').exec(str)) {
 *   // The regex is compiled once only
 * }
 */


XRegExp.cache = function (pattern, flags) {
  if (!regexCache[pattern]) {
    regexCache[pattern] = {};
  }

  return regexCache[pattern][flags] || (regexCache[pattern][flags] = XRegExp(pattern, flags));
}; // Intentionally undocumented; used in tests


XRegExp.cache.flush = function (cacheName) {
  if (cacheName === 'patterns') {
    // Flush the pattern cache used by the `XRegExp` constructor
    patternCache = {};
  } else {
    // Flush the regex cache populated by `XRegExp.cache`
    regexCache = {};
  }
};
/**
 * Escapes any regular expression metacharacters, for use when matching literal strings. The result
 * can safely be used at any point within a regex that uses any flags.
 *
 * @memberOf XRegExp
 * @param {String} str String to escape.
 * @returns {String} String with regex metacharacters escaped.
 * @example
 *
 * XRegExp.escape('Escaped? <.>');
 * // -> 'Escaped\?\ <\.>'
 */


XRegExp.escape = function (str) {
  return nativ.replace.call(toObject(str), /[-\[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};
/**
 * Executes a regex search in a specified string. Returns a match array or `null`. If the provided
 * regex uses named capture, named backreference properties are included on the match array.
 * Optional `pos` and `sticky` arguments specify the search start position, and whether the match
 * must start at the specified position only. The `lastIndex` property of the provided regex is not
 * used, but is updated for compatibility. Also fixes browser bugs compared to the native
 * `RegExp.prototype.exec` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Number} [pos=0] Zero-based index at which to start the search.
 * @param {Boolean|String} [sticky=false] Whether the match must start at the specified position
 *   only. The string `'sticky'` is accepted as an alternative to `true`.
 * @returns {Array} Match array with named backreference properties, or `null`.
 * @example
 *
 * // Basic use, with named backreference
 * let match = XRegExp.exec('U+2620', XRegExp('U\\+(?<hex>[0-9A-F]{4})'));
 * match.hex; // -> '2620'
 *
 * // With pos and sticky, in a loop
 * let pos = 2, result = [], match;
 * while (match = XRegExp.exec('<1><2><3><4>5<6>', /<(\d)>/, pos, 'sticky')) {
 *   result.push(match[1]);
 *   pos = match.index + match[0].length;
 * }
 * // result -> ['2', '3', '4']
 */


XRegExp.exec = function (str, regex, pos, sticky) {
  var cacheKey = 'g';
  var addY = false;
  var fakeY = false;
  var match;
  addY = hasNativeY && !!(sticky || regex.sticky && sticky !== false);

  if (addY) {
    cacheKey += 'y';
  } else if (sticky) {
    // Simulate sticky matching by appending an empty capture to the original regex. The
    // resulting regex will succeed no matter what at the current index (set with `lastIndex`),
    // and will not search the rest of the subject string. We'll know that the original regex
    // has failed if that last capture is `''` rather than `undefined` (i.e., if that last
    // capture participated in the match).
    fakeY = true;
    cacheKey += 'FakeY';
  }

  regex[REGEX_DATA] = regex[REGEX_DATA] || {}; // Shares cached copies with `XRegExp.match`/`replace`

  var r2 = regex[REGEX_DATA][cacheKey] || (regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
    addG: true,
    addY: addY,
    source: fakeY ? "".concat(regex.source, "|()") : undefined,
    removeY: sticky === false,
    isInternalOnly: true
  }));
  pos = pos || 0;
  r2.lastIndex = pos; // Fixed `exec` required for `lastIndex` fix, named backreferences, etc.

  match = fixed.exec.call(r2, str); // Get rid of the capture added by the pseudo-sticky matcher if needed. An empty string means
  // the original regexp failed (see above).

  if (fakeY && match && match.pop() === '') {
    match = null;
  }

  if (regex.global) {
    regex.lastIndex = match ? r2.lastIndex : 0;
  }

  return match;
};
/**
 * Executes a provided function once per regex match. Searches always start at the beginning of the
 * string and continue until the end, regardless of the state of the regex's `global` property and
 * initial `lastIndex`.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Function} callback Function to execute for each match. Invoked with four arguments:
 *   - The match array, with named backreference properties.
 *   - The zero-based match index.
 *   - The string being traversed.
 *   - The regex object being used to traverse the string.
 * @example
 *
 * // Extracts every other digit from a string
 * const evens = [];
 * XRegExp.forEach('1a2345', /\d/, (match, i) => {
 *   if (i % 2) evens.push(+match[0]);
 * });
 * // evens -> [2, 4]
 */


XRegExp.forEach = function (str, regex, callback) {
  var pos = 0;
  var i = -1;
  var match;

  while (match = XRegExp.exec(str, regex, pos)) {
    // Because `regex` is provided to `callback`, the function could use the deprecated/
    // nonstandard `RegExp.prototype.compile` to mutate the regex. However, since `XRegExp.exec`
    // doesn't use `lastIndex` to set the search position, this can't lead to an infinite loop,
    // at least. Actually, because of the way `XRegExp.exec` caches globalized versions of
    // regexes, mutating the regex will not have any effect on the iteration or matched strings,
    // which is a nice side effect that brings extra safety.
    callback(match, ++i, str, regex);
    pos = match.index + (match[0].length || 1);
  }
};
/**
 * Copies a regex object and adds flag `g`. The copy maintains extended data, is augmented with
 * `XRegExp.prototype` properties, and has a fresh `lastIndex` property (set to zero). Native
 * regexes are not recompiled using XRegExp syntax.
 *
 * @memberOf XRegExp
 * @param {RegExp} regex Regex to globalize.
 * @returns {RegExp} Copy of the provided regex with flag `g` added.
 * @example
 *
 * const globalCopy = XRegExp.globalize(/regex/);
 * globalCopy.global; // -> true
 */


XRegExp.globalize = function (regex) {
  return copyRegex(regex, {
    addG: true
  });
};
/**
 * Installs optional features according to the specified options. Can be undone using
 * `XRegExp.uninstall`.
 *
 * @memberOf XRegExp
 * @param {Object|String} options Options object or string.
 * @example
 *
 * // With an options object
 * XRegExp.install({
 *   // Enables support for astral code points in Unicode addons (implicitly sets flag A)
 *   astral: true,
 *
 *   // Adds named capture groups to the `groups` property of matches
 *   namespacing: true
 * });
 *
 * // With an options string
 * XRegExp.install('astral namespacing');
 */


XRegExp.install = function (options) {
  options = prepareOptions(options);

  if (!features.astral && options.astral) {
    setAstral(true);
  }

  if (!features.namespacing && options.namespacing) {
    setNamespacing(true);
  }
};
/**
 * Checks whether an individual optional feature is installed.
 *
 * @memberOf XRegExp
 * @param {String} feature Name of the feature to check. One of:
 *   - `astral`
 *   - `namespacing`
 * @returns {Boolean} Whether the feature is installed.
 * @example
 *
 * XRegExp.isInstalled('astral');
 */


XRegExp.isInstalled = function (feature) {
  return !!features[feature];
};
/**
 * Returns `true` if an object is a regex; `false` if it isn't. This works correctly for regexes
 * created in another frame, when `instanceof` and `constructor` checks would fail.
 *
 * @memberOf XRegExp
 * @param {*} value Object to check.
 * @returns {Boolean} Whether the object is a `RegExp` object.
 * @example
 *
 * XRegExp.isRegExp('string'); // -> false
 * XRegExp.isRegExp(/regex/i); // -> true
 * XRegExp.isRegExp(RegExp('^', 'm')); // -> true
 * XRegExp.isRegExp(XRegExp('(?s).')); // -> true
 */


XRegExp.isRegExp = function (value) {
  return toString.call(value) === '[object RegExp]';
}; // isType(value, 'RegExp');

/**
 * Returns the first matched string, or in global mode, an array containing all matched strings.
 * This is essentially a more convenient re-implementation of `String.prototype.match` that gives
 * the result types you actually want (string instead of `exec`-style array in match-first mode,
 * and an empty array instead of `null` when no matches are found in match-all mode). It also lets
 * you override flag g and ignore `lastIndex`, and fixes browser bugs.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {String} [scope='one'] Use 'one' to return the first match as a string. Use 'all' to
 *   return an array of all matched strings. If not explicitly specified and `regex` uses flag g,
 *   `scope` is 'all'.
 * @returns {String|Array} In match-first mode: First match as a string, or `null`. In match-all
 *   mode: Array of all matched strings, or an empty array.
 * @example
 *
 * // Match first
 * XRegExp.match('abc', /\w/); // -> 'a'
 * XRegExp.match('abc', /\w/g, 'one'); // -> 'a'
 * XRegExp.match('abc', /x/g, 'one'); // -> null
 *
 * // Match all
 * XRegExp.match('abc', /\w/g); // -> ['a', 'b', 'c']
 * XRegExp.match('abc', /\w/, 'all'); // -> ['a', 'b', 'c']
 * XRegExp.match('abc', /x/, 'all'); // -> []
 */


XRegExp.match = function (str, regex, scope) {
  var global = regex.global && scope !== 'one' || scope === 'all';
  var cacheKey = (global ? 'g' : '') + (regex.sticky ? 'y' : '') || 'noGY';
  regex[REGEX_DATA] = regex[REGEX_DATA] || {}; // Shares cached copies with `XRegExp.exec`/`replace`

  var r2 = regex[REGEX_DATA][cacheKey] || (regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
    addG: !!global,
    removeG: scope === 'one',
    isInternalOnly: true
  }));
  var result = nativ.match.call(toObject(str), r2);

  if (regex.global) {
    regex.lastIndex = scope === 'one' && result ? // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
    result.index + result[0].length : 0;
  }

  return global ? result || [] : result && result[0];
};
/**
 * Retrieves the matches from searching a string using a chain of regexes that successively search
 * within previous matches. The provided `chain` array can contain regexes and or objects with
 * `regex` and `backref` properties. When a backreference is specified, the named or numbered
 * backreference is passed forward to the next regex or returned.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {Array} chain Regexes that each search for matches within preceding results.
 * @returns {Array} Matches by the last regex in the chain, or an empty array.
 * @example
 *
 * // Basic usage; matches numbers within <b> tags
 * XRegExp.matchChain('1 <b>2</b> 3 <b>4 a 56</b>', [
 *   XRegExp('(?is)<b>.*?</b>'),
 *   /\d+/
 * ]);
 * // -> ['2', '4', '56']
 *
 * // Passing forward and returning specific backreferences
 * html = '<a href="http://xregexp.com/api/">XRegExp</a>\
 *         <a href="http://www.google.com/">Google</a>';
 * XRegExp.matchChain(html, [
 *   {regex: /<a href="([^"]+)">/i, backref: 1},
 *   {regex: XRegExp('(?i)^https?://(?<domain>[^/?#]+)'), backref: 'domain'}
 * ]);
 * // -> ['xregexp.com', 'www.google.com']
 */


XRegExp.matchChain = function (str, chain) {
  return function recurseChain(values, level) {
    var item = chain[level].regex ? chain[level] : {
      regex: chain[level]
    };
    var matches = [];

    function addMatch(match) {
      if (item.backref) {
        var ERR_UNDEFINED_GROUP = "Backreference to undefined group: ".concat(item.backref);
        var isNamedBackref = isNaN(item.backref);

        if (isNamedBackref && XRegExp.isInstalled('namespacing')) {
          // `groups` has `null` as prototype, so using `in` instead of `hasOwnProperty`
          if (!(item.backref in match.groups)) {
            throw new ReferenceError(ERR_UNDEFINED_GROUP);
          }
        } else if (!match.hasOwnProperty(item.backref)) {
          throw new ReferenceError(ERR_UNDEFINED_GROUP);
        }

        var backrefValue = isNamedBackref && XRegExp.isInstalled('namespacing') ? match.groups[item.backref] : match[item.backref];
        matches.push(backrefValue || '');
      } else {
        matches.push(match[0]);
      }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var value = _step3.value;
        XRegExp.forEach(value, item.regex, addMatch);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return level === chain.length - 1 || !matches.length ? matches : recurseChain(matches, level + 1);
  }([str], 0);
};
/**
 * Returns a new string with one or all matches of a pattern replaced. The pattern can be a string
 * or regex, and the replacement can be a string or a function to be called for each match. To
 * perform a global search and replace, use the optional `scope` argument or include flag g if using
 * a regex. Replacement strings can use `${n}` or `$<n>` for named and numbered backreferences.
 * Replacement functions can use named backreferences via `arguments[0].name`. Also fixes browser
 * bugs compared to the native `String.prototype.replace` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp|String} search Search pattern to be replaced.
 * @param {String|Function} replacement Replacement string or a function invoked to create it.
 *   Replacement strings can include special replacement syntax:
 *     - $$ - Inserts a literal $ character.
 *     - $&, $0 - Inserts the matched substring.
 *     - $` - Inserts the string that precedes the matched substring (left context).
 *     - $' - Inserts the string that follows the matched substring (right context).
 *     - $n, $nn - Where n/nn are digits referencing an existent capturing group, inserts
 *       backreference n/nn.
 *     - ${n}, $<n> - Where n is a name or any number of digits that reference an existent capturing
 *       group, inserts backreference n.
 *   Replacement functions are invoked with three or more arguments:
 *     - The matched substring (corresponds to $& above). Named backreferences are accessible as
 *       properties of this first argument.
 *     - 0..n arguments, one for each backreference (corresponding to $1, $2, etc. above).
 *     - The zero-based index of the match within the total search string.
 *     - The total string being searched.
 * @param {String} [scope='one'] Use 'one' to replace the first match only, or 'all'. If not
 *   explicitly specified and using a regex with flag g, `scope` is 'all'.
 * @returns {String} New string with one or all matches replaced.
 * @example
 *
 * // Regex search, using named backreferences in replacement string
 * const name = XRegExp('(?<first>\\w+) (?<last>\\w+)');
 * XRegExp.replace('John Smith', name, '$<last>, $<first>');
 * // -> 'Smith, John'
 *
 * // Regex search, using named backreferences in replacement function
 * XRegExp.replace('John Smith', name, (match) => `${match.last}, ${match.first}`);
 * // -> 'Smith, John'
 *
 * // String search, with replace-all
 * XRegExp.replace('RegExp builds RegExps', 'RegExp', 'XRegExp', 'all');
 * // -> 'XRegExp builds XRegExps'
 */


XRegExp.replace = function (str, search, replacement, scope) {
  var isRegex = XRegExp.isRegExp(search);
  var global = search.global && scope !== 'one' || scope === 'all';
  var cacheKey = (global ? 'g' : '') + (search.sticky ? 'y' : '') || 'noGY';
  var s2 = search;

  if (isRegex) {
    search[REGEX_DATA] = search[REGEX_DATA] || {}; // Shares cached copies with `XRegExp.exec`/`match`. Since a copy is used, `search`'s
    // `lastIndex` isn't updated *during* replacement iterations

    s2 = search[REGEX_DATA][cacheKey] || (search[REGEX_DATA][cacheKey] = copyRegex(search, {
      addG: !!global,
      removeG: scope === 'one',
      isInternalOnly: true
    }));
  } else if (global) {
    s2 = new RegExp(XRegExp.escape(String(search)), 'g');
  } // Fixed `replace` required for named backreferences, etc.


  var result = fixed.replace.call(toObject(str), s2, replacement);

  if (isRegex && search.global) {
    // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
    search.lastIndex = 0;
  }

  return result;
};
/**
 * Performs batch processing of string replacements. Used like `XRegExp.replace`, but accepts an
 * array of replacement details. Later replacements operate on the output of earlier replacements.
 * Replacement details are accepted as an array with a regex or string to search for, the
 * replacement string or function, and an optional scope of 'one' or 'all'. Uses the XRegExp
 * replacement text syntax, which supports named backreference properties via `${name}` or
 * `$<name>`.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {Array} replacements Array of replacement detail arrays.
 * @returns {String} New string with all replacements.
 * @example
 *
 * str = XRegExp.replaceEach(str, [
 *   [XRegExp('(?<name>a)'), 'z${name}'],
 *   [/b/gi, 'y'],
 *   [/c/g, 'x', 'one'], // scope 'one' overrides /g
 *   [/d/, 'w', 'all'],  // scope 'all' overrides lack of /g
 *   ['e', 'v', 'all'],  // scope 'all' allows replace-all for strings
 *   [/f/g, ($0) => $0.toUpperCase()]
 * ]);
 */


XRegExp.replaceEach = function (str, replacements) {
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = replacements[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var r = _step4.value;
      str = XRegExp.replace(str, r[0], r[1], r[2]);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return str;
};
/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * XRegExp.split('a b c', ' ');
 * // -> ['a', 'b', 'c']
 *
 * // With limit
 * XRegExp.split('a b c', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * XRegExp.split('..word1..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', '..']
 */


XRegExp.split = function (str, separator, limit) {
  return fixed.split.call(toObject(str), separator, limit);
};
/**
 * Executes a regex search in a specified string. Returns `true` or `false`. Optional `pos` and
 * `sticky` arguments specify the search start position, and whether the match must start at the
 * specified position only. The `lastIndex` property of the provided regex is not used, but is
 * updated for compatibility. Also fixes browser bugs compared to the native
 * `RegExp.prototype.test` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Number} [pos=0] Zero-based index at which to start the search.
 * @param {Boolean|String} [sticky=false] Whether the match must start at the specified position
 *   only. The string `'sticky'` is accepted as an alternative to `true`.
 * @returns {Boolean} Whether the regex matched the provided value.
 * @example
 *
 * // Basic use
 * XRegExp.test('abc', /c/); // -> true
 *
 * // With pos and sticky
 * XRegExp.test('abc', /c/, 0, 'sticky'); // -> false
 * XRegExp.test('abc', /c/, 2, 'sticky'); // -> true
 */
// Do this the easy way :-)


XRegExp.test = function (str, regex, pos, sticky) {
  return !!XRegExp.exec(str, regex, pos, sticky);
};
/**
 * Uninstalls optional features according to the specified options. All optional features start out
 * uninstalled, so this is used to undo the actions of `XRegExp.install`.
 *
 * @memberOf XRegExp
 * @param {Object|String} options Options object or string.
 * @example
 *
 * // With an options object
 * XRegExp.uninstall({
 *   // Disables support for astral code points in Unicode addons
 *   astral: true,
 *
 *   // Don't add named capture groups to the `groups` property of matches
 *   namespacing: true
 * });
 *
 * // With an options string
 * XRegExp.uninstall('astral namespacing');
 */


XRegExp.uninstall = function (options) {
  options = prepareOptions(options);

  if (features.astral && options.astral) {
    setAstral(false);
  }

  if (features.namespacing && options.namespacing) {
    setNamespacing(false);
  }
};
/**
 * Returns an XRegExp object that is the union of the given patterns. Patterns can be provided as
 * regex objects or strings. Metacharacters are escaped in patterns provided as strings.
 * Backreferences in provided regex objects are automatically renumbered to work correctly within
 * the larger combined pattern. Native flags used by provided regexes are ignored in favor of the
 * `flags` argument.
 *
 * @memberOf XRegExp
 * @param {Array} patterns Regexes and strings to combine.
 * @param {String} [flags] Any combination of XRegExp flags.
 * @param {Object} [options] Options object with optional properties:
 *   - `conjunction` {String} Type of conjunction to use: 'or' (default) or 'none'.
 * @returns {RegExp} Union of the provided regexes and strings.
 * @example
 *
 * XRegExp.union(['a+b*c', /(dogs)\1/, /(cats)\1/], 'i');
 * // -> /a\+b\*c|(dogs)\1|(cats)\2/i
 *
 * XRegExp.union([/man/, /bear/, /pig/], 'i', {conjunction: 'none'});
 * // -> /manbearpig/i
 */


XRegExp.union = function (patterns, flags, options) {
  options = options || {};
  var conjunction = options.conjunction || 'or';
  var numCaptures = 0;
  var numPriorCaptures;
  var captureNames;

  function rewrite(match, paren, backref) {
    var name = captureNames[numCaptures - numPriorCaptures]; // Capturing group

    if (paren) {
      ++numCaptures; // If the current capture has a name, preserve the name

      if (name) {
        return "(?<".concat(name, ">");
      } // Backreference

    } else if (backref) {
      // Rewrite the backreference
      return "\\".concat(+backref + numPriorCaptures);
    }

    return match;
  }

  if (!(isType(patterns, 'Array') && patterns.length)) {
    throw new TypeError('Must provide a nonempty array of patterns to merge');
  }

  var parts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
  var output = [];
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = patterns[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var pattern = _step5.value;

      if (XRegExp.isRegExp(pattern)) {
        numPriorCaptures = numCaptures;
        captureNames = pattern[REGEX_DATA] && pattern[REGEX_DATA].captureNames || []; // Rewrite backreferences. Passing to XRegExp dies on octals and ensures patterns are
        // independently valid; helps keep this simple. Named captures are put back

        output.push(nativ.replace.call(XRegExp(pattern.source).source, parts, rewrite));
      } else {
        output.push(XRegExp.escape(pattern));
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  var separator = conjunction === 'none' ? '' : '|';
  return XRegExp(output.join(separator), flags);
}; // ==--------------------------==
// Fixed/extended native methods
// ==--------------------------==

/**
 * Adds named capture support (with backreferences returned as `result.name`), and fixes browser
 * bugs in the native `RegExp.prototype.exec`. Use via `XRegExp.exec`.
 *
 * @memberOf RegExp
 * @param {String} str String to search.
 * @returns {Array} Match array with named backreference properties, or `null`.
 */


fixed.exec = function (str) {
  var origLastIndex = this.lastIndex;
  var match = nativ.exec.apply(this, arguments);

  if (match) {
    // Fix browsers whose `exec` methods don't return `undefined` for nonparticipating capturing
    // groups. This fixes IE 5.5-8, but not IE 9's quirks mode or emulation of older IEs. IE 9
    // in standards mode follows the spec.
    if (!correctExecNpcg && match.length > 1 && match.indexOf('') !== -1) {
      var r2 = copyRegex(this, {
        removeG: true,
        isInternalOnly: true
      }); // Using `str.slice(match.index)` rather than `match[0]` in case lookahead allowed
      // matching due to characters outside the match

      nativ.replace.call(String(str).slice(match.index), r2, function () {
        var len = arguments.length; // Skip index 0 and the last 2

        for (var i = 1; i < len - 2; ++i) {
          if ((i < 0 || arguments.length <= i ? undefined : arguments[i]) === undefined) {
            match[i] = undefined;
          }
        }
      });
    } // Attach named capture properties


    var groupsObject = match;

    if (XRegExp.isInstalled('namespacing')) {
      // https://tc39.github.io/proposal-regexp-named-groups/#sec-regexpbuiltinexec
      match.groups = Object.create(null);
      groupsObject = match.groups;
    }

    if (this[REGEX_DATA] && this[REGEX_DATA].captureNames) {
      // Skip index 0
      for (var i = 1; i < match.length; ++i) {
        var name = this[REGEX_DATA].captureNames[i - 1];

        if (name) {
          groupsObject[name] = match[i];
        }
      }
    } // Fix browsers that increment `lastIndex` after zero-length matches


    if (this.global && !match[0].length && this.lastIndex > match.index) {
      this.lastIndex = match.index;
    }
  }

  if (!this.global) {
    // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
    this.lastIndex = origLastIndex;
  }

  return match;
};
/**
 * Fixes browser bugs in the native `RegExp.prototype.test`.
 *
 * @memberOf RegExp
 * @param {String} str String to search.
 * @returns {Boolean} Whether the regex matched the provided value.
 */


fixed.test = function (str) {
  // Do this the easy way :-)
  return !!fixed.exec.call(this, str);
};
/**
 * Adds named capture support (with backreferences returned as `result.name`), and fixes browser
 * bugs in the native `String.prototype.match`.
 *
 * @memberOf String
 * @param {RegExp|*} regex Regex to search with. If not a regex object, it is passed to `RegExp`.
 * @returns {Array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
 *   the result of calling `regex.exec(this)`.
 */


fixed.match = function (regex) {
  if (!XRegExp.isRegExp(regex)) {
    // Use the native `RegExp` rather than `XRegExp`
    regex = new RegExp(regex);
  } else if (regex.global) {
    var result = nativ.match.apply(this, arguments); // Fixes IE bug

    regex.lastIndex = 0;
    return result;
  }

  return fixed.exec.call(regex, toObject(this));
};
/**
 * Adds support for `${n}` (or `$<n>`) tokens for named and numbered backreferences in replacement
 * text, and provides named backreferences to replacement functions as `arguments[0].name`. Also
 * fixes browser bugs in replacement text syntax when performing a replacement using a nonregex
 * search value, and the value of a replacement regex's `lastIndex` property during replacement
 * iterations and upon completion. Note that this doesn't support SpiderMonkey's proprietary third
 * (`flags`) argument. Use via `XRegExp.replace`.
 *
 * @memberOf String
 * @param {RegExp|String} search Search pattern to be replaced.
 * @param {String|Function} replacement Replacement string or a function invoked to create it.
 * @returns {String} New string with one or all matches replaced.
 */


fixed.replace = function (search, replacement) {
  var isRegex = XRegExp.isRegExp(search);
  var origLastIndex;
  var captureNames;
  var result;

  if (isRegex) {
    if (search[REGEX_DATA]) {
      captureNames = search[REGEX_DATA].captureNames;
    } // Only needed if `search` is nonglobal


    origLastIndex = search.lastIndex;
  } else {
    search += ''; // Type-convert
  } // Don't use `typeof`; some older browsers return 'function' for regex objects


  if (isType(replacement, 'Function')) {
    // Stringifying `this` fixes a bug in IE < 9 where the last argument in replacement
    // functions isn't type-converted to a string
    result = nativ.replace.call(String(this), search, function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (captureNames) {
        var groupsObject;

        if (XRegExp.isInstalled('namespacing')) {
          // https://tc39.github.io/proposal-regexp-named-groups/#sec-regexpbuiltinexec
          groupsObject = Object.create(null);
          args.push(groupsObject);
        } else {
          // Change the `args[0]` string primitive to a `String` object that can store
          // properties. This really does need to use `String` as a constructor
          args[0] = new String(args[0]);
          groupsObject = args[0];
        } // Store named backreferences


        for (var i = 0; i < captureNames.length; ++i) {
          if (captureNames[i]) {
            groupsObject[captureNames[i]] = args[i + 1];
          }
        }
      } // Update `lastIndex` before calling `replacement`. Fixes IE, Chrome, Firefox, Safari
      // bug (last tested IE 9, Chrome 17, Firefox 11, Safari 5.1)


      if (isRegex && search.global) {
        search.lastIndex = args[args.length - 2] + args[0].length;
      } // ES6 specs the context for replacement functions as `undefined`


      return replacement.apply(void 0, args);
    });
  } else {
    // Ensure that the last value of `args` will be a string when given nonstring `this`,
    // while still throwing on null or undefined context
    result = nativ.replace.call(this == null ? this : String(this), search, function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return nativ.replace.call(String(replacement), replacementToken, replacer);

      function replacer($0, bracketed, angled, dollarToken) {
        bracketed = bracketed || angled; // Named or numbered backreference with curly or angled braces

        if (bracketed) {
          // XRegExp behavior for `${n}` or `$<n>`:
          // 1. Backreference to numbered capture, if `n` is an integer. Use `0` for the
          //    entire match. Any number of leading zeros may be used.
          // 2. Backreference to named capture `n`, if it exists and is not an integer
          //    overridden by numbered capture. In practice, this does not overlap with
          //    numbered capture since XRegExp does not allow named capture to use a bare
          //    integer as the name.
          // 3. If the name or number does not refer to an existing capturing group, it's
          //    an error.
          var n = +bracketed; // Type-convert; drop leading zeros

          if (n <= args.length - 3) {
            return args[n] || '';
          } // Groups with the same name is an error, else would need `lastIndexOf`


          n = captureNames ? captureNames.indexOf(bracketed) : -1;

          if (n < 0) {
            throw new SyntaxError("Backreference to undefined group ".concat($0));
          }

          return args[n + 1] || '';
        } // Else, special variable or numbered backreference without curly braces


        if (dollarToken === '$') {
          // $$
          return '$';
        }

        if (dollarToken === '&' || +dollarToken === 0) {
          // $&, $0 (not followed by 1-9), $00
          return args[0];
        }

        if (dollarToken === '`') {
          // $` (left context)
          return args[args.length - 1].slice(0, args[args.length - 2]);
        }

        if (dollarToken === "'") {
          // $' (right context)
          return args[args.length - 1].slice(args[args.length - 2] + args[0].length);
        } // Else, numbered backreference without braces


        dollarToken = +dollarToken; // Type-convert; drop leading zero
        // XRegExp behavior for `$n` and `$nn`:
        // - Backrefs end after 1 or 2 digits. Use `${..}` or `$<..>` for more digits.
        // - `$1` is an error if no capturing groups.
        // - `$10` is an error if less than 10 capturing groups. Use `${1}0` or `$<1>0`
        //   instead.
        // - `$01` is `$1` if at least one capturing group, else it's an error.
        // - `$0` (not followed by 1-9) and `$00` are the entire match.
        // Native behavior, for comparison:
        // - Backrefs end after 1 or 2 digits. Cannot reference capturing group 100+.
        // - `$1` is a literal `$1` if no capturing groups.
        // - `$10` is `$1` followed by a literal `0` if less than 10 capturing groups.
        // - `$01` is `$1` if at least one capturing group, else it's a literal `$01`.
        // - `$0` is a literal `$0`.

        if (!isNaN(dollarToken)) {
          if (dollarToken > args.length - 3) {
            throw new SyntaxError("Backreference to undefined group ".concat($0));
          }

          return args[dollarToken] || '';
        } // `$` followed by an unsupported char is an error, unlike native JS


        throw new SyntaxError("Invalid token ".concat($0));
      }
    });
  }

  if (isRegex) {
    if (search.global) {
      // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
      search.lastIndex = 0;
    } else {
      // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
      search.lastIndex = origLastIndex;
    }
  }

  return result;
};
/**
 * Fixes browser bugs in the native `String.prototype.split`. Use via `XRegExp.split`.
 *
 * @memberOf String
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 */


fixed.split = function (separator, limit) {
  if (!XRegExp.isRegExp(separator)) {
    // Browsers handle nonregex split correctly, so use the faster native method
    return nativ.split.apply(this, arguments);
  }

  var str = String(this);
  var output = [];
  var origLastIndex = separator.lastIndex;
  var lastLastIndex = 0;
  var lastLength; // Values for `limit`, per the spec:
  // If undefined: pow(2,32) - 1
  // If 0, Infinity, or NaN: 0
  // If positive number: limit = floor(limit); if (limit >= pow(2,32)) limit -= pow(2,32);
  // If negative number: pow(2,32) - floor(abs(limit))
  // If other: Type-convert, then use the above rules
  // This line fails in very strange ways for some values of `limit` in Opera 10.5-10.63, unless
  // Opera Dragonfly is open (go figure). It works in at least Opera 9.5-10.1 and 11+

  limit = (limit === undefined ? -1 : limit) >>> 0;
  XRegExp.forEach(str, separator, function (match) {
    // This condition is not the same as `if (match[0].length)`
    if (match.index + match[0].length > lastLastIndex) {
      output.push(str.slice(lastLastIndex, match.index));

      if (match.length > 1 && match.index < str.length) {
        Array.prototype.push.apply(output, match.slice(1));
      }

      lastLength = match[0].length;
      lastLastIndex = match.index + lastLength;
    }
  });

  if (lastLastIndex === str.length) {
    if (!nativ.test.call(separator, '') || lastLength) {
      output.push('');
    }
  } else {
    output.push(str.slice(lastLastIndex));
  }

  separator.lastIndex = origLastIndex;
  return output.length > limit ? output.slice(0, limit) : output;
}; // ==--------------------------==
// Built-in syntax/flag tokens
// ==--------------------------==

/*
 * Letter escapes that natively match literal characters: `\a`, `\A`, etc. These should be
 * SyntaxErrors but are allowed in web reality. XRegExp makes them errors for cross-browser
 * consistency and to reserve their syntax, but lets them be superseded by addons.
 */


XRegExp.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, function (match, scope) {
  // \B is allowed in default scope only
  if (match[1] === 'B' && scope === defaultScope) {
    return match[0];
  }

  throw new SyntaxError("Invalid escape ".concat(match[0]));
}, {
  scope: 'all',
  leadChar: '\\'
});
/*
 * Unicode code point escape with curly braces: `\u{N..}`. `N..` is any one or more digit
 * hexadecimal number from 0-10FFFF, and can include leading zeros. Requires the native ES6 `u` flag
 * to support code points greater than U+FFFF. Avoids converting code points above U+FFFF to
 * surrogate pairs (which could be done without flag `u`), since that could lead to broken behavior
 * if you follow a `\u{N..}` token that references a code point above U+FFFF with a quantifier, or
 * if you use the same in a character class.
 */

XRegExp.addToken(/\\u{([\dA-Fa-f]+)}/, function (match, scope, flags) {
  var code = dec(match[1]);

  if (code > 0x10FFFF) {
    throw new SyntaxError("Invalid Unicode code point ".concat(match[0]));
  }

  if (code <= 0xFFFF) {
    // Converting to \uNNNN avoids needing to escape the literal character and keep it
    // separate from preceding tokens
    return "\\u".concat(pad4(hex(code)));
  } // If `code` is between 0xFFFF and 0x10FFFF, require and defer to native handling


  if (hasNativeU && flags.indexOf('u') !== -1) {
    return match[0];
  }

  throw new SyntaxError('Cannot use Unicode code point above \\u{FFFF} without flag u');
}, {
  scope: 'all',
  leadChar: '\\'
});
/*
 * Empty character class: `[]` or `[^]`. This fixes a critical cross-browser syntax inconsistency.
 * Unless this is standardized (per the ES spec), regex syntax can't be accurately parsed because
 * character class endings can't be determined.
 */

XRegExp.addToken(/\[(\^?)\]/, // For cross-browser compatibility with ES3, convert [] to \b\B and [^] to [\s\S].
// (?!) should work like \b\B, but is unreliable in some versions of Firefox

/* eslint-disable no-confusing-arrow */
function (match) {
  return match[1] ? '[\\s\\S]' : '\\b\\B';
},
/* eslint-enable no-confusing-arrow */
{
  leadChar: '['
});
/*
 * Comment pattern: `(?# )`. Inline comments are an alternative to the line comments allowed in
 * free-spacing mode (flag x).
 */

XRegExp.addToken(/\(\?#[^)]*\)/, getContextualTokenSeparator, {
  leadChar: '('
});
/*
 * Whitespace and line comments, in free-spacing mode (aka extended mode, flag x) only.
 */

XRegExp.addToken(/\s+|#[^\n]*\n?/, getContextualTokenSeparator, {
  flag: 'x'
});
/*
 * Dot, in dotall mode (aka singleline mode, flag s) only.
 */

XRegExp.addToken(/\./, function () {
  return '[\\s\\S]';
}, {
  flag: 's',
  leadChar: '.'
});
/*
 * Named backreference: `\k<name>`. Backreference names can use the characters A-Z, a-z, 0-9, _,
 * and $ only. Also allows numbered backreferences as `\k<n>`.
 */

XRegExp.addToken(/\\k<([\w$]+)>/, function (match) {
  // Groups with the same name is an error, else would need `lastIndexOf`
  var index = isNaN(match[1]) ? this.captureNames.indexOf(match[1]) + 1 : +match[1];
  var endIndex = match.index + match[0].length;

  if (!index || index > this.captureNames.length) {
    throw new SyntaxError("Backreference to undefined group ".concat(match[0]));
  } // Keep backreferences separate from subsequent literal numbers. This avoids e.g.
  // inadvertedly changing `(?<n>)\k<n>1` to `()\11`.


  return "\\".concat(index).concat(endIndex === match.input.length || isNaN(match.input[endIndex]) ? '' : '(?:)');
}, {
  leadChar: '\\'
});
/*
 * Numbered backreference or octal, plus any following digits: `\0`, `\11`, etc. Octals except `\0`
 * not followed by 0-9 and backreferences to unopened capture groups throw an error. Other matches
 * are returned unaltered. IE < 9 doesn't support backreferences above `\99` in regex syntax.
 */

XRegExp.addToken(/\\(\d+)/, function (match, scope) {
  if (!(scope === defaultScope && /^[1-9]/.test(match[1]) && +match[1] <= this.captureNames.length) && match[1] !== '0') {
    throw new SyntaxError("Cannot use octal escape or backreference to undefined group ".concat(match[0]));
  }

  return match[0];
}, {
  scope: 'all',
  leadChar: '\\'
});
/*
 * Named capturing group; match the opening delimiter only: `(?<name>`. Capture names can use the
 * characters A-Z, a-z, 0-9, _, and $ only. Names can't be integers. Supports Python-style
 * `(?P<name>` as an alternate syntax to avoid issues in some older versions of Opera which natively
 * supported the Python-style syntax. Otherwise, XRegExp might treat numbered backreferences to
 * Python-style named capture as octals.
 */

XRegExp.addToken(/\(\?P?<([\w$]+)>/, function (match) {
  // Disallow bare integers as names because named backreferences are added to match arrays
  // and therefore numeric properties may lead to incorrect lookups
  if (!isNaN(match[1])) {
    throw new SyntaxError("Cannot use integer as capture name ".concat(match[0]));
  }

  if (!XRegExp.isInstalled('namespacing') && (match[1] === 'length' || match[1] === '__proto__')) {
    throw new SyntaxError("Cannot use reserved word as capture name ".concat(match[0]));
  }

  if (this.captureNames.indexOf(match[1]) !== -1) {
    throw new SyntaxError("Cannot use same name for multiple groups ".concat(match[0]));
  }

  this.captureNames.push(match[1]);
  this.hasNamedCapture = true;
  return '(';
}, {
  leadChar: '('
});
/*
 * Capturing group; match the opening parenthesis only. Required for support of named capturing
 * groups. Also adds explicit capture mode (flag n).
 */

XRegExp.addToken(/\((?!\?)/, function (match, scope, flags) {
  if (flags.indexOf('n') !== -1) {
    return '(?:';
  }

  this.captureNames.push(null);
  return '(';
}, {
  optionalFlags: 'n',
  leadChar: '('
});
var _default = XRegExp;
exports.default = _default;
module.exports = exports["default"];
},{}],50:[function(require,module,exports){
module.exports = [
    {
        'name': 'InAdlam',
        'astral': '\uD83A[\uDD00-\uDD5F]'
    },
    {
        'name': 'InAegean_Numbers',
        'astral': '\uD800[\uDD00-\uDD3F]'
    },
    {
        'name': 'InAhom',
        'astral': '\uD805[\uDF00-\uDF3F]'
    },
    {
        'name': 'InAlchemical_Symbols',
        'astral': '\uD83D[\uDF00-\uDF7F]'
    },
    {
        'name': 'InAlphabetic_Presentation_Forms',
        'bmp': '\uFB00-\uFB4F'
    },
    {
        'name': 'InAnatolian_Hieroglyphs',
        'astral': '\uD811[\uDC00-\uDE7F]'
    },
    {
        'name': 'InAncient_Greek_Musical_Notation',
        'astral': '\uD834[\uDE00-\uDE4F]'
    },
    {
        'name': 'InAncient_Greek_Numbers',
        'astral': '\uD800[\uDD40-\uDD8F]'
    },
    {
        'name': 'InAncient_Symbols',
        'astral': '\uD800[\uDD90-\uDDCF]'
    },
    {
        'name': 'InArabic',
        'bmp': '\u0600-\u06FF'
    },
    {
        'name': 'InArabic_Extended_A',
        'bmp': '\u08A0-\u08FF'
    },
    {
        'name': 'InArabic_Mathematical_Alphabetic_Symbols',
        'astral': '\uD83B[\uDE00-\uDEFF]'
    },
    {
        'name': 'InArabic_Presentation_Forms_A',
        'bmp': '\uFB50-\uFDFF'
    },
    {
        'name': 'InArabic_Presentation_Forms_B',
        'bmp': '\uFE70-\uFEFF'
    },
    {
        'name': 'InArabic_Supplement',
        'bmp': '\u0750-\u077F'
    },
    {
        'name': 'InArmenian',
        'bmp': '\u0530-\u058F'
    },
    {
        'name': 'InArrows',
        'bmp': '\u2190-\u21FF'
    },
    {
        'name': 'InAvestan',
        'astral': '\uD802[\uDF00-\uDF3F]'
    },
    {
        'name': 'InBalinese',
        'bmp': '\u1B00-\u1B7F'
    },
    {
        'name': 'InBamum',
        'bmp': '\uA6A0-\uA6FF'
    },
    {
        'name': 'InBamum_Supplement',
        'astral': '\uD81A[\uDC00-\uDE3F]'
    },
    {
        'name': 'InBasic_Latin',
        'bmp': '\0-\x7F'
    },
    {
        'name': 'InBassa_Vah',
        'astral': '\uD81A[\uDED0-\uDEFF]'
    },
    {
        'name': 'InBatak',
        'bmp': '\u1BC0-\u1BFF'
    },
    {
        'name': 'InBengali',
        'bmp': '\u0980-\u09FF'
    },
    {
        'name': 'InBhaiksuki',
        'astral': '\uD807[\uDC00-\uDC6F]'
    },
    {
        'name': 'InBlock_Elements',
        'bmp': '\u2580-\u259F'
    },
    {
        'name': 'InBopomofo',
        'bmp': '\u3100-\u312F'
    },
    {
        'name': 'InBopomofo_Extended',
        'bmp': '\u31A0-\u31BF'
    },
    {
        'name': 'InBox_Drawing',
        'bmp': '\u2500-\u257F'
    },
    {
        'name': 'InBrahmi',
        'astral': '\uD804[\uDC00-\uDC7F]'
    },
    {
        'name': 'InBraille_Patterns',
        'bmp': '\u2800-\u28FF'
    },
    {
        'name': 'InBuginese',
        'bmp': '\u1A00-\u1A1F'
    },
    {
        'name': 'InBuhid',
        'bmp': '\u1740-\u175F'
    },
    {
        'name': 'InByzantine_Musical_Symbols',
        'astral': '\uD834[\uDC00-\uDCFF]'
    },
    {
        'name': 'InCJK_Compatibility',
        'bmp': '\u3300-\u33FF'
    },
    {
        'name': 'InCJK_Compatibility_Forms',
        'bmp': '\uFE30-\uFE4F'
    },
    {
        'name': 'InCJK_Compatibility_Ideographs',
        'bmp': '\uF900-\uFAFF'
    },
    {
        'name': 'InCJK_Compatibility_Ideographs_Supplement',
        'astral': '\uD87E[\uDC00-\uDE1F]'
    },
    {
        'name': 'InCJK_Radicals_Supplement',
        'bmp': '\u2E80-\u2EFF'
    },
    {
        'name': 'InCJK_Strokes',
        'bmp': '\u31C0-\u31EF'
    },
    {
        'name': 'InCJK_Symbols_And_Punctuation',
        'bmp': '\u3000-\u303F'
    },
    {
        'name': 'InCJK_Unified_Ideographs',
        'bmp': '\u4E00-\u9FFF'
    },
    {
        'name': 'InCJK_Unified_Ideographs_Extension_A',
        'bmp': '\u3400-\u4DBF'
    },
    {
        'name': 'InCJK_Unified_Ideographs_Extension_B',
        'astral': '[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF]'
    },
    {
        'name': 'InCJK_Unified_Ideographs_Extension_C',
        'astral': '\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF3F]'
    },
    {
        'name': 'InCJK_Unified_Ideographs_Extension_D',
        'astral': '\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1F]'
    },
    {
        'name': 'InCJK_Unified_Ideographs_Extension_E',
        'astral': '\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEAF]'
    },
    {
        'name': 'InCJK_Unified_Ideographs_Extension_F',
        'astral': '\uD873[\uDEB0-\uDFFF]|[\uD874-\uD879][\uDC00-\uDFFF]|\uD87A[\uDC00-\uDFEF]'
    },
    {
        'name': 'InCarian',
        'astral': '\uD800[\uDEA0-\uDEDF]'
    },
    {
        'name': 'InCaucasian_Albanian',
        'astral': '\uD801[\uDD30-\uDD6F]'
    },
    {
        'name': 'InChakma',
        'astral': '\uD804[\uDD00-\uDD4F]'
    },
    {
        'name': 'InCham',
        'bmp': '\uAA00-\uAA5F'
    },
    {
        'name': 'InCherokee',
        'bmp': '\u13A0-\u13FF'
    },
    {
        'name': 'InCherokee_Supplement',
        'bmp': '\uAB70-\uABBF'
    },
    {
        'name': 'InChess_Symbols',
        'astral': '\uD83E[\uDE00-\uDE6F]'
    },
    {
        'name': 'InCombining_Diacritical_Marks',
        'bmp': '\u0300-\u036F'
    },
    {
        'name': 'InCombining_Diacritical_Marks_Extended',
        'bmp': '\u1AB0-\u1AFF'
    },
    {
        'name': 'InCombining_Diacritical_Marks_For_Symbols',
        'bmp': '\u20D0-\u20FF'
    },
    {
        'name': 'InCombining_Diacritical_Marks_Supplement',
        'bmp': '\u1DC0-\u1DFF'
    },
    {
        'name': 'InCombining_Half_Marks',
        'bmp': '\uFE20-\uFE2F'
    },
    {
        'name': 'InCommon_Indic_Number_Forms',
        'bmp': '\uA830-\uA83F'
    },
    {
        'name': 'InControl_Pictures',
        'bmp': '\u2400-\u243F'
    },
    {
        'name': 'InCoptic',
        'bmp': '\u2C80-\u2CFF'
    },
    {
        'name': 'InCoptic_Epact_Numbers',
        'astral': '\uD800[\uDEE0-\uDEFF]'
    },
    {
        'name': 'InCounting_Rod_Numerals',
        'astral': '\uD834[\uDF60-\uDF7F]'
    },
    {
        'name': 'InCuneiform',
        'astral': '\uD808[\uDC00-\uDFFF]'
    },
    {
        'name': 'InCuneiform_Numbers_And_Punctuation',
        'astral': '\uD809[\uDC00-\uDC7F]'
    },
    {
        'name': 'InCurrency_Symbols',
        'bmp': '\u20A0-\u20CF'
    },
    {
        'name': 'InCypriot_Syllabary',
        'astral': '\uD802[\uDC00-\uDC3F]'
    },
    {
        'name': 'InCyrillic',
        'bmp': '\u0400-\u04FF'
    },
    {
        'name': 'InCyrillic_Extended_A',
        'bmp': '\u2DE0-\u2DFF'
    },
    {
        'name': 'InCyrillic_Extended_B',
        'bmp': '\uA640-\uA69F'
    },
    {
        'name': 'InCyrillic_Extended_C',
        'bmp': '\u1C80-\u1C8F'
    },
    {
        'name': 'InCyrillic_Supplement',
        'bmp': '\u0500-\u052F'
    },
    {
        'name': 'InDeseret',
        'astral': '\uD801[\uDC00-\uDC4F]'
    },
    {
        'name': 'InDevanagari',
        'bmp': '\u0900-\u097F'
    },
    {
        'name': 'InDevanagari_Extended',
        'bmp': '\uA8E0-\uA8FF'
    },
    {
        'name': 'InDingbats',
        'bmp': '\u2700-\u27BF'
    },
    {
        'name': 'InDogra',
        'astral': '\uD806[\uDC00-\uDC4F]'
    },
    {
        'name': 'InDomino_Tiles',
        'astral': '\uD83C[\uDC30-\uDC9F]'
    },
    {
        'name': 'InDuployan',
        'astral': '\uD82F[\uDC00-\uDC9F]'
    },
    {
        'name': 'InEarly_Dynastic_Cuneiform',
        'astral': '\uD809[\uDC80-\uDD4F]'
    },
    {
        'name': 'InEgyptian_Hieroglyphs',
        'astral': '\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F]'
    },
    {
        'name': 'InElbasan',
        'astral': '\uD801[\uDD00-\uDD2F]'
    },
    {
        'name': 'InEmoticons',
        'astral': '\uD83D[\uDE00-\uDE4F]'
    },
    {
        'name': 'InEnclosed_Alphanumeric_Supplement',
        'astral': '\uD83C[\uDD00-\uDDFF]'
    },
    {
        'name': 'InEnclosed_Alphanumerics',
        'bmp': '\u2460-\u24FF'
    },
    {
        'name': 'InEnclosed_CJK_Letters_And_Months',
        'bmp': '\u3200-\u32FF'
    },
    {
        'name': 'InEnclosed_Ideographic_Supplement',
        'astral': '\uD83C[\uDE00-\uDEFF]'
    },
    {
        'name': 'InEthiopic',
        'bmp': '\u1200-\u137F'
    },
    {
        'name': 'InEthiopic_Extended',
        'bmp': '\u2D80-\u2DDF'
    },
    {
        'name': 'InEthiopic_Extended_A',
        'bmp': '\uAB00-\uAB2F'
    },
    {
        'name': 'InEthiopic_Supplement',
        'bmp': '\u1380-\u139F'
    },
    {
        'name': 'InGeneral_Punctuation',
        'bmp': '\u2000-\u206F'
    },
    {
        'name': 'InGeometric_Shapes',
        'bmp': '\u25A0-\u25FF'
    },
    {
        'name': 'InGeometric_Shapes_Extended',
        'astral': '\uD83D[\uDF80-\uDFFF]'
    },
    {
        'name': 'InGeorgian',
        'bmp': '\u10A0-\u10FF'
    },
    {
        'name': 'InGeorgian_Extended',
        'bmp': '\u1C90-\u1CBF'
    },
    {
        'name': 'InGeorgian_Supplement',
        'bmp': '\u2D00-\u2D2F'
    },
    {
        'name': 'InGlagolitic',
        'bmp': '\u2C00-\u2C5F'
    },
    {
        'name': 'InGlagolitic_Supplement',
        'astral': '\uD838[\uDC00-\uDC2F]'
    },
    {
        'name': 'InGothic',
        'astral': '\uD800[\uDF30-\uDF4F]'
    },
    {
        'name': 'InGrantha',
        'astral': '\uD804[\uDF00-\uDF7F]'
    },
    {
        'name': 'InGreek_And_Coptic',
        'bmp': '\u0370-\u03FF'
    },
    {
        'name': 'InGreek_Extended',
        'bmp': '\u1F00-\u1FFF'
    },
    {
        'name': 'InGujarati',
        'bmp': '\u0A80-\u0AFF'
    },
    {
        'name': 'InGunjala_Gondi',
        'astral': '\uD807[\uDD60-\uDDAF]'
    },
    {
        'name': 'InGurmukhi',
        'bmp': '\u0A00-\u0A7F'
    },
    {
        'name': 'InHalfwidth_And_Fullwidth_Forms',
        'bmp': '\uFF00-\uFFEF'
    },
    {
        'name': 'InHangul_Compatibility_Jamo',
        'bmp': '\u3130-\u318F'
    },
    {
        'name': 'InHangul_Jamo',
        'bmp': '\u1100-\u11FF'
    },
    {
        'name': 'InHangul_Jamo_Extended_A',
        'bmp': '\uA960-\uA97F'
    },
    {
        'name': 'InHangul_Jamo_Extended_B',
        'bmp': '\uD7B0-\uD7FF'
    },
    {
        'name': 'InHangul_Syllables',
        'bmp': '\uAC00-\uD7AF'
    },
    {
        'name': 'InHanifi_Rohingya',
        'astral': '\uD803[\uDD00-\uDD3F]'
    },
    {
        'name': 'InHanunoo',
        'bmp': '\u1720-\u173F'
    },
    {
        'name': 'InHatran',
        'astral': '\uD802[\uDCE0-\uDCFF]'
    },
    {
        'name': 'InHebrew',
        'bmp': '\u0590-\u05FF'
    },
    {
        'name': 'InHigh_Private_Use_Surrogates',
        'bmp': '\uDB80-\uDBFF'
    },
    {
        'name': 'InHigh_Surrogates',
        'bmp': '\uD800-\uDB7F'
    },
    {
        'name': 'InHiragana',
        'bmp': '\u3040-\u309F'
    },
    {
        'name': 'InIPA_Extensions',
        'bmp': '\u0250-\u02AF'
    },
    {
        'name': 'InIdeographic_Description_Characters',
        'bmp': '\u2FF0-\u2FFF'
    },
    {
        'name': 'InIdeographic_Symbols_And_Punctuation',
        'astral': '\uD81B[\uDFE0-\uDFFF]'
    },
    {
        'name': 'InImperial_Aramaic',
        'astral': '\uD802[\uDC40-\uDC5F]'
    },
    {
        'name': 'InIndic_Siyaq_Numbers',
        'astral': '\uD83B[\uDC70-\uDCBF]'
    },
    {
        'name': 'InInscriptional_Pahlavi',
        'astral': '\uD802[\uDF60-\uDF7F]'
    },
    {
        'name': 'InInscriptional_Parthian',
        'astral': '\uD802[\uDF40-\uDF5F]'
    },
    {
        'name': 'InJavanese',
        'bmp': '\uA980-\uA9DF'
    },
    {
        'name': 'InKaithi',
        'astral': '\uD804[\uDC80-\uDCCF]'
    },
    {
        'name': 'InKana_Extended_A',
        'astral': '\uD82C[\uDD00-\uDD2F]'
    },
    {
        'name': 'InKana_Supplement',
        'astral': '\uD82C[\uDC00-\uDCFF]'
    },
    {
        'name': 'InKanbun',
        'bmp': '\u3190-\u319F'
    },
    {
        'name': 'InKangxi_Radicals',
        'bmp': '\u2F00-\u2FDF'
    },
    {
        'name': 'InKannada',
        'bmp': '\u0C80-\u0CFF'
    },
    {
        'name': 'InKatakana',
        'bmp': '\u30A0-\u30FF'
    },
    {
        'name': 'InKatakana_Phonetic_Extensions',
        'bmp': '\u31F0-\u31FF'
    },
    {
        'name': 'InKayah_Li',
        'bmp': '\uA900-\uA92F'
    },
    {
        'name': 'InKharoshthi',
        'astral': '\uD802[\uDE00-\uDE5F]'
    },
    {
        'name': 'InKhmer',
        'bmp': '\u1780-\u17FF'
    },
    {
        'name': 'InKhmer_Symbols',
        'bmp': '\u19E0-\u19FF'
    },
    {
        'name': 'InKhojki',
        'astral': '\uD804[\uDE00-\uDE4F]'
    },
    {
        'name': 'InKhudawadi',
        'astral': '\uD804[\uDEB0-\uDEFF]'
    },
    {
        'name': 'InLao',
        'bmp': '\u0E80-\u0EFF'
    },
    {
        'name': 'InLatin_1_Supplement',
        'bmp': '\x80-\xFF'
    },
    {
        'name': 'InLatin_Extended_A',
        'bmp': '\u0100-\u017F'
    },
    {
        'name': 'InLatin_Extended_Additional',
        'bmp': '\u1E00-\u1EFF'
    },
    {
        'name': 'InLatin_Extended_B',
        'bmp': '\u0180-\u024F'
    },
    {
        'name': 'InLatin_Extended_C',
        'bmp': '\u2C60-\u2C7F'
    },
    {
        'name': 'InLatin_Extended_D',
        'bmp': '\uA720-\uA7FF'
    },
    {
        'name': 'InLatin_Extended_E',
        'bmp': '\uAB30-\uAB6F'
    },
    {
        'name': 'InLepcha',
        'bmp': '\u1C00-\u1C4F'
    },
    {
        'name': 'InLetterlike_Symbols',
        'bmp': '\u2100-\u214F'
    },
    {
        'name': 'InLimbu',
        'bmp': '\u1900-\u194F'
    },
    {
        'name': 'InLinear_A',
        'astral': '\uD801[\uDE00-\uDF7F]'
    },
    {
        'name': 'InLinear_B_Ideograms',
        'astral': '\uD800[\uDC80-\uDCFF]'
    },
    {
        'name': 'InLinear_B_Syllabary',
        'astral': '\uD800[\uDC00-\uDC7F]'
    },
    {
        'name': 'InLisu',
        'bmp': '\uA4D0-\uA4FF'
    },
    {
        'name': 'InLow_Surrogates',
        'bmp': '\uDC00-\uDFFF'
    },
    {
        'name': 'InLycian',
        'astral': '\uD800[\uDE80-\uDE9F]'
    },
    {
        'name': 'InLydian',
        'astral': '\uD802[\uDD20-\uDD3F]'
    },
    {
        'name': 'InMahajani',
        'astral': '\uD804[\uDD50-\uDD7F]'
    },
    {
        'name': 'InMahjong_Tiles',
        'astral': '\uD83C[\uDC00-\uDC2F]'
    },
    {
        'name': 'InMakasar',
        'astral': '\uD807[\uDEE0-\uDEFF]'
    },
    {
        'name': 'InMalayalam',
        'bmp': '\u0D00-\u0D7F'
    },
    {
        'name': 'InMandaic',
        'bmp': '\u0840-\u085F'
    },
    {
        'name': 'InManichaean',
        'astral': '\uD802[\uDEC0-\uDEFF]'
    },
    {
        'name': 'InMarchen',
        'astral': '\uD807[\uDC70-\uDCBF]'
    },
    {
        'name': 'InMasaram_Gondi',
        'astral': '\uD807[\uDD00-\uDD5F]'
    },
    {
        'name': 'InMathematical_Alphanumeric_Symbols',
        'astral': '\uD835[\uDC00-\uDFFF]'
    },
    {
        'name': 'InMathematical_Operators',
        'bmp': '\u2200-\u22FF'
    },
    {
        'name': 'InMayan_Numerals',
        'astral': '\uD834[\uDEE0-\uDEFF]'
    },
    {
        'name': 'InMedefaidrin',
        'astral': '\uD81B[\uDE40-\uDE9F]'
    },
    {
        'name': 'InMeetei_Mayek',
        'bmp': '\uABC0-\uABFF'
    },
    {
        'name': 'InMeetei_Mayek_Extensions',
        'bmp': '\uAAE0-\uAAFF'
    },
    {
        'name': 'InMende_Kikakui',
        'astral': '\uD83A[\uDC00-\uDCDF]'
    },
    {
        'name': 'InMeroitic_Cursive',
        'astral': '\uD802[\uDDA0-\uDDFF]'
    },
    {
        'name': 'InMeroitic_Hieroglyphs',
        'astral': '\uD802[\uDD80-\uDD9F]'
    },
    {
        'name': 'InMiao',
        'astral': '\uD81B[\uDF00-\uDF9F]'
    },
    {
        'name': 'InMiscellaneous_Mathematical_Symbols_A',
        'bmp': '\u27C0-\u27EF'
    },
    {
        'name': 'InMiscellaneous_Mathematical_Symbols_B',
        'bmp': '\u2980-\u29FF'
    },
    {
        'name': 'InMiscellaneous_Symbols',
        'bmp': '\u2600-\u26FF'
    },
    {
        'name': 'InMiscellaneous_Symbols_And_Arrows',
        'bmp': '\u2B00-\u2BFF'
    },
    {
        'name': 'InMiscellaneous_Symbols_And_Pictographs',
        'astral': '\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]'
    },
    {
        'name': 'InMiscellaneous_Technical',
        'bmp': '\u2300-\u23FF'
    },
    {
        'name': 'InModi',
        'astral': '\uD805[\uDE00-\uDE5F]'
    },
    {
        'name': 'InModifier_Tone_Letters',
        'bmp': '\uA700-\uA71F'
    },
    {
        'name': 'InMongolian',
        'bmp': '\u1800-\u18AF'
    },
    {
        'name': 'InMongolian_Supplement',
        'astral': '\uD805[\uDE60-\uDE7F]'
    },
    {
        'name': 'InMro',
        'astral': '\uD81A[\uDE40-\uDE6F]'
    },
    {
        'name': 'InMultani',
        'astral': '\uD804[\uDE80-\uDEAF]'
    },
    {
        'name': 'InMusical_Symbols',
        'astral': '\uD834[\uDD00-\uDDFF]'
    },
    {
        'name': 'InMyanmar',
        'bmp': '\u1000-\u109F'
    },
    {
        'name': 'InMyanmar_Extended_A',
        'bmp': '\uAA60-\uAA7F'
    },
    {
        'name': 'InMyanmar_Extended_B',
        'bmp': '\uA9E0-\uA9FF'
    },
    {
        'name': 'InNKo',
        'bmp': '\u07C0-\u07FF'
    },
    {
        'name': 'InNabataean',
        'astral': '\uD802[\uDC80-\uDCAF]'
    },
    {
        'name': 'InNew_Tai_Lue',
        'bmp': '\u1980-\u19DF'
    },
    {
        'name': 'InNewa',
        'astral': '\uD805[\uDC00-\uDC7F]'
    },
    {
        'name': 'InNumber_Forms',
        'bmp': '\u2150-\u218F'
    },
    {
        'name': 'InNushu',
        'astral': '\uD82C[\uDD70-\uDEFF]'
    },
    {
        'name': 'InOgham',
        'bmp': '\u1680-\u169F'
    },
    {
        'name': 'InOl_Chiki',
        'bmp': '\u1C50-\u1C7F'
    },
    {
        'name': 'InOld_Hungarian',
        'astral': '\uD803[\uDC80-\uDCFF]'
    },
    {
        'name': 'InOld_Italic',
        'astral': '\uD800[\uDF00-\uDF2F]'
    },
    {
        'name': 'InOld_North_Arabian',
        'astral': '\uD802[\uDE80-\uDE9F]'
    },
    {
        'name': 'InOld_Permic',
        'astral': '\uD800[\uDF50-\uDF7F]'
    },
    {
        'name': 'InOld_Persian',
        'astral': '\uD800[\uDFA0-\uDFDF]'
    },
    {
        'name': 'InOld_Sogdian',
        'astral': '\uD803[\uDF00-\uDF2F]'
    },
    {
        'name': 'InOld_South_Arabian',
        'astral': '\uD802[\uDE60-\uDE7F]'
    },
    {
        'name': 'InOld_Turkic',
        'astral': '\uD803[\uDC00-\uDC4F]'
    },
    {
        'name': 'InOptical_Character_Recognition',
        'bmp': '\u2440-\u245F'
    },
    {
        'name': 'InOriya',
        'bmp': '\u0B00-\u0B7F'
    },
    {
        'name': 'InOrnamental_Dingbats',
        'astral': '\uD83D[\uDE50-\uDE7F]'
    },
    {
        'name': 'InOsage',
        'astral': '\uD801[\uDCB0-\uDCFF]'
    },
    {
        'name': 'InOsmanya',
        'astral': '\uD801[\uDC80-\uDCAF]'
    },
    {
        'name': 'InPahawh_Hmong',
        'astral': '\uD81A[\uDF00-\uDF8F]'
    },
    {
        'name': 'InPalmyrene',
        'astral': '\uD802[\uDC60-\uDC7F]'
    },
    {
        'name': 'InPau_Cin_Hau',
        'astral': '\uD806[\uDEC0-\uDEFF]'
    },
    {
        'name': 'InPhags_Pa',
        'bmp': '\uA840-\uA87F'
    },
    {
        'name': 'InPhaistos_Disc',
        'astral': '\uD800[\uDDD0-\uDDFF]'
    },
    {
        'name': 'InPhoenician',
        'astral': '\uD802[\uDD00-\uDD1F]'
    },
    {
        'name': 'InPhonetic_Extensions',
        'bmp': '\u1D00-\u1D7F'
    },
    {
        'name': 'InPhonetic_Extensions_Supplement',
        'bmp': '\u1D80-\u1DBF'
    },
    {
        'name': 'InPlaying_Cards',
        'astral': '\uD83C[\uDCA0-\uDCFF]'
    },
    {
        'name': 'InPrivate_Use_Area',
        'bmp': '\uE000-\uF8FF'
    },
    {
        'name': 'InPsalter_Pahlavi',
        'astral': '\uD802[\uDF80-\uDFAF]'
    },
    {
        'name': 'InRejang',
        'bmp': '\uA930-\uA95F'
    },
    {
        'name': 'InRumi_Numeral_Symbols',
        'astral': '\uD803[\uDE60-\uDE7F]'
    },
    {
        'name': 'InRunic',
        'bmp': '\u16A0-\u16FF'
    },
    {
        'name': 'InSamaritan',
        'bmp': '\u0800-\u083F'
    },
    {
        'name': 'InSaurashtra',
        'bmp': '\uA880-\uA8DF'
    },
    {
        'name': 'InSharada',
        'astral': '\uD804[\uDD80-\uDDDF]'
    },
    {
        'name': 'InShavian',
        'astral': '\uD801[\uDC50-\uDC7F]'
    },
    {
        'name': 'InShorthand_Format_Controls',
        'astral': '\uD82F[\uDCA0-\uDCAF]'
    },
    {
        'name': 'InSiddham',
        'astral': '\uD805[\uDD80-\uDDFF]'
    },
    {
        'name': 'InSinhala',
        'bmp': '\u0D80-\u0DFF'
    },
    {
        'name': 'InSinhala_Archaic_Numbers',
        'astral': '\uD804[\uDDE0-\uDDFF]'
    },
    {
        'name': 'InSmall_Form_Variants',
        'bmp': '\uFE50-\uFE6F'
    },
    {
        'name': 'InSogdian',
        'astral': '\uD803[\uDF30-\uDF6F]'
    },
    {
        'name': 'InSora_Sompeng',
        'astral': '\uD804[\uDCD0-\uDCFF]'
    },
    {
        'name': 'InSoyombo',
        'astral': '\uD806[\uDE50-\uDEAF]'
    },
    {
        'name': 'InSpacing_Modifier_Letters',
        'bmp': '\u02B0-\u02FF'
    },
    {
        'name': 'InSpecials',
        'bmp': '\uFFF0-\uFFFF'
    },
    {
        'name': 'InSundanese',
        'bmp': '\u1B80-\u1BBF'
    },
    {
        'name': 'InSundanese_Supplement',
        'bmp': '\u1CC0-\u1CCF'
    },
    {
        'name': 'InSuperscripts_And_Subscripts',
        'bmp': '\u2070-\u209F'
    },
    {
        'name': 'InSupplemental_Arrows_A',
        'bmp': '\u27F0-\u27FF'
    },
    {
        'name': 'InSupplemental_Arrows_B',
        'bmp': '\u2900-\u297F'
    },
    {
        'name': 'InSupplemental_Arrows_C',
        'astral': '\uD83E[\uDC00-\uDCFF]'
    },
    {
        'name': 'InSupplemental_Mathematical_Operators',
        'bmp': '\u2A00-\u2AFF'
    },
    {
        'name': 'InSupplemental_Punctuation',
        'bmp': '\u2E00-\u2E7F'
    },
    {
        'name': 'InSupplemental_Symbols_And_Pictographs',
        'astral': '\uD83E[\uDD00-\uDDFF]'
    },
    {
        'name': 'InSupplementary_Private_Use_Area_A',
        'astral': '[\uDB80-\uDBBF][\uDC00-\uDFFF]'
    },
    {
        'name': 'InSupplementary_Private_Use_Area_B',
        'astral': '[\uDBC0-\uDBFF][\uDC00-\uDFFF]'
    },
    {
        'name': 'InSutton_SignWriting',
        'astral': '\uD836[\uDC00-\uDEAF]'
    },
    {
        'name': 'InSyloti_Nagri',
        'bmp': '\uA800-\uA82F'
    },
    {
        'name': 'InSyriac',
        'bmp': '\u0700-\u074F'
    },
    {
        'name': 'InSyriac_Supplement',
        'bmp': '\u0860-\u086F'
    },
    {
        'name': 'InTagalog',
        'bmp': '\u1700-\u171F'
    },
    {
        'name': 'InTagbanwa',
        'bmp': '\u1760-\u177F'
    },
    {
        'name': 'InTags',
        'astral': '\uDB40[\uDC00-\uDC7F]'
    },
    {
        'name': 'InTai_Le',
        'bmp': '\u1950-\u197F'
    },
    {
        'name': 'InTai_Tham',
        'bmp': '\u1A20-\u1AAF'
    },
    {
        'name': 'InTai_Viet',
        'bmp': '\uAA80-\uAADF'
    },
    {
        'name': 'InTai_Xuan_Jing_Symbols',
        'astral': '\uD834[\uDF00-\uDF5F]'
    },
    {
        'name': 'InTakri',
        'astral': '\uD805[\uDE80-\uDECF]'
    },
    {
        'name': 'InTamil',
        'bmp': '\u0B80-\u0BFF'
    },
    {
        'name': 'InTangut',
        'astral': '[\uD81C-\uD821][\uDC00-\uDFFF]'
    },
    {
        'name': 'InTangut_Components',
        'astral': '\uD822[\uDC00-\uDEFF]'
    },
    {
        'name': 'InTelugu',
        'bmp': '\u0C00-\u0C7F'
    },
    {
        'name': 'InThaana',
        'bmp': '\u0780-\u07BF'
    },
    {
        'name': 'InThai',
        'bmp': '\u0E00-\u0E7F'
    },
    {
        'name': 'InTibetan',
        'bmp': '\u0F00-\u0FFF'
    },
    {
        'name': 'InTifinagh',
        'bmp': '\u2D30-\u2D7F'
    },
    {
        'name': 'InTirhuta',
        'astral': '\uD805[\uDC80-\uDCDF]'
    },
    {
        'name': 'InTransport_And_Map_Symbols',
        'astral': '\uD83D[\uDE80-\uDEFF]'
    },
    {
        'name': 'InUgaritic',
        'astral': '\uD800[\uDF80-\uDF9F]'
    },
    {
        'name': 'InUnified_Canadian_Aboriginal_Syllabics',
        'bmp': '\u1400-\u167F'
    },
    {
        'name': 'InUnified_Canadian_Aboriginal_Syllabics_Extended',
        'bmp': '\u18B0-\u18FF'
    },
    {
        'name': 'InVai',
        'bmp': '\uA500-\uA63F'
    },
    {
        'name': 'InVariation_Selectors',
        'bmp': '\uFE00-\uFE0F'
    },
    {
        'name': 'InVariation_Selectors_Supplement',
        'astral': '\uDB40[\uDD00-\uDDEF]'
    },
    {
        'name': 'InVedic_Extensions',
        'bmp': '\u1CD0-\u1CFF'
    },
    {
        'name': 'InVertical_Forms',
        'bmp': '\uFE10-\uFE1F'
    },
    {
        'name': 'InWarang_Citi',
        'astral': '\uD806[\uDCA0-\uDCFF]'
    },
    {
        'name': 'InYi_Radicals',
        'bmp': '\uA490-\uA4CF'
    },
    {
        'name': 'InYi_Syllables',
        'bmp': '\uA000-\uA48F'
    },
    {
        'name': 'InYijing_Hexagram_Symbols',
        'bmp': '\u4DC0-\u4DFF'
    },
    {
        'name': 'InZanabazar_Square',
        'astral': '\uD806[\uDE00-\uDE4F]'
    }
];

},{}],51:[function(require,module,exports){
module.exports = [
    {
        'name': 'C',
        'alias': 'Other',
        'isBmpLast': true,
        'bmp': '\0-\x1F\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u0605\u061C\u061D\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u089F\u08B5\u08BE-\u08D2\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D04\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFA-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20C0-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2BC9\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E4F-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FF0-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7BA-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB66-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF',
        'astral': '\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F-\uDEFF\uDF28-\uDF2F\uDF5A-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCBD\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD47-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5A\uDC5C\uDC5F-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD00-\uDDFF\uDE48-\uDE4F\uDE84\uDE85\uDEA3-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD87B-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFDF\uDFE2-\uDFFF]|\uD821[\uDFF2-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDD1F-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDE9-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4B-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD6C-\uDD6F\uDDAD-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED5-\uDEDF\uDEED-\uDEEF\uDEFA-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD0F\uDD3F\uDD71\uDD72\uDD77-\uDD79\uDD7B\uDDA3-\uDDAF\uDDBA-\uDDBF\uDDC3-\uDDCF\uDE00-\uDE5F\uDE6E-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]'
    },
    {
        'name': 'Cc',
        'alias': 'Control',
        'bmp': '\0-\x1F\x7F-\x9F'
    },
    {
        'name': 'Cf',
        'alias': 'Format',
        'bmp': '\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB',
        'astral': '\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]'
    },
    {
        'name': 'Cn',
        'alias': 'Unassigned',
        'bmp': '\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u05FF\u061D\u070E\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u089F\u08B5\u08BE-\u08D2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D04\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFA-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u2065\u2072\u2073\u208F\u209D-\u209F\u20C0-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2BC9\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E4F-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FF0-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7BA-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB66-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD\uFEFE\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFF8\uFFFE\uFFFF',
        'astral': '\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F-\uDEFF\uDF28-\uDF2F\uDF5A-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCC2-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD47-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5A\uDC5C\uDC5F-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD00-\uDDFF\uDE48-\uDE4F\uDE84\uDE85\uDEA3-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD87B-\uD87D\uD87F-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFDF\uDFE2-\uDFFF]|\uD821[\uDFF2-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDD1F-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDE9-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4B-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD6C-\uDD6F\uDDAD-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED5-\uDEDF\uDEED-\uDEEF\uDEFA-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD0F\uDD3F\uDD71\uDD72\uDD77-\uDD79\uDD7B\uDDA3-\uDDAF\uDDBA-\uDDBF\uDDC3-\uDDCF\uDE00-\uDE5F\uDE6E-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]'
    },
    {
        'name': 'Co',
        'alias': 'Private_Use',
        'bmp': '\uE000-\uF8FF',
        'astral': '[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]'
    },
    {
        'name': 'Cs',
        'alias': 'Surrogate',
        'bmp': '\uD800-\uDFFF'
    },
    {
        'name': 'L',
        'alias': 'Letter',
        'bmp': 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7B9\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
        'astral': '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFF1]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]'
    },
    {
        'name': 'LC',
        'alias': 'Cased_Letter',
        'bmp': 'A-Za-z\xB5\xC0-\xD6\xD8-\xF6\xF8-\u01BA\u01BC-\u01BF\u01C4-\u0293\u0295-\u02AF\u0370-\u0373\u0376\u0377\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0560-\u0588\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FD-\u10FF\u13A0-\u13F5\u13F8-\u13FD\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2134\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C7B\u2C7E-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA640-\uA66D\uA680-\uA69B\uA722-\uA76F\uA771-\uA787\uA78B-\uA78E\uA790-\uA7B9\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A',
        'astral': '\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDD00-\uDD43]'
    },
    {
        'name': 'Ll',
        'alias': 'Lowercase_Letter',
        'bmp': 'a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A',
        'astral': '\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]'
    },
    {
        'name': 'Lm',
        'alias': 'Modifier_Letter',
        'bmp': '\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E\uFF9F',
        'astral': '\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1]'
    },
    {
        'name': 'Lo',
        'alias': 'Other_Letter',
        'bmp': '\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05EF-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1100-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
        'astral': '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50]|\uD821[\uDC00-\uDFF1]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]'
    },
    {
        'name': 'Lt',
        'alias': 'Titlecase_Letter',
        'bmp': '\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC'
    },
    {
        'name': 'Lu',
        'alias': 'Uppercase_Letter',
        'bmp': 'A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uFF21-\uFF3A',
        'astral': '\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]'
    },
    {
        'name': 'M',
        'alias': 'Mark',
        'bmp': '\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F',
        'astral': '\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDF46-\uDF50]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]'
    },
    {
        'name': 'Mc',
        'alias': 'Spacing_Mark',
        'bmp': '\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF2\u1CF3\u1CF7\u302E\u302F\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BD-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uAA7D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC',
        'astral': '\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF7E]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]'
    },
    {
        'name': 'Me',
        'alias': 'Enclosing_Mark',
        'bmp': '\u0488\u0489\u1ABE\u20DD-\u20E0\u20E2-\u20E4\uA670-\uA672'
    },
    {
        'name': 'Mn',
        'alias': 'Nonspacing_Mark',
        'bmp': '\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F',
        'astral': '\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]'
    },
    {
        'name': 'N',
        'alias': 'Number',
        'bmp': '0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19',
        'astral': '\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4]|\uD83C[\uDD00-\uDD0C]'
    },
    {
        'name': 'Nd',
        'alias': 'Decimal_Number',
        'bmp': '0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19',
        'astral': '\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDD50-\uDD59]'
    },
    {
        'name': 'Nl',
        'alias': 'Letter_Number',
        'bmp': '\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF',
        'astral': '\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]'
    },
    {
        'name': 'No',
        'alias': 'Other_Number',
        'bmp': '\xB2\xB3\xB9\xBC-\xBE\u09F4-\u09F9\u0B72-\u0B77\u0BF0-\u0BF2\u0C78-\u0C7E\u0D58-\u0D5E\u0D70-\u0D78\u0F2A-\u0F33\u1369-\u137C\u17F0-\u17F9\u19DA\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215F\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA830-\uA835',
        'astral': '\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4]|\uD83C[\uDD00-\uDD0C]'
    },
    {
        'name': 'P',
        'alias': 'Punctuation',
        'bmp': '!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65',
        'astral': '\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]'
    },
    {
        'name': 'Pc',
        'alias': 'Connector_Punctuation',
        'bmp': '_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F'
    },
    {
        'name': 'Pd',
        'alias': 'Dash_Punctuation',
        'bmp': '\\-\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D'
    },
    {
        'name': 'Pe',
        'alias': 'Close_Punctuation',
        'bmp': '\\)\\]\\}\u0F3B\u0F3D\u169C\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E23\u2E25\u2E27\u2E29\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63'
    },
    {
        'name': 'Pf',
        'alias': 'Final_Punctuation',
        'bmp': '\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21'
    },
    {
        'name': 'Pi',
        'alias': 'Initial_Punctuation',
        'bmp': '\xAB\u2018\u201B\u201C\u201F\u2039\u2E02\u2E04\u2E09\u2E0C\u2E1C\u2E20'
    },
    {
        'name': 'Po',
        'alias': 'Other_Punctuation',
        'bmp': '!-#%-\'\\*,\\.\\/:;\\?@\\\xA1\xA7\xB6\xB7\xBF\u037E\u0387\u055A-\u055F\u0589\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u166D\u166E\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u1805\u1807-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203B-\u203E\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205E\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00\u2E01\u2E06-\u2E08\u2E0B\u2E0E-\u2E16\u2E18\u2E19\u2E1B\u2E1E\u2E1F\u2E2A-\u2E2E\u2E30-\u2E39\u2E3C-\u2E3F\u2E41\u2E43-\u2E4E\u3001-\u3003\u303D\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFE10-\uFE16\uFE19\uFE30\uFE45\uFE46\uFE49-\uFE4C\uFE50-\uFE52\uFE54-\uFE57\uFE5F-\uFE61\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF07\uFF0A\uFF0C\uFF0E\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3C\uFF61\uFF64\uFF65',
        'astral': '\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]'
    },
    {
        'name': 'Ps',
        'alias': 'Open_Punctuation',
        'bmp': '\\(\\[\\{\u0F3A\u0F3C\u169B\u201A\u201E\u2045\u207D\u208D\u2308\u230A\u2329\u2768\u276A\u276C\u276E\u2770\u2772\u2774\u27C5\u27E6\u27E8\u27EA\u27EC\u27EE\u2983\u2985\u2987\u2989\u298B\u298D\u298F\u2991\u2993\u2995\u2997\u29D8\u29DA\u29FC\u2E22\u2E24\u2E26\u2E28\u2E42\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u3018\u301A\u301D\uFD3F\uFE17\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43\uFE47\uFE59\uFE5B\uFE5D\uFF08\uFF3B\uFF5B\uFF5F\uFF62'
    },
    {
        'name': 'S',
        'alias': 'Symbol',
        'bmp': '\\$\\+<->\\^`\\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B98-\u2BC8\u2BCA-\u2BFE\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD',
        'astral': '\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD83B[\uDCAC\uDCB0\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD6B\uDD70-\uDDAC\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED4\uDEE0-\uDEEC\uDEF0-\uDEF9\uDF00-\uDF73\uDF80-\uDFD8]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD00-\uDD0B\uDD10-\uDD3E\uDD40-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF\uDE60-\uDE6D]'
    },
    {
        'name': 'Sc',
        'alias': 'Currency_Symbol',
        'bmp': '\\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BF\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6',
        'astral': '\uD83B\uDCB0'
    },
    {
        'name': 'Sk',
        'alias': 'Modifier_Symbol',
        'bmp': '\\^`\xA8\xAF\xB4\xB8\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u309B\u309C\uA700-\uA716\uA720\uA721\uA789\uA78A\uAB5B\uFBB2-\uFBC1\uFF3E\uFF40\uFFE3',
        'astral': '\uD83C[\uDFFB-\uDFFF]'
    },
    {
        'name': 'Sm',
        'alias': 'Math_Symbol',
        'bmp': '\\+<->\\|~\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC',
        'astral': '\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]'
    },
    {
        'name': 'So',
        'alias': 'Other_Symbol',
        'bmp': '\xA6\xA9\xAE\xB0\u0482\u058D\u058E\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09FA\u0B70\u0BF3-\u0BF8\u0BFA\u0C7F\u0D4F\u0D79\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u214A\u214C\u214D\u214F\u218A\u218B\u2195-\u2199\u219C-\u219F\u21A1\u21A2\u21A4\u21A5\u21A7-\u21AD\u21AF-\u21CD\u21D0\u21D1\u21D3\u21D5-\u21F3\u2300-\u2307\u230C-\u231F\u2322-\u2328\u232B-\u237B\u237D-\u239A\u23B4-\u23DB\u23E2-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u25B6\u25B8-\u25C0\u25C2-\u25F7\u2600-\u266E\u2670-\u2767\u2794-\u27BF\u2800-\u28FF\u2B00-\u2B2F\u2B45\u2B46\u2B4D-\u2B73\u2B76-\u2B95\u2B98-\u2BC8\u2BCA-\u2BFE\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA828-\uA82B\uA836\uA837\uA839\uAA77-\uAA79\uFDFD\uFFE4\uFFE8\uFFED\uFFEE\uFFFC\uFFFD',
        'astral': '\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD83B\uDCAC|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD6B\uDD70-\uDDAC\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED4\uDEE0-\uDEEC\uDEF0-\uDEF9\uDF00-\uDF73\uDF80-\uDFD8]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD00-\uDD0B\uDD10-\uDD3E\uDD40-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF\uDE60-\uDE6D]'
    },
    {
        'name': 'Z',
        'alias': 'Separator',
        'bmp': ' \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000'
    },
    {
        'name': 'Zl',
        'alias': 'Line_Separator',
        'bmp': '\u2028'
    },
    {
        'name': 'Zp',
        'alias': 'Paragraph_Separator',
        'bmp': '\u2029'
    },
    {
        'name': 'Zs',
        'alias': 'Space_Separator',
        'bmp': ' \xA0\u1680\u2000-\u200A\u202F\u205F\u3000'
    }
];

},{}],52:[function(require,module,exports){
module.exports = [
    {
        'name': 'ASCII',
        'bmp': '\0-\x7F'
    },
    {
        'name': 'Alphabetic',
        'bmp': 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u065F\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06EF\u06FA-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09F0\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A70-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AF9-\u0AFC\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u103F\u1050-\u1062\u1065-\u1068\u106E-\u1086\u108E\u109C\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1AA7\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B80-\u1BA9\u1BAC-\u1BAF\u1BBA-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C35\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7B9\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA827\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA60-\uAA76\uAA7A\uAA7E-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
        'astral': '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDF00-\uDF1C\uDF27\uDF30-\uDF45]|\uD804[\uDC00-\uDC45\uDC82-\uDCB8\uDCD0-\uDCE8\uDD00-\uDD32\uDD44-\uDD46\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDF00-\uDF1A\uDF1D-\uDF2A]|\uD806[\uDC00-\uDC38\uDCA0-\uDCDF\uDCFF\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE83\uDE86-\uDE97\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF36\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF44\uDF50-\uDF7E\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFF1]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]'
    },
    {
        'name': 'Any',
        'isBmpLast': true,
        'bmp': '\0-\uFFFF',
        'astral': '[\uD800-\uDBFF][\uDC00-\uDFFF]'
    },
    {
        'name': 'Default_Ignorable_Code_Point',
        'bmp': '\xAD\u034F\u061C\u115F\u1160\u17B4\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8',
        'astral': '\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]'
    },
    {
        'name': 'Lowercase',
        'bmp': 'a-z\xAA\xB5\xBA\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02B8\u02C0\u02C1\u02E0-\u02E4\u0345\u0371\u0373\u0377\u037A-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1DBF\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u2071\u207F\u2090-\u209C\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2170-\u217F\u2184\u24D0-\u24E9\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7D\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B-\uA69D\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7F8-\uA7FA\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A',
        'astral': '\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]'
    },
    {
        'name': 'Noncharacter_Code_Point',
        'bmp': '\uFDD0-\uFDEF\uFFFE\uFFFF',
        'astral': '[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]'
    },
    {
        'name': 'Uppercase',
        'bmp': 'A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2160-\u216F\u2183\u24B6-\u24CF\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uFF21-\uFF3A',
        'astral': '\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]'
    },
    {
        'name': 'White_Space',
        'bmp': '\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000'
    }
];

},{}],53:[function(require,module,exports){
module.exports = [
    {
        'name': 'Adlam',
        'astral': '\uD83A[\uDD00-\uDD4A\uDD50-\uDD59\uDD5E\uDD5F]'
    },
    {
        'name': 'Ahom',
        'astral': '\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF3F]'
    },
    {
        'name': 'Anatolian_Hieroglyphs',
        'astral': '\uD811[\uDC00-\uDE46]'
    },
    {
        'name': 'Arabic',
        'bmp': '\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u08FF\uFB50-\uFBC1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFD\uFE70-\uFE74\uFE76-\uFEFC',
        'astral': '\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]'
    },
    {
        'name': 'Armenian',
        'bmp': '\u0531-\u0556\u0559-\u0588\u058A\u058D-\u058F\uFB13-\uFB17'
    },
    {
        'name': 'Avestan',
        'astral': '\uD802[\uDF00-\uDF35\uDF39-\uDF3F]'
    },
    {
        'name': 'Balinese',
        'bmp': '\u1B00-\u1B4B\u1B50-\u1B7C'
    },
    {
        'name': 'Bamum',
        'bmp': '\uA6A0-\uA6F7',
        'astral': '\uD81A[\uDC00-\uDE38]'
    },
    {
        'name': 'Bassa_Vah',
        'astral': '\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]'
    },
    {
        'name': 'Batak',
        'bmp': '\u1BC0-\u1BF3\u1BFC-\u1BFF'
    },
    {
        'name': 'Bengali',
        'bmp': '\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE'
    },
    {
        'name': 'Bhaiksuki',
        'astral': '\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]'
    },
    {
        'name': 'Bopomofo',
        'bmp': '\u02EA\u02EB\u3105-\u312F\u31A0-\u31BA'
    },
    {
        'name': 'Brahmi',
        'astral': '\uD804[\uDC00-\uDC4D\uDC52-\uDC6F\uDC7F]'
    },
    {
        'name': 'Braille',
        'bmp': '\u2800-\u28FF'
    },
    {
        'name': 'Buginese',
        'bmp': '\u1A00-\u1A1B\u1A1E\u1A1F'
    },
    {
        'name': 'Buhid',
        'bmp': '\u1740-\u1753'
    },
    {
        'name': 'Canadian_Aboriginal',
        'bmp': '\u1400-\u167F\u18B0-\u18F5'
    },
    {
        'name': 'Carian',
        'astral': '\uD800[\uDEA0-\uDED0]'
    },
    {
        'name': 'Caucasian_Albanian',
        'astral': '\uD801[\uDD30-\uDD63\uDD6F]'
    },
    {
        'name': 'Chakma',
        'astral': '\uD804[\uDD00-\uDD34\uDD36-\uDD46]'
    },
    {
        'name': 'Cham',
        'bmp': '\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F'
    },
    {
        'name': 'Cherokee',
        'bmp': '\u13A0-\u13F5\u13F8-\u13FD\uAB70-\uABBF'
    },
    {
        'name': 'Common',
        'bmp': '\0-@\\[-`\\{-\xA9\xAB-\xB9\xBB-\xBF\xD7\xF7\u02B9-\u02DF\u02E5-\u02E9\u02EC-\u02FF\u0374\u037E\u0385\u0387\u0589\u0605\u060C\u061B\u061F\u0640\u06DD\u08E2\u0964\u0965\u0E3F\u0FD5-\u0FD8\u10FB\u16EB-\u16ED\u1735\u1736\u1802\u1803\u1805\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5-\u1CF7\u2000-\u200B\u200E-\u2064\u2066-\u2070\u2074-\u207E\u2080-\u208E\u20A0-\u20BF\u2100-\u2125\u2127-\u2129\u212C-\u2131\u2133-\u214D\u214F-\u215F\u2189-\u218B\u2190-\u2426\u2440-\u244A\u2460-\u27FF\u2900-\u2B73\u2B76-\u2B95\u2B98-\u2BC8\u2BCA-\u2BFE\u2E00-\u2E4E\u2FF0-\u2FFB\u3000-\u3004\u3006\u3008-\u3020\u3030-\u3037\u303C-\u303F\u309B\u309C\u30A0\u30FB\u30FC\u3190-\u319F\u31C0-\u31E3\u3220-\u325F\u327F-\u32CF\u3358-\u33FF\u4DC0-\u4DFF\uA700-\uA721\uA788-\uA78A\uA830-\uA839\uA92E\uA9CF\uAB5B\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFF70\uFF9E\uFF9F\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFF9-\uFFFD',
        'astral': '\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9B\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDEE0-\uDEF3\uDF00-\uDF56\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83B[\uDC71-\uDCB4]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDD0C\uDD10-\uDD6B\uDD70-\uDDAC\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED4\uDEE0-\uDEEC\uDEF0-\uDEF9\uDF00-\uDF73\uDF80-\uDFD8]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD00-\uDD0B\uDD10-\uDD3E\uDD40-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF\uDE60-\uDE6D]|\uDB40[\uDC01\uDC20-\uDC7F]'
    },
    {
        'name': 'Coptic',
        'bmp': '\u03E2-\u03EF\u2C80-\u2CF3\u2CF9-\u2CFF'
    },
    {
        'name': 'Cuneiform',
        'astral': '\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]'
    },
    {
        'name': 'Cypriot',
        'astral': '\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]'
    },
    {
        'name': 'Cyrillic',
        'bmp': '\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F'
    },
    {
        'name': 'Deseret',
        'astral': '\uD801[\uDC00-\uDC4F]'
    },
    {
        'name': 'Devanagari',
        'bmp': '\u0900-\u0950\u0953-\u0963\u0966-\u097F\uA8E0-\uA8FF'
    },
    {
        'name': 'Dogra',
        'astral': '\uD806[\uDC00-\uDC3B]'
    },
    {
        'name': 'Duployan',
        'astral': '\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]'
    },
    {
        'name': 'Egyptian_Hieroglyphs',
        'astral': '\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]'
    },
    {
        'name': 'Elbasan',
        'astral': '\uD801[\uDD00-\uDD27]'
    },
    {
        'name': 'Ethiopic',
        'bmp': '\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E'
    },
    {
        'name': 'Georgian',
        'bmp': '\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u1C90-\u1CBA\u1CBD-\u1CBF\u2D00-\u2D25\u2D27\u2D2D'
    },
    {
        'name': 'Glagolitic',
        'bmp': '\u2C00-\u2C2E\u2C30-\u2C5E',
        'astral': '\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]'
    },
    {
        'name': 'Gothic',
        'astral': '\uD800[\uDF30-\uDF4A]'
    },
    {
        'name': 'Grantha',
        'astral': '\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]'
    },
    {
        'name': 'Greek',
        'bmp': '\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65',
        'astral': '\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]'
    },
    {
        'name': 'Gujarati',
        'bmp': '\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF'
    },
    {
        'name': 'Gunjala_Gondi',
        'astral': '\uD807[\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9]'
    },
    {
        'name': 'Gurmukhi',
        'bmp': '\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76'
    },
    {
        'name': 'Han',
        'bmp': '\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FEF\uF900-\uFA6D\uFA70-\uFAD9',
        'astral': '[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]'
    },
    {
        'name': 'Hangul',
        'bmp': '\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC'
    },
    {
        'name': 'Hanifi_Rohingya',
        'astral': '\uD803[\uDD00-\uDD27\uDD30-\uDD39]'
    },
    {
        'name': 'Hanunoo',
        'bmp': '\u1720-\u1734'
    },
    {
        'name': 'Hatran',
        'astral': '\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]'
    },
    {
        'name': 'Hebrew',
        'bmp': '\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F'
    },
    {
        'name': 'Hiragana',
        'bmp': '\u3041-\u3096\u309D-\u309F',
        'astral': '\uD82C[\uDC01-\uDD1E]|\uD83C\uDE00'
    },
    {
        'name': 'Imperial_Aramaic',
        'astral': '\uD802[\uDC40-\uDC55\uDC57-\uDC5F]'
    },
    {
        'name': 'Inherited',
        'bmp': '\u0300-\u036F\u0485\u0486\u064B-\u0655\u0670\u0951\u0952\u1AB0-\u1ABE\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u200D\u20D0-\u20F0\u302A-\u302D\u3099\u309A\uFE00-\uFE0F\uFE20-\uFE2D',
        'astral': '\uD800[\uDDFD\uDEE0]|\uD804\uDF3B|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]'
    },
    {
        'name': 'Inscriptional_Pahlavi',
        'astral': '\uD802[\uDF60-\uDF72\uDF78-\uDF7F]'
    },
    {
        'name': 'Inscriptional_Parthian',
        'astral': '\uD802[\uDF40-\uDF55\uDF58-\uDF5F]'
    },
    {
        'name': 'Javanese',
        'bmp': '\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF'
    },
    {
        'name': 'Kaithi',
        'astral': '\uD804[\uDC80-\uDCC1\uDCCD]'
    },
    {
        'name': 'Kannada',
        'bmp': '\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2'
    },
    {
        'name': 'Katakana',
        'bmp': '\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D',
        'astral': '\uD82C\uDC00'
    },
    {
        'name': 'Kayah_Li',
        'bmp': '\uA900-\uA92D\uA92F'
    },
    {
        'name': 'Kharoshthi',
        'astral': '\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58]'
    },
    {
        'name': 'Khmer',
        'bmp': '\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF'
    },
    {
        'name': 'Khojki',
        'astral': '\uD804[\uDE00-\uDE11\uDE13-\uDE3E]'
    },
    {
        'name': 'Khudawadi',
        'astral': '\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]'
    },
    {
        'name': 'Lao',
        'bmp': '\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF'
    },
    {
        'name': 'Latin',
        'bmp': 'A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7B9\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A'
    },
    {
        'name': 'Lepcha',
        'bmp': '\u1C00-\u1C37\u1C3B-\u1C49\u1C4D-\u1C4F'
    },
    {
        'name': 'Limbu',
        'bmp': '\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1940\u1944-\u194F'
    },
    {
        'name': 'Linear_A',
        'astral': '\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]'
    },
    {
        'name': 'Linear_B',
        'astral': '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]'
    },
    {
        'name': 'Lisu',
        'bmp': '\uA4D0-\uA4FF'
    },
    {
        'name': 'Lycian',
        'astral': '\uD800[\uDE80-\uDE9C]'
    },
    {
        'name': 'Lydian',
        'astral': '\uD802[\uDD20-\uDD39\uDD3F]'
    },
    {
        'name': 'Mahajani',
        'astral': '\uD804[\uDD50-\uDD76]'
    },
    {
        'name': 'Makasar',
        'astral': '\uD807[\uDEE0-\uDEF8]'
    },
    {
        'name': 'Malayalam',
        'bmp': '\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F'
    },
    {
        'name': 'Mandaic',
        'bmp': '\u0840-\u085B\u085E'
    },
    {
        'name': 'Manichaean',
        'astral': '\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]'
    },
    {
        'name': 'Marchen',
        'astral': '\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]'
    },
    {
        'name': 'Masaram_Gondi',
        'astral': '\uD807[\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]'
    },
    {
        'name': 'Medefaidrin',
        'astral': '\uD81B[\uDE40-\uDE9A]'
    },
    {
        'name': 'Meetei_Mayek',
        'bmp': '\uAAE0-\uAAF6\uABC0-\uABED\uABF0-\uABF9'
    },
    {
        'name': 'Mende_Kikakui',
        'astral': '\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]'
    },
    {
        'name': 'Meroitic_Cursive',
        'astral': '\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]'
    },
    {
        'name': 'Meroitic_Hieroglyphs',
        'astral': '\uD802[\uDD80-\uDD9F]'
    },
    {
        'name': 'Miao',
        'astral': '\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]'
    },
    {
        'name': 'Modi',
        'astral': '\uD805[\uDE00-\uDE44\uDE50-\uDE59]'
    },
    {
        'name': 'Mongolian',
        'bmp': '\u1800\u1801\u1804\u1806-\u180E\u1810-\u1819\u1820-\u1878\u1880-\u18AA',
        'astral': '\uD805[\uDE60-\uDE6C]'
    },
    {
        'name': 'Mro',
        'astral': '\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]'
    },
    {
        'name': 'Multani',
        'astral': '\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]'
    },
    {
        'name': 'Myanmar',
        'bmp': '\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F'
    },
    {
        'name': 'Nabataean',
        'astral': '\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]'
    },
    {
        'name': 'New_Tai_Lue',
        'bmp': '\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u19DE\u19DF'
    },
    {
        'name': 'Newa',
        'astral': '\uD805[\uDC00-\uDC59\uDC5B\uDC5D\uDC5E]'
    },
    {
        'name': 'Nko',
        'bmp': '\u07C0-\u07FA\u07FD-\u07FF'
    },
    {
        'name': 'Nushu',
        'astral': '\uD81B\uDFE1|\uD82C[\uDD70-\uDEFB]'
    },
    {
        'name': 'Ogham',
        'bmp': '\u1680-\u169C'
    },
    {
        'name': 'Ol_Chiki',
        'bmp': '\u1C50-\u1C7F'
    },
    {
        'name': 'Old_Hungarian',
        'astral': '\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]'
    },
    {
        'name': 'Old_Italic',
        'astral': '\uD800[\uDF00-\uDF23\uDF2D-\uDF2F]'
    },
    {
        'name': 'Old_North_Arabian',
        'astral': '\uD802[\uDE80-\uDE9F]'
    },
    {
        'name': 'Old_Permic',
        'astral': '\uD800[\uDF50-\uDF7A]'
    },
    {
        'name': 'Old_Persian',
        'astral': '\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]'
    },
    {
        'name': 'Old_Sogdian',
        'astral': '\uD803[\uDF00-\uDF27]'
    },
    {
        'name': 'Old_South_Arabian',
        'astral': '\uD802[\uDE60-\uDE7F]'
    },
    {
        'name': 'Old_Turkic',
        'astral': '\uD803[\uDC00-\uDC48]'
    },
    {
        'name': 'Oriya',
        'bmp': '\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77'
    },
    {
        'name': 'Osage',
        'astral': '\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]'
    },
    {
        'name': 'Osmanya',
        'astral': '\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]'
    },
    {
        'name': 'Pahawh_Hmong',
        'astral': '\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]'
    },
    {
        'name': 'Palmyrene',
        'astral': '\uD802[\uDC60-\uDC7F]'
    },
    {
        'name': 'Pau_Cin_Hau',
        'astral': '\uD806[\uDEC0-\uDEF8]'
    },
    {
        'name': 'Phags_Pa',
        'bmp': '\uA840-\uA877'
    },
    {
        'name': 'Phoenician',
        'astral': '\uD802[\uDD00-\uDD1B\uDD1F]'
    },
    {
        'name': 'Psalter_Pahlavi',
        'astral': '\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]'
    },
    {
        'name': 'Rejang',
        'bmp': '\uA930-\uA953\uA95F'
    },
    {
        'name': 'Runic',
        'bmp': '\u16A0-\u16EA\u16EE-\u16F8'
    },
    {
        'name': 'Samaritan',
        'bmp': '\u0800-\u082D\u0830-\u083E'
    },
    {
        'name': 'Saurashtra',
        'bmp': '\uA880-\uA8C5\uA8CE-\uA8D9'
    },
    {
        'name': 'Sharada',
        'astral': '\uD804[\uDD80-\uDDCD\uDDD0-\uDDDF]'
    },
    {
        'name': 'Shavian',
        'astral': '\uD801[\uDC50-\uDC7F]'
    },
    {
        'name': 'Siddham',
        'astral': '\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]'
    },
    {
        'name': 'SignWriting',
        'astral': '\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]'
    },
    {
        'name': 'Sinhala',
        'bmp': '\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4',
        'astral': '\uD804[\uDDE1-\uDDF4]'
    },
    {
        'name': 'Sogdian',
        'astral': '\uD803[\uDF30-\uDF59]'
    },
    {
        'name': 'Sora_Sompeng',
        'astral': '\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]'
    },
    {
        'name': 'Soyombo',
        'astral': '\uD806[\uDE50-\uDE83\uDE86-\uDEA2]'
    },
    {
        'name': 'Sundanese',
        'bmp': '\u1B80-\u1BBF\u1CC0-\u1CC7'
    },
    {
        'name': 'Syloti_Nagri',
        'bmp': '\uA800-\uA82B'
    },
    {
        'name': 'Syriac',
        'bmp': '\u0700-\u070D\u070F-\u074A\u074D-\u074F\u0860-\u086A'
    },
    {
        'name': 'Tagalog',
        'bmp': '\u1700-\u170C\u170E-\u1714'
    },
    {
        'name': 'Tagbanwa',
        'bmp': '\u1760-\u176C\u176E-\u1770\u1772\u1773'
    },
    {
        'name': 'Tai_Le',
        'bmp': '\u1950-\u196D\u1970-\u1974'
    },
    {
        'name': 'Tai_Tham',
        'bmp': '\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD'
    },
    {
        'name': 'Tai_Viet',
        'bmp': '\uAA80-\uAAC2\uAADB-\uAADF'
    },
    {
        'name': 'Takri',
        'astral': '\uD805[\uDE80-\uDEB7\uDEC0-\uDEC9]'
    },
    {
        'name': 'Tamil',
        'bmp': '\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA'
    },
    {
        'name': 'Tangut',
        'astral': '\uD81B\uDFE0|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFF1]|\uD822[\uDC00-\uDEF2]'
    },
    {
        'name': 'Telugu',
        'bmp': '\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7F'
    },
    {
        'name': 'Thaana',
        'bmp': '\u0780-\u07B1'
    },
    {
        'name': 'Thai',
        'bmp': '\u0E01-\u0E3A\u0E40-\u0E5B'
    },
    {
        'name': 'Tibetan',
        'bmp': '\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA'
    },
    {
        'name': 'Tifinagh',
        'bmp': '\u2D30-\u2D67\u2D6F\u2D70\u2D7F'
    },
    {
        'name': 'Tirhuta',
        'astral': '\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]'
    },
    {
        'name': 'Ugaritic',
        'astral': '\uD800[\uDF80-\uDF9D\uDF9F]'
    },
    {
        'name': 'Vai',
        'bmp': '\uA500-\uA62B'
    },
    {
        'name': 'Warang_Citi',
        'astral': '\uD806[\uDCA0-\uDCF2\uDCFF]'
    },
    {
        'name': 'Yi',
        'bmp': '\uA000-\uA48C\uA490-\uA4C6'
    },
    {
        'name': 'Zanabazar_Square',
        'astral': '\uD806[\uDE00-\uDE47]'
    }
];

},{}],54:[function(require,module,exports){
(function (global,Buffer){
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
})(this, function() {
  var shadow$umd$export = null;

  var g,aa=aa||{},ba=global;function ca(a){return"string"==typeof a}function ea(){}
function ha(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ia(a){var b=ha(a);return"array"==b||"object"==b&&"number"==typeof a.length}function ja(a){return"function"==ha(a)}function ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function la(a){return a[ma]||(a[ma]=++na)}var ma="closure_uid_"+(1E9*Math.random()>>>0),na=0;function pa(a,b,c){return a.call.apply(a.bind,arguments)}
function qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function ra(a,b,c){ra=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?pa:qa;return ra.apply(null,arguments)}
function ta(a,b){function c(){}c.prototype=b.prototype;a.Ug=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ae=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function za(a){za[" "](a);return a}za[" "]=ea;function Aa(a,b,c){return Object.prototype.hasOwnProperty.call(a,b)?a[b]:a[b]=c(b)};function Ba(a,b){this.zb=a|0;this.Eb=b|0}function Ia(a){return 0<a?0x7fffffffffffffff<=a?da:new Ba(a,a/4294967296):0>a?-9223372036854775808>=a?ua:(new Ba(-a,-a/4294967296)).Ua():va}function Qa(a,b){return new Ba(a,b)}
function Ta(a,b){if("-"==a.charAt(0))return Ta(a.substring(1),b).Ua();var c=parseInt(a,b||10);if(9007199254740991>=c)return new Ba(c%4294967296|0,c/4294967296|0);if(0==a.length)throw Error("number format error: empty string");if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);b=b||10;if(2>b||36<b)throw Error("radix out of range: "+b);c=Ia(Math.pow(b,8));for(var d=va,e=0;e<a.length;e+=8){var f=Math.min(8,a.length-e),h=parseInt(a.substring(e,e+f),b);8>f?(f=Ia(Math.pow(b,
f)),d=d.multiply(f).add(Ia(h))):(d=d.multiply(c),d=d.add(Ia(h)))}return d}var va=Qa(0,0),wa=Qa(1,0),Da=Qa(-1,-1),da=Qa(4294967295,2147483647),ua=Qa(0,2147483648);g=Ba.prototype;g.xe=function(){return this.zb};g.yc=function(){return 4294967296*this.Eb+(this.zb>>>0)};g.isSafeInteger=function(){var a=this.Eb>>21;return 0==a||-1==a&&!(0==this.zb&&-2097152==this.Eb)};
g.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(this.isSafeInteger()){var b=this.yc();return 10==a?""+b:b.toString(a)}b=14-(a>>2);var c=Math.pow(a,b),d=Qa(c,c/4294967296);c=ab(this,d);d=Math.abs(this.Yc(c.multiply(d)).yc());var e=10==a?""+d:d.toString(a);e.length<b&&(e="0000000000000".substr(e.length-b)+e);d=c.yc();return(10==a?d:d.toString(a))+e};g.Rb=function(){return 0==this.zb&&0==this.Eb};g.Bb=function(){return 0>this.Eb};
g.Wb=function(a){return this.zb==a.zb&&this.Eb==a.Eb};g.Rd=function(a){return 0>this.compare(a)};g.Xf=function(a){return 0>=this.compare(a)};g.Oe=function(a){return 0<this.compare(a)};g.Pf=function(a){return 0<=this.compare(a)};g.compare=function(a){return this.Eb==a.Eb?this.zb==a.zb?0:this.zb>>>0>a.zb>>>0?1:-1:this.Eb>a.Eb?1:-1};g.Ua=function(){var a=~this.zb+1|0;return Qa(a,~this.Eb+!a|0)};
g.add=function(a){var b=this.Eb>>>16,c=this.Eb&65535,d=this.zb>>>16,e=a.Eb>>>16,f=a.Eb&65535,h=a.zb>>>16;a=(this.zb&65535)+(a.zb&65535);h=(a>>>16)+(d+h);d=h>>>16;d+=c+f;b=(d>>>16)+(b+e)&65535;return Qa((h&65535)<<16|a&65535,b<<16|d&65535)};g.Yc=function(a){return this.add(a.Ua())};
g.multiply=function(a){if(this.Rb())return this;if(a.Rb())return a;var b=this.Eb>>>16,c=this.Eb&65535,d=this.zb>>>16,e=this.zb&65535,f=a.Eb>>>16,h=a.Eb&65535,k=a.zb>>>16;a=a.zb&65535;var l=e*a;var m=(l>>>16)+d*a;var t=m>>>16;m=(m&65535)+e*k;t+=m>>>16;t+=c*a;var u=t>>>16;t=(t&65535)+d*k;u+=t>>>16;t=(t&65535)+e*h;u=u+(t>>>16)+(b*a+c*k+d*h+e*f)&65535;return Qa((m&65535)<<16|l&65535,u<<16|t&65535)};
function ab(a,b){if(b.Rb())throw Error("division by zero");if(a.Bb()){if(a.Wb(ua)){if(b.Wb(wa)||b.Wb(Da))return ua;if(b.Wb(ua))return wa;var c=ab(a.ld(1),b).shiftLeft(1);if(c.Wb(va))return b.Bb()?wa:Da;a=a.Yc(b.multiply(c));return c.add(ab(a,b))}return b.Bb()?ab(a.Ua(),b.Ua()):ab(a.Ua(),b).Ua()}if(a.Rb())return va;if(b.Bb())return b.Wb(ua)?va:ab(a,b.Ua()).Ua();for(var d=va;a.Pf(b);){c=Math.max(1,Math.floor(a.yc()/b.yc()));var e=Math.ceil(Math.log(c)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);for(var f=
Ia(c),h=f.multiply(b);h.Bb()||h.Oe(a);)c-=e,f=Ia(c),h=f.multiply(b);f.Rb()&&(f=wa);d=d.add(f);a=a.Yc(h)}return d}g.ag=function(){return Qa(~this.zb,~this.Eb)};g.and=function(a){return Qa(this.zb&a.zb,this.Eb&a.Eb)};g.or=function(a){return Qa(this.zb|a.zb,this.Eb|a.Eb)};g.xor=function(a){return Qa(this.zb^a.zb,this.Eb^a.Eb)};g.shiftLeft=function(a){a&=63;if(0==a)return this;var b=this.zb;return 32>a?Qa(b<<a,this.Eb<<a|b>>>32-a):Qa(0,b<<a-32)};
g.ld=function(a){a&=63;if(0==a)return this;var b=this.Eb;return 32>a?Qa(this.zb>>>a|b<<32-a,b>>a):Qa(b>>a-32,0<=b?0:-1)};function bb(a,b){b&=63;if(0==b)return a;var c=a.Eb;return 32>b?Qa(a.zb>>>b|c<<32-b,c>>>b):32==b?Qa(c,0):Qa(c>>>b-32,0)};function cb(a,b){this.cb=[];this.Xb=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.cb[d]=e,c=!1)}}var db={};function eb(a){if(-128<=a&&128>a){var b=db[a];if(b)return b}b=new cb([a|0],0>a?-1:0);-128<=a&&128>a&&(db[a]=b);return b}function gb(a){if(isNaN(a)||!isFinite(a))return ib;if(0>a)return gb(-a).Ua();for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=jb;return new cb(b,0)}var jb=4294967296,ib=eb(0),kb=eb(1),mb=eb(16777216);g=cb.prototype;
g.xe=function(){return 0<this.cb.length?this.cb[0]:this.Xb};g.yc=function(){if(this.Bb())return-this.Ua().yc();for(var a=0,b=1,c=0;c<this.cb.length;c++){var d=nb(this,c);a+=(0<=d?d:jb+d)*b;b*=jb}return a};
g.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(this.Rb())return"0";if(this.Bb())return"-"+this.Ua().toString(a);for(var b=gb(Math.pow(a,6)),c=this,d="";;){var e=ob(c,b),f=(c.Yc(e.multiply(b)).xe()>>>0).toString(a);c=e;if(c.Rb())return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};function nb(a,b){return 0>b?0:b<a.cb.length?a.cb[b]:a.Xb}g.Rb=function(){if(0!=this.Xb)return!1;for(var a=0;a<this.cb.length;a++)if(0!=this.cb[a])return!1;return!0};
g.Bb=function(){return-1==this.Xb};g.Wb=function(a){if(this.Xb!=a.Xb)return!1;for(var b=Math.max(this.cb.length,a.cb.length),c=0;c<b;c++)if(nb(this,c)!=nb(a,c))return!1;return!0};g.Oe=function(a){return 0<this.compare(a)};g.Pf=function(a){return 0<=this.compare(a)};g.Rd=function(a){return 0>this.compare(a)};g.Xf=function(a){return 0>=this.compare(a)};g.compare=function(a){a=this.Yc(a);return a.Bb()?-1:a.Rb()?0:1};g.Ua=function(){return this.ag().add(kb)};
g.add=function(a){for(var b=Math.max(this.cb.length,a.cb.length),c=[],d=0,e=0;e<=b;e++){var f=d+(nb(this,e)&65535)+(nb(a,e)&65535),h=(f>>>16)+(nb(this,e)>>>16)+(nb(a,e)>>>16);d=h>>>16;f&=65535;h&=65535;c[e]=h<<16|f}return new cb(c,c[c.length-1]&-2147483648?-1:0)};g.Yc=function(a){return this.add(a.Ua())};
g.multiply=function(a){if(this.Rb()||a.Rb())return ib;if(this.Bb())return a.Bb()?this.Ua().multiply(a.Ua()):this.Ua().multiply(a).Ua();if(a.Bb())return this.multiply(a.Ua()).Ua();if(this.Rd(mb)&&a.Rd(mb))return gb(this.yc()*a.yc());for(var b=this.cb.length+a.cb.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.cb.length;d++)for(var e=0;e<a.cb.length;e++){var f=nb(this,d)>>>16,h=nb(this,d)&65535,k=nb(a,e)>>>16,l=nb(a,e)&65535;c[2*d+2*e]+=h*l;pb(c,2*d+2*e);c[2*d+2*e+1]+=f*l;pb(c,2*d+2*e+1);c[2*d+2*e+
1]+=h*k;pb(c,2*d+2*e+1);c[2*d+2*e+2]+=f*k;pb(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new cb(c,0)};function pb(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535,b++}
function ob(a,b){if(b.Rb())throw Error("division by zero");if(a.Rb())return ib;if(a.Bb())return b.Bb()?ob(a.Ua(),b.Ua()):ob(a.Ua(),b).Ua();if(b.Bb())return ob(a,b.Ua()).Ua();if(30<a.cb.length){if(a.Bb()||b.Bb())throw Error("slowDivide_ only works with positive integers.");for(var c=kb;b.Xf(a);)c=c.shiftLeft(1),b=b.shiftLeft(1);var d=c.ld(1),e=b.ld(1);b=b.ld(2);for(c=c.ld(2);!b.Rb();){var f=e.add(b);f.Xf(a)&&(d=d.add(c),e=f);b=b.ld(1);c=c.ld(1)}return d}for(c=ib;a.Pf(b);){d=Math.max(1,Math.floor(a.yc()/
b.yc()));e=Math.ceil(Math.log(d)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);f=gb(d);for(var h=f.multiply(b);h.Bb()||h.Oe(a);)d-=e,f=gb(d),h=f.multiply(b);f.Rb()&&(f=kb);c=c.add(f);a=a.Yc(h)}return c}g.ag=function(){for(var a=this.cb.length,b=[],c=0;c<a;c++)b[c]=~this.cb[c];return new cb(b,~this.Xb)};g.and=function(a){for(var b=Math.max(this.cb.length,a.cb.length),c=[],d=0;d<b;d++)c[d]=nb(this,d)&nb(a,d);return new cb(c,this.Xb&a.Xb)};
g.or=function(a){for(var b=Math.max(this.cb.length,a.cb.length),c=[],d=0;d<b;d++)c[d]=nb(this,d)|nb(a,d);return new cb(c,this.Xb|a.Xb)};g.xor=function(a){for(var b=Math.max(this.cb.length,a.cb.length),c=[],d=0;d<b;d++)c[d]=nb(this,d)^nb(a,d);return new cb(c,this.Xb^a.Xb)};g.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.cb.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?nb(this,e-b)<<a|nb(this,e-b-1)>>>32-a:nb(this,e-b);return new cb(d,this.Xb)};
g.ld=function(a){var b=a>>5;a%=32;for(var c=this.cb.length-b,d=[],e=0;e<c;e++)d[e]=0<a?nb(this,e+b)>>>a|nb(this,e+b+1)<<32-a:nb(this,e+b);return new cb(d,this.Xb)};function Ea(a){return/^[\s\xa0]*$/.test(a)}var Fa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Ha(a){return-1!=$u.toLowerCase().indexOf(a.toLowerCase())}function Ja(a,b){return a<b?-1:a>b?1:0};function xa(a){return String(a.charAt(0)).toUpperCase()+String(a.substr(1)).toLowerCase()}function ya(a,b,c){a=a.split(b);for(var d=[];0<c&&a.length;)d.push(a.shift()),c--;a.length&&d.push(a.join(b));return d};function Ka(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function rb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var vb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(ca(a))return ca(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},xb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=ca(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function yb(a){a:{var b=zb;for(var c=a.length,d=ca(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:ca(a)?a.charAt(b):a[b]}function Ab(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Eb(a){if(a.getValues&&"function"==typeof a.getValues)return a.getValues();if(ca(a))return a.split("");if(ia(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}
function Fb(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ia(a)||ca(a))xb(a,b,void 0);else{if(a.Gc&&"function"==typeof a.Gc)var c=a.Gc();else if(a.getValues&&"function"==typeof a.getValues)c=void 0;else if(ia(a)||ca(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=rb(a);d=Eb(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function Gb(a,b){this.Vc={};this.Sb=[];this.Rc=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)}g=Gb.prototype;g.getCount=function(){return this.Rc};g.getValues=function(){Hb(this);for(var a=[],b=0;b<this.Sb.length;b++)a.push(this.Vc[this.Sb[b]]);return a};g.Gc=function(){Hb(this);return this.Sb.concat()};
g.Wb=function(a){if(this===a)return!0;if(this.Rc!=a.getCount())return!1;var b=Ib;Hb(this);for(var c,d=0;c=this.Sb[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};function Ib(a,b){return a===b}g.Re=function(){return 0==this.Rc};g.clear=function(){this.Vc={};this.Rc=this.Sb.length=0};g.remove=function(a){return Object.prototype.hasOwnProperty.call(this.Vc,a)?(delete this.Vc[a],this.Rc--,this.Sb.length>2*this.Rc&&Hb(this),!0):!1};
function Hb(a){if(a.Rc!=a.Sb.length){for(var b=0,c=0;b<a.Sb.length;){var d=a.Sb[b];Object.prototype.hasOwnProperty.call(a.Vc,d)&&(a.Sb[c++]=d);b++}a.Sb.length=c}if(a.Rc!=a.Sb.length){var e={};for(c=b=0;b<a.Sb.length;)d=a.Sb[b],Object.prototype.hasOwnProperty.call(e,d)||(a.Sb[c++]=d,e[d]=1),b++;a.Sb.length=c}}g.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.Vc,a)?this.Vc[a]:b};
g.set=function(a,b){Object.prototype.hasOwnProperty.call(this.Vc,a)||(this.Rc++,this.Sb.push(a));this.Vc[a]=b};g.addAll=function(a){if(a instanceof Gb)for(var b=a.Gc(),c=0;c<b.length;c++)this.set(b[c],a.get(b[c]));else for(b in a)this.set(b,a[b])};g.forEach=function(a,b){for(var c=this.Gc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};g.clone=function(){return new Gb(this)};var Jb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Kb(a,b){null!=a&&this.append.apply(this,arguments)}g=Kb.prototype;g.bd="";g.set=function(a){this.bd=""+a};g.append=function(a,b,c){this.bd+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.bd+=arguments[d];return this};g.clear=function(){this.bd=""};g.getLength=function(){return this.bd.length};g.toString=function(){return this.bd};var Lb={},Mb={},Na;if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof n)var n={};if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof Ob)var Ob=null;if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof Pb)var Pb=null;var Qb=!0,Rb=null;if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof Sb)var Sb=null;function Tb(){return new p(null,5,[Ub,!0,Wb,!0,Xb,!1,Yb,!1,Zb,null],null)}
function $b(){Qb=!1;Ob=function(){return console.log.apply(console,Ab(arguments))};Pb=function(){return console.error.apply(console,Ab(arguments))}}function q(a){return null!=a&&!1!==a}function ac(a){return null==a}function bc(a){return Array.isArray(a)}function cc(a){return null==a?!0:!1===a?!0:!1}function ec(a,b){return a[ha(null==b?null:b)]?!0:a._?!0:!1}function fc(a){return null==a?null:a.constructor}
function gc(a,b){var c=fc(b);c=q(q(c)?c.qa:c)?c.oa:ha(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function hc(a){var b=a.oa;return q(b)?b:r.g(a)}var ic="undefined"!==typeof Symbol&&"function"===ha(Symbol)?Symbol.iterator:"@@iterator";function lc(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}function mc(a){function b(a,b){a.push(b);return a}var c=[];return x?x(b,c,a):nc.call(null,b,c,a)}function oc(){}function pc(){}
var qc=function qc(a){if(null!=a&&null!=a.Da)return a.Da(a);var c=qc[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=qc._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("ICloneable.-clone",a);};function rc(){}var tc=function tc(a){if(null!=a&&null!=a.ta)return a.ta(a);var c=tc[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=tc._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("ICounted.-count",a);};function Pa(){}
var uc=function uc(a){if(null!=a&&null!=a.Ra)return a.Ra(a);var c=uc[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=uc._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IEmptyableCollection.-empty",a);};function vc(){}var wc=function wc(a,b){if(null!=a&&null!=a.ua)return a.ua(a,b);var d=wc[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=wc._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("ICollection.-conj",a);};function xc(){}
var y=function y(a){switch(arguments.length){case 2:return y.a(arguments[0],arguments[1]);case 3:return y.j(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}};y.a=function(a,b){if(null!=a&&null!=a.za)return a.za(a,b);var c=y[ha(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=y._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw gc("IIndexed.-nth",a);};
y.j=function(a,b,c){if(null!=a&&null!=a.Oa)return a.Oa(a,b,c);var d=y[ha(null==a?null:a)];if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);d=y._;if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);throw gc("IIndexed.-nth",a);};y.ga=3;function yc(){}
var zc=function zc(a){if(null!=a&&null!=a.Cb)return a.Cb(a);var c=zc[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=zc._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("ISeq.-first",a);},Ac=function Ac(a){if(null!=a&&null!=a.Ib)return a.Ib(a);var c=Ac[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=Ac._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("ISeq.-rest",a);};function Bc(){}
var Ua=function Ua(a){if(null!=a&&null!=a.Hb)return a.Hb(a);var c=Ua[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=Ua._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("INext.-next",a);};function Cc(){}var Dc=function Dc(a){switch(arguments.length){case 2:return Dc.a(arguments[0],arguments[1]);case 3:return Dc.j(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}};
Dc.a=function(a,b){if(null!=a&&null!=a.la)return a.la(a,b);var c=Dc[ha(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=Dc._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw gc("ILookup.-lookup",a);};Dc.j=function(a,b,c){if(null!=a&&null!=a.X)return a.X(a,b,c);var d=Dc[ha(null==a?null:a)];if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);d=Dc._;if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);throw gc("ILookup.-lookup",a);};Dc.ga=3;function Ec(){}
var Fc=function Fc(a,b){if(null!=a&&null!=a.Mc)return a.Mc(a,b);var d=Fc[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=Fc._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("IAssociative.-contains-key?",a);},Hc=function Hc(a,b,c){if(null!=a&&null!=a.ia)return a.ia(a,b,c);var e=Hc[ha(null==a?null:a)];if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);e=Hc._;if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);throw gc("IAssociative.-assoc",a);};function Ic(){}
var Jc=function Jc(a,b){if(null!=a&&null!=a.Nc)return a.Nc(a,b);var d=Jc[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=Jc._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("IFind.-find",a);};function Kc(){}
var Mc=function Mc(a,b){if(null!=a&&null!=a.La)return a.La(a,b);var d=Mc[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=Mc._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("IMap.-dissoc",a);},Nc=function Nc(a){if(null!=a&&null!=a.vf)return a.key;var c=Nc[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=Nc._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IMapEntry.-key",a);},Oc=function Oc(a){if(null!=a&&null!=a.wf)return a.B;var c=Oc[ha(null==
a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=Oc._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IMapEntry.-val",a);};function Pc(){}var Rc=function Rc(a){if(null!=a&&null!=a.Oc)return a.Oc(a);var c=Rc[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=Rc._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IStack.-peek",a);};function Tc(){}
var Uc=function Uc(a,b,c){if(null!=a&&null!=a.oc)return a.oc(a,b,c);var e=Uc[ha(null==a?null:a)];if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);e=Uc._;if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);throw gc("IVector.-assoc-n",a);},A=function A(a){if(null!=a&&null!=a.cd)return a.cd(a);var c=A[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=A._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IDeref.-deref",a);};function Vc(){}
var Wc=function Wc(a){if(null!=a&&null!=a.V)return a.V(a);var c=Wc[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=Wc._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IMeta.-meta",a);},Xc=function Xc(a,b){if(null!=a&&null!=a.W)return a.W(a,b);var d=Xc[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=Xc._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("IWithMeta.-with-meta",a);};function Yc(){}
var Zc=function Zc(a){switch(arguments.length){case 2:return Zc.a(arguments[0],arguments[1]);case 3:return Zc.j(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}};Zc.a=function(a,b){if(null!=a&&null!=a.xb)return a.xb(a,b);var c=Zc[ha(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=Zc._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw gc("IReduce.-reduce",a);};
Zc.j=function(a,b,c){if(null!=a&&null!=a.mb)return a.mb(a,b,c);var d=Zc[ha(null==a?null:a)];if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);d=Zc._;if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);throw gc("IReduce.-reduce",a);};Zc.ga=3;function $c(){}
var ad=function ad(a,b,c){if(null!=a&&null!=a.Ia)return a.Ia(a,b,c);var e=ad[ha(null==a?null:a)];if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);e=ad._;if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);throw gc("IKVReduce.-kv-reduce",a);},bd=function bd(a,b){if(null!=a&&null!=a.ea)return a.ea(a,b);var d=bd[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=bd._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("IEquiv.-equiv",a);},cd=function cd(a){if(null!=a&&null!=
a.na)return a.na(a);var c=cd[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=cd._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IHash.-hash",a);};function dd(){}var ed=function ed(a){if(null!=a&&null!=a.pa)return a.pa(a);var c=ed[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=ed._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("ISeqable.-seq",a);};function fd(){}function gd(){}function hd(){}function id(){}
var jd=function jd(a){if(null!=a&&null!=a.nc)return a.nc(a);var c=jd[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=jd._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IReversible.-rseq",a);},kd=function kd(a,b){if(null!=a&&null!=a.Ag)return a.Ag(a,b);var d=kd[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=kd._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("IWriter.-write",a);};function ld(){}
var md=function md(a,b,c){if(null!=a&&null!=a.ma)return a.ma(a,b,c);var e=md[ha(null==a?null:a)];if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);e=md._;if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);throw gc("IPrintWithWriter.-pr-writer",a);};function od(){}
var pd=function pd(a){if(null!=a&&null!=a.Jd)return a.Jd(a);var c=pd[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=pd._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IEditableCollection.-as-transient",a);},qd=function qd(a,b){if(null!=a&&null!=a.od)return a.od(a,b);var d=qd[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=qd._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("ITransientCollection.-conj!",a);},rd=function rd(a){if(null!=a&&null!=
a.fe)return a.fe(a);var c=rd[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=rd._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("ITransientCollection.-persistent!",a);},sd=function sd(a,b,c){if(null!=a&&null!=a.ed)return a.ed(a,b,c);var e=sd[ha(null==a?null:a)];if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);e=sd._;if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);throw gc("ITransientAssociative.-assoc!",a);},vd=function vd(a){if(null!=a&&null!=a.tg)return a.tg(a);var c=
vd[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=vd._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IChunk.-drop-first",a);},wd=function wd(a){if(null!=a&&null!=a.tf)return a.tf(a);var c=wd[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=wd._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IChunkedSeq.-chunked-first",a);},xd=function xd(a){if(null!=a&&null!=a.De)return a.De(a);var c=xd[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,
a);c=xd._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IChunkedSeq.-chunked-rest",a);},yd=function yd(a){if(null!=a&&null!=a.de)return a.de(a);var c=yd[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=yd._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("INamed.-name",a);},zd=function zd(a){if(null!=a&&null!=a.ee)return a.ee(a);var c=zd[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=zd._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("INamed.-namespace",
a);},Ad=function Ad(a,b){if(null!=a&&null!=a.ih)return a.ih(a,b);var d=Ad[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=Ad._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("IReset.-reset!",a);},Bd=function Bd(a){switch(arguments.length){case 2:return Bd.a(arguments[0],arguments[1]);case 3:return Bd.j(arguments[0],arguments[1],arguments[2]);case 4:return Bd.fa(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return Bd.ya(arguments[0],arguments[1],arguments[2],
arguments[3],arguments[4]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}};Bd.a=function(a,b){if(null!=a&&null!=a.jh)return a.jh(a,b);var c=Bd[ha(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=Bd._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw gc("ISwap.-swap!",a);};
Bd.j=function(a,b,c){if(null!=a&&null!=a.kh)return a.kh(a,b,c);var d=Bd[ha(null==a?null:a)];if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);d=Bd._;if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);throw gc("ISwap.-swap!",a);};Bd.fa=function(a,b,c,d){if(null!=a&&null!=a.lh)return a.lh(a,b,c,d);var e=Bd[ha(null==a?null:a)];if(null!=e)return e.fa?e.fa(a,b,c,d):e.call(null,a,b,c,d);e=Bd._;if(null!=e)return e.fa?e.fa(a,b,c,d):e.call(null,a,b,c,d);throw gc("ISwap.-swap!",a);};
Bd.ya=function(a,b,c,d,e){if(null!=a&&null!=a.mh)return a.mh(a,b,c,d,e);var f=Bd[ha(null==a?null:a)];if(null!=f)return f.ya?f.ya(a,b,c,d,e):f.call(null,a,b,c,d,e);f=Bd._;if(null!=f)return f.ya?f.ya(a,b,c,d,e):f.call(null,a,b,c,d,e);throw gc("ISwap.-swap!",a);};Bd.ga=5;var Cd=function Cd(a,b){if(null!=a&&null!=a.xf)return a.xf(a,b);var d=Cd[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=Cd._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("IVolatile.-vreset!",a);};
function Dd(){}var Ed=function Ed(a){if(null!=a&&null!=a.Fa)return a.Fa(a);var c=Ed[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=Ed._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IIterable.-iterator",a);};function Fd(a){this.Xi=a;this.F=1073741824;this.R=0}Fd.prototype.Ag=function(a,b){return this.Xi.append(b)};function Gd(a){var b=new Kb;a.ma(null,new Fd(b),Tb());return r.g(b)}
var Hd="undefined"!==typeof Math&&"undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function Id(a){a=Hd(a|0,-862048943);return Hd(a<<15|a>>>-15,461845907)}function Jd(a,b){a=(a|0)^(b|0);return Hd(a<<13|a>>>-13,5)+-430675100|0}function Kd(a,b){a=(a|0)^b;a=Hd(a^a>>>16,-2048144789);a=Hd(a^a>>>13,-1028477387);return a^a>>>16}
function Cb(a){a:{var b=1;for(var c=0;;)if(b<a.length)c=Jd(c,Id(a.charCodeAt(b-1)|a.charCodeAt(b)<<16)),b+=2;else{b=c;break a}}return Kd(1===(a.length&1)?b^Id(a.charCodeAt(a.length-1)):b,Hd(2,a.length))}var Ld={},Md=0;function Nd(a){255<Md&&(Ld={},Md=0);if(null==a)return 0;var b=Ld[a];if("number"===typeof b)a=b;else{a:if(null!=a)if(b=a.length,0<b)for(var c=0,d=0;;)if(c<b)d=Hd(31,d)+a.charCodeAt(c),c+=1;else{b=d;break a}else b=0;else b=0;Ld[a]=b;Md+=1;a=b}return a}
function Od(a){if(null!=a&&(a.F&4194304||n===a.uf))return cd(a)^0;if("number"===typeof a){if(q(isFinite(a)))return Math.floor(a)%2147483647;switch(a){case Infinity:return 2146435072;case -Infinity:return-1048576;default:return 2146959360}}else return!0===a?a=1231:!1===a?a=1237:"string"===typeof a?(a=Nd(a),a=0===a?a:Kd(Jd(0,Id(a)),4)):a=a instanceof Date?a.valueOf()^0:null==a?0:cd(a)^0,a}function Db(a,b){return a^b+2654435769+(a<<6)+(a>>2)}
function C(a,b,c,d,e){this.Tb=a;this.name=b;this.Ub=c;this.Fd=d;this.Ob=e;this.F=2154168321;this.R=4096}g=C.prototype;g.toString=function(){return this.Ub};g.equiv=function(a){return this.ea(null,a)};g.ea=function(a,b){return b instanceof C?this.Ub===b.Ub:!1};
g.call=function(){function a(a,b,c){return F.j?F.j(b,this,c):F.call(null,b,this,c)}function b(a,b){return F.a?F.a(b,this):F.call(null,b,this)}var c=null;c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+(arguments.length-1));};c.a=b;c.j=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return F.a?F.a(a,this):F.call(null,a,this)};
g.a=function(a,b){return F.j?F.j(a,this,b):F.call(null,a,this,b)};g.V=function(){return this.Ob};g.W=function(a,b){return new C(this.Tb,this.name,this.Ub,this.Fd,b)};g.na=function(){var a=this.Fd;return null!=a?a:this.Fd=a=Db(Cb(this.name),Nd(this.Tb))};g.de=function(){return this.name};g.ee=function(){return this.Tb};g.ma=function(a,b){return kd(b,this.Ub)};
var Td=function Td(a){switch(arguments.length){case 1:return Td.g(arguments[0]);case 2:return Td.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}};Td.g=function(a){for(;;){if(a instanceof C)return a;if("string"===typeof a){var b=a.indexOf("/");return 1>b?Td.a(null,a):Td.a(a.substring(0,b),a.substring(b+1,a.length))}if(a instanceof S)a=a.Ea;else throw Error("no conversion to symbol");}};
Td.a=function(a,b){var c=null!=a?[r.g(a),"/",r.g(b)].join(""):b;return new C(a,b,c,null,null)};Td.ga=2;function Wd(a){return null!=a?a.R&131072||n===a.gj?!0:a.R?!1:ec(Dd,a):ec(Dd,a)}function H(a){if(null==a)return null;if(null!=a&&(a.F&8388608||n===a.xg))return ed(a);if(bc(a)||"string"===typeof a)return 0===a.length?null:new Xd(a,0,null);if(ec(dd,a))return ed(a);throw Error([r.g(a)," is not ISeqable"].join(""));}
function I(a){if(null==a)return null;if(null!=a&&(a.F&64||n===a.wa))return zc(a);a=H(a);return null==a?null:zc(a)}function Yd(a){return null!=a?null!=a&&(a.F&64||n===a.wa)?Ac(a):(a=H(a))?a.Ib(null):Zd:Zd}function J(a){return null==a?null:null!=a&&(a.F&128||n===a.Fe)?Ua(a):H(Yd(a))}
var G=function G(a){switch(arguments.length){case 1:return G.g(arguments[0]);case 2:return G.a(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return G.S(arguments[0],arguments[1],new Xd(c.slice(2),0,null))}};G.g=function(){return!0};G.a=function(a,b){return null==a?null==b:a===b||bd(a,b)};G.S=function(a,b,c){for(;;)if(G.a(a,b))if(J(c))a=b,b=I(c),c=J(c);else return G.a(b,I(c));else return!1};
G.ka=function(a){var b=I(a),c=J(a);a=I(c);c=J(c);return this.S(b,a,c)};G.ga=2;function $d(a){this.Ga=a}$d.prototype.next=function(){if(null!=this.Ga){var a=I(this.Ga);this.Ga=J(this.Ga);return{value:a,done:!1}}return{value:null,done:!0}};function ae(a){return new $d(H(a))}function be(a){var b=0,c=1;for(a=H(a);;)if(null!=a)b+=1,c=Hd(31,c)+Od(I(a))|0,a=J(a);else return Kd(Jd(0,Id(c)),b)}var ce=Kd(Jd(0,Id(1)),0);
function de(a){var b=0,c=0;for(a=H(a);;)if(null!=a)b+=1,c=c+Od(I(a))|0,a=J(a);else return Kd(Jd(0,Id(c)),b)}var ee=Kd(Jd(0,Id(0)),0);rc["null"]=!0;tc["null"]=function(){return 0};Date.prototype.ea=function(a,b){return b instanceof Date&&this.valueOf()===b.valueOf()};bd.number=function(a,b){return a===b};oc["function"]=!0;Vc["function"]=!0;Wc["function"]=function(){return null};cd._=function(a){return la(a)};function ge(a){this.B=a;this.F=32768;this.R=0}ge.prototype.cd=function(){return this.B};
function he(a){return new ge(a)}function ie(a){return a instanceof ge}function je(a){return ie(a)?ke.g?ke.g(a):ke.call(null,a):a}function ke(a){return A(a)}function le(a,b){var c=tc(a);if(0===c)return b.J?b.J():b.call(null);for(var d=y.a(a,0),e=1;;)if(e<c){var f=y.a(a,e);d=b.a?b.a(d,f):b.call(null,d,f);if(ie(d))return A(d);e+=1}else return d}function me(a,b,c){var d=tc(a),e=c;for(c=0;;)if(c<d){var f=y.a(a,c);e=b.a?b.a(e,f):b.call(null,e,f);if(ie(e))return A(e);c+=1}else return e}
function ne(a,b){var c=a.length;if(0===a.length)return b.J?b.J():b.call(null);for(var d=a[0],e=1;;)if(e<c){var f=a[e];d=b.a?b.a(d,f):b.call(null,d,f);if(ie(d))return A(d);e+=1}else return d}function oe(a,b,c){var d=a.length,e=c;for(c=0;;)if(c<d){var f=a[c];e=b.a?b.a(e,f):b.call(null,e,f);if(ie(e))return A(e);c+=1}else return e}function pe(a,b,c,d){for(var e=a.length;;)if(d<e){var f=a[d];c=b.a?b.a(c,f):b.call(null,c,f);if(ie(c))return A(c);d+=1}else return c}
function qe(a){return null!=a?a.F&2||n===a.ah?!0:a.F?!1:ec(rc,a):ec(rc,a)}function re(a){return null!=a?a.F&16||n===a.wg?!0:a.F?!1:ec(xc,a):ec(xc,a)}function se(a,b,c){var d=K.g?K.g(a):K.call(null,a);if(c>=d)return-1;!(0<c)&&0>c&&(c+=d,c=0>c?0:c);for(;;)if(c<d){if(G.a(M?M(a,c):te.call(null,a,c),b))return c;c+=1}else return-1}
function ue(a,b,c){var d=K.g?K.g(a):K.call(null,a);if(0===d)return-1;0<c?(--d,c=d<c?d:c):c=0>c?d+c:c;for(;;)if(0<=c){if(G.a(M?M(a,c):te.call(null,a,c),b))return c;--c}else return-1}function ve(a,b){this.M=a;this.Y=b}ve.prototype.Ta=function(){return this.Y<this.M.length};ve.prototype.next=function(){var a=this.M[this.Y];this.Y+=1;return a};function Xd(a,b,c){this.M=a;this.Y=b;this.ca=c;this.F=166592766;this.R=139264}g=Xd.prototype;g.toString=function(){return Gd(this)};
g.equiv=function(a){return this.ea(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K.g?K.g(this):K.call(null,this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.za=function(a,b){a=b+this.Y;if(0<=a&&a<this.M.length)return this.M[a];throw Error("Index out of bounds");};g.Oa=function(a,b,c){a=b+this.Y;return 0<=a&&a<this.M.length?this.M[a]:c};
g.Fa=function(){return new ve(this.M,this.Y)};g.V=function(){return this.ca};g.Da=function(){return new Xd(this.M,this.Y,this.ca)};g.Hb=function(){return this.Y+1<this.M.length?new Xd(this.M,this.Y+1,null):null};g.ta=function(){var a=this.M.length-this.Y;return 0>a?0:a};g.nc=function(){var a=this.ta(null);return 0<a?new we(this,a-1,null):null};g.na=function(){return be(this)};g.ea=function(a,b){return xe.a?xe.a(this,b):xe.call(null,this,b)};g.Ra=function(){return Zd};
g.xb=function(a,b){return pe(this.M,b,this.M[this.Y],this.Y+1)};g.mb=function(a,b,c){return pe(this.M,b,c,this.Y)};g.Cb=function(){return this.M[this.Y]};g.Ib=function(){return this.Y+1<this.M.length?new Xd(this.M,this.Y+1,null):Zd};g.pa=function(){return this.Y<this.M.length?this:null};g.W=function(a,b){return b===this.ca?this:new Xd(this.M,this.Y,b)};g.ua=function(a,b){return ye.a?ye.a(b,this):ye.call(null,b,this)};Xd.prototype[ic]=function(){return ae(this)};
function N(a){return 0<a.length?new Xd(a,0,null):null}function we(a,b,c){this.ae=a;this.Y=b;this.ca=c;this.F=32374990;this.R=8192}g=we.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K.g?K.g(this):K.call(null,this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.ca};g.Da=function(){return new we(this.ae,this.Y,this.ca)};g.Hb=function(){return 0<this.Y?new we(this.ae,this.Y-1,null):null};g.ta=function(){return this.Y+1};g.na=function(){return be(this)};
g.ea=function(a,b){return xe.a?xe.a(this,b):xe.call(null,this,b)};g.Ra=function(){return Zd};g.xb=function(a,b){return ze?ze(b,this):Ae.call(null,b,this)};g.mb=function(a,b,c){return Be?Be(b,c,this):Ae.call(null,b,c,this)};g.Cb=function(){return y.a(this.ae,this.Y)};g.Ib=function(){return 0<this.Y?new we(this.ae,this.Y-1,null):Zd};g.pa=function(){return this};g.W=function(a,b){return b===this.ca?this:new we(this.ae,this.Y,b)};g.ua=function(a,b){return ye.a?ye.a(b,this):ye.call(null,b,this)};
we.prototype[ic]=function(){return ae(this)};function De(a){for(;;){var b=J(a);if(null!=b)a=b;else return I(a)}}bd._=function(a,b){return a===b};var Ee=function Ee(a){switch(arguments.length){case 0:return Ee.J();case 1:return Ee.g(arguments[0]);case 2:return Ee.a(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Ee.S(arguments[0],arguments[1],new Xd(c.slice(2),0,null))}};Ee.J=function(){return Fe};Ee.g=function(a){return a};
Ee.a=function(a,b){return null!=a?wc(a,b):new Ge(null,b,null,1,null)};Ee.S=function(a,b,c){for(;;)if(q(c))a=Ee.a(a,b),b=I(c),c=J(c);else return Ee.a(a,b)};Ee.ka=function(a){var b=I(a),c=J(a);a=I(c);c=J(c);return this.S(b,a,c)};Ee.ga=2;function Va(a){return null==a?null:null!=a&&(a.F&4||n===a.I)?uc(a):(null!=a?a.F&4||n===a.I||(a.F?0:ec(Pa,a)):ec(Pa,a))?uc(a):null}
function K(a){if(null!=a)if(null!=a&&(a.F&2||n===a.ah))a=tc(a);else if(bc(a))a=a.length;else if("string"===typeof a)a=a.length;else if(null!=a&&(a.F&8388608||n===a.xg))a:{a=H(a);for(var b=0;;){if(qe(a)){a=b+tc(a);break a}a=J(a);b+=1}}else a=tc(a);else a=0;return a}function Ie(a,b,c){for(;;){if(null==a)return c;if(0===b)return H(a)?I(a):c;if(re(a))return y.j(a,b,c);if(H(a))a=J(a),--b;else return c}}
function te(a){switch(arguments.length){case 2:return M(arguments[0],arguments[1]);case 3:return O(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}}
function M(a,b){if("number"!==typeof b)throw Error("Index argument to nth must be a number");if(null==a)return a;if(null!=a&&(a.F&16||n===a.wg))return y.a(a,b);if(bc(a)){if(-1<b&&b<a.length)return a[b|0];throw Error("Index out of bounds");}if("string"===typeof a){if(-1<b&&b<a.length)return a.charAt(b|0);throw Error("Index out of bounds");}if(null!=a&&(a.F&64||n===a.wa)||null!=a&&(a.F&16777216||n===a.yg)){if(0>b)throw Error("Index out of bounds");a:for(;;){if(null==a)throw Error("Index out of bounds");
if(0===b){if(H(a)){a=I(a);break a}throw Error("Index out of bounds");}if(re(a)){a=y.a(a,b);break a}if(H(a))a=J(a),--b;else throw Error("Index out of bounds");}return a}if(ec(xc,a))return y.a(a,b);throw Error(["nth not supported on this type ",r.g(hc(fc(a)))].join(""));}
function O(a,b,c){if("number"!==typeof b)throw Error("Index argument to nth must be a number.");if(null==a)return c;if(null!=a&&(a.F&16||n===a.wg))return y.j(a,b,c);if(bc(a))return-1<b&&b<a.length?a[b|0]:c;if("string"===typeof a)return-1<b&&b<a.length?a.charAt(b|0):c;if(null!=a&&(a.F&64||n===a.wa)||null!=a&&(a.F&16777216||n===a.yg))return 0>b?c:Ie(a,b,c);if(ec(xc,a))return y.j(a,b,c);throw Error(["nth not supported on this type ",r.g(hc(fc(a)))].join(""));}
var F=function F(a){switch(arguments.length){case 2:return F.a(arguments[0],arguments[1]);case 3:return F.j(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}};F.a=function(a,b){return null==a?null:null!=a&&(a.F&256||n===a.ce)?Dc.a(a,b):bc(a)?null!=b&&b<a.length?a[b|0]:null:"string"===typeof a?null!=b&&b<a.length?a.charAt(b|0):null:ec(Cc,a)?Dc.a(a,b):null};
F.j=function(a,b,c){return null!=a?null!=a&&(a.F&256||n===a.ce)?Dc.j(a,b,c):bc(a)?null!=b&&-1<b&&b<a.length?a[b|0]:c:"string"===typeof a?null!=b&&-1<b&&b<a.length?a.charAt(b|0):c:ec(Cc,a)?Dc.j(a,b,c):c:c};F.ga=3;var Je=function Je(a){switch(arguments.length){case 3:return Je.j(arguments[0],arguments[1],arguments[2]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Je.S(arguments[0],arguments[1],arguments[2],new Xd(c.slice(3),0,null))}};
Je.j=function(a,b,c){return null!=a?Hc(a,b,c):Ke([b,c])};Je.S=function(a,b,c,d){for(;;)if(a=Je.j(a,b,c),q(d))b=I(d),c=I(J(d)),d=J(J(d));else return a};Je.ka=function(a){var b=I(a),c=J(a);a=I(c);var d=J(c);c=I(d);d=J(d);return this.S(b,a,c,d)};Je.ga=3;
var Le=function Le(a){switch(arguments.length){case 1:return Le.g(arguments[0]);case 2:return Le.a(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Le.S(arguments[0],arguments[1],new Xd(c.slice(2),0,null))}};Le.g=function(a){return a};Le.a=function(a,b){return null==a?null:Mc(a,b)};Le.S=function(a,b,c){for(;;){if(null==a)return null;a=Le.a(a,b);if(q(c))b=I(c),c=J(c);else return a}};
Le.ka=function(a){var b=I(a),c=J(a);a=I(c);c=J(c);return this.S(b,a,c)};Le.ga=2;function Me(a){var b=ja(a);return b?b:null!=a?n===a.sg?!0:a.pd?!1:ec(oc,a):ec(oc,a)}function Ne(a,b){this.T=a;this.ca=b;this.F=393217;this.R=0}g=Ne.prototype;g.V=function(){return this.ca};g.W=function(a,b){return new Ne(this.T,b)};g.sg=n;
g.call=function(){function a(a,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D,R,P,Ga,Z){a=this;return Vd.Dc?Vd.Dc(a.T,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D,R,P,Ga,Z):Vd.call(null,a.T,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D,R,P,Ga,Z)}function b(a,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D,R,P,Ga){a=this;return a.T.Ab?a.T.Ab(b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D,R,P,Ga):a.T.call(null,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D,R,P,Ga)}function c(a,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D,R,P){a=this;return a.T.vb?a.T.vb(b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,
B,D,R,P):a.T.call(null,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D,R,P)}function d(a,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D,R){a=this;return a.T.lb?a.T.lb(b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D,R):a.T.call(null,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D,R)}function e(a,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D){a=this;return a.T.kb?a.T.kb(b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D):a.T.call(null,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B,D)}function f(a,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B){a=this;return a.T.jb?a.T.jb(b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B):a.T.call(null,
b,c,d,e,f,h,k,l,m,u,v,t,w,z,E,B)}function h(a,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E){a=this;return a.T.ib?a.T.ib(b,c,d,e,f,h,k,l,m,u,v,t,w,z,E):a.T.call(null,b,c,d,e,f,h,k,l,m,u,v,t,w,z,E)}function k(a,b,c,d,e,f,h,k,l,m,u,v,t,w,z){a=this;return a.T.hb?a.T.hb(b,c,d,e,f,h,k,l,m,u,v,t,w,z):a.T.call(null,b,c,d,e,f,h,k,l,m,u,v,t,w,z)}function l(a,b,c,d,e,f,h,k,l,m,u,v,t,w){a=this;return a.T.gb?a.T.gb(b,c,d,e,f,h,k,l,m,u,v,t,w):a.T.call(null,b,c,d,e,f,h,k,l,m,u,v,t,w)}function m(a,b,c,d,e,f,h,k,l,m,u,v,t){a=this;
return a.T.fb?a.T.fb(b,c,d,e,f,h,k,l,m,u,v,t):a.T.call(null,b,c,d,e,f,h,k,l,m,u,v,t)}function t(a,b,c,d,e,f,h,k,l,m,u,v){a=this;return a.T.eb?a.T.eb(b,c,d,e,f,h,k,l,m,u,v):a.T.call(null,b,c,d,e,f,h,k,l,m,u,v)}function u(a,b,c,d,e,f,h,k,l,m,u){a=this;return a.T.Ya?a.T.Ya(b,c,d,e,f,h,k,l,m,u):a.T.call(null,b,c,d,e,f,h,k,l,m,u)}function w(a,b,c,d,e,f,h,k,l,m){a=this;return a.T.ab?a.T.ab(b,c,d,e,f,h,k,l,m):a.T.call(null,b,c,d,e,f,h,k,l,m)}function v(a,b,c,d,e,f,h,k,l){a=this;return a.T.Sa?a.T.Sa(b,c,
d,e,f,h,k,l):a.T.call(null,b,c,d,e,f,h,k,l)}function z(a,b,c,d,e,f,h,k){a=this;return a.T.$a?a.T.$a(b,c,d,e,f,h,k):a.T.call(null,b,c,d,e,f,h,k)}function B(a,b,c,d,e,f,h){a=this;return a.T.Za?a.T.Za(b,c,d,e,f,h):a.T.call(null,b,c,d,e,f,h)}function E(a,b,c,d,e,f){a=this;return a.T.ya?a.T.ya(b,c,d,e,f):a.T.call(null,b,c,d,e,f)}function D(a,b,c,d,e){a=this;return a.T.fa?a.T.fa(b,c,d,e):a.T.call(null,b,c,d,e)}function R(a,b,c,d){a=this;return a.T.j?a.T.j(b,c,d):a.T.call(null,b,c,d)}function Z(a,b,c){a=
this;return a.T.a?a.T.a(b,c):a.T.call(null,b,c)}function Ga(a,b){a=this;return a.T.g?a.T.g(b):a.T.call(null,b)}function Ya(a){a=this;return a.T.J?a.T.J():a.T.call(null)}var P=null;P=function(Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb,sc,Gc,Lc,Vb,Rd,Sd){switch(arguments.length){case 1:return Ya.call(this,Ca);case 2:return Ga.call(this,Ca,fa);case 3:return Z.call(this,Ca,fa,$a);case 4:return R.call(this,Ca,fa,$a,Ma);case 5:return D.call(this,Ca,fa,$a,Ma,P);case 6:return E.call(this,Ca,fa,$a,Ma,
P,Oa);case 7:return B.call(this,Ca,fa,$a,Ma,P,Oa,Wa);case 8:return z.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa);case 9:return v.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa);case 10:return w.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb);case 11:return u.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb,Sa);case 12:return t.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb,Sa,Ra);case 13:return m.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb,Sa,Ra,fb);case 14:return l.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb);case 15:return k.call(this,Ca,
fa,$a,Ma,P,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb);case 16:return h.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb);case 17:return f.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb,sc);case 18:return e.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb,sc,Gc);case 19:return d.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb,sc,Gc,Lc);case 20:return c.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb,sc,Gc,Lc,Vb);case 21:return b.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb,
Sa,Ra,fb,hb,sb,lb,sc,Gc,Lc,Vb,Rd);case 22:return a.call(this,Ca,fa,$a,Ma,P,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb,sc,Gc,Lc,Vb,Rd,Sd)}throw Error("Invalid arity: "+(arguments.length-1));};P.g=Ya;P.a=Ga;P.j=Z;P.fa=R;P.ya=D;P.Za=E;P.$a=B;P.Sa=z;P.ab=v;P.Ya=w;P.eb=u;P.fb=t;P.gb=m;P.hb=l;P.ib=k;P.jb=h;P.kb=f;P.lb=e;P.vb=d;P.Ab=c;P.be=b;P.Dc=a;return P}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.J=function(){return this.T.J?this.T.J():this.T.call(null)};
g.g=function(a){return this.T.g?this.T.g(a):this.T.call(null,a)};g.a=function(a,b){return this.T.a?this.T.a(a,b):this.T.call(null,a,b)};g.j=function(a,b,c){return this.T.j?this.T.j(a,b,c):this.T.call(null,a,b,c)};g.fa=function(a,b,c,d){return this.T.fa?this.T.fa(a,b,c,d):this.T.call(null,a,b,c,d)};g.ya=function(a,b,c,d,e){return this.T.ya?this.T.ya(a,b,c,d,e):this.T.call(null,a,b,c,d,e)};g.Za=function(a,b,c,d,e,f){return this.T.Za?this.T.Za(a,b,c,d,e,f):this.T.call(null,a,b,c,d,e,f)};
g.$a=function(a,b,c,d,e,f,h){return this.T.$a?this.T.$a(a,b,c,d,e,f,h):this.T.call(null,a,b,c,d,e,f,h)};g.Sa=function(a,b,c,d,e,f,h,k){return this.T.Sa?this.T.Sa(a,b,c,d,e,f,h,k):this.T.call(null,a,b,c,d,e,f,h,k)};g.ab=function(a,b,c,d,e,f,h,k,l){return this.T.ab?this.T.ab(a,b,c,d,e,f,h,k,l):this.T.call(null,a,b,c,d,e,f,h,k,l)};g.Ya=function(a,b,c,d,e,f,h,k,l,m){return this.T.Ya?this.T.Ya(a,b,c,d,e,f,h,k,l,m):this.T.call(null,a,b,c,d,e,f,h,k,l,m)};
g.eb=function(a,b,c,d,e,f,h,k,l,m,t){return this.T.eb?this.T.eb(a,b,c,d,e,f,h,k,l,m,t):this.T.call(null,a,b,c,d,e,f,h,k,l,m,t)};g.fb=function(a,b,c,d,e,f,h,k,l,m,t,u){return this.T.fb?this.T.fb(a,b,c,d,e,f,h,k,l,m,t,u):this.T.call(null,a,b,c,d,e,f,h,k,l,m,t,u)};g.gb=function(a,b,c,d,e,f,h,k,l,m,t,u,w){return this.T.gb?this.T.gb(a,b,c,d,e,f,h,k,l,m,t,u,w):this.T.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w)};
g.hb=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v){return this.T.hb?this.T.hb(a,b,c,d,e,f,h,k,l,m,t,u,w,v):this.T.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v)};g.ib=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z){return this.T.ib?this.T.ib(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z):this.T.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z)};g.jb=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B){return this.T.jb?this.T.jb(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B):this.T.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B)};
g.kb=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E){return this.T.kb?this.T.kb(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E):this.T.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E)};g.lb=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D){return this.T.lb?this.T.lb(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D):this.T.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D)};
g.vb=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R){return this.T.vb?this.T.vb(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R):this.T.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R)};g.Ab=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z){return this.T.Ab?this.T.Ab(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z):this.T.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z)};
g.be=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga){return Vd.Dc?Vd.Dc(this.T,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga):Vd.call(null,this.T,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga)};function Oe(a,b){return ja(a)?new Ne(a,b):null==a?null:Xc(a,b)}function Pe(a){var b=null!=a;return(b?null!=a?a.F&131072||n===a.Ee||(a.F?0:ec(Vc,a)):ec(Vc,a):b)?Wc(a):null}function Re(a){return null==a||cc(H(a))}function Se(a){return null==a?!1:null!=a?a.F&8||n===a.dj?!0:a.F?!1:ec(vc,a):ec(vc,a)}
function Te(a){return null==a?!1:null!=a?a.F&4096||n===a.mj?!0:a.F?!1:ec(Pc,a):ec(Pc,a)}function Ue(a){return null!=a?a.F&16777216||n===a.yg?!0:a.F?!1:ec(fd,a):ec(fd,a)}function Ve(a){return null==a?!1:null!=a?a.F&1024||n===a.ij?!0:a.F?!1:ec(Kc,a):ec(Kc,a)}function We(a){return null!=a?a.F&67108864||n===a.kj?!0:a.F?!1:ec(hd,a):ec(hd,a)}function Xe(a){return null!=a?a.F&16384||n===a.nj?!0:a.F?!1:ec(Tc,a):ec(Tc,a)}function Ye(a){return null!=a?a.R&512||n===a.cj?!0:!1:!1}
function Ze(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,--e,b+=1}var $e={};function af(a){return null==a?!1:null!=a?a.F&64||n===a.wa?!0:a.F?!1:ec(yc,a):ec(yc,a)}function bf(a){return null==a?!1:!1===a?!1:!0}function cf(a){var b=Me(a);return b?b:null!=a?a.F&1||n===a.fj?!0:a.F?!1:ec(pc,a):ec(pc,a)}function df(a){return"number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a,10)}function ef(a,b){return F.j(a,b,$e)===$e?!1:!0}
function ff(a,b){if(null!=a?n===a.dd||(a.pd?0:ec(Ic,a)):ec(Ic,a))a=Jc(a,b);else{var c;if(c=null!=a)c=null!=a?a.F&512||n===a.bj?!0:a.F?!1:ec(Ec,a):ec(Ec,a);a=c&&ef(a,b)?new Q(b,F.a(a,b),null):null}return a}function Ae(a){switch(arguments.length){case 2:return ze(arguments[0],arguments[1]);case 3:return Be(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}}
function ze(a,b){var c=H(b);return c?(b=I(c),c=J(c),x?x(a,b,c):nc.call(null,a,b,c)):a.J?a.J():a.call(null)}function Be(a,b,c){for(c=H(c);;)if(c){var d=I(c);b=a.a?a.a(b,d):a.call(null,b,d);if(ie(b))return A(b);c=J(c)}else return b}function mf(a,b){a=Ed(a);if(q(a.Ta()))for(var c=a.next();;)if(a.Ta()){var d=a.next();c=b.a?b.a(c,d):b.call(null,c,d);if(ie(c))return A(c)}else return c;else return b.J?b.J():b.call(null)}
function nf(a,b,c){for(a=Ed(a);;)if(a.Ta()){var d=a.next();c=b.a?b.a(c,d):b.call(null,c,d);if(ie(c))return A(c)}else return c}function nc(a){switch(arguments.length){case 2:return of(arguments[0],arguments[1]);case 3:return x(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}}function of(a,b){return null!=b&&(b.F&524288||n===b.hh)?Zc.a(b,a):bc(b)?ne(b,a):"string"===typeof b?ne(b,a):ec(Yc,b)?Zc.a(b,a):Wd(b)?mf(b,a):ze(a,b)}
function x(a,b,c){return null!=c&&(c.F&524288||n===c.hh)?Zc.j(c,a,b):bc(c)?oe(c,a,b):"string"===typeof c?oe(c,a,b):ec(Yc,c)?Zc.j(c,a,b):Wd(c)?nf(c,a,b):Be(a,b,c)}function pf(a,b,c){return null!=c?ad(c,a,b):b}function qf(a){return a}
function rf(a){return function(){function b(b,c){return a.a?a.a(b,c):a.call(null,b,c)}function c(a){return qf.g?qf.g(a):qf.call(null,a)}function d(){return a.J?a.J():a.call(null)}var e=null;e=function(a,e){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,a);case 2:return b.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};e.J=d;e.g=c;e.a=b;return e}()}function sf(a,b,c,d){a=a.g?a.g(b):a.call(null,b);c=x(a,c,d);return a.g?a.g(c):a.call(null,c)}
function uf(a){if("number"===typeof a)return String.fromCharCode(a);if("string"===typeof a&&1===a.length)return a;throw Error("Argument to char must be a character or number");}function vf(a){a=(a-a%2)/2;return 0<=a?Math.floor(a):Math.ceil(a)}function wf(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}
var r=function r(a){switch(arguments.length){case 0:return r.J();case 1:return r.g(arguments[0]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return r.S(arguments[0],new Xd(c.slice(1),0,null))}};r.J=function(){return""};r.g=function(a){return null==a?"":[a].join("")};r.S=function(a,b){for(a=new Kb(r.g(a));;)if(q(b))a=a.append(r.g(I(b))),b=J(b);else return a.toString()};r.ka=function(a){var b=I(a);a=J(a);return this.S(b,a)};r.ga=1;
function xe(a,b){if(Ue(b))if(qe(a)&&qe(b)&&K(a)!==K(b))a=!1;else a:for(a=H(a),b=H(b);;){if(null==a){a=null==b;break a}if(null!=b&&G.a(I(a),I(b)))a=J(a),b=J(b);else{a=!1;break a}}else a=null;return bf(a)}function Ge(a,b,c,d,e){this.ca=a;this.first=b;this.xc=c;this.count=d;this.H=e;this.F=65937646;this.R=8192}g=Ge.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,this.count)}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.ca};g.Da=function(){return new Ge(this.ca,this.first,this.xc,this.count,this.H)};g.Hb=function(){return 1===this.count?null:this.xc};g.ta=function(){return this.count};g.Oc=function(){return this.first};
g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Xc(Zd,this.ca)};g.xb=function(a,b){return ze(b,this)};g.mb=function(a,b,c){return Be(b,c,this)};g.Cb=function(){return this.first};g.Ib=function(){return 1===this.count?Zd:this.xc};g.pa=function(){return this};g.W=function(a,b){return b===this.ca?this:new Ge(b,this.first,this.xc,this.count,this.H)};g.ua=function(a,b){return new Ge(this.ca,b,this,this.count+1,null)};
function yf(a){return null!=a?a.F&33554432||n===a.hj?!0:a.F?!1:ec(gd,a):ec(gd,a)}Ge.prototype[ic]=function(){return ae(this)};function zf(a){this.ca=a;this.F=65937614;this.R=8192}g=zf.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.ca};g.Da=function(){return new zf(this.ca)};g.Hb=function(){return null};g.ta=function(){return 0};g.Oc=function(){return null};g.na=function(){return ce};
g.ea=function(a,b){return yf(b)||Ue(b)?null==H(b):!1};g.Ra=function(){return this};g.xb=function(a,b){return ze(b,this)};g.mb=function(a,b,c){return Be(b,c,this)};g.Cb=function(){return null};g.Ib=function(){return Zd};g.pa=function(){return null};g.W=function(a,b){return b===this.ca?this:new zf(b)};g.ua=function(a,b){return new Ge(this.ca,b,null,1,null)};var Zd=new zf(null);zf.prototype[ic]=function(){return ae(this)};
function Af(a){return(null!=a?a.F&134217728||n===a.lj||(a.F?0:ec(id,a)):ec(id,a))?(a=jd(a))?a:Zd:x(Ee,Zd,a)}var Bf=function Bf(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Bf.S(0<c.length?new Xd(c.slice(0),0,null):null)};Bf.S=function(a){if(a instanceof Xd&&0===a.Y)var b=a.M;else a:for(b=[];;)if(null!=a)b.push(zc(a)),a=Ua(a);else break a;a=b.length;for(var c=Zd;;)if(0<a){var d=a-1;c=wc(c,b[a-1]);a=d}else return c};Bf.ga=0;Bf.ka=function(a){return this.S(H(a))};
function Cf(a,b,c,d){this.ca=a;this.first=b;this.xc=c;this.H=d;this.F=65929452;this.R=8192}g=Cf.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.ca};g.Da=function(){return new Cf(this.ca,this.first,this.xc,this.H)};g.Hb=function(){return null==this.xc?null:H(this.xc)};g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};
g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Zd};g.xb=function(a,b){return ze(b,this)};g.mb=function(a,b,c){return Be(b,c,this)};g.Cb=function(){return this.first};g.Ib=function(){return null==this.xc?Zd:this.xc};g.pa=function(){return this};g.W=function(a,b){return b===this.ca?this:new Cf(b,this.first,this.xc,this.H)};g.ua=function(a,b){return new Cf(null,b,this,null)};Cf.prototype[ic]=function(){return ae(this)};
function ye(a,b){return null==b?new Ge(null,a,null,1,null):null!=b&&(b.F&64||n===b.wa)?new Cf(null,a,b,null):new Cf(null,a,H(b),null)}function S(a,b,c,d){this.Tb=a;this.name=b;this.Ea=c;this.Fd=d;this.F=2153775105;this.R=4096}g=S.prototype;g.toString=function(){return[":",r.g(this.Ea)].join("")};g.equiv=function(a){return this.ea(null,a)};g.ea=function(a,b){return b instanceof S?this.Ea===b.Ea:!1};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return F.a(c,this);case 3:return F.j(c,this,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return F.a(c,this)};a.j=function(a,c,d){return F.j(c,this,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return F.a(a,this)};g.a=function(a,b){return F.j(a,this,b)};
g.na=function(){var a=this.Fd;return null!=a?a:this.Fd=a=Db(Cb(this.name),Nd(this.Tb))+2654435769|0};g.de=function(){return this.name};g.ee=function(){return this.Tb};g.ma=function(a,b){return kd(b,[":",r.g(this.Ea)].join(""))};function T(a,b){return a===b?!0:a instanceof S&&b instanceof S?a.Ea===b.Ea:!1}function Ef(a){if(null!=a&&(a.R&4096||n===a.gh))return zd(a);throw Error(["Doesn't support namespace: ",r.g(a)].join(""));}
var Gf=function Gf(a){switch(arguments.length){case 1:return Gf.g(arguments[0]);case 2:return Gf.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}};Gf.g=function(a){if(a instanceof S)return a;if(a instanceof C)return new S(Ef(a),Hf.g?Hf.g(a):Hf.call(null,a),a.Ub,null);if("string"===typeof a){var b=a.split("/");return 2===b.length?new S(b[0],b[1],a,null):new S(null,b[0],a,null)}return null};
Gf.a=function(a,b){a=a instanceof S?Hf.g?Hf.g(a):Hf.call(null,a):a instanceof C?Hf.g?Hf.g(a):Hf.call(null,a):a;b=b instanceof S?Hf.g?Hf.g(b):Hf.call(null,b):b instanceof C?Hf.g?Hf.g(b):Hf.call(null,b):b;return new S(a,b,[q(a)?[r.g(a),"/"].join(""):null,r.g(b)].join(""),null)};Gf.ga=2;function If(a,b,c,d){this.ca=a;this.o=b;this.Ga=c;this.H=d;this.F=32374988;this.R=1}g=If.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};
function Jf(a){null!=a.o&&(a.Ga=a.o.J?a.o.J():a.o.call(null),a.o=null);return a.Ga}g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.ca};g.Hb=function(){this.pa(null);return null==this.Ga?null:J(this.Ga)};g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){return xe(this,b)};
g.Ra=function(){return Xc(Zd,this.ca)};g.xb=function(a,b){return ze(b,this)};g.mb=function(a,b,c){return Be(b,c,this)};g.Cb=function(){this.pa(null);return null==this.Ga?null:I(this.Ga)};g.Ib=function(){this.pa(null);return null!=this.Ga?Yd(this.Ga):Zd};g.pa=function(){Jf(this);if(null==this.Ga)return null;for(var a=this.Ga;;)if(a instanceof If)a=Jf(a);else return this.Ga=a,H(this.Ga)};
g.W=function(a,b){return b===this.ca?this:new If(b,function(a){return function(){return a.pa(null)}}(this),null,this.H)};g.ua=function(a,b){return ye(b,this)};If.prototype[ic]=function(){return ae(this)};function Kf(a){this.Ka=a;this.end=0;this.F=2;this.R=0}Kf.prototype.add=function(a){this.Ka[this.end]=a;return this.end+=1};Kf.prototype.Pb=function(){var a=new Lf(this.Ka,0,this.end);this.Ka=null;return a};Kf.prototype.ta=function(){return this.end};function Mf(a){return new Kf(Array(a))}
function Lf(a,b,c){this.M=a;this.Nb=b;this.end=c;this.F=524306;this.R=0}g=Lf.prototype;g.ta=function(){return this.end-this.Nb};g.za=function(a,b){return this.M[this.Nb+b]};g.Oa=function(a,b,c){return 0<=b&&b<this.end-this.Nb?this.M[this.Nb+b]:c};g.tg=function(){if(this.Nb===this.end)throw Error("-drop-first of empty chunk");return new Lf(this.M,this.Nb+1,this.end)};g.xb=function(a,b){return pe(this.M,b,this.M[this.Nb],this.Nb+1)};g.mb=function(a,b,c){return pe(this.M,b,c,this.Nb)};
function Nf(a,b,c,d){this.Pb=a;this.uc=b;this.ca=c;this.H=d;this.F=31850732;this.R=1536}g=Nf.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.ca};g.Hb=function(){return 1<tc(this.Pb)?new Nf(vd(this.Pb),this.uc,null,null):null==this.uc?null:ed(this.uc)};g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};
g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Zd};g.Cb=function(){return y.a(this.Pb,0)};g.Ib=function(){return 1<tc(this.Pb)?new Nf(vd(this.Pb),this.uc,null,null):null==this.uc?Zd:this.uc};g.pa=function(){return this};g.tf=function(){return this.Pb};g.De=function(){return null==this.uc?Zd:this.uc};g.W=function(a,b){return b===this.ca?this:new Nf(this.Pb,this.uc,b,this.H)};g.ua=function(a,b){return ye(b,this)};g.ug=function(){return null==this.uc?null:this.uc};Nf.prototype[ic]=function(){return ae(this)};
function Of(a,b){return 0===tc(a)?b:new Nf(a,b,null,null)}function Pf(a,b){a.add(b)}function lf(a){var b=[];for(a=H(a);;)if(null!=a)b.push(I(a)),a=J(a);else return b}function Qf(a,b){if(qe(b))return K(b);var c=0;for(b=H(b);;)if(null!=b&&c<a)c+=1,b=J(b);else return c}
var Rf=function Rf(a){if(null==a)return null;var c=J(a);return null==c?H(I(a)):ye(I(a),Rf.g?Rf.g(c):Rf.call(null,c))},Sf=function Sf(a){switch(arguments.length){case 0:return Sf.J();case 1:return Sf.g(arguments[0]);case 2:return Sf.a(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Sf.S(arguments[0],arguments[1],new Xd(c.slice(2),0,null))}};Sf.J=function(){return new If(null,function(){return null},null,null)};
Sf.g=function(a){return new If(null,function(){return a},null,null)};Sf.a=function(a,b){return new If(null,function(){var c=H(a);return c?Ye(c)?Of(wd(c),Sf.a(xd(c),b)):ye(I(c),Sf.a(Yd(c),b)):b},null,null)};Sf.S=function(a,b,c){return function h(a,b){return new If(null,function(){var c=H(a);return c?Ye(c)?Of(wd(c),h(xd(c),b)):ye(I(c),h(Yd(c),b)):q(b)?h(I(b),J(b)):null},null,null)}(Sf.a(a,b),c)};Sf.ka=function(a){var b=I(a),c=J(a);a=I(c);c=J(c);return this.S(b,a,c)};Sf.ga=2;
var Tf=function Tf(a){switch(arguments.length){case 0:return Tf.J();case 1:return Tf.g(arguments[0]);case 2:return Tf.a(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Tf.S(arguments[0],arguments[1],new Xd(c.slice(2),0,null))}};Tf.J=function(){return pd(Fe)};Tf.g=function(a){return a};Tf.a=function(a,b){return qd(a,b)};Tf.S=function(a,b,c){for(;;)if(a=qd(a,b),q(c))b=I(c),c=J(c);else return a};
Tf.ka=function(a){var b=I(a),c=J(a);a=I(c);c=J(c);return this.S(b,a,c)};Tf.ga=2;function Uf(a,b,c){return sd(a,b,c)}
function Vf(a,b,c){var d=H(c);if(0===b)return a.J?a.J():a.call(null);c=zc(d);var e=Ac(d);if(1===b)return a.g?a.g(c):a.call(null,c);d=zc(e);var f=Ac(e);if(2===b)return a.a?a.a(c,d):a.call(null,c,d);e=zc(f);var h=Ac(f);if(3===b)return a.j?a.j(c,d,e):a.call(null,c,d,e);f=zc(h);var k=Ac(h);if(4===b)return a.fa?a.fa(c,d,e,f):a.call(null,c,d,e,f);h=zc(k);var l=Ac(k);if(5===b)return a.ya?a.ya(c,d,e,f,h):a.call(null,c,d,e,f,h);k=zc(l);var m=Ac(l);if(6===b)return a.Za?a.Za(c,d,e,f,h,k):a.call(null,c,d,e,f,
h,k);l=zc(m);var t=Ac(m);if(7===b)return a.$a?a.$a(c,d,e,f,h,k,l):a.call(null,c,d,e,f,h,k,l);m=zc(t);var u=Ac(t);if(8===b)return a.Sa?a.Sa(c,d,e,f,h,k,l,m):a.call(null,c,d,e,f,h,k,l,m);t=zc(u);var w=Ac(u);if(9===b)return a.ab?a.ab(c,d,e,f,h,k,l,m,t):a.call(null,c,d,e,f,h,k,l,m,t);u=zc(w);var v=Ac(w);if(10===b)return a.Ya?a.Ya(c,d,e,f,h,k,l,m,t,u):a.call(null,c,d,e,f,h,k,l,m,t,u);w=zc(v);var z=Ac(v);if(11===b)return a.eb?a.eb(c,d,e,f,h,k,l,m,t,u,w):a.call(null,c,d,e,f,h,k,l,m,t,u,w);v=zc(z);var B=
Ac(z);if(12===b)return a.fb?a.fb(c,d,e,f,h,k,l,m,t,u,w,v):a.call(null,c,d,e,f,h,k,l,m,t,u,w,v);z=zc(B);var E=Ac(B);if(13===b)return a.gb?a.gb(c,d,e,f,h,k,l,m,t,u,w,v,z):a.call(null,c,d,e,f,h,k,l,m,t,u,w,v,z);B=zc(E);var D=Ac(E);if(14===b)return a.hb?a.hb(c,d,e,f,h,k,l,m,t,u,w,v,z,B):a.call(null,c,d,e,f,h,k,l,m,t,u,w,v,z,B);E=zc(D);var R=Ac(D);if(15===b)return a.ib?a.ib(c,d,e,f,h,k,l,m,t,u,w,v,z,B,E):a.call(null,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E);D=zc(R);var Z=Ac(R);if(16===b)return a.jb?a.jb(c,d,e,f,
h,k,l,m,t,u,w,v,z,B,E,D):a.call(null,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D);R=zc(Z);var Ga=Ac(Z);if(17===b)return a.kb?a.kb(c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R):a.call(null,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R);Z=zc(Ga);var Ya=Ac(Ga);if(18===b)return a.lb?a.lb(c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z):a.call(null,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z);Ga=zc(Ya);Ya=Ac(Ya);if(19===b)return a.vb?a.vb(c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga):a.call(null,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga);var P=zc(Ya);Ac(Ya);if(20===
b)return a.Ab?a.Ab(c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga,P):a.call(null,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga,P);throw Error("Only up to 20 arguments supported on functions");}function Xa(a){return null!=a&&(a.F&128||n===a.Fe)?a.Hb(null):H(Yd(a))}function Wf(a,b,c){return null==c?a.g?a.g(b):a.call(a,b):Xf(a,b,zc(c),Xa(c))}function Xf(a,b,c,d){return null==d?a.a?a.a(b,c):a.call(a,b,c):Yf(a,b,c,zc(d),Xa(d))}
function Yf(a,b,c,d,e){return null==e?a.j?a.j(b,c,d):a.call(a,b,c,d):Zf(a,b,c,d,zc(e),Xa(e))}
function Zf(a,b,c,d,e,f){if(null==f)return a.fa?a.fa(b,c,d,e):a.call(a,b,c,d,e);var h=zc(f),k=J(f);if(null==k)return a.ya?a.ya(b,c,d,e,h):a.call(a,b,c,d,e,h);f=zc(k);var l=J(k);if(null==l)return a.Za?a.Za(b,c,d,e,h,f):a.call(a,b,c,d,e,h,f);k=zc(l);var m=J(l);if(null==m)return a.$a?a.$a(b,c,d,e,h,f,k):a.call(a,b,c,d,e,h,f,k);l=zc(m);var t=J(m);if(null==t)return a.Sa?a.Sa(b,c,d,e,h,f,k,l):a.call(a,b,c,d,e,h,f,k,l);m=zc(t);var u=J(t);if(null==u)return a.ab?a.ab(b,c,d,e,h,f,k,l,m):a.call(a,b,c,d,e,h,
f,k,l,m);t=zc(u);var w=J(u);if(null==w)return a.Ya?a.Ya(b,c,d,e,h,f,k,l,m,t):a.call(a,b,c,d,e,h,f,k,l,m,t);u=zc(w);var v=J(w);if(null==v)return a.eb?a.eb(b,c,d,e,h,f,k,l,m,t,u):a.call(a,b,c,d,e,h,f,k,l,m,t,u);w=zc(v);var z=J(v);if(null==z)return a.fb?a.fb(b,c,d,e,h,f,k,l,m,t,u,w):a.call(a,b,c,d,e,h,f,k,l,m,t,u,w);v=zc(z);var B=J(z);if(null==B)return a.gb?a.gb(b,c,d,e,h,f,k,l,m,t,u,w,v):a.call(a,b,c,d,e,h,f,k,l,m,t,u,w,v);z=zc(B);var E=J(B);if(null==E)return a.hb?a.hb(b,c,d,e,h,f,k,l,m,t,u,w,v,z):
a.call(a,b,c,d,e,h,f,k,l,m,t,u,w,v,z);B=zc(E);var D=J(E);if(null==D)return a.ib?a.ib(b,c,d,e,h,f,k,l,m,t,u,w,v,z,B):a.call(a,b,c,d,e,h,f,k,l,m,t,u,w,v,z,B);E=zc(D);var R=J(D);if(null==R)return a.jb?a.jb(b,c,d,e,h,f,k,l,m,t,u,w,v,z,B,E):a.call(a,b,c,d,e,h,f,k,l,m,t,u,w,v,z,B,E);D=zc(R);var Z=J(R);if(null==Z)return a.kb?a.kb(b,c,d,e,h,f,k,l,m,t,u,w,v,z,B,E,D):a.call(a,b,c,d,e,h,f,k,l,m,t,u,w,v,z,B,E,D);R=zc(Z);var Ga=J(Z);if(null==Ga)return a.lb?a.lb(b,c,d,e,h,f,k,l,m,t,u,w,v,z,B,E,D,R):a.call(a,b,
c,d,e,h,f,k,l,m,t,u,w,v,z,B,E,D,R);Z=zc(Ga);var Ya=J(Ga);if(null==Ya)return a.vb?a.vb(b,c,d,e,h,f,k,l,m,t,u,w,v,z,B,E,D,R,Z):a.call(a,b,c,d,e,h,f,k,l,m,t,u,w,v,z,B,E,D,R,Z);Ga=zc(Ya);Ya=J(Ya);if(null==Ya)return a.Ab?a.Ab(b,c,d,e,h,f,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga):a.call(a,b,c,d,e,h,f,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga);b=[b,c,d,e,h,f,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga];for(c=Ya;;)if(c)b.push(zc(c)),c=J(c);else break;return a.apply(a,b)}
function Vd(a){switch(arguments.length){case 2:return $f(arguments[0],arguments[1]);case 3:return ag(arguments[0],arguments[1],arguments[2]);case 4:return bg(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return cg(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;return dg(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],new Xd(b.slice(5),0,null))}}
function $f(a,b){if(a.ka){var c=a.ga,d=Qf(c+1,b);return d<=c?Vf(a,d,b):a.ka(b)}b=H(b);return null==b?a.J?a.J():a.call(a):Wf(a,zc(b),Xa(b))}function ag(a,b,c){if(a.ka){b=ye(b,c);var d=a.ga;c=Qf(d,c)+1;return c<=d?Vf(a,c,b):a.ka(b)}return Wf(a,b,H(c))}function bg(a,b,c,d){return a.ka?(b=ye(b,ye(c,d)),c=a.ga,d=2+Qf(c-1,d),d<=c?Vf(a,d,b):a.ka(b)):Xf(a,b,c,H(d))}function cg(a,b,c,d,e){return a.ka?(b=ye(b,ye(c,ye(d,e))),c=a.ga,e=3+Qf(c-2,e),e<=c?Vf(a,e,b):a.ka(b)):Yf(a,b,c,d,H(e))}
function dg(a,b,c,d,e,f){return a.ka?(f=Rf(f),b=ye(b,ye(c,ye(d,ye(e,f)))),c=a.ga,f=4+Qf(c-3,f),f<=c?Vf(a,f,b):a.ka(b)):Zf(a,b,c,d,e,Rf(f))}function fg(a,b){return!G.a(a,b)}function gg(a){return H(a)?a:null}
function hg(){if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof Na)Na=function(a){this.ja=a;this.F=393216;this.R=0},Na.prototype.W=function(a,b){return new Na(b)},Na.prototype.V=function(){return this.ja},Na.prototype.Ta=function(){return!1},Na.prototype.next=function(){return Error("No such element")},Na.prototype.remove=function(){return Error("Unsupported operation")},Na.sa=function(){return new U(null,1,5,V,[Za],null)},Na.qa=!0,Na.oa="cljs.core/t_cljs$core6369",Na.ra=function(a,
b){return kd(b,"cljs.core/t_cljs$core6369")};return new Na(jg)}function kg(a){this.Ga=a;this.Y=0}kg.prototype.Ta=function(){return this.Y<this.Ga.length};kg.prototype.next=function(){var a=this.Ga.charAt(this.Y);this.Y+=1;return a};kg.prototype.remove=function(){return Error("Unsupported operation")};function lg(a){this.M=a;this.Y=0}lg.prototype.Ta=function(){return this.Y<this.M.length};lg.prototype.next=function(){var a=this.M[this.Y];this.Y+=1;return a};lg.prototype.remove=function(){return Error("Unsupported operation")};
var mg={},ng={};function og(a){this.Xd=mg;this.ec=a}og.prototype.Ta=function(){this.Xd===mg?(this.Xd=ng,this.ec=H(this.ec)):this.Xd===this.ec&&(this.ec=J(this.Xd));return null!=this.ec};og.prototype.next=function(){if(this.Ta())return this.Xd=this.ec,I(this.ec);throw Error("No such element");};og.prototype.remove=function(){return Error("Unsupported operation")};
function pg(a){if(Wd(a))return Ed(a);if(null==a)return hg();if("string"===typeof a)return new kg(a);if(bc(a))return new lg(a);var b=null==a;b||(b=(b=null!=a?a.F&8388608||n===a.xg?!0:a.F?!1:ec(dd,a):ec(dd,a))?b:bc(a)||"string"===typeof a);if(b)return new og(a);throw Error(["Cannot create iterator from ",r.g(a)].join(""));}function qg(a){this.df=a}qg.prototype.add=function(a){this.df.push(a);return this};qg.prototype.remove=function(){return this.df.shift()};qg.prototype.Re=function(){return 0===this.df.length};
qg.prototype.toString=function(){return["Many: ",r.g(this.df)].join("")};var rg={};function sg(a){this.B=a}sg.prototype.add=function(a){return this.B===rg?(this.B=a,this):new qg([this.B,a])};sg.prototype.remove=function(){if(this.B===rg)throw Error("Removing object from empty buffer");var a=this.B;this.B=rg;return a};sg.prototype.Re=function(){return this.B===rg};sg.prototype.toString=function(){return["Single: ",r.g(this.B)].join("")};function tg(){}tg.prototype.add=function(a){return new sg(a)};
tg.prototype.remove=function(){throw Error("Removing object from empty buffer");};tg.prototype.Re=function(){return!0};tg.prototype.toString=function(){return"Empty"};var ug=new tg,vg=function vg(a){return new If(null,function(){if(a.Ta())for(var c=[],d=0;;){var e=a.Ta();if(q(q(e)?32>d:e))c[d]=a.next(),d+=1;else return Of(new Lf(c,0,d),vg.g?vg.g(a):vg.call(null,a))}else return null},null,null)};function wg(a){this.buffer=ug;this.ec=rg;this.Gf=!1;this.Bc=null;this.fg=a;this.Pi=!1}
wg.prototype.step=function(){if(this.ec!==rg)return!0;for(;;)if(this.ec===rg)if(this.buffer.Re()){if(this.Gf)return!1;if(this.fg.Ta()){if(this.Pi)var a=$f(this.Bc,ye(null,this.fg.next()));else a=this.fg.next(),a=this.Bc.a?this.Bc.a(null,a):this.Bc.call(null,null,a);ie(a)&&(this.Bc.g?this.Bc.g(null):this.Bc.call(null,null),this.Gf=!0)}else this.Bc.g?this.Bc.g(null):this.Bc.call(null,null),this.Gf=!0}else this.ec=this.buffer.remove();else return!0};wg.prototype.Ta=function(){return this.step()};
wg.prototype.next=function(){if(this.Ta()){var a=this.ec;this.ec=rg;return a}throw Error("No such element");};wg.prototype.remove=function(){return Error("Unsupported operation")};wg.prototype[ic]=function(){return ae(this)};
function xg(a,b){var c=new wg(b);c.Bc=function(){var b=function(a){return function(){function b(b,c){a.buffer=a.buffer.add(c);return b}var c=null;c=function(a,c){switch(arguments.length){case 0:return null;case 1:return a;case 2:return b.call(this,a,c)}throw Error("Invalid arity: "+arguments.length);};c.J=function(){return null};c.g=function(a){return a};c.a=b;return c}()}(c);return a.g?a.g(b):a.call(null,b)}();return c}
function zg(a,b){for(;;){if(null==H(b))return!0;var c=I(b);c=a.g?a.g(c):a.call(null,c);if(q(c))b=J(b);else return!1}}function Ag(a,b){for(;;)if(b=H(b)){var c=I(b);c=a.g?a.g(c):a.call(null,c);if(q(c))return c;b=J(b)}else return null}function Bg(a){if(df(a))return 0===(a&1);throw Error(["Argument must be an integer: ",r.g(a)].join(""));}
function Cg(a){return function(){function b(b,c){return cc(a.a?a.a(b,c):a.call(null,b,c))}function c(b){return cc(a.g?a.g(b):a.call(null,b))}function d(){return cc(a.J?a.J():a.call(null))}var e=null,f=function(){function b(a,b,d){var e=null;if(2<arguments.length){e=0;for(var f=Array(arguments.length-2);e<f.length;)f[e]=arguments[e+2],++e;e=new Xd(f,0,null)}return c.call(this,a,b,e)}function c(b,c,d){return cc(bg(a,b,c,d))}b.ga=2;b.ka=function(a){var b=I(a);a=J(a);var d=I(a);a=Yd(a);return c(b,d,a)};
b.S=c;return b}();e=function(a,e,l){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,a);case 2:return b.call(this,a,e);default:var h=null;if(2<arguments.length){h=0;for(var k=Array(arguments.length-2);h<k.length;)k[h]=arguments[h+2],++h;h=new Xd(k,0,null)}return f.S(a,e,h)}throw Error("Invalid arity: "+arguments.length);};e.ga=2;e.ka=f.ka;e.J=d;e.g=c;e.a=b;e.S=f.S;return e}()}
function Dg(a){return function(){function b(b){if(0<arguments.length)for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;return a}b.ga=0;b.ka=function(b){H(b);return a};b.S=function(){return a};return b}()}
var Eg=function Eg(a){switch(arguments.length){case 0:return Eg.J();case 1:return Eg.g(arguments[0]);case 2:return Eg.a(arguments[0],arguments[1]);case 3:return Eg.j(arguments[0],arguments[1],arguments[2]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Eg.S(arguments[0],arguments[1],arguments[2],new Xd(c.slice(3),0,null))}};Eg.J=function(){return qf};Eg.g=function(a){return a};
Eg.a=function(a,b){return function(){function c(c,d,e){c=b.j?b.j(c,d,e):b.call(null,c,d,e);return a.g?a.g(c):a.call(null,c)}function d(c,d){c=b.a?b.a(c,d):b.call(null,c,d);return a.g?a.g(c):a.call(null,c)}function e(c){c=b.g?b.g(c):b.call(null,c);return a.g?a.g(c):a.call(null,c)}function f(){var c=b.J?b.J():b.call(null);return a.g?a.g(c):a.call(null,c)}var h=null,k=function(){function c(a,b,c,e){var f=null;if(3<arguments.length){f=0;for(var h=Array(arguments.length-3);f<h.length;)h[f]=arguments[f+
3],++f;f=new Xd(h,0,null)}return d.call(this,a,b,c,f)}function d(c,d,e,f){c=cg(b,c,d,e,f);return a.g?a.g(c):a.call(null,c)}c.ga=3;c.ka=function(a){var b=I(a);a=J(a);var c=I(a);a=J(a);var e=I(a);a=Yd(a);return d(b,c,e,a)};c.S=d;return c}();h=function(a,b,h,u){switch(arguments.length){case 0:return f.call(this);case 1:return e.call(this,a);case 2:return d.call(this,a,b);case 3:return c.call(this,a,b,h);default:var l=null;if(3<arguments.length){l=0;for(var m=Array(arguments.length-3);l<m.length;)m[l]=
arguments[l+3],++l;l=new Xd(m,0,null)}return k.S(a,b,h,l)}throw Error("Invalid arity: "+arguments.length);};h.ga=3;h.ka=k.ka;h.J=f;h.g=e;h.a=d;h.j=c;h.S=k.S;return h}()};
Eg.j=function(a,b,c){return function(){function d(d,e,f){d=c.j?c.j(d,e,f):c.call(null,d,e,f);d=b.g?b.g(d):b.call(null,d);return a.g?a.g(d):a.call(null,d)}function e(d,e){d=c.a?c.a(d,e):c.call(null,d,e);d=b.g?b.g(d):b.call(null,d);return a.g?a.g(d):a.call(null,d)}function f(d){d=c.g?c.g(d):c.call(null,d);d=b.g?b.g(d):b.call(null,d);return a.g?a.g(d):a.call(null,d)}function h(){var d=c.J?c.J():c.call(null);d=b.g?b.g(d):b.call(null,d);return a.g?a.g(d):a.call(null,d)}var k=null,l=function(){function d(a,
b,c,d){var f=null;if(3<arguments.length){f=0;for(var h=Array(arguments.length-3);f<h.length;)h[f]=arguments[f+3],++f;f=new Xd(h,0,null)}return e.call(this,a,b,c,f)}function e(d,e,f,h){d=cg(c,d,e,f,h);d=b.g?b.g(d):b.call(null,d);return a.g?a.g(d):a.call(null,d)}d.ga=3;d.ka=function(a){var b=I(a);a=J(a);var c=I(a);a=J(a);var d=I(a);a=Yd(a);return e(b,c,d,a)};d.S=e;return d}();k=function(a,b,c,k){switch(arguments.length){case 0:return h.call(this);case 1:return f.call(this,a);case 2:return e.call(this,
a,b);case 3:return d.call(this,a,b,c);default:var m=null;if(3<arguments.length){m=0;for(var u=Array(arguments.length-3);m<u.length;)u[m]=arguments[m+3],++m;m=new Xd(u,0,null)}return l.S(a,b,c,m)}throw Error("Invalid arity: "+arguments.length);};k.ga=3;k.ka=l.ka;k.J=h;k.g=f;k.a=e;k.j=d;k.S=l.S;return k}()};
Eg.S=function(a,b,c,d){return function(a){return function(){function b(a){var b=null;if(0<arguments.length){b=0;for(var d=Array(arguments.length-0);b<d.length;)d[b]=arguments[b+0],++b;b=new Xd(d,0,null)}return c.call(this,b)}function c(b){b=$f(I(a),b);for(var c=J(a);;)if(c){var d=I(c);b=d.g?d.g(b):d.call(null,b);c=J(c)}else return b}b.ga=0;b.ka=function(a){a=H(a);return c(a)};b.S=c;return b}()}(Af(ye(a,ye(b,ye(c,d)))))};
Eg.ka=function(a){var b=I(a),c=J(a);a=I(c);var d=J(c);c=I(d);d=J(d);return this.S(b,a,c,d)};Eg.ga=3;
function Fg(a,b){return function(){function c(c,d,e){return a.fa?a.fa(b,c,d,e):a.call(null,b,c,d,e)}function d(c,d){return a.j?a.j(b,c,d):a.call(null,b,c,d)}function e(c){return a.a?a.a(b,c):a.call(null,b,c)}function f(){return a.g?a.g(b):a.call(null,b)}var h=null,k=function(){function c(a,b,c,e){var f=null;if(3<arguments.length){f=0;for(var h=Array(arguments.length-3);f<h.length;)h[f]=arguments[f+3],++f;f=new Xd(h,0,null)}return d.call(this,a,b,c,f)}function d(c,d,e,f){return dg(a,b,c,d,e,N([f]))}
c.ga=3;c.ka=function(a){var b=I(a);a=J(a);var c=I(a);a=J(a);var e=I(a);a=Yd(a);return d(b,c,e,a)};c.S=d;return c}();h=function(a,b,h,u){switch(arguments.length){case 0:return f.call(this);case 1:return e.call(this,a);case 2:return d.call(this,a,b);case 3:return c.call(this,a,b,h);default:var l=null;if(3<arguments.length){l=0;for(var m=Array(arguments.length-3);l<m.length;)m[l]=arguments[l+3],++l;l=new Xd(m,0,null)}return k.S(a,b,h,l)}throw Error("Invalid arity: "+arguments.length);};h.ga=3;h.ka=k.ka;
h.J=f;h.g=e;h.a=d;h.j=c;h.S=k.S;return h}()}function Ig(a,b){return function f(b,e){return new If(null,function(){var d=H(e);if(d){if(Ye(d)){for(var k=wd(d),l=K(k),m=Mf(l),t=0;;)if(t<l)Pf(m,function(){var d=b+t,e=y.a(k,t);return a.a?a.a(d,e):a.call(null,d,e)}()),t+=1;else break;return Of(m.Pb(),f(b+l,xd(d)))}return ye(function(){var e=I(d);return a.a?a.a(b,e):a.call(null,b,e)}(),f(b+1,Yd(d)))}return null},null,null)}(0,b)}
function Jg(a){this.state=a;this.Yg=this.$i=this.ca=null;this.R=16386;this.F=6455296}g=Jg.prototype;g.equiv=function(a){return this.ea(null,a)};g.ea=function(a,b){return this===b};g.cd=function(){return this.state};g.V=function(){return this.ca};g.na=function(){return la(this)};function Kg(a){return new Jg(a)}
function Lg(a,b){if(a instanceof Jg){var c=a.$i;if(null!=c&&!q(c.g?c.g(b):c.call(null,b)))throw Error("Validator rejected reference state");c=a.state;a.state=b;if(null!=a.Yg)a:for(var d=H(a.Yg),e=null,f=0,h=0;;)if(h<f){var k=e.za(null,h),l=O(k,0,null);k=O(k,1,null);k.fa?k.fa(l,a,c,b):k.call(null,l,a,c,b);h+=1}else if(d=H(d))Ye(d)?(e=wd(d),d=xd(d),l=e,f=K(e),e=l):(e=I(d),l=O(e,0,null),k=O(e,1,null),k.fa?k.fa(l,a,c,b):k.call(null,l,a,c,b),d=J(d),e=null,f=0),h=0;else break a;return b}return Ad(a,b)}
var Mg=function Mg(a){switch(arguments.length){case 2:return Mg.a(arguments[0],arguments[1]);case 3:return Mg.j(arguments[0],arguments[1],arguments[2]);case 4:return Mg.fa(arguments[0],arguments[1],arguments[2],arguments[3]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Mg.S(arguments[0],arguments[1],arguments[2],arguments[3],new Xd(c.slice(4),0,null))}};
Mg.a=function(a,b){if(a instanceof Jg){var c=a.state;b=b.g?b.g(c):b.call(null,c);a=Lg(a,b)}else a=Bd.a(a,b);return a};Mg.j=function(a,b,c){if(a instanceof Jg){var d=a.state;b=b.a?b.a(d,c):b.call(null,d,c);a=Lg(a,b)}else a=Bd.j(a,b,c);return a};Mg.fa=function(a,b,c,d){if(a instanceof Jg){var e=a.state;b=b.j?b.j(e,c,d):b.call(null,e,c,d);a=Lg(a,b)}else a=Bd.fa(a,b,c,d);return a};Mg.S=function(a,b,c,d,e){return a instanceof Jg?Lg(a,cg(b,a.state,c,d,e)):Bd.ya(a,b,c,d,e)};
Mg.ka=function(a){var b=I(a),c=J(a);a=I(c);var d=J(c);c=I(d);var e=J(d);d=I(e);e=J(e);return this.S(b,a,c,d,e)};Mg.ga=4;function Ng(a){this.state=a;this.F=32768;this.R=0}Ng.prototype.xf=function(a,b){return this.state=b};Ng.prototype.cd=function(){return this.state};function Og(a){var b=pd(jg);Cd(a,b)}
var Qg=function Qg(a){switch(arguments.length){case 1:return Qg.g(arguments[0]);case 2:return Qg.a(arguments[0],arguments[1]);case 3:return Qg.j(arguments[0],arguments[1],arguments[2]);case 4:return Qg.fa(arguments[0],arguments[1],arguments[2],arguments[3]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Qg.S(arguments[0],arguments[1],arguments[2],arguments[3],new Xd(c.slice(4),0,null))}};
Qg.g=function(a){return function(b){return function(){function c(c,d){d=a.g?a.g(d):a.call(null,d);return b.a?b.a(c,d):b.call(null,c,d)}function d(a){return b.g?b.g(a):b.call(null,a)}function e(){return b.J?b.J():b.call(null)}var f=null,h=function(){function c(a,b,c){var e=null;if(2<arguments.length){e=0;for(var f=Array(arguments.length-2);e<f.length;)f[e]=arguments[e+2],++e;e=new Xd(f,0,null)}return d.call(this,a,b,e)}function d(c,d,e){d=ag(a,d,e);return b.a?b.a(c,d):b.call(null,c,d)}c.ga=2;c.ka=
function(a){var b=I(a);a=J(a);var c=I(a);a=Yd(a);return d(b,c,a)};c.S=d;return c}();f=function(a,b,f){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b);default:var k=null;if(2<arguments.length){k=0;for(var l=Array(arguments.length-2);k<l.length;)l[k]=arguments[k+2],++k;k=new Xd(l,0,null)}return h.S(a,b,k)}throw Error("Invalid arity: "+arguments.length);};f.ga=2;f.ka=h.ka;f.J=e;f.g=d;f.a=c;f.S=h.S;return f}()}};
Qg.a=function(a,b){return new If(null,function(){var c=H(b);if(c){if(Ye(c)){for(var d=wd(c),e=K(d),f=Mf(e),h=0;;)if(h<e)Pf(f,function(){var b=y.a(d,h);return a.g?a.g(b):a.call(null,b)}()),h+=1;else break;return Of(f.Pb(),Qg.a(a,xd(c)))}return ye(function(){var b=I(c);return a.g?a.g(b):a.call(null,b)}(),Qg.a(a,Yd(c)))}return null},null,null)};
Qg.j=function(a,b,c){return new If(null,function(){var d=H(b),e=H(c);if(d&&e){var f=I(d);var h=I(e);f=a.a?a.a(f,h):a.call(null,f,h);d=ye(f,Qg.j(a,Yd(d),Yd(e)))}else d=null;return d},null,null)};Qg.fa=function(a,b,c,d){return new If(null,function(){var e=H(b),f=H(c),h=H(d);if(e&&f&&h){var k=I(e);var l=I(f),m=I(h);k=a.j?a.j(k,l,m):a.call(null,k,l,m);e=ye(k,Qg.fa(a,Yd(e),Yd(f),Yd(h)))}else e=null;return e},null,null)};
Qg.S=function(a,b,c,d,e){var f=function l(a){return new If(null,function(){var b=Qg.a(H,a);return zg(qf,b)?ye(Qg.a(I,b),l(Qg.a(Yd,b))):null},null,null)};return Qg.a(function(){return function(b){return $f(a,b)}}(f),f(Ee.S(e,d,N([c,b]))))};Qg.ka=function(a){var b=I(a),c=J(a);a=I(c);var d=J(c);c=I(d);var e=J(d);d=I(e);e=J(e);return this.S(b,a,c,d,e)};Qg.ga=4;function Bb(a,b){return new If(null,function(){if(0<a){var c=H(b);return c?ye(I(c),Bb(a-1,Yd(c))):null}return null},null,null)}
function Sg(a,b){return new If(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;)if(b=H(b),0<a&&b)--a,b=Yd(b);else return b}),null,null)}function Tg(a){return Qg.j(function(a){return a},a,Sg(2,a))}function Ug(a,b,c,d,e){this.ca=a;this.count=b;this.B=c;this.next=d;this.H=e;this.F=32374988;this.R=1}g=Ug.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,this.count)}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.ca};g.Hb=function(){return null==this.next?1<this.count?this.next=new Ug(null,this.count-1,this.B,null,null):-1===this.count?this:null:this.next};
g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Zd};g.xb=function(a,b){if(-1===this.count)for(var c=b.a?b.a(this.B,this.B):b.call(null,this.B,this.B);;){if(ie(c))return A(c);c=b.a?b.a(c,this.B):b.call(null,c,this.B)}else for(a=1,c=this.B;;)if(a<this.count){c=b.a?b.a(c,this.B):b.call(null,c,this.B);if(ie(c))return A(c);a+=1}else return c};
g.mb=function(a,b,c){if(-1===this.count)for(c=b.a?b.a(c,this.B):b.call(null,c,this.B);;){if(ie(c))return A(c);c=b.a?b.a(c,this.B):b.call(null,c,this.B)}else for(a=0;;)if(a<this.count){c=b.a?b.a(c,this.B):b.call(null,c,this.B);if(ie(c))return A(c);a+=1}else return c};g.Cb=function(){return this.B};g.Ib=function(){return null==this.next?1<this.count?this.next=new Ug(null,this.count-1,this.B,null,null):-1===this.count?this:Zd:this.next};g.pa=function(){return this};
g.W=function(a,b){return b===this.ca?this:new Ug(b,this.count,this.B,this.next,null)};g.ua=function(a,b){return ye(b,this)};var Wg=function Wg(a){switch(arguments.length){case 0:return Wg.J();case 1:return Wg.g(arguments[0]);case 2:return Wg.a(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Wg.S(arguments[0],arguments[1],new Xd(c.slice(2),0,null))}};Wg.J=function(){return Zd};
Wg.g=function(a){return new If(null,function(){return a},null,null)};Wg.a=function(a,b){return new If(null,function(){var c=H(a),d=H(b);return c&&d?ye(I(c),ye(I(d),Wg.a(Yd(c),Yd(d)))):null},null,null)};Wg.S=function(a,b,c){return new If(null,function(){var d=Qg.a(H,Ee.S(c,b,N([a])));return zg(qf,d)?Sf.a(Qg.a(I,d),$f(Wg,Qg.a(Yd,d))):null},null,null)};Wg.ka=function(a){var b=I(a),c=J(a);a=I(c);c=J(c);return this.S(b,a,c)};Wg.ga=2;function Xg(a,b){return $f(Sf,ag(Qg,a,b))}
function Yg(a){return function(b){return function(){function c(c,d){return q(a.g?a.g(d):a.call(null,d))?b.a?b.a(c,d):b.call(null,c,d):c}function d(a){return b.g?b.g(a):b.call(null,a)}function e(){return b.J?b.J():b.call(null)}var f=null;f=function(a,b){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b)}throw Error("Invalid arity: "+arguments.length);};f.J=e;f.g=d;f.a=c;return f}()}}
function Zg(a,b){return new If(null,function(){var c=H(b);if(c){if(Ye(c)){for(var d=wd(c),e=K(d),f=Mf(e),h=0;;)if(h<e){var k=y.a(d,h);k=a.g?a.g(k):a.call(null,k);q(k)&&(k=y.a(d,h),f.add(k));h+=1}else break;return Of(f.Pb(),Zg(a,xd(c)))}d=I(c);c=Yd(c);return q(a.g?a.g(d):a.call(null,d))?ye(d,Zg(a,c)):Zg(a,c)}return null},null,null)}function $g(a,b){return Zg(Cg(a),b)}
var ch=function ch(a){switch(arguments.length){case 0:return ch.J();case 1:return ch.g(arguments[0]);case 2:return ch.a(arguments[0],arguments[1]);case 3:return ch.j(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}};ch.J=function(){return Fe};ch.g=function(a){return a};ch.a=function(a,b){return null!=a?null!=a&&(a.R&4||n===a.vg)?Xc(rd(x(qd,pd(a),b)),Pe(a)):x(wc,a,b):x(Ee,Zd,b)};
ch.j=function(a,b,c){return null!=a&&(a.R&4||n===a.vg)?Xc(rd(sf(b,Tf,pd(a),c)),Pe(a)):sf(b,Ee,a,c)};ch.ga=3;function dh(a,b){return rd(x(function(b,d){return Tf.a(b,a.g?a.g(d):a.call(null,d))},pd(Fe),b))}function eh(a,b,c){return new If(null,function(){var d=H(c);if(d){var e=Bb(a,d);return a===K(e)?ye(e,eh(a,b,Sg(b,d))):null}return null},null,null)}function fh(a,b){return x(F,a,b)}
var gh=function gh(a,b,c){b=H(b);var e=I(b),f=J(b);return f?Je.j(a,e,function(){var b=F.a(a,e);return gh.j?gh.j(b,f,c):gh.call(null,b,f,c)}()):Je.j(a,e,c)};function hh(a,b,c){return Je.j(a,b,function(){var d=F.a(a,b);return c.g?c.g(d):c.call(null,d)}())}function ih(a,b,c){var d=jh;return Je.j(a,b,function(){var e=F.a(a,b);return d.a?d.a(e,c):d.call(null,e,c)}())}function kh(a,b){this.qb=a;this.M=b}
function lh(a){return new kh(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function nh(a){a=a.aa;return 32>a?0:a-1>>>5<<5}function oh(a,b,c){for(;;){if(0===b)return c;var d=lh(a);d.M[0]=c;c=d;b-=5}}var ph=function ph(a,b,c,d){var f=new kh(c.qb,lc(c.M)),h=a.aa-1>>>b&31;5===b?f.M[h]=d:(c=c.M[h],null!=c?(b-=5,a=ph.fa?ph.fa(a,b,c,d):ph.call(null,a,b,c,d)):a=oh(null,b-5,d),f.M[h]=a);return f};
function qh(a,b){throw Error(["No item ",r.g(a)," in vector of length ",r.g(b)].join(""));}function uh(a,b){if(b>=nh(a))return a.Qa;var c=a.root;for(a=a.shift;;)if(0<a){var d=a-5;c=c.M[b>>>a&31];a=d}else return c.M}function vh(a,b){return 0<=b&&b<a.aa?uh(a,b):qh(b,a.aa)}var wh=function wh(a,b,c,d,e){var h=new kh(c.qb,lc(c.M));if(0===b)h.M[d&31]=e;else{var k=d>>>b&31;b-=5;c=c.M[k];a=wh.ya?wh.ya(a,b,c,d,e):wh.call(null,a,b,c,d,e);h.M[k]=a}return h};
function yh(a,b,c,d,e,f){this.Y=a;this.Ae=b;this.M=c;this.wb=d;this.start=e;this.end=f}yh.prototype.Ta=function(){return this.Y<this.end};yh.prototype.next=function(){32===this.Y-this.Ae&&(this.M=uh(this.wb,this.Y),this.Ae+=32);var a=this.M[this.Y&31];this.Y+=1;return a};function zh(a,b,c){return new yh(b,b-b%32,b<K(a)?uh(a,b):null,a,b,c)}function Ah(a,b,c,d){return c<d?Bh(a,b,M(a,c),c+1,d):b.J?b.J():b.call(null)}
function Bh(a,b,c,d,e){var f=c;c=d;for(d=uh(a,d);;)if(c<e){var h=c&31;d=0===h?uh(a,c):d;h=d[h];f=b.a?b.a(f,h):b.call(null,f,h);if(ie(f))return A(f);c+=1}else return f}function U(a,b,c,d,e,f){this.ca=a;this.aa=b;this.shift=c;this.root=d;this.Qa=e;this.H=f;this.F=167666463;this.R=139268}g=U.prototype;g.dd=n;g.Nc=function(a,b){return 0<=b&&b<this.aa?new Q(b,uh(this,b)[b&31],null):null};g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){return"number"===typeof b?this.Oa(null,b,c):c};
g.Ia=function(a,b,c){a=0;for(var d=c;;)if(a<this.aa){var e=uh(this,a);c=e.length;a:for(var f=0;;)if(f<c){var h=f+a,k=e[f];d=b.j?b.j(d,h,k):b.call(null,d,h,k);if(ie(d)){e=d;break a}f+=1}else{e=d;break a}if(ie(e))return A(e);a+=c;d=e}else return d};g.sf=n;g.za=function(a,b){return vh(this,b)[b&31]};g.Oa=function(a,b,c){return 0<=b&&b<this.aa?uh(this,b)[b&31]:c};
g.oc=function(a,b,c){if(0<=b&&b<this.aa)return nh(this)<=b?(a=lc(this.Qa),a[b&31]=c,new U(this.ca,this.aa,this.shift,this.root,a,null)):new U(this.ca,this.aa,this.shift,wh(this,this.shift,this.root,b,c),this.Qa,null);if(b===this.aa)return this.ua(null,c);throw Error(["Index ",r.g(b)," out of bounds  [0,",r.g(this.aa),"]"].join(""));};g.Fa=function(){return zh(this,0,this.aa)};g.V=function(){return this.ca};g.Da=function(){return new U(this.ca,this.aa,this.shift,this.root,this.Qa,this.H)};g.ta=function(){return this.aa};
g.Oc=function(){return 0<this.aa?this.za(null,this.aa-1):null};g.nc=function(){return 0<this.aa?new we(this,this.aa-1,null):null};g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){if(b instanceof U)if(this.aa===K(b))for(a=this.Fa(null),b=b.Fa(null);;)if(a.Ta()){var c=a.next(),d=b.next();if(!G.a(c,d))return!1}else return!0;else return!1;else return xe(this,b)};
g.Jd=function(){return new Ch(this.aa,this.shift,Dh.g?Dh.g(this.root):Dh.call(null,this.root),Eh.g?Eh.g(this.Qa):Eh.call(null,this.Qa))};g.Ra=function(){return Xc(Fe,this.ca)};g.xb=function(a,b){return Ah(this,b,0,this.aa)};g.mb=function(a,b,c){a=0;for(var d=c;;)if(a<this.aa){var e=uh(this,a);c=e.length;a:for(var f=0;;)if(f<c){var h=e[f];d=b.a?b.a(d,h):b.call(null,d,h);if(ie(d)){e=d;break a}f+=1}else{e=d;break a}if(ie(e))return A(e);a+=c;d=e}else return d};
g.ia=function(a,b,c){if("number"===typeof b)return this.oc(null,b,c);throw Error("Vector's key for assoc must be a number.");};g.Mc=function(a,b){return df(b)?0<=b&&b<this.aa:!1};g.pa=function(){if(0===this.aa)return null;if(32>=this.aa)return new Xd(this.Qa,0,null);a:{var a=this.root;for(var b=this.shift;;)if(0<b)b-=5,a=a.M[0];else{a=a.M;break a}}return Fh?Fh(this,a,0,0):Gh.call(null,this,a,0,0)};g.W=function(a,b){return b===this.ca?this:new U(b,this.aa,this.shift,this.root,this.Qa,this.H)};
g.ua=function(a,b){if(32>this.aa-nh(this)){a=this.Qa.length;for(var c=Array(a+1),d=0;;)if(d<a)c[d]=this.Qa[d],d+=1;else break;c[a]=b;return new U(this.ca,this.aa+1,this.shift,this.root,c,null)}a=(c=this.aa>>>5>1<<this.shift)?this.shift+5:this.shift;c?(c=lh(null),c.M[0]=this.root,d=oh(null,this.shift,new kh(null,this.Qa)),c.M[1]=d):c=ph(this,this.shift,this.root,new kh(null,this.Qa));return new U(this.ca,this.aa+1,a,c,[b],null)};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.za(null,c);case 3:return this.Oa(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.za(null,c)};a.j=function(a,c,d){return this.Oa(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.za(null,a)};g.a=function(a,b){return this.Oa(null,a,b)};
var V=new kh(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),Fe=new U(null,0,5,V,[],ce);function Hh(a){var b=a.length;if(32>b)return new U(null,b,5,V,a,null);for(var c=32,d=(new U(null,32,5,V,a.slice(0,32),null)).Jd(null);;)if(c<b){var e=c+1;d=Tf.a(d,a[c]);c=e}else return rd(d)}U.prototype[ic]=function(){return ae(this)};
function Ih(a){return q(Jh.g?Jh.g(a):Jh.call(null,a))?new U(null,2,5,V,[Kh.g?Kh.g(a):Kh.call(null,a),Lh.g?Lh.g(a):Lh.call(null,a)],null):Xe(a)?Oe(a,null):bc(a)?Hh(a):rd(x(qd,pd(Fe),a))}var Mh=function Mh(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Mh.S(0<c.length?new Xd(c.slice(0),0,null):null)};Mh.S=function(a){return a instanceof Xd&&0===a.Y?Hh(a.M):Ih(a)};Mh.ga=0;Mh.ka=function(a){return this.S(H(a))};
function Nh(a,b,c,d,e,f){this.dc=a;this.node=b;this.Y=c;this.Nb=d;this.ca=e;this.H=f;this.F=32375020;this.R=1536}g=Nh.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.ca};g.Hb=function(){if(this.Nb+1<this.node.length){var a=this.dc;var b=this.node,c=this.Y,d=this.Nb+1;a=Fh?Fh(a,b,c,d):Gh.call(null,a,b,c,d);return null==a?null:a}return this.ug()};
g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Zd};g.xb=function(a,b){return Ah(this.dc,b,this.Y+this.Nb,K(this.dc))};g.mb=function(a,b,c){return Bh(this.dc,b,c,this.Y+this.Nb,K(this.dc))};g.Cb=function(){return this.node[this.Nb]};g.Ib=function(){if(this.Nb+1<this.node.length){var a=this.dc;var b=this.node,c=this.Y,d=this.Nb+1;a=Fh?Fh(a,b,c,d):Gh.call(null,a,b,c,d);return null==a?Zd:a}return this.De(null)};g.pa=function(){return this};
g.tf=function(){var a=this.node;return new Lf(a,this.Nb,a.length)};g.De=function(){var a=this.Y+this.node.length;if(a<tc(this.dc)){var b=this.dc,c=uh(this.dc,a);return Fh?Fh(b,c,a,0):Gh.call(null,b,c,a,0)}return Zd};g.W=function(a,b){return b===this.ca?this:Oh?Oh(this.dc,this.node,this.Y,this.Nb,b):Gh.call(null,this.dc,this.node,this.Y,this.Nb,b)};g.ua=function(a,b){return ye(b,this)};
g.ug=function(){var a=this.Y+this.node.length;if(a<tc(this.dc)){var b=this.dc,c=uh(this.dc,a);return Fh?Fh(b,c,a,0):Gh.call(null,b,c,a,0)}return null};Nh.prototype[ic]=function(){return ae(this)};
function Gh(a){switch(arguments.length){case 3:var b=arguments[0],c=arguments[1],d=arguments[2];return new Nh(b,vh(b,c),c,d,null,null);case 4:return Fh(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return Oh(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}}function Fh(a,b,c,d){return new Nh(a,b,c,d,null,null)}function Oh(a,b,c,d,e){return new Nh(a,b,c,d,e,null)}
function Ph(a,b,c,d,e){this.ca=a;this.wb=b;this.start=c;this.end=d;this.H=e;this.F=167666463;this.R=139264}g=Ph.prototype;g.dd=n;g.Nc=function(a,b){if(0>b)return null;a=this.start+b;return a<this.end?new Q(b,Dc.a(this.wb,a),null):null};g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){return"number"===typeof b?this.Oa(null,b,c):c};
g.Ia=function(a,b,c){a=this.start;for(var d=0;;)if(a<this.end){var e=d,f=y.a(this.wb,a);c=b.j?b.j(c,e,f):b.call(null,c,e,f);if(ie(c))return A(c);d+=1;a+=1}else return c};g.za=function(a,b){return 0>b||this.end<=this.start+b?qh(b,this.end-this.start):y.a(this.wb,this.start+b)};g.Oa=function(a,b,c){return 0>b||this.end<=this.start+b?c:y.j(this.wb,this.start+b,c)};
g.oc=function(a,b,c){a=this.start+b;if(0>b||this.end+1<=a)throw Error(["Index ",r.g(b)," out of bounds [0,",r.g(this.ta(null)),"]"].join(""));b=this.ca;c=Je.j(this.wb,a,c);var d=this.start,e=this.end;a+=1;a=e>a?e:a;return Qh.ya?Qh.ya(b,c,d,a,null):Qh.call(null,b,c,d,a,null)};g.Fa=function(){return null!=this.wb&&n===this.wb.sf?zh(this.wb,this.start,this.end):new og(this)};g.V=function(){return this.ca};g.Da=function(){return new Ph(this.ca,this.wb,this.start,this.end,this.H)};
g.ta=function(){return this.end-this.start};g.Oc=function(){return y.a(this.wb,this.end-1)};g.nc=function(){return this.start!==this.end?new we(this,this.end-this.start-1,null):null};g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Xc(Fe,this.ca)};g.xb=function(a,b){return null!=this.wb&&n===this.wb.sf?Ah(this.wb,b,this.start,this.end):le(this,b)};
g.mb=function(a,b,c){return null!=this.wb&&n===this.wb.sf?Bh(this.wb,b,c,this.start,this.end):me(this,b,c)};g.ia=function(a,b,c){if("number"===typeof b)return this.oc(null,b,c);throw Error("Subvec's key for assoc must be a number.");};g.pa=function(){var a=this;return function(b){return function e(d){return d===a.end?null:ye(y.a(a.wb,d),new If(null,function(){return function(){return e(d+1)}}(b),null,null))}}(this)(a.start)};
g.W=function(a,b){return b===this.ca?this:Qh.ya?Qh.ya(b,this.wb,this.start,this.end,this.H):Qh.call(null,b,this.wb,this.start,this.end,this.H)};g.ua=function(a,b){a=this.ca;b=Uc(this.wb,this.end,b);var c=this.start,d=this.end+1;return Qh.ya?Qh.ya(a,b,c,d,null):Qh.call(null,a,b,c,d,null)};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.za(null,c);case 3:return this.Oa(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.za(null,c)};a.j=function(a,c,d){return this.Oa(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.za(null,a)};g.a=function(a,b){return this.Oa(null,a,b)};Ph.prototype[ic]=function(){return ae(this)};
function Qh(a,b,c,d,e){for(;;)if(b instanceof Ph)c=b.start+c,d=b.start+d,b=b.wb;else{if(!Xe(b))throw Error("v must satisfy IVector");var f=K(b);if(0>c||0>d||c>f||d>f)throw Error("Index out of bounds");return new Ph(a,b,c,d,e)}}function Rh(a,b,c){return Qh(null,a,b|0,c|0,null)}function Sh(a,b){return a===b.qb?b:new kh(a,lc(b.M))}function Dh(a){return new kh({},lc(a.M))}
function Eh(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];Ze(a,0,b,0,a.length);return b}var Th=function Th(a,b,c,d){c=Sh(a.root.qb,c);var f=a.aa-1>>>b&31;if(5===b)a=d;else{var h=c.M[f];null!=h?(b-=5,a=Th.fa?Th.fa(a,b,h,d):Th.call(null,a,b,h,d)):a=oh(a.root.qb,b-5,d)}c.M[f]=a;return c};function Ch(a,b,c,d){this.aa=a;this.shift=b;this.root=c;this.Qa=d;this.R=88;this.F=275}g=Ch.prototype;
g.od=function(a,b){if(this.root.qb){if(32>this.aa-nh(this))this.Qa[this.aa&31]=b;else{a=new kh(this.root.qb,this.Qa);var c=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];c[0]=b;this.Qa=c;this.aa>>>5>1<<this.shift?(b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],c=this.shift+
5,b[0]=this.root,b[1]=oh(this.root.qb,this.shift,a),this.root=new kh(this.root.qb,b),this.shift=c):this.root=Th(this,this.shift,this.root,a)}this.aa+=1;return this}throw Error("conj! after persistent!");};g.fe=function(){if(this.root.qb){this.root.qb=null;var a=this.aa-nh(this),b=Array(a);Ze(this.Qa,0,b,0,a);return new U(null,this.aa,this.shift,this.root,b,null)}throw Error("persistent! called twice");};
g.ed=function(a,b,c){if("number"===typeof b)return Uh(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
function Uh(a,b,c){if(a.root.qb){if(0<=b&&b<a.aa){if(nh(a)<=b)a.Qa[b&31]=c;else{var d=function(){return function(){return function k(d,h){h=Sh(a.root.qb,h);if(0===d)h.M[b&31]=c;else{var f=b>>>d&31;d=k(d-5,h.M[f]);h.M[f]=d}return h}}(a)(a.shift,a.root)}();a.root=d}return a}if(b===a.aa)return a.od(null,c);throw Error(["Index ",r.g(b)," out of bounds for TransientVector of length",r.g(a.aa)].join(""));}throw Error("assoc! after persistent!");}
g.ta=function(){if(this.root.qb)return this.aa;throw Error("count after persistent!");};g.za=function(a,b){if(this.root.qb)return vh(this,b)[b&31];throw Error("nth after persistent!");};g.Oa=function(a,b,c){return 0<=b&&b<this.aa?this.za(null,b):c};g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){return"number"===typeof b?this.Oa(null,b,c):c};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.la(null,c);case 3:return this.X(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.la(null,c)};a.j=function(a,c,d){return this.X(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.la(null,a)};g.a=function(a,b){return this.X(null,a,b)};function Vh(a,b){this.Od=a;this.we=b}
Vh.prototype.Ta=function(){var a=null!=this.Od&&H(this.Od);return a?a:(a=null!=this.we)?this.we.Ta():a};Vh.prototype.next=function(){if(null!=this.Od){var a=I(this.Od);this.Od=J(this.Od);return a}if(null!=this.we&&this.we.Ta())return this.we.next();throw Error("No such element");};Vh.prototype.remove=function(){return Error("Unsupported operation")};function Wh(a,b,c,d){this.ca=a;this.Qb=b;this.$b=c;this.H=d;this.F=31850700;this.R=0}g=Wh.prototype;g.toString=function(){return Gd(this)};
g.equiv=function(a){return this.ea(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.ca};g.Hb=function(){var a=J(this.Qb);return a?new Wh(this.ca,a,this.$b,null):null!=this.$b?new Wh(this.ca,this.$b,null,null):null};g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};
g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Xc(Zd,this.ca)};g.Cb=function(){return I(this.Qb)};g.Ib=function(){var a=J(this.Qb);return a?new Wh(this.ca,a,this.$b,null):null==this.$b?this.Ra(null):new Wh(this.ca,this.$b,null,null)};g.pa=function(){return this};g.W=function(a,b){return b===this.ca?this:new Wh(b,this.Qb,this.$b,this.H)};g.ua=function(a,b){return ye(b,this)};Wh.prototype[ic]=function(){return ae(this)};
function Xh(a,b,c,d,e){this.ca=a;this.count=b;this.Qb=c;this.$b=d;this.H=e;this.R=139264;this.F=31858766}g=Xh.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,this.count.g?this.count.g(this):this.count.call(null,this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.Fa=function(){return new Vh(this.Qb,Ed(this.$b))};g.V=function(){return this.ca};g.Da=function(){return new Xh(this.ca,this.count,this.Qb,this.$b,this.H)};g.ta=function(){return this.count};
g.Oc=function(){return I(this.Qb)};g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Xc(Yh,this.ca)};g.Cb=function(){return I(this.Qb)};g.Ib=function(){return Yd(H(this))};g.pa=function(){var a=H(this.$b),b=this.Qb;return q(q(b)?b:a)?new Wh(null,this.Qb,H(a),null):null};g.W=function(a,b){return b===this.ca?this:new Xh(b,this.count,this.Qb,this.$b,this.H)};
g.ua=function(a,b){q(this.Qb)?(a=this.$b,b=new Xh(this.ca,this.count+1,this.Qb,Ee.a(q(a)?a:Fe,b),null)):b=new Xh(this.ca,this.count+1,Ee.a(this.Qb,b),Fe,null);return b};var Yh=new Xh(null,0,null,Fe,ce);Xh.prototype[ic]=function(){return ae(this)};function Zh(){this.F=2097152;this.R=0}Zh.prototype.equiv=function(a){return this.ea(null,a)};Zh.prototype.ea=function(){return!1};var $h=new Zh;
function ai(a,b){return bf(Ve(b)&&!We(b)?K(a)===K(b)?(null!=a?a.F&1048576||n===a.fh||(a.F?0:ec($c,a)):ec($c,a))?pf(function(a,d,e){return G.a(F.j(b,d,$h),e)?!0:he(!1)},!0,a):zg(function(a){return G.a(F.j(b,I(a),$h),I(J(a)))},a):null:null)}function bi(a,b,c,d){this.Y=0;this.Vi=a;this.og=b;this.sh=c;this.Jg=d}bi.prototype.Ta=function(){var a=this.Y<this.og;return a?a:this.Jg.Ta()};bi.prototype.next=function(){if(this.Y<this.og){var a=M(this.sh,this.Y);this.Y+=1;return new Q(a,Dc.a(this.Vi,a),null)}return this.Jg.next()};
bi.prototype.remove=function(){return Error("Unsupported operation")};function ci(a){this.Ga=a}ci.prototype.next=function(){if(null!=this.Ga){var a=I(this.Ga),b=O(a,0,null);a=O(a,1,null);this.Ga=J(this.Ga);return{value:[b,a],done:!1}}return{value:null,done:!0}};function di(a){this.Ga=a}di.prototype.next=function(){if(null!=this.Ga){var a=I(this.Ga);this.Ga=J(this.Ga);return{value:[a,a],done:!1}}return{value:null,done:!0}};
function ei(a,b){if(b instanceof S)a:{var c=a.length;b=b.Ea;for(var d=0;;){if(c<=d){a=-1;break a}if(a[d]instanceof S&&b===a[d].Ea){a=d;break a}d+=2}}else if(ca(b)||"number"===typeof b)a:for(c=a.length,d=0;;){if(c<=d){a=-1;break a}if(b===a[d]){a=d;break a}d+=2}else if(b instanceof C)a:for(c=a.length,b=b.Ub,d=0;;){if(c<=d){a=-1;break a}if(a[d]instanceof C&&b===a[d].Ub){a=d;break a}d+=2}else if(null==b)a:for(b=a.length,c=0;;){if(b<=c){a=-1;break a}if(null==a[c]){a=c;break a}c+=2}else a:for(c=a.length,
d=0;;){if(c<=d){a=-1;break a}if(G.a(b,a[d])){a=d;break a}d+=2}return a}function Q(a,b,c){this.key=a;this.B=b;this.H=c;this.F=166619935;this.R=0}g=Q.prototype;g.dd=n;g.Nc=function(a,b){switch(b){case 0:return new Q(0,this.key,null);case 1:return new Q(1,this.B,null);default:return null}};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.la=function(a,b){return this.Oa(null,b,null)};g.X=function(a,b,c){return this.Oa(null,b,c)};g.za=function(a,b){if(0===b)return this.key;if(1===b)return this.B;throw Error("Index out of bounds");};
g.Oa=function(a,b,c){return 0===b?this.key:1===b?this.B:c};g.oc=function(a,b,c){return(new U(null,2,5,V,[this.key,this.B],null)).oc(null,b,c)};g.V=function(){return null};g.ta=function(){return 2};g.vf=function(){return this.key};g.wf=function(){return this.B};g.Oc=function(){return this.B};g.nc=function(){return new Xd([this.B,this.key],0,null)};g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return null};
g.xb=function(a,b){return le(this,b)};g.mb=function(a,b,c){return me(this,b,c)};g.ia=function(a,b,c){return Je.j(new U(null,2,5,V,[this.key,this.B],null),b,c)};g.Mc=function(a,b){return 0===b||1===b};g.pa=function(){return new Xd([this.key,this.B],0,null)};g.W=function(a,b){return Oe(new U(null,2,5,V,[this.key,this.B],null),b)};g.ua=function(a,b){return new U(null,3,5,V,[this.key,this.B,b],null)};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.za(null,c);case 3:return this.Oa(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.za(null,c)};a.j=function(a,c,d){return this.Oa(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.za(null,a)};g.a=function(a,b){return this.Oa(null,a,b)};
function Jh(a){return null!=a?a.F&2048||n===a.jj?!0:!1:!1}function fi(a,b,c){this.M=a;this.Y=b;this.Ob=c;this.F=32374990;this.R=0}g=fi.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.Ob};g.Hb=function(){return this.Y<this.M.length-2?new fi(this.M,this.Y+2,null):null};g.ta=function(){return(this.M.length-this.Y)/2};g.na=function(){return be(this)};
g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Zd};g.xb=function(a,b){return ze(b,this)};g.mb=function(a,b,c){return Be(b,c,this)};g.Cb=function(){return new Q(this.M[this.Y],this.M[this.Y+1],null)};g.Ib=function(){return this.Y<this.M.length-2?new fi(this.M,this.Y+2,null):Zd};g.pa=function(){return this};g.W=function(a,b){return b===this.Ob?this:new fi(this.M,this.Y,b)};g.ua=function(a,b){return ye(b,this)};fi.prototype[ic]=function(){return ae(this)};
function gi(a,b){this.M=a;this.Y=0;this.aa=b}gi.prototype.Ta=function(){return this.Y<this.aa};gi.prototype.next=function(){var a=new Q(this.M[this.Y],this.M[this.Y+1],null);this.Y+=2;return a};function p(a,b,c,d){this.ca=a;this.aa=b;this.M=c;this.H=d;this.F=16647951;this.R=139268}g=p.prototype;g.dd=n;g.Nc=function(a,b){a=ei(this.M,b);return-1===a?null:new Q(this.M[a],this.M[a+1],null)};g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};
g.keys=function(){return ae(hi.g?hi.g(this):hi.call(null,this))};g.entries=function(){return new ci(H(H(this)))};g.values=function(){return ae(ii.g?ii.g(this):ii.call(null,this))};g.has=function(a){return ef(this,a)};g.get=function(a,b){return this.X(null,a,b)};
g.forEach=function(a){for(var b=H(this),c=null,d=0,e=0;;)if(e<d){var f=c.za(null,e),h=O(f,0,null);f=O(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=H(b))Ye(b)?(c=wd(b),b=xd(b),h=c,d=K(c),c=h):(c=I(b),h=O(c,0,null),f=O(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=J(b),c=null,d=0),e=0;else return null};g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){a=ei(this.M,b);return-1===a?c:this.M[a+1]};
g.Ia=function(a,b,c){a=this.M.length;for(var d=0;;)if(d<a){var e=this.M[d],f=this.M[d+1];c=b.j?b.j(c,e,f):b.call(null,c,e,f);if(ie(c))return A(c);d+=2}else return c};g.Fa=function(){return new gi(this.M,2*this.aa)};g.V=function(){return this.ca};g.Da=function(){return new p(this.ca,this.aa,this.M,this.H)};g.ta=function(){return this.aa};g.na=function(){var a=this.H;return null!=a?a:this.H=a=de(this)};
g.ea=function(a,b){if(Ve(b)&&!We(b))if(a=this.M.length,this.aa===b.ta(null))for(var c=0;;)if(c<a){var d=b.X(null,this.M[c],$e);if(d!==$e)if(G.a(this.M[c+1],d))c+=2;else return!1;else return!1}else return!0;else return!1;else return!1};g.Jd=function(){return new ji(this.M.length,lc(this.M))};g.Ra=function(){return Xc(jg,this.ca)};g.xb=function(a,b){return mf(this,b)};g.mb=function(a,b,c){return nf(this,b,c)};
g.La=function(a,b){if(0<=ei(this.M,b)){a=this.M.length;var c=a-2;if(0===c)return this.Ra(null);c=Array(c);for(var d=0,e=0;;){if(d>=a)return new p(this.ca,this.aa-1,c,null);G.a(b,this.M[d])?d+=2:(c[e]=this.M[d],c[e+1]=this.M[d+1],e+=2,d+=2)}}else return this};
g.ia=function(a,b,c){a=ei(this.M,b);if(-1===a){if(this.aa<ki){a=this.M;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new p(this.ca,this.aa+1,e,null)}return Xc(Hc(ch.a(li,this),b,c),this.ca)}if(c===this.M[a+1])return this;b=lc(this.M);b[a+1]=c;return new p(this.ca,this.aa,b,null)};g.Mc=function(a,b){return-1!==ei(this.M,b)};g.pa=function(){var a=this.M;return 0<=a.length-2?new fi(a,0,null):null};
g.W=function(a,b){return b===this.ca?this:new p(b,this.aa,this.M,this.H)};g.ua=function(a,b){if(Xe(b))return this.ia(null,y.a(b,0),y.a(b,1));a=this;for(b=H(b);;){if(null==b)return a;var c=I(b);if(Xe(c))a=Hc(a,y.a(c,0),y.a(c,1)),b=J(b);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.la(null,c);case 3:return this.X(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.la(null,c)};a.j=function(a,c,d){return this.X(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.la(null,a)};g.a=function(a,b){return this.X(null,a,b)};var jg=new p(null,0,[],ee),ki=8;
function mi(a){return new p(null,a.length/2,a,null)}function Ke(a){for(var b=[],c=0;;)if(c<a.length){var d=a[c],e=a[c+1],f=ei(b,d);-1===f?(f=b,f.push(d),f.push(e)):b[f+1]=e;c+=2}else break;return new p(null,b.length/2,b,null)}p.prototype[ic]=function(){return ae(this)};function ji(a,b){this.Nd={};this.Ad=a;this.M=b;this.F=259;this.R=56}g=ji.prototype;g.ta=function(){if(q(this.Nd))return vf(this.Ad);throw Error("count after persistent!");};g.la=function(a,b){return this.X(null,b,null)};
g.X=function(a,b,c){if(q(this.Nd))return a=ei(this.M,b),-1===a?c:this.M[a+1];throw Error("lookup after persistent!");};g.od=function(a,b){if(q(this.Nd)){if(Jh(b))return this.ed(null,Kh.g?Kh.g(b):Kh.call(null,b),Lh.g?Lh.g(b):Lh.call(null,b));if(Xe(b))return this.ed(null,b.g?b.g(0):b.call(null,0),b.g?b.g(1):b.call(null,1));a=H(b);for(b=this;;){var c=I(a);if(q(c))a=J(a),b=sd(b,Kh.g?Kh.g(c):Kh.call(null,c),Lh.g?Lh.g(c):Lh.call(null,c));else return b}}else throw Error("conj! after persistent!");};
g.fe=function(){if(q(this.Nd))return this.Nd=!1,new p(null,vf(this.Ad),this.M,null);throw Error("persistent! called twice");};g.ed=function(a,b,c){if(q(this.Nd)){a=ei(this.M,b);if(-1===a)return this.Ad+2<=2*ki?(this.Ad+=2,this.M.push(b),this.M.push(c),this):Uf(ni.a?ni.a(this.Ad,this.M):ni.call(null,this.Ad,this.M),b,c);c!==this.M[a+1]&&(this.M[a+1]=c);return this}throw Error("assoc! after persistent!");};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.X(null,c,null);case 3:return this.X(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.X(null,c,null)};a.j=function(a,c,d){return this.X(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.X(null,a,null)};g.a=function(a,b){return this.X(null,a,b)};
function ni(a,b){for(var c=pd(li),d=0;;)if(d<a)c=sd(c,b[d],b[d+1]),d+=2;else return c}function oi(){this.B=!1}function pi(a,b){return a===b?!0:T(a,b)?!0:G.a(a,b)}function qi(a,b,c){a=lc(a);a[b]=c;return a}function ri(a,b){var c=Array(a.length-2);Ze(a,0,c,0,2*b);Ze(a,2*(b+1),c,2*b,c.length-2*b);return c}function si(a,b,c,d){a=a.td(b);a.M[c]=d;return a}
function ti(a,b,c){for(var d=a.length,e=0,f=c;;)if(e<d){c=a[e];if(null!=c){var h=a[e+1];c=b.j?b.j(f,c,h):b.call(null,f,c,h)}else c=a[e+1],c=null!=c?c.xd(b,f):f;if(ie(c))return c;e+=2;f=c}else return f}function ui(a){this.M=a;this.Y=0;this.vc=this.ue=null}ui.prototype.advance=function(){for(var a=this.M.length;;)if(this.Y<a){var b=this.M[this.Y],c=this.M[this.Y+1];null!=b?b=this.ue=new Q(b,c,null):null!=c?(b=Ed(c),b=b.Ta()?this.vc=b:!1):b=!1;this.Y+=2;if(b)return!0}else return!1};
ui.prototype.Ta=function(){var a=null!=this.ue;return a?a:(a=null!=this.vc)?a:this.advance()};ui.prototype.next=function(){if(null!=this.ue){var a=this.ue;this.ue=null;return a}if(null!=this.vc)return a=this.vc.next(),this.vc.Ta()||(this.vc=null),a;if(this.advance())return this.next();throw Error("No such element");};ui.prototype.remove=function(){return Error("Unsupported operation")};function vi(a,b,c){this.qb=a;this.ub=b;this.M=c;this.R=131072;this.F=0}g=vi.prototype;
g.td=function(a){if(a===this.qb)return this;var b=wf(this.ub),c=Array(0>b?4:2*(b+1));Ze(this.M,0,c,0,2*b);return new vi(a,this.ub,c)};g.se=function(){return wi?wi(this.M):xi.call(null,this.M)};g.xd=function(a,b){return ti(this.M,a,b)};g.gd=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.ub&e))return d;var f=wf(this.ub&e-1);e=this.M[2*f];f=this.M[2*f+1];return null==e?f.gd(a+5,b,c,d):pi(c,e)?f:d};
g.tc=function(a,b,c,d,e,f){var h=1<<(c>>>b&31),k=wf(this.ub&h-1);if(0===(this.ub&h)){var l=wf(this.ub);if(2*l<this.M.length){a=this.td(a);b=a.M;f.B=!0;c=2*(l-k);f=2*k+(c-1);for(l=2*(k+1)+(c-1);0!==c;)b[l]=b[f],--l,--c,--f;b[2*k]=d;b[2*k+1]=e;a.ub|=h;return a}if(16<=l){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=yi.tc(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0===(this.ub>>>
d&1)?d+=1:(k[d]=null!=this.M[e]?yi.tc(a,b+5,Od(this.M[e]),this.M[e],this.M[e+1],f):this.M[e+1],e+=2,d+=1);else break;return new zi(a,l+1,k)}b=Array(2*(l+4));Ze(this.M,0,b,0,2*k);b[2*k]=d;b[2*k+1]=e;Ze(this.M,2*k,b,2*(k+1),2*(l-k));f.B=!0;a=this.td(a);a.M=b;a.ub|=h;return a}l=this.M[2*k];h=this.M[2*k+1];if(null==l)return l=h.tc(a,b+5,c,d,e,f),l===h?this:si(this,a,2*k+1,l);if(pi(d,l))return e===h?this:si(this,a,2*k+1,e);f.B=!0;f=b+5;d=Ai?Ai(a,f,l,h,c,d,e):Bi.call(null,a,f,l,h,c,d,e);e=2*k;k=2*k+1;a=
this.td(a);a.M[e]=null;a.M[k]=d;return a};
g.sc=function(a,b,c,d,e){var f=1<<(b>>>a&31),h=wf(this.ub&f-1);if(0===(this.ub&f)){var k=wf(this.ub);if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=yi.sc(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0===(this.ub>>>c&1)?c+=1:(h[c]=null!=this.M[d]?yi.sc(a+5,Od(this.M[d]),this.M[d],this.M[d+1],e):this.M[d+1],d+=2,c+=1);else break;return new zi(null,k+1,h)}a=Array(2*(k+1));Ze(this.M,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;Ze(this.M,2*h,a,2*(h+1),2*(k-h));e.B=!0;return new vi(null,this.ub|f,a)}var l=this.M[2*h];f=this.M[2*h+1];if(null==l)return k=f.sc(a+5,b,c,d,e),k===f?this:new vi(null,this.ub,qi(this.M,2*h+1,k));if(pi(c,l))return d===f?this:new vi(null,this.ub,qi(this.M,2*h+1,d));e.B=!0;e=this.ub;k=this.M;a+=5;a=Ci?Ci(a,l,f,b,c,d):Bi.call(null,a,l,f,b,c,d);c=2*h;h=2*h+1;d=lc(k);d[c]=null;d[h]=a;return new vi(null,e,d)};
g.re=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.ub&e))return d;var f=wf(this.ub&e-1);e=this.M[2*f];f=this.M[2*f+1];return null==e?f.re(a+5,b,c,d):pi(c,e)?new Q(e,f,null):d};g.te=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.ub&d))return this;var e=wf(this.ub&d-1),f=this.M[2*e],h=this.M[2*e+1];return null==f?(a=h.te(a+5,b,c),a===h?this:null!=a?new vi(null,this.ub,qi(this.M,2*e+1,a)):this.ub===d?null:new vi(null,this.ub^d,ri(this.M,e))):pi(c,f)?new vi(null,this.ub^d,ri(this.M,e)):this};
g.Fa=function(){return new ui(this.M)};var yi=new vi(null,0,[]);function Di(a){this.M=a;this.Y=0;this.vc=null}Di.prototype.Ta=function(){for(var a=this.M.length;;){if(null!=this.vc&&this.vc.Ta())return!0;if(this.Y<a){var b=this.M[this.Y];this.Y+=1;null!=b&&(this.vc=Ed(b))}else return!1}};Di.prototype.next=function(){if(this.Ta())return this.vc.next();throw Error("No such element");};Di.prototype.remove=function(){return Error("Unsupported operation")};
function zi(a,b,c){this.qb=a;this.aa=b;this.M=c;this.R=131072;this.F=0}g=zi.prototype;g.td=function(a){return a===this.qb?this:new zi(a,this.aa,lc(this.M))};g.se=function(){return Ei?Ei(this.M):Fi.call(null,this.M)};g.xd=function(a,b){for(var c=this.M.length,d=0;;)if(d<c){var e=this.M[d];if(null!=e){b=e.xd(a,b);if(ie(b))return b;d+=1}else d+=1}else return b};g.gd=function(a,b,c,d){var e=this.M[b>>>a&31];return null!=e?e.gd(a+5,b,c,d):d};
g.tc=function(a,b,c,d,e,f){var h=c>>>b&31,k=this.M[h];if(null==k)return a=si(this,a,h,yi.tc(a,b+5,c,d,e,f)),a.aa+=1,a;b=k.tc(a,b+5,c,d,e,f);return b===k?this:si(this,a,h,b)};g.sc=function(a,b,c,d,e){var f=b>>>a&31,h=this.M[f];if(null==h)return new zi(null,this.aa+1,qi(this.M,f,yi.sc(a+5,b,c,d,e)));a=h.sc(a+5,b,c,d,e);return a===h?this:new zi(null,this.aa,qi(this.M,f,a))};g.re=function(a,b,c,d){var e=this.M[b>>>a&31];return null!=e?e.re(a+5,b,c,d):d};
g.te=function(a,b,c){var d=b>>>a&31,e=this.M[d];if(null!=e){a=e.te(a+5,b,c);if(a===e)d=this;else if(null==a)if(8>=this.aa)a:{e=this.M;a=e.length;b=Array(2*(this.aa-1));c=0;for(var f=1,h=0;;)if(c<a)c!==d&&null!=e[c]?(b[f]=e[c],f+=2,h|=1<<c,c+=1):c+=1;else{d=new vi(null,h,b);break a}}else d=new zi(null,this.aa-1,qi(this.M,d,a));else d=new zi(null,this.aa,qi(this.M,d,a));return d}return this};g.Fa=function(){return new Di(this.M)};
function Gi(a,b,c){b*=2;for(var d=0;;)if(d<b){if(pi(c,a[d]))return d;d+=2}else return-1}function Hi(a,b,c,d){this.qb=a;this.Qc=b;this.aa=c;this.M=d;this.R=131072;this.F=0}g=Hi.prototype;g.td=function(a){if(a===this.qb)return this;var b=Array(2*(this.aa+1));Ze(this.M,0,b,0,2*this.aa);return new Hi(a,this.Qc,this.aa,b)};g.se=function(){return wi?wi(this.M):xi.call(null,this.M)};g.xd=function(a,b){return ti(this.M,a,b)};
g.gd=function(a,b,c,d){a=Gi(this.M,this.aa,c);return 0>a?d:pi(c,this.M[a])?this.M[a+1]:d};
g.tc=function(a,b,c,d,e,f){if(c===this.Qc){b=Gi(this.M,this.aa,d);if(-1===b){if(this.M.length>2*this.aa)return b=2*this.aa,c=2*this.aa+1,a=this.td(a),a.M[b]=d,a.M[c]=e,f.B=!0,a.aa+=1,a;c=this.M.length;b=Array(c+2);Ze(this.M,0,b,0,c);b[c]=d;b[c+1]=e;f.B=!0;d=this.aa+1;a===this.qb?(this.M=b,this.aa=d,a=this):a=new Hi(this.qb,this.Qc,d,b);return a}return this.M[b+1]===e?this:si(this,a,b+1,e)}return(new vi(a,1<<(this.Qc>>>b&31),[null,this,null,null])).tc(a,b,c,d,e,f)};
g.sc=function(a,b,c,d,e){return b===this.Qc?(a=Gi(this.M,this.aa,c),-1===a?(a=2*this.aa,b=Array(a+2),Ze(this.M,0,b,0,a),b[a]=c,b[a+1]=d,e.B=!0,new Hi(null,this.Qc,this.aa+1,b)):G.a(this.M[a+1],d)?this:new Hi(null,this.Qc,this.aa,qi(this.M,a+1,d))):(new vi(null,1<<(this.Qc>>>a&31),[null,this])).sc(a,b,c,d,e)};g.re=function(a,b,c,d){a=Gi(this.M,this.aa,c);return 0>a?d:pi(c,this.M[a])?new Q(this.M[a],this.M[a+1],null):d};
g.te=function(a,b,c){a=Gi(this.M,this.aa,c);return-1===a?this:1===this.aa?null:new Hi(null,this.Qc,this.aa-1,ri(this.M,vf(a)))};g.Fa=function(){return new ui(this.M)};function Bi(a){switch(arguments.length){case 6:return Ci(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);case 7:return Ai(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}}
function Ci(a,b,c,d,e,f){var h=Od(b);if(h===d)return new Hi(null,h,2,[b,c,e,f]);var k=new oi;return yi.sc(a,h,b,c,k).sc(a,d,e,f,k)}function Ai(a,b,c,d,e,f,h){var k=Od(c);if(k===e)return new Hi(null,k,2,[c,d,f,h]);var l=new oi;return yi.tc(a,b,k,c,d,l).tc(a,b,e,f,h,l)}function Ii(a,b,c,d,e){this.ca=a;this.wc=b;this.Y=c;this.Ga=d;this.H=e;this.F=32374988;this.R=0}g=Ii.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.ca};g.Hb=function(){if(null==this.Ga){var a=this.wc,b=this.Y+2;return Ji?Ji(a,b,null):xi.call(null,a,b,null)}a=this.wc;b=this.Y;var c=J(this.Ga);return Ji?Ji(a,b,c):xi.call(null,a,b,c)};
g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Zd};g.xb=function(a,b){return ze(b,this)};g.mb=function(a,b,c){return Be(b,c,this)};g.Cb=function(){return null==this.Ga?new Q(this.wc[this.Y],this.wc[this.Y+1],null):I(this.Ga)};
g.Ib=function(){var a=this,b=null==a.Ga?function(){var b=a.wc,d=a.Y+2;return Ji?Ji(b,d,null):xi.call(null,b,d,null)}():function(){var b=a.wc,d=a.Y,e=J(a.Ga);return Ji?Ji(b,d,e):xi.call(null,b,d,e)}();return null!=b?b:Zd};g.pa=function(){return this};g.W=function(a,b){return b===this.ca?this:new Ii(b,this.wc,this.Y,this.Ga,this.H)};g.ua=function(a,b){return ye(b,this)};Ii.prototype[ic]=function(){return ae(this)};
function xi(a){switch(arguments.length){case 1:return wi(arguments[0]);case 3:return Ji(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}}function wi(a){return Ji(a,0,null)}function Ji(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new Ii(null,a,b,null,null);var d=a[b+1];if(q(d)&&(d=d.se(),q(d)))return new Ii(null,a,b+2,d,null);b+=2}else return null;else return new Ii(null,a,b,c,null)}
function Ki(a,b,c,d,e){this.ca=a;this.wc=b;this.Y=c;this.Ga=d;this.H=e;this.F=32374988;this.R=0}g=Ki.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.ca};g.Hb=function(){var a=this.wc,b=this.Y,c=J(this.Ga);return qb?qb(a,b,c):Fi.call(null,a,b,c)};g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};
g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Zd};g.xb=function(a,b){return ze(b,this)};g.mb=function(a,b,c){return Be(b,c,this)};g.Cb=function(){return I(this.Ga)};g.Ib=function(){var a=this.wc;var b=this.Y,c=J(this.Ga);a=qb?qb(a,b,c):Fi.call(null,a,b,c);return null!=a?a:Zd};g.pa=function(){return this};g.W=function(a,b){return b===this.ca?this:new Ki(b,this.wc,this.Y,this.Ga,this.H)};g.ua=function(a,b){return ye(b,this)};Ki.prototype[ic]=function(){return ae(this)};
function Fi(a){switch(arguments.length){case 1:return Ei(arguments[0]);case 3:return qb(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}}function Ei(a){return qb(a,0,null)}function qb(a,b,c){if(null==c)for(c=a.length;;)if(b<c){var d=a[b];if(q(d)&&(d=d.se(),q(d)))return new Ki(null,a,b+1,d,null);b+=1}else return null;else return new Ki(null,a,b,c,null)}function Ni(a,b){this.Mb=a;this.Sg=b;this.eg=!1}
Ni.prototype.Ta=function(){return!this.eg||this.Sg.Ta()};Ni.prototype.next=function(){if(this.eg)return this.Sg.next();this.eg=!0;return new Q(null,this.Mb,null)};Ni.prototype.remove=function(){return Error("Unsupported operation")};function Oi(a,b,c,d,e,f){this.ca=a;this.aa=b;this.root=c;this.Lb=d;this.Mb=e;this.H=f;this.F=16123663;this.R=139268}g=Oi.prototype;g.dd=n;g.Nc=function(a,b){return null==b?this.Lb?new Q(null,this.Mb,null):null:null==this.root?null:this.root.re(0,Od(b),b,null)};
g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};g.keys=function(){return ae(hi.g?hi.g(this):hi.call(null,this))};g.entries=function(){return new ci(H(H(this)))};g.values=function(){return ae(ii.g?ii.g(this):ii.call(null,this))};g.has=function(a){return ef(this,a)};g.get=function(a,b){return this.X(null,a,b)};
g.forEach=function(a){for(var b=H(this),c=null,d=0,e=0;;)if(e<d){var f=c.za(null,e),h=O(f,0,null);f=O(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=H(b))Ye(b)?(c=wd(b),b=xd(b),h=c,d=K(c),c=h):(c=I(b),h=O(c,0,null),f=O(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=J(b),c=null,d=0),e=0;else return null};g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){return null==b?this.Lb?this.Mb:c:null==this.root?c:this.root.gd(0,Od(b),b,c)};
g.Ia=function(a,b,c){a=this.Lb?b.j?b.j(c,null,this.Mb):b.call(null,c,null,this.Mb):c;return ie(a)?A(a):null!=this.root?je(this.root.xd(b,a)):a};g.Fa=function(){var a=this.root?Ed(this.root):hg();return this.Lb?new Ni(this.Mb,a):a};g.V=function(){return this.ca};g.Da=function(){return new Oi(this.ca,this.aa,this.root,this.Lb,this.Mb,this.H)};g.ta=function(){return this.aa};g.na=function(){var a=this.H;return null!=a?a:this.H=a=de(this)};g.ea=function(a,b){return ai(this,b)};
g.Jd=function(){return new Pi(this.root,this.aa,this.Lb,this.Mb)};g.Ra=function(){return Xc(li,this.ca)};g.La=function(a,b){if(null==b)return this.Lb?new Oi(this.ca,this.aa-1,this.root,!1,null,null):this;if(null==this.root)return this;a=this.root.te(0,Od(b),b);return a===this.root?this:new Oi(this.ca,this.aa-1,a,this.Lb,this.Mb,null)};
g.ia=function(a,b,c){if(null==b)return this.Lb&&c===this.Mb?this:new Oi(this.ca,this.Lb?this.aa:this.aa+1,this.root,!0,c,null);a=new oi;b=(null==this.root?yi:this.root).sc(0,Od(b),b,c,a);return b===this.root?this:new Oi(this.ca,a.B?this.aa+1:this.aa,b,this.Lb,this.Mb,null)};g.Mc=function(a,b){return null==b?this.Lb:null==this.root?!1:this.root.gd(0,Od(b),b,$e)!==$e};g.pa=function(){if(0<this.aa){var a=null!=this.root?this.root.se():null;return this.Lb?ye(new Q(null,this.Mb,null),a):a}return null};
g.W=function(a,b){return b===this.ca?this:new Oi(b,this.aa,this.root,this.Lb,this.Mb,this.H)};g.ua=function(a,b){if(Xe(b))return this.ia(null,y.a(b,0),y.a(b,1));a=this;for(b=H(b);;){if(null==b)return a;var c=I(b);if(Xe(c))a=Hc(a,y.a(c,0),y.a(c,1)),b=J(b);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.la(null,c);case 3:return this.X(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.la(null,c)};a.j=function(a,c,d){return this.X(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.la(null,a)};g.a=function(a,b){return this.X(null,a,b)};var li=new Oi(null,0,null,!1,null,ee);
function Qi(a){for(var b=[Oi,Cf,p,Ii,Xh,Xd,S,zf,If,Ph,Wh,Ki,kj,ny,fi,U,Ge,we,qj,fj,jj,Nh,Bj,Nf,C,Yk,Ij,Ti],c=b.length,d=0,e=pd(li);;)if(d<c){var f=d+1;e=sd(e,b[d],a[d]);d=f}else return rd(e)}Oi.prototype[ic]=function(){return ae(this)};function Pi(a,b,c,d){this.qb={};this.root=a;this.count=b;this.Lb=c;this.Mb=d;this.F=259;this.R=56}
function Ri(a,b,c){if(a.qb){if(null==b)a.Mb!==c&&(a.Mb=c),a.Lb||(a.count+=1,a.Lb=!0);else{var d=new oi;b=(null==a.root?yi:a.root).tc(a.qb,0,Od(b),b,c,d);b!==a.root&&(a.root=b);d.B&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}g=Pi.prototype;g.ta=function(){if(this.qb)return this.count;throw Error("count after persistent!");};g.la=function(a,b){return null==b?this.Lb?this.Mb:null:null==this.root?null:this.root.gd(0,Od(b),b)};
g.X=function(a,b,c){return null==b?this.Lb?this.Mb:c:null==this.root?c:this.root.gd(0,Od(b),b,c)};g.od=function(a,b){a:if(this.qb)if(Jh(b))a=Ri(this,Kh.g?Kh.g(b):Kh.call(null,b),Lh.g?Lh.g(b):Lh.call(null,b));else if(Xe(b))a=Ri(this,b.g?b.g(0):b.call(null,0),b.g?b.g(1):b.call(null,1));else for(a=H(b),b=this;;){var c=I(a);if(q(c))a=J(a),b=Ri(b,Kh.g?Kh.g(c):Kh.call(null,c),Lh.g?Lh.g(c):Lh.call(null,c));else{a=b;break a}}else throw Error("conj! after persistent");return a};
g.fe=function(){if(this.qb){this.qb=null;var a=new Oi(null,this.count,this.root,this.Lb,this.Mb,null)}else throw Error("persistent! called twice");return a};g.ed=function(a,b,c){return Ri(this,b,c)};g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.la(null,c);case 3:return this.X(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.la(null,c)};a.j=function(a,c,d){return this.X(null,c,d)};return a}();
g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.la(null,a)};g.a=function(a,b){return this.X(null,a,b)};function Si(a,b,c){for(var d=b;;)if(null!=a)b=c?a.left:a.right,d=Ee.a(d,a),a=b;else return d}function Ti(a,b,c,d,e){this.ca=a;this.stack=b;this.md=c;this.aa=d;this.H=e;this.F=32374990;this.R=0}g=Ti.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.ca};g.Hb=function(){var a=I(this.stack);a=Si(this.md?a.right:a.left,J(this.stack),this.md);return null==a?null:new Ti(null,a,this.md,this.aa-1,null)};
g.ta=function(){return 0>this.aa?K(J(this))+1:this.aa};g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Zd};g.xb=function(a,b){return ze(b,this)};g.mb=function(a,b,c){return Be(b,c,this)};g.Cb=function(){var a=this.stack;return null==a?null:Rc(a)};g.Ib=function(){var a=I(this.stack);a=Si(this.md?a.right:a.left,J(this.stack),this.md);return null!=a?new Ti(null,a,this.md,this.aa-1,null):Zd};g.pa=function(){return this};
g.W=function(a,b){return b===this.ca?this:new Ti(b,this.stack,this.md,this.aa,this.H)};g.ua=function(a,b){return ye(b,this)};Ti.prototype[ic]=function(){return ae(this)};function Ui(a,b,c){return new Ti(null,Si(a,null,b),b,c,null)}function Vi(a,b,c,d){return c instanceof Wi?c.left instanceof Wi?new Wi(c.key,c.B,c.left.Kc(),new Xi(a,b,c.right,d)):c.right instanceof Wi?new Wi(c.right.key,c.right.B,new Xi(c.key,c.B,c.left,c.right.left),new Xi(a,b,c.right.right,d)):new Xi(a,b,c,d):new Xi(a,b,c,d)}
function Yi(a,b,c,d){return d instanceof Wi?d.right instanceof Wi?new Wi(d.key,d.B,new Xi(a,b,c,d.left),d.right.Kc()):d.left instanceof Wi?new Wi(d.left.key,d.left.B,new Xi(a,b,c,d.left.left),new Xi(d.key,d.B,d.left.right,d.right)):new Xi(a,b,c,d):new Xi(a,b,c,d)}
function Zi(a,b,c,d){if(c instanceof Wi)return new Wi(a,b,c.Kc(),d);if(d instanceof Xi)return Yi(a,b,c,d.ve());if(d instanceof Wi&&d.left instanceof Xi)return new Wi(d.left.key,d.left.B,new Xi(a,b,c,d.left.left),Yi(d.key,d.B,d.left.right,d.right.ve()));throw Error("red-black tree invariant violation");}
function $i(a,b,c,d){if(d instanceof Wi)return new Wi(a,b,c,d.Kc());if(c instanceof Xi)return Vi(a,b,c.ve(),d);if(c instanceof Wi&&c.right instanceof Xi)return new Wi(c.right.key,c.right.B,Vi(c.key,c.B,c.left.ve(),c.right.left),new Xi(a,b,c.right.right,d));throw Error("red-black tree invariant violation");}
var aj=function aj(a,b,c){var e=null!=a.left?function(){var e=a.left;return aj.j?aj.j(e,b,c):aj.call(null,e,b,c)}():c;if(ie(e))return e;var f=function(){var c=a.key,f=a.B;return b.j?b.j(e,c,f):b.call(null,e,c,f)}();if(ie(f))return f;if(null!=a.right){var h=a.right;return aj.j?aj.j(h,b,f):aj.call(null,h,b,f)}return f};function Xi(a,b,c,d){this.key=a;this.B=b;this.left=c;this.right=d;this.H=null;this.F=166619935;this.R=0}g=Xi.prototype;g.dd=n;
g.Nc=function(a,b){switch(b){case 0:return new Q(0,this.key,null);case 1:return new Q(1,this.B,null);default:return null}};g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();g.lg=function(a){return a.ng(this)};g.ve=function(){return new Wi(this.key,this.B,this.left,this.right)};g.Kc=function(){return this};g.kg=function(a){return a.mg(this)};g.replace=function(a,b,c,d){return new Xi(a,b,c,d)};
g.mg=function(a){return new Xi(a.key,a.B,this,a.right)};g.ng=function(a){return new Xi(a.key,a.B,a.left,this)};g.xd=function(a,b){return aj(this,a,b)};g.la=function(a,b){return this.Oa(null,b,null)};g.X=function(a,b,c){return this.Oa(null,b,c)};g.za=function(a,b){if(0===b)return this.key;if(1===b)return this.B;throw Error("Index out of bounds");};g.Oa=function(a,b,c){return 0===b?this.key:1===b?this.B:c};g.oc=function(a,b,c){return(new U(null,2,5,V,[this.key,this.B],null)).oc(null,b,c)};g.V=function(){return null};
g.ta=function(){return 2};g.vf=function(){return this.key};g.wf=function(){return this.B};g.Oc=function(){return this.B};g.nc=function(){return new Xd([this.B,this.key],0,null)};g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return null};g.xb=function(a,b){return le(this,b)};g.mb=function(a,b,c){return me(this,b,c)};g.ia=function(a,b,c){return Je.j(new U(null,2,5,V,[this.key,this.B],null),b,c)};
g.Mc=function(a,b){return 0===b||1===b};g.pa=function(){return new Xd([this.key,this.B],0,null)};g.W=function(a,b){return Xc(new U(null,2,5,V,[this.key,this.B],null),b)};g.ua=function(a,b){return new U(null,3,5,V,[this.key,this.B,b],null)};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.za(null,c);case 3:return this.Oa(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.za(null,c)};a.j=function(a,c,d){return this.Oa(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.za(null,a)};g.a=function(a,b){return this.Oa(null,a,b)};Xi.prototype[ic]=function(){return ae(this)};
function Wi(a,b,c,d){this.key=a;this.B=b;this.left=c;this.right=d;this.H=null;this.F=166619935;this.R=0}g=Wi.prototype;g.dd=n;g.Nc=function(a,b){switch(b){case 0:return new Q(0,this.key,null);case 1:return new Q(1,this.B,null);default:return null}};
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();g.lg=function(a){return new Wi(this.key,this.B,this.left,a)};g.ve=function(){throw Error("red-black tree invariant violation");};g.Kc=function(){return new Xi(this.key,this.B,this.left,this.right)};
g.kg=function(a){return new Wi(this.key,this.B,a,this.right)};g.replace=function(a,b,c,d){return new Wi(a,b,c,d)};g.mg=function(a){return this.left instanceof Wi?new Wi(this.key,this.B,this.left.Kc(),new Xi(a.key,a.B,this.right,a.right)):this.right instanceof Wi?new Wi(this.right.key,this.right.B,new Xi(this.key,this.B,this.left,this.right.left),new Xi(a.key,a.B,this.right.right,a.right)):new Xi(a.key,a.B,this,a.right)};
g.ng=function(a){return this.right instanceof Wi?new Wi(this.key,this.B,new Xi(a.key,a.B,a.left,this.left),this.right.Kc()):this.left instanceof Wi?new Wi(this.left.key,this.left.B,new Xi(a.key,a.B,a.left,this.left.left),new Xi(this.key,this.B,this.left.right,this.right)):new Xi(a.key,a.B,a.left,this)};g.xd=function(a,b){return aj(this,a,b)};g.la=function(a,b){return this.Oa(null,b,null)};g.X=function(a,b,c){return this.Oa(null,b,c)};
g.za=function(a,b){if(0===b)return this.key;if(1===b)return this.B;throw Error("Index out of bounds");};g.Oa=function(a,b,c){return 0===b?this.key:1===b?this.B:c};g.oc=function(a,b,c){return(new U(null,2,5,V,[this.key,this.B],null)).oc(null,b,c)};g.V=function(){return null};g.ta=function(){return 2};g.vf=function(){return this.key};g.wf=function(){return this.B};g.Oc=function(){return this.B};g.nc=function(){return new Xd([this.B,this.key],0,null)};
g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return null};g.xb=function(a,b){return le(this,b)};g.mb=function(a,b,c){return me(this,b,c)};g.ia=function(a,b,c){return Je.j(new U(null,2,5,V,[this.key,this.B],null),b,c)};g.Mc=function(a,b){return 0===b||1===b};g.pa=function(){return new Xd([this.key,this.B],0,null)};g.W=function(a,b){return Xc(new U(null,2,5,V,[this.key,this.B],null),b)};
g.ua=function(a,b){return new U(null,3,5,V,[this.key,this.B,b],null)};g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.za(null,c);case 3:return this.Oa(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.za(null,c)};a.j=function(a,c,d){return this.Oa(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.za(null,a)};
g.a=function(a,b){return this.Oa(null,a,b)};Wi.prototype[ic]=function(){return ae(this)};
var bj=function bj(a,b,c,d,e){if(null==b)return new Wi(c,d,null,null);var h=function(){var d=b.key;return a.a?a.a(c,d):a.call(null,c,d)}();if(0===h)return e[0]=b,null;if(0>h)return h=function(){var h=b.left;return bj.ya?bj.ya(a,h,c,d,e):bj.call(null,a,h,c,d,e)}(),null!=h?b.kg(h):null;h=function(){var h=b.right;return bj.ya?bj.ya(a,h,c,d,e):bj.call(null,a,h,c,d,e)}();return null!=h?b.lg(h):null},cj=function cj(a,b){if(null==a)return b;if(null==b)return a;if(a instanceof Wi){if(b instanceof Wi){var d=
function(){var d=a.right,f=b.left;return cj.a?cj.a(d,f):cj.call(null,d,f)}();return d instanceof Wi?new Wi(d.key,d.B,new Wi(a.key,a.B,a.left,d.left),new Wi(b.key,b.B,d.right,b.right)):new Wi(a.key,a.B,a.left,new Wi(b.key,b.B,d,b.right))}return new Wi(a.key,a.B,a.left,function(){var d=a.right;return cj.a?cj.a(d,b):cj.call(null,d,b)}())}if(b instanceof Wi)return new Wi(b.key,b.B,function(){var d=b.left;return cj.a?cj.a(a,d):cj.call(null,a,d)}(),b.right);d=function(){var d=a.right,f=b.left;return cj.a?
cj.a(d,f):cj.call(null,d,f)}();return d instanceof Wi?new Wi(d.key,d.B,new Xi(a.key,a.B,a.left,d.left),new Xi(b.key,b.B,d.right,b.right)):Zi(a.key,a.B,a.left,new Xi(b.key,b.B,d,b.right))},dj=function dj(a,b,c,d){if(null!=b){var f=function(){var d=b.key;return a.a?a.a(c,d):a.call(null,c,d)}();if(0===f)return d[0]=b,cj(b.left,b.right);if(0>f)return f=function(){var f=b.left;return dj.fa?dj.fa(a,f,c,d):dj.call(null,a,f,c,d)}(),null!=f||null!=d[0]?b.left instanceof Xi?Zi(b.key,b.B,f,b.right):new Wi(b.key,
b.B,f,b.right):null;f=function(){var f=b.right;return dj.fa?dj.fa(a,f,c,d):dj.call(null,a,f,c,d)}();return null!=f||null!=d[0]?b.right instanceof Xi?$i(b.key,b.B,b.left,f):new Wi(b.key,b.B,b.left,f):null}return null},ej=function ej(a,b,c,d){var f=b.key,h=a.a?a.a(c,f):a.call(null,c,f);return 0===h?b.replace(f,d,b.left,b.right):0>h?b.replace(f,b.B,function(){var f=b.left;return ej.fa?ej.fa(a,f,c,d):ej.call(null,a,f,c,d)}(),b.right):b.replace(f,b.B,b.left,function(){var f=b.right;return ej.fa?ej.fa(a,
f,c,d):ej.call(null,a,f,c,d)}())};function fj(a,b,c,d,e){this.fc=a;this.Jc=b;this.aa=c;this.ca=d;this.H=e;this.F=418776847;this.R=8192}g=fj.prototype;g.dd=n;g.Nc=function(a,b){return gj(this,b)};g.forEach=function(a){for(var b=H(this),c=null,d=0,e=0;;)if(e<d){var f=c.za(null,e),h=O(f,0,null);f=O(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=H(b))Ye(b)?(c=wd(b),b=xd(b),h=c,d=K(c),c=h):(c=I(b),h=O(c,0,null),f=O(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=J(b),c=null,d=0),e=0;else return null};
g.get=function(a,b){return this.X(null,a,b)};g.entries=function(){return new ci(H(H(this)))};g.toString=function(){return Gd(this)};g.keys=function(){return ae(hi.g?hi.g(this):hi.call(null,this))};g.values=function(){return ae(ii.g?ii.g(this):ii.call(null,this))};g.equiv=function(a){return this.ea(null,a)};function gj(a,b){for(var c=a.Jc;;)if(null!=c){var d=c.key;d=a.fc.a?a.fc.a(b,d):a.fc.call(null,b,d);if(0===d)return c;c=0>d?c.left:c.right}else return null}g.has=function(a){return ef(this,a)};
g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){a=gj(this,b);return null!=a?a.B:c};g.Ia=function(a,b,c){return null!=this.Jc?je(aj(this.Jc,b,c)):c};g.V=function(){return this.ca};g.Da=function(){return new fj(this.fc,this.Jc,this.aa,this.ca,this.H)};g.ta=function(){return this.aa};g.nc=function(){return 0<this.aa?Ui(this.Jc,!1,this.aa):null};g.na=function(){var a=this.H;return null!=a?a:this.H=a=de(this)};g.ea=function(a,b){return ai(this,b)};
g.Ra=function(){return new fj(this.fc,null,0,this.ca,0)};g.La=function(a,b){a=[null];b=dj(this.fc,this.Jc,b,a);return null==b?null==M(a,0)?this:new fj(this.fc,null,0,this.ca,null):new fj(this.fc,b.Kc(),this.aa-1,this.ca,null)};g.ia=function(a,b,c){a=[null];var d=bj(this.fc,this.Jc,b,c,a);return null==d?(a=M(a,0),G.a(c,a.B)?this:new fj(this.fc,ej(this.fc,this.Jc,b,c),this.aa,this.ca,null)):new fj(this.fc,d.Kc(),this.aa+1,this.ca,null)};g.Mc=function(a,b){return null!=gj(this,b)};
g.pa=function(){return 0<this.aa?Ui(this.Jc,!0,this.aa):null};g.W=function(a,b){return b===this.ca?this:new fj(this.fc,this.Jc,this.aa,b,this.H)};g.ua=function(a,b){if(Xe(b))return this.ia(null,y.a(b,0),y.a(b,1));a=this;for(b=H(b);;){if(null==b)return a;var c=I(b);if(Xe(c))a=Hc(a,y.a(c,0),y.a(c,1)),b=J(b);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.la(null,c);case 3:return this.X(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.la(null,c)};a.j=function(a,c,d){return this.X(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.la(null,a)};g.a=function(a,b){return this.X(null,a,b)};fj.prototype[ic]=function(){return ae(this)};
var hj=function hj(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return hj.S(0<c.length?new Xd(c.slice(0),0,null):null)};hj.S=function(a){a=H(a);for(var b=pd(li);;)if(a){var c=J(J(a));b=Uf(b,I(a),I(J(a)));a=c}else return rd(b)};hj.ga=0;hj.ka=function(a){return this.S(H(a))};var ij=function ij(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return ij.S(0<c.length?new Xd(c.slice(0),0,null):null)};
ij.S=function(a){a=a instanceof Xd&&0===a.Y?a.M:mc(a);return Ke(a)};ij.ga=0;ij.ka=function(a){return this.S(H(a))};function jj(a,b){this.Na=a;this.Ob=b;this.F=32374988;this.R=0}g=jj.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.Ob};g.Hb=function(){var a=(null!=this.Na?this.Na.F&128||n===this.Na.Fe||(this.Na.F?0:ec(Bc,this.Na)):ec(Bc,this.Na))?this.Na.Hb(null):J(this.Na);return null==a?null:new jj(a,null)};g.na=function(){return be(this)};
g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Zd};g.xb=function(a,b){return ze(b,this)};g.mb=function(a,b,c){return Be(b,c,this)};g.Cb=function(){return this.Na.Cb(null).key};g.Ib=function(){var a=(null!=this.Na?this.Na.F&128||n===this.Na.Fe||(this.Na.F?0:ec(Bc,this.Na)):ec(Bc,this.Na))?this.Na.Hb(null):J(this.Na);return null!=a?new jj(a,null):Zd};g.pa=function(){return this};g.W=function(a,b){return b===this.Ob?this:new jj(this.Na,b)};g.ua=function(a,b){return ye(b,this)};
jj.prototype[ic]=function(){return ae(this)};function hi(a){return(a=H(a))?new jj(a,null):null}function Kh(a){return Nc(a)}function kj(a,b){this.Na=a;this.Ob=b;this.F=32374988;this.R=0}g=kj.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.V=function(){return this.Ob};g.Hb=function(){var a=(null!=this.Na?this.Na.F&128||n===this.Na.Fe||(this.Na.F?0:ec(Bc,this.Na)):ec(Bc,this.Na))?this.Na.Hb(null):J(this.Na);return null==a?null:new kj(a,null)};g.na=function(){return be(this)};
g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Zd};g.xb=function(a,b){return ze(b,this)};g.mb=function(a,b,c){return Be(b,c,this)};g.Cb=function(){return this.Na.Cb(null).B};g.Ib=function(){var a=(null!=this.Na?this.Na.F&128||n===this.Na.Fe||(this.Na.F?0:ec(Bc,this.Na)):ec(Bc,this.Na))?this.Na.Hb(null):J(this.Na);return null!=a?new kj(a,null):Zd};g.pa=function(){return this};g.W=function(a,b){return b===this.Ob?this:new kj(this.Na,b)};g.ua=function(a,b){return ye(b,this)};
kj.prototype[ic]=function(){return ae(this)};function ii(a){return(a=H(a))?new kj(a,null):null}function Lh(a){return Oc(a)}var lj=function lj(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return lj.S(0<c.length?new Xd(c.slice(0),0,null):null)};lj.S=function(a){return q(Ag(qf,a))?of(function(a,c){return Ee.a(q(a)?a:jg,c)},a):null};lj.ga=0;lj.ka=function(a){return this.S(H(a))};
var mj=function mj(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return mj.S(arguments[0],1<c.length?new Xd(c.slice(1),0,null):null)};mj.S=function(a,b){return q(Ag(qf,b))?of(function(a){return function(b,c){return x(a,q(b)?b:jg,H(c))}}(function(b,d){var c=Nc(d),f=Oc(d);return ef(b,c)?Je.j(b,c,function(){var d=F.a(b,c);return a.a?a.a(d,f):a.call(null,d,f)}()):Je.j(b,c,f)}),b):null};mj.ga=1;mj.ka=function(a){var b=I(a);a=J(a);return this.S(b,a)};
function pj(a){this.Sf=a}pj.prototype.Ta=function(){return this.Sf.Ta()};pj.prototype.next=function(){if(this.Sf.Ta())return this.Sf.next().key;throw Error("No such element");};pj.prototype.remove=function(){return Error("Unsupported operation")};function qj(a,b,c){this.ca=a;this.Hc=b;this.H=c;this.F=15077647;this.R=139268}g=qj.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};g.keys=function(){return ae(H(this))};g.entries=function(){return new di(H(H(this)))};
g.values=function(){return ae(H(this))};g.has=function(a){return ef(this,a)};g.forEach=function(a){for(var b=H(this),c=null,d=0,e=0;;)if(e<d){var f=c.za(null,e),h=O(f,0,null);f=O(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=H(b))Ye(b)?(c=wd(b),b=xd(b),h=c,d=K(c),c=h):(c=I(b),h=O(c,0,null),f=O(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=J(b),c=null,d=0),e=0;else return null};g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){a=Jc(this.Hc,b);return q(a)?Nc(a):c};g.Fa=function(){return new pj(Ed(this.Hc))};
g.V=function(){return this.ca};g.Da=function(){return new qj(this.ca,this.Hc,this.H)};g.ta=function(){return tc(this.Hc)};g.na=function(){var a=this.H;return null!=a?a:this.H=a=de(this)};g.ea=function(a,b){if(a=Te(b)){var c=K(this)===K(b);if(c)try{return pf(function(){return function(a,c){return(a=ef(b,c))?a:he(!1)}}(c,a,this),!0,this.Hc)}catch(d){if(d instanceof Error)return!1;throw d;}else return c}else return a};g.Jd=function(){return new rj(pd(this.Hc))};g.Ra=function(){return Xc(zj,this.ca)};
g.pa=function(){return hi(this.Hc)};g.W=function(a,b){return b===this.ca?this:new qj(b,this.Hc,this.H)};g.ua=function(a,b){return new qj(this.ca,Je.j(this.Hc,b,null),null)};g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.la(null,c);case 3:return this.X(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.la(null,c)};a.j=function(a,c,d){return this.X(null,c,d)};return a}();
g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.la(null,a)};g.a=function(a,b){return this.X(null,a,b)};var zj=new qj(null,jg,ee);qj.prototype[ic]=function(){return ae(this)};function rj(a){this.$c=a;this.R=136;this.F=259}g=rj.prototype;g.od=function(a,b){this.$c=sd(this.$c,b,null);return this};g.fe=function(){return new qj(null,rd(this.$c),null)};g.ta=function(){return K(this.$c)};g.la=function(a,b){return this.X(null,b,null)};
g.X=function(a,b,c){return Dc.j(this.$c,b,$e)===$e?c:b};g.call=function(){function a(a,b,c){return Dc.j(this.$c,b,$e)===$e?c:b}function b(a,b){return Dc.j(this.$c,b,$e)===$e?null:b}var c=null;c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+(arguments.length-1));};c.a=b;c.j=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};
g.g=function(a){return Dc.j(this.$c,a,$e)===$e?null:a};g.a=function(a,b){return Dc.j(this.$c,a,$e)===$e?b:a};function Bj(a,b,c){this.ca=a;this.zc=b;this.H=c;this.F=417730831;this.R=8192}g=Bj.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};g.keys=function(){return ae(H(this))};g.entries=function(){return new di(H(H(this)))};g.values=function(){return ae(H(this))};g.has=function(a){return ef(this,a)};
g.forEach=function(a){for(var b=H(this),c=null,d=0,e=0;;)if(e<d){var f=c.za(null,e),h=O(f,0,null);f=O(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=H(b))Ye(b)?(c=wd(b),b=xd(b),h=c,d=K(c),c=h):(c=I(b),h=O(c,0,null),f=O(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=J(b),c=null,d=0),e=0;else return null};g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){a=gj(this.zc,b);return null!=a?a.key:c};g.V=function(){return this.ca};g.Da=function(){return new Bj(this.ca,this.zc,this.H)};
g.ta=function(){return K(this.zc)};g.nc=function(){return 0<K(this.zc)?Qg.a(Kh,jd(this.zc)):null};g.na=function(){var a=this.H;return null!=a?a:this.H=a=de(this)};g.ea=function(a,b){if(a=Te(b)){var c=K(this)===K(b);if(c)try{return pf(function(){return function(a,c){return(a=ef(b,c))?a:he(!1)}}(c,a,this),!0,this.zc)}catch(d){if(d instanceof Error)return!1;throw d;}else return c}else return a};g.Ra=function(){return new Bj(this.ca,uc(this.zc),0)};g.pa=function(){return hi(this.zc)};
g.W=function(a,b){return b===this.ca?this:new Bj(b,this.zc,this.H)};g.ua=function(a,b){return new Bj(this.ca,Je.j(this.zc,b,null),null)};g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.la(null,c);case 3:return this.X(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.la(null,c)};a.j=function(a,c,d){return this.X(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};
g.g=function(a){return this.la(null,a)};g.a=function(a,b){return this.X(null,a,b)};Bj.prototype[ic]=function(){return ae(this)};function Cj(a){if(Te(a))return Oe(a,null);a=H(a);if(null==a)return zj;if(a instanceof Xd&&0===a.Y){a=a.M;for(var b=a.length,c=pd(zj),d=0;;)if(d<b)qd(c,a[d]),d+=1;else break;return rd(c)}for(c=pd(zj);;)if(null!=a)b=J(a),c=qd(c,zc(a)),a=b;else return rd(c)}function Dj(a){for(var b=Fe;;)if(J(a))b=Ee.a(b,I(a)),a=J(a);else return H(b)}
function Hf(a){if(null!=a&&(a.R&4096||n===a.gh))return yd(a);if("string"===typeof a)return a;throw Error(["Doesn't support name: ",r.g(a)].join(""));}function Ej(a,b){var c=pd(jg);a=H(a);for(b=H(b);;)if(a&&b)c=Uf(c,I(a),I(b)),a=J(a),b=J(b);else return rd(c)}function Nb(a,b,c){this.start=a;this.step=b;this.count=c;this.F=82;this.R=0}g=Nb.prototype;g.ta=function(){return this.count};g.Cb=function(){return this.start};g.za=function(a,b){return this.start+b*this.step};
g.Oa=function(a,b,c){return 0<=b&&b<this.count?this.start+b*this.step:c};g.tg=function(){if(1>=this.count)throw Error("-drop-first of empty chunk");return new Nb(this.start+this.step,this.step,this.count-1)};function Hj(a,b,c){this.Y=a;this.end=b;this.step=c}Hj.prototype.Ta=function(){return 0<this.step?this.Y<this.end:this.Y>this.end};Hj.prototype.next=function(){var a=this.Y;this.Y+=this.step;return a};
function Ij(a,b,c,d,e,f,h){this.ca=a;this.start=b;this.end=c;this.step=d;this.Pb=e;this.C=f;this.H=h;this.F=32375006;this.R=140800}g=Ij.prototype;g.toString=function(){return Gd(this)};g.equiv=function(a){return this.ea(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();function dc(a){if(null==a.Pb){var b=a.ta(null);32<b?(a.C=new Ij(null,a.start+32*a.step,a.end,a.step,null,null,null),a.Pb=new Nb(a.start,a.step,32)):a.Pb=new Nb(a.start,a.step,b)}}
g.za=function(a,b){if(0<=b&&b<this.ta(null))return this.start+b*this.step;if(0<=b&&this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};g.Oa=function(a,b,c){return 0<=b&&b<this.ta(null)?this.start+b*this.step:0<=b&&this.start>this.end&&0===this.step?this.start:c};g.Fa=function(){return new Hj(this.start,this.end,this.step)};g.V=function(){return this.ca};g.Da=function(){return new Ij(this.ca,this.start,this.end,this.step,this.Pb,this.C,this.H)};
g.Hb=function(){return 0<this.step?this.start+this.step<this.end?new Ij(null,this.start+this.step,this.end,this.step,null,null,null):null:this.start+this.step>this.end?new Ij(null,this.start+this.step,this.end,this.step,null,null,null):null};g.ta=function(){return Math.ceil((this.end-this.start)/this.step)};g.na=function(){var a=this.H;return null!=a?a:this.H=a=be(this)};g.ea=function(a,b){return xe(this,b)};g.Ra=function(){return Zd};g.xb=function(a,b){return le(this,b)};
g.mb=function(a,b,c){for(a=this.start;;)if(0<this.step?a<this.end:a>this.end){c=b.a?b.a(c,a):b.call(null,c,a);if(ie(c))return A(c);a+=this.step}else return c};g.Cb=function(){return this.start};g.Ib=function(){var a=this.Hb(null);return null==a?Zd:a};g.pa=function(){return this};g.tf=function(){dc(this);return this.Pb};g.De=function(){dc(this);return null==this.C?Zd:this.C};g.W=function(a,b){return b===this.ca?this:new Ij(b,this.start,this.end,this.step,this.Pb,this.C,this.H)};
g.ua=function(a,b){return ye(b,this)};g.ug=function(){return H(this.De(null))};Ij.prototype[ic]=function(){return ae(this)};function Kj(a,b){return new If(null,function(){var c=H(b);return c?ye(I(c),Kj(a,Sg(a,c))):null},null,null)}function Lj(a){return rd(x(function(a,c){return Uf(a,c,F.j(a,c,0)+1)},pd(jg),a))}
function Mj(){var a=Hf;return function(){function b(b,c,d){return new U(null,2,5,V,[Ef.j?Ef.j(b,c,d):Ef.call(null,b,c,d),a.j?a.j(b,c,d):a.call(null,b,c,d)],null)}function c(b,c){return new U(null,2,5,V,[Ef.a?Ef.a(b,c):Ef.call(null,b,c),a.a?a.a(b,c):a.call(null,b,c)],null)}function d(b){return new U(null,2,5,V,[Ef.g?Ef.g(b):Ef.call(null,b),a.g?a.g(b):a.call(null,b)],null)}function e(){return new U(null,2,5,V,[Ef.J?Ef.J():Ef.call(null),a.J?a.J():a.call(null)],null)}var f=null,h=function(){function b(a,
b,d,e){var f=null;if(3<arguments.length){f=0;for(var h=Array(arguments.length-3);f<h.length;)h[f]=arguments[f+3],++f;f=new Xd(h,0,null)}return c.call(this,a,b,d,f)}function c(b,c,d,e){return new U(null,2,5,V,[cg(Ef,b,c,d,e),cg(a,b,c,d,e)],null)}b.ga=3;b.ka=function(a){var b=I(a);a=J(a);var d=I(a);a=J(a);var e=I(a);a=Yd(a);return c(b,d,e,a)};b.S=c;return b}();f=function(a,f,m,t){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,f);case 3:return b.call(this,
a,f,m);default:var k=null;if(3<arguments.length){k=0;for(var l=Array(arguments.length-3);k<l.length;)l[k]=arguments[k+3],++k;k=new Xd(l,0,null)}return h.S(a,f,m,k)}throw Error("Invalid arity: "+arguments.length);};f.ga=3;f.ka=h.ka;f.J=e;f.g=d;f.a=c;f.j=b;f.S=h.S;return f}()}function Oj(a){a:for(var b=a;;)if(b=H(b))b=J(b);else break a;return a}
function Pj(a,b){if("string"===typeof b)return a=a.exec(b),G.a(I(a),b)?1===K(a)?I(a):Ih(a):null;throw new TypeError("re-matches must match against a string.");}function Qj(a,b){if("string"===typeof b)return a=a.exec(b),null==a?null:1===K(a)?I(a):Ih(a);throw new TypeError("re-find must match against a string.");}
function Sj(a,b,c,d,e,f,h){var k=Rb;Rb=null==Rb?null:Rb-1;try{if(null!=Rb&&0>Rb)return kd(a,"#");kd(a,c);if(0===Zb.g(f))H(h)&&kd(a,function(){var a=Tj.g(f);return q(a)?a:"..."}());else{if(H(h)){var l=I(h);b.j?b.j(l,a,f):b.call(null,l,a,f)}for(var m=J(h),t=Zb.g(f)-1;;)if(!m||null!=t&&0===t){H(m)&&0===t&&(kd(a,d),kd(a,function(){var a=Tj.g(f);return q(a)?a:"..."}()));break}else{kd(a,d);var u=I(m);c=a;h=f;b.j?b.j(u,c,h):b.call(null,u,c,h);var w=J(m);c=t-1;m=w;t=c}}return kd(a,e)}finally{Rb=k}}
function Uj(a,b){b=H(b);for(var c=null,d=0,e=0;;)if(e<d){var f=c.za(null,e);kd(a,f);e+=1}else if(b=H(b))c=b,Ye(c)?(b=wd(c),d=xd(c),c=b,f=K(b),b=d,d=f):(f=I(c),kd(a,f),b=J(c),c=null,d=0),e=0;else return null}function Vj(a){if(null==Ob)throw Error("No *print-fn* fn set for evaluation environment");Ob.g?Ob.g(a):Ob.call(null,a)}var Wj={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
function Xj(a){return['"',r.g(a.replace(/[\\"\b\f\n\r\t]/g,function(a){return Wj[a]})),'"'].join("")}function Yj(a,b){return(a=bf(F.a(a,Xb)))?(a=null!=b?b.F&131072||n===b.Ee?!0:!1:!1)?null!=Pe(b):a:a}
function Zj(a,b,c){if(null==a)return kd(b,"nil");if(Yj(c,a)){kd(b,"^");var d=Pe(a);ak.j?ak.j(d,b,c):ak.call(null,d,b,c);kd(b," ")}if(a.qa)return a.ra(a,b,c);if(null!=a?a.F&2147483648||n===a.Pa||(a.F?0:ec(ld,a)):ec(ld,a))return md(a,b,c);if(!0===a||!1===a)return kd(b,r.g(a));if("number"===typeof a)return kd(b,isNaN(a)?"##NaN":a===Number.POSITIVE_INFINITY?"##Inf":a===Number.NEGATIVE_INFINITY?"##-Inf":r.g(a));if(null!=a&&a.constructor===Object)return kd(b,"#js "),d=Qg.a(function(b){return new Q(null!=
Pj(/[A-Za-z_\*\+\?!\-'][\w\*\+\?!\-']*/,b)?Gf.g(b):b,a[b],null)},rb(a)),bk.fa?bk.fa(d,ak,b,c):bk.call(null,d,ak,b,c);if(bc(a))return Sj(b,ak,"#js ["," ","]",c,a);if(ca(a))return q(Wb.g(c))?kd(b,Xj(a)):kd(b,a);if(ja(a)){var e=a.name;c=q(function(){var a=null==e;return a?a:Ea(e)}())?"Function":e;return Uj(b,N(["#object[",c,"","]"]))}if(a instanceof Date)return c=function(a,b){for(a=r.g(a);;)if(K(a)<b)a=["0",a].join("");else return a},Uj(b,N(['#inst "',r.g(a.getUTCFullYear()),"-",c(a.getUTCMonth()+1,
2),"-",c(a.getUTCDate(),2),"T",c(a.getUTCHours(),2),":",c(a.getUTCMinutes(),2),":",c(a.getUTCSeconds(),2),".",c(a.getUTCMilliseconds(),3),"-",'00:00"']));if(a instanceof RegExp)return Uj(b,N(['#"',a.source,'"']));if(q(function(){var b=null==a?null:a.constructor;return null==b?null:b.oa}()))return Uj(b,N(["#object[",a.constructor.oa.replace(/\//g,"."),"]"]));e=function(){var b=null==a?null:a.constructor;return null==b?null:b.name}();c=q(function(){var a=null==e;return a?a:Ea(e)}())?"Object":e;return null==
a.constructor?Uj(b,N(["#object[",c,"]"])):Uj(b,N(["#object[",c," ",r.g(a),"]"]))}function ak(a,b,c){var d=ck.g(c);return q(d)?(c=Je.j(c,dk,Zj),d.j?d.j(a,b,c):d.call(null,a,b,c)):Zj(a,b,c)}function ek(a,b){var c=new Kb;a:{var d=new Fd(c);ak(I(a),d,b);a=H(J(a));for(var e=null,f=0,h=0;;)if(h<f){var k=e.za(null,h);kd(d," ");ak(k,d,b);h+=1}else if(a=H(a))e=a,Ye(e)?(a=wd(e),f=xd(e),e=a,k=K(a),a=f,f=k):(k=I(e),kd(d," "),ak(k,d,b),a=J(e),e=null,f=0),h=0;else break a}return c}
function fk(a,b){return Re(a)?"":r.g(ek(a,b))}function gk(){var a=Tb();Vj("\n");return F.a(a,Ub),null}function hk(a){var b=Je.j(Tb(),Wb,!1);Vj(fk(a,b));return Qb?gk():null}function ik(a){Vj(fk(a,Tb()));return Qb?gk():null}function jk(a,b,c,d,e){return Sj(d,function(a,b,d){var e=Nc(a);c.j?c.j(e,b,d):c.call(null,e,b,d);kd(b," ");a=Oc(a);return c.j?c.j(a,b,d):c.call(null,a,b,d)},[r.g(a),"{"].join(""),", ","}",e,H(b))}
function bk(a,b,c,d){var e=(Ve(a),null),f=O(e,0,null);e=O(e,1,null);return q(f)?jk(["#:",r.g(f)].join(""),e,b,c,d):jk(null,a,b,c,d)}Ng.prototype.Pa=n;Ng.prototype.ma=function(a,b,c){kd(b,"#object[cljs.core.Volatile ");ak(new p(null,1,[kk,this.state],null),b,c);return kd(b,"]")};Xd.prototype.Pa=n;Xd.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};If.prototype.Pa=n;If.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};Q.prototype.Pa=n;
Q.prototype.ma=function(a,b,c){return Sj(b,ak,"["," ","]",c,this)};Ti.prototype.Pa=n;Ti.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};Ii.prototype.Pa=n;Ii.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};Xi.prototype.Pa=n;Xi.prototype.ma=function(a,b,c){return Sj(b,ak,"["," ","]",c,this)};fi.prototype.Pa=n;fi.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};Bj.prototype.Pa=n;Bj.prototype.ma=function(a,b,c){return Sj(b,ak,"#{"," ","}",c,this)};
Nh.prototype.Pa=n;Nh.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};Cf.prototype.Pa=n;Cf.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};we.prototype.Pa=n;we.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};Oi.prototype.Pa=n;Oi.prototype.ma=function(a,b,c){return bk(this,ak,b,c)};Ki.prototype.Pa=n;Ki.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};Ph.prototype.Pa=n;Ph.prototype.ma=function(a,b,c){return Sj(b,ak,"["," ","]",c,this)};
fj.prototype.Pa=n;fj.prototype.ma=function(a,b,c){return bk(this,ak,b,c)};qj.prototype.Pa=n;qj.prototype.ma=function(a,b,c){return Sj(b,ak,"#{"," ","}",c,this)};Nf.prototype.Pa=n;Nf.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};Jg.prototype.Pa=n;Jg.prototype.ma=function(a,b,c){kd(b,"#object[cljs.core.Atom ");ak(new p(null,1,[kk,this.state],null),b,c);return kd(b,"]")};kj.prototype.Pa=n;kj.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};Wi.prototype.Pa=n;
Wi.prototype.ma=function(a,b,c){return Sj(b,ak,"["," ","]",c,this)};Ug.prototype.Pa=n;Ug.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};U.prototype.Pa=n;U.prototype.ma=function(a,b,c){return Sj(b,ak,"["," ","]",c,this)};Wh.prototype.Pa=n;Wh.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};zf.prototype.Pa=n;zf.prototype.ma=function(a,b){return kd(b,"()")};Xh.prototype.Pa=n;Xh.prototype.ma=function(a,b,c){return Sj(b,ak,"#queue ["," ","]",c,H(this))};
p.prototype.Pa=n;p.prototype.ma=function(a,b,c){return bk(this,ak,b,c)};Ij.prototype.Pa=n;Ij.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};wg.prototype.Pa=n;wg.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};jj.prototype.Pa=n;jj.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};Ge.prototype.Pa=n;Ge.prototype.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};function pk(a,b){this.Xa=a;this.Ie=b;this.F=2173173760;this.R=131072}g=pk.prototype;
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return se(this,a,0);case 2:return se(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return se(this,a,0)};a.a=function(a,c){return se(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return ue(this,a,K(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return ue(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return ue(this,a,b)};return b}();g.Fa=function(){var a=pg(this.Ie);return xg(this.Xa,a)};g.pa=function(){var a=pg(this.Ie);a=xg(this.Xa,a);a=vg(a);return H(q(a)?a:Zd)};g.xb=function(a,b){a=rf(b);b=this.Ie;return sf(this.Xa,a,a.J?a.J():a.call(null),b)};
g.mb=function(a,b,c){return sf(this.Xa,rf(b),c,this.Ie)};g.ma=function(a,b,c){return Sj(b,ak,"("," ",")",c,this)};pk.prototype[ic]=function(){return ae(this)};function qk(a){return new pk($f(Eg,Dj(a)),De(a))}function rk(){}
var sk=function sk(a){if(null!=a&&null!=a.eh)return a.eh(a);var c=sk[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=sk._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IEncodeJS.-clj-\x3ejs",a);},tk=function tk(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return tk.S(arguments[0],1<c.length?new Xd(c.slice(1),0,null):null)};
tk.S=function(a,b){var c=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b,d=F.j(c,uk,Hf),e=function(){return function(a){var b=f;return(null!=a?n===a.dh||(a.pd?0:ec(rk,a)):ec(rk,a))?sk(a):"string"===typeof a||"number"===typeof a||a instanceof S||a instanceof C?b.g?b.g(a):b.call(null,a):fk(N([a]),Tb())}}(b,c,c,d),f=function(a,b,c,d){return function w(a){if(null==a)return null;if(null!=a?n===a.dh||(a.pd?0:ec(rk,a)):ec(rk,a))return sk(a);if(a instanceof S)return d.g?d.g(a):d.call(null,a);if(a instanceof C)return r.g(a);
if(Ve(a)){var b={};a=H(a);for(var c=null,f=0,h=0;;)if(h<f){var k=c.za(null,h),l=O(k,0,null),m=O(k,1,null);k=b;l=e(l);m=w(m);k[l]=m;h+=1}else if(a=H(a))Ye(a)?(f=wd(a),a=xd(a),c=f,f=K(f)):(c=I(a),f=O(c,0,null),h=O(c,1,null),c=b,f=e(f),h=w(h),c[f]=h,a=J(a),c=null,f=0),h=0;else break;return b}if(Se(a)){b=[];a=H(Qg.a(w,a));c=null;for(h=f=0;;)if(h<f)k=c.za(null,h),b.push(k),h+=1;else if(a=H(a))c=a,Ye(c)?(a=wd(c),h=xd(c),c=a,f=K(a),a=h):(a=I(c),b.push(a),a=J(c),c=null,f=0),h=0;else break;return b}return a}}(b,
c,c,d);return f(a)};tk.ga=1;tk.ka=function(a){var b=I(a);a=J(a);return this.S(b,a)};function vk(){}var wk=function wk(a,b){if(null!=a&&null!=a.bh)return a.bh(a,b);var d=wk[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=wk._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("IEncodeClojure.-js-\x3eclj",a);};
function xk(a,b){var c=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b,d=F.a(c,yk);return function(a,c,d,k){return function t(e){return(null!=e?n===e.ej||(e.pd?0:ec(vk,e)):ec(vk,e))?wk(e,$f(ij,b)):af(e)?Oj(Qg.a(t,e)):Jh(e)?new Q(t(Nc(e)),t(Oc(e)),null):Se(e)?ch.j(Va(e),Qg.g(t),e):bc(e)?rd(x(function(){return function(a,b){return Tf.a(a,t(b))}}(a,c,d,k),pd(Fe),e)):fc(e)===Object?rd(x(function(a,b,c,d){return function(a,b){var c=d.g?d.g(b):d.call(null,b);return Uf(a,c,t(null!==e&&b in e?e[b]:void 0))}}(a,c,
d,k),pd(jg),rb(e))):e}}(b,c,d,q(d)?Gf:r)(a)}var zk=null;function Ak(){null==zk&&(zk=Kg(new p(null,3,[Bk,jg,Lk,jg,Mk,jg],null)));return zk}function Nk(a,b,c){var d=G.a(b,c);if(d)return d;d=Mk.g(a);d=d.g?d.g(b):d.call(null,b);if(!(d=ef(d,c))&&(d=Xe(c)))if(d=Xe(b))if(d=K(c)===K(b)){d=!0;for(var e=0;;)if(d&&e!==K(c))d=Nk(a,b.g?b.g(e):b.call(null,e),c.g?c.g(e):c.call(null,e)),e+=1;else return d}else return d;else return d;else return d}function Ok(a){var b=A(Ak());return gg(F.a(Bk.g(b),a))}
function Pk(a,b,c,d){Mg.a(a,function(){return A(b)});Mg.a(c,function(){return A(d)})}
var Qk=function Qk(a,b,c){var e=function(){var b=A(c);return b.g?b.g(a):b.call(null,a)}();e=q(q(e)?e.g?e.g(b):e.call(null,b):e)?!0:null;if(q(e))return e;e=function(){for(var e=Ok(b);;)if(0<K(e)){var h=I(e);Qk.j?Qk.j(a,h,c):Qk.call(null,a,h,c);e=Yd(e)}else return null}();if(q(e))return e;e=function(){for(var e=Ok(a);;)if(0<K(e)){var h=I(e);Qk.j?Qk.j(h,b,c):Qk.call(null,h,b,c);e=Yd(e)}else return null}();return q(e)?e:!1};function Rk(a,b,c,d){c=Qk(a,b,c);return q(c)?c:Nk(d,a,b)}
var Sk=function Sk(a,b,c,d,e,f,h,k){var m=x(function(d,f){var h=O(f,0,null);O(f,1,null);if(Nk(A(c),b,h)&&(d=null==d||Rk(h,I(d),e,A(c))?f:d,!Rk(I(d),h,e,A(c))))throw Error(["Multiple methods in multimethod '",r.g(a),"' match dispatch value: ",r.g(b)," -\x3e ",r.g(h)," and ",r.g(I(d)),", and neither is preferred"].join(""));return d},null,A(d)),t=function(){var a;if(a=null==m)a=A(d),a=a.g?a.g(k):a.call(null,k);return q(a)?new U(null,2,5,V,[k,a],null):m}();if(q(t)){if(G.a(A(h),A(c)))return Mg.fa(f,Je,
b,I(J(t))),I(J(t));Pk(f,d,h,c);return Sk.Sa?Sk.Sa(a,b,c,d,e,f,h,k):Sk.call(null,a,b,c,d,e,f,h,k)}return null};function Tk(a,b){throw Error(["No method in multimethod '",r.g(a),"' for dispatch value: ",r.g(b)].join(""));}function Uk(){var a=Td.a("cljs.tools.reader.impl.inspect","inspect*"),b=jc,c=kc,d=Qc,e=Sc,f=nd,h=OA,k=Vk;this.name=a;this.ba=h;this.rh=k;this.Pe=b;this.Ue=c;this.Ui=d;this.Te=e;this.Be=f;this.F=4194305;this.R=4352}g=Uk.prototype;
g.call=function(){function a(a,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P,R,Ga,Z){a=this;var fa=dg(a.ba,b,c,d,e,N([f,h,k,l,m,v,t,u,w,z,E,B,D,P,R,Ga,Z])),Ca=Wk(this,fa);q(Ca)||Tk(a.name,fa);return dg(Ca,b,c,d,e,N([f,h,k,l,m,v,t,u,w,z,E,B,D,P,R,Ga,Z]))}function b(a,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P,R,Ga){a=this;var fa=a.ba.Ab?a.ba.Ab(b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P,R,Ga):a.ba.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P,R,Ga),Ca=Wk(this,fa);q(Ca)||Tk(a.name,fa);return Ca.Ab?Ca.Ab(b,c,d,e,f,h,k,l,m,
v,t,u,w,z,E,B,D,P,R,Ga):Ca.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P,R,Ga)}function c(a,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P,R){a=this;var fa=a.ba.vb?a.ba.vb(b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P,R):a.ba.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P,R),Ca=Wk(this,fa);q(Ca)||Tk(a.name,fa);return Ca.vb?Ca.vb(b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P,R):Ca.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P,R)}function d(a,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P){a=this;var Ca=a.ba.lb?a.ba.lb(b,c,d,e,f,h,k,l,m,v,t,
u,w,z,E,B,D,P):a.ba.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P),fa=Wk(this,Ca);q(fa)||Tk(a.name,Ca);return fa.lb?fa.lb(b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P):fa.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D,P)}function e(a,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D){a=this;var fa=a.ba.kb?a.ba.kb(b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D):a.ba.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D),Ca=Wk(this,fa);q(Ca)||Tk(a.name,fa);return Ca.kb?Ca.kb(b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B,D):Ca.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,
z,E,B,D)}function f(a,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B){a=this;var D=a.ba.jb?a.ba.jb(b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B):a.ba.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B),fa=Wk(this,D);q(fa)||Tk(a.name,D);return fa.jb?fa.jb(b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B):fa.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E,B)}function h(a,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E){a=this;var B=a.ba.ib?a.ba.ib(b,c,d,e,f,h,k,l,m,v,t,u,w,z,E):a.ba.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E),D=Wk(this,B);q(D)||Tk(a.name,B);return D.ib?D.ib(b,c,d,
e,f,h,k,l,m,v,t,u,w,z,E):D.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z,E)}function k(a,b,c,d,e,f,h,k,l,m,v,t,u,w,z){a=this;var E=a.ba.hb?a.ba.hb(b,c,d,e,f,h,k,l,m,v,t,u,w,z):a.ba.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z),B=Wk(this,E);q(B)||Tk(a.name,E);return B.hb?B.hb(b,c,d,e,f,h,k,l,m,v,t,u,w,z):B.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w,z)}function l(a,b,c,d,e,f,h,k,l,m,v,t,u,w){a=this;var z=a.ba.gb?a.ba.gb(b,c,d,e,f,h,k,l,m,v,t,u,w):a.ba.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w),E=Wk(this,z);q(E)||Tk(a.name,z);
return E.gb?E.gb(b,c,d,e,f,h,k,l,m,v,t,u,w):E.call(null,b,c,d,e,f,h,k,l,m,v,t,u,w)}function m(a,b,c,d,e,f,h,k,l,m,v,t,u){a=this;var w=a.ba.fb?a.ba.fb(b,c,d,e,f,h,k,l,m,v,t,u):a.ba.call(null,b,c,d,e,f,h,k,l,m,v,t,u),z=Wk(this,w);q(z)||Tk(a.name,w);return z.fb?z.fb(b,c,d,e,f,h,k,l,m,v,t,u):z.call(null,b,c,d,e,f,h,k,l,m,v,t,u)}function t(a,b,c,d,e,f,h,k,l,m,v,t){a=this;var u=a.ba.eb?a.ba.eb(b,c,d,e,f,h,k,l,m,v,t):a.ba.call(null,b,c,d,e,f,h,k,l,m,v,t),w=Wk(this,u);q(w)||Tk(a.name,u);return w.eb?w.eb(b,
c,d,e,f,h,k,l,m,v,t):w.call(null,b,c,d,e,f,h,k,l,m,v,t)}function u(a,b,c,d,e,f,h,k,l,m,v){a=this;var t=a.ba.Ya?a.ba.Ya(b,c,d,e,f,h,k,l,m,v):a.ba.call(null,b,c,d,e,f,h,k,l,m,v),u=Wk(this,t);q(u)||Tk(a.name,t);return u.Ya?u.Ya(b,c,d,e,f,h,k,l,m,v):u.call(null,b,c,d,e,f,h,k,l,m,v)}function w(a,b,c,d,e,f,h,k,l,m){a=this;var v=a.ba.ab?a.ba.ab(b,c,d,e,f,h,k,l,m):a.ba.call(null,b,c,d,e,f,h,k,l,m),t=Wk(this,v);q(t)||Tk(a.name,v);return t.ab?t.ab(b,c,d,e,f,h,k,l,m):t.call(null,b,c,d,e,f,h,k,l,m)}function v(a,
b,c,d,e,f,h,k,l){a=this;var m=a.ba.Sa?a.ba.Sa(b,c,d,e,f,h,k,l):a.ba.call(null,b,c,d,e,f,h,k,l),v=Wk(this,m);q(v)||Tk(a.name,m);return v.Sa?v.Sa(b,c,d,e,f,h,k,l):v.call(null,b,c,d,e,f,h,k,l)}function z(a,b,c,d,e,f,h,k){a=this;var l=a.ba.$a?a.ba.$a(b,c,d,e,f,h,k):a.ba.call(null,b,c,d,e,f,h,k),m=Wk(this,l);q(m)||Tk(a.name,l);return m.$a?m.$a(b,c,d,e,f,h,k):m.call(null,b,c,d,e,f,h,k)}function B(a,b,c,d,e,f,h){a=this;var k=a.ba.Za?a.ba.Za(b,c,d,e,f,h):a.ba.call(null,b,c,d,e,f,h),l=Wk(this,k);q(l)||Tk(a.name,
k);return l.Za?l.Za(b,c,d,e,f,h):l.call(null,b,c,d,e,f,h)}function E(a,b,c,d,e,f){a=this;var h=a.ba.ya?a.ba.ya(b,c,d,e,f):a.ba.call(null,b,c,d,e,f),k=Wk(this,h);q(k)||Tk(a.name,h);return k.ya?k.ya(b,c,d,e,f):k.call(null,b,c,d,e,f)}function D(a,b,c,d,e){a=this;var f=a.ba.fa?a.ba.fa(b,c,d,e):a.ba.call(null,b,c,d,e),h=Wk(this,f);q(h)||Tk(a.name,f);return h.fa?h.fa(b,c,d,e):h.call(null,b,c,d,e)}function R(a,b,c,d){a=this;var e=a.ba.j?a.ba.j(b,c,d):a.ba.call(null,b,c,d),f=Wk(this,e);q(f)||Tk(a.name,e);
return f.j?f.j(b,c,d):f.call(null,b,c,d)}function Z(a,b,c){a=this;var d=a.ba.a?a.ba.a(b,c):a.ba.call(null,b,c),e=Wk(this,d);q(e)||Tk(a.name,d);return e.a?e.a(b,c):e.call(null,b,c)}function Ga(a,b){a=this;var c=a.ba.g?a.ba.g(b):a.ba.call(null,b),d=Wk(this,c);q(d)||Tk(a.name,c);return d.g?d.g(b):d.call(null,b)}function Ya(a){a=this;var b=a.ba.J?a.ba.J():a.ba.call(null),c=Wk(this,b);q(c)||Tk(a.name,b);return c.J?c.J():c.call(null)}var P=null;P=function(P,fa,$a,Ma,La,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb,
sc,Gc,Lc,Vb,Rd,Sd){switch(arguments.length){case 1:return Ya.call(this,P);case 2:return Ga.call(this,P,fa);case 3:return Z.call(this,P,fa,$a);case 4:return R.call(this,P,fa,$a,Ma);case 5:return D.call(this,P,fa,$a,Ma,La);case 6:return E.call(this,P,fa,$a,Ma,La,Oa);case 7:return B.call(this,P,fa,$a,Ma,La,Oa,Wa);case 8:return z.call(this,P,fa,$a,Ma,La,Oa,Wa,sa);case 9:return v.call(this,P,fa,$a,Ma,La,Oa,Wa,sa,oa);case 10:return w.call(this,P,fa,$a,Ma,La,Oa,Wa,sa,oa,wb);case 11:return u.call(this,P,
fa,$a,Ma,La,Oa,Wa,sa,oa,wb,Sa);case 12:return t.call(this,P,fa,$a,Ma,La,Oa,Wa,sa,oa,wb,Sa,Ra);case 13:return m.call(this,P,fa,$a,Ma,La,Oa,Wa,sa,oa,wb,Sa,Ra,fb);case 14:return l.call(this,P,fa,$a,Ma,La,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb);case 15:return k.call(this,P,fa,$a,Ma,La,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb);case 16:return h.call(this,P,fa,$a,Ma,La,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb);case 17:return f.call(this,P,fa,$a,Ma,La,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb,sc);case 18:return e.call(this,P,fa,$a,Ma,La,Oa,Wa,
sa,oa,wb,Sa,Ra,fb,hb,sb,lb,sc,Gc);case 19:return d.call(this,P,fa,$a,Ma,La,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb,sc,Gc,Lc);case 20:return c.call(this,P,fa,$a,Ma,La,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb,sc,Gc,Lc,Vb);case 21:return b.call(this,P,fa,$a,Ma,La,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb,sc,Gc,Lc,Vb,Rd);case 22:return a.call(this,P,fa,$a,Ma,La,Oa,Wa,sa,oa,wb,Sa,Ra,fb,hb,sb,lb,sc,Gc,Lc,Vb,Rd,Sd)}throw Error("Invalid arity: "+(arguments.length-1));};P.g=Ya;P.a=Ga;P.j=Z;P.fa=R;P.ya=D;P.Za=E;P.$a=B;P.Sa=z;P.ab=
v;P.Ya=w;P.eb=u;P.fb=t;P.gb=m;P.hb=l;P.ib=k;P.jb=h;P.kb=f;P.lb=e;P.vb=d;P.Ab=c;P.be=b;P.Dc=a;return P}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.J=function(){var a=this.ba.J?this.ba.J():this.ba.call(null),b=Wk(this,a);q(b)||Tk(this.name,a);return b.J?b.J():b.call(null)};g.g=function(a){var b=this.ba.g?this.ba.g(a):this.ba.call(null,a),c=Wk(this,b);q(c)||Tk(this.name,b);return c.g?c.g(a):c.call(null,a)};
g.a=function(a,b){var c=this.ba.a?this.ba.a(a,b):this.ba.call(null,a,b),d=Wk(this,c);q(d)||Tk(this.name,c);return d.a?d.a(a,b):d.call(null,a,b)};g.j=function(a,b,c){var d=this.ba.j?this.ba.j(a,b,c):this.ba.call(null,a,b,c),e=Wk(this,d);q(e)||Tk(this.name,d);return e.j?e.j(a,b,c):e.call(null,a,b,c)};g.fa=function(a,b,c,d){var e=this.ba.fa?this.ba.fa(a,b,c,d):this.ba.call(null,a,b,c,d),f=Wk(this,e);q(f)||Tk(this.name,e);return f.fa?f.fa(a,b,c,d):f.call(null,a,b,c,d)};
g.ya=function(a,b,c,d,e){var f=this.ba.ya?this.ba.ya(a,b,c,d,e):this.ba.call(null,a,b,c,d,e),h=Wk(this,f);q(h)||Tk(this.name,f);return h.ya?h.ya(a,b,c,d,e):h.call(null,a,b,c,d,e)};g.Za=function(a,b,c,d,e,f){var h=this.ba.Za?this.ba.Za(a,b,c,d,e,f):this.ba.call(null,a,b,c,d,e,f),k=Wk(this,h);q(k)||Tk(this.name,h);return k.Za?k.Za(a,b,c,d,e,f):k.call(null,a,b,c,d,e,f)};
g.$a=function(a,b,c,d,e,f,h){var k=this.ba.$a?this.ba.$a(a,b,c,d,e,f,h):this.ba.call(null,a,b,c,d,e,f,h),l=Wk(this,k);q(l)||Tk(this.name,k);return l.$a?l.$a(a,b,c,d,e,f,h):l.call(null,a,b,c,d,e,f,h)};g.Sa=function(a,b,c,d,e,f,h,k){var l=this.ba.Sa?this.ba.Sa(a,b,c,d,e,f,h,k):this.ba.call(null,a,b,c,d,e,f,h,k),m=Wk(this,l);q(m)||Tk(this.name,l);return m.Sa?m.Sa(a,b,c,d,e,f,h,k):m.call(null,a,b,c,d,e,f,h,k)};
g.ab=function(a,b,c,d,e,f,h,k,l){var m=this.ba.ab?this.ba.ab(a,b,c,d,e,f,h,k,l):this.ba.call(null,a,b,c,d,e,f,h,k,l),t=Wk(this,m);q(t)||Tk(this.name,m);return t.ab?t.ab(a,b,c,d,e,f,h,k,l):t.call(null,a,b,c,d,e,f,h,k,l)};g.Ya=function(a,b,c,d,e,f,h,k,l,m){var t=this.ba.Ya?this.ba.Ya(a,b,c,d,e,f,h,k,l,m):this.ba.call(null,a,b,c,d,e,f,h,k,l,m),u=Wk(this,t);q(u)||Tk(this.name,t);return u.Ya?u.Ya(a,b,c,d,e,f,h,k,l,m):u.call(null,a,b,c,d,e,f,h,k,l,m)};
g.eb=function(a,b,c,d,e,f,h,k,l,m,t){var u=this.ba.eb?this.ba.eb(a,b,c,d,e,f,h,k,l,m,t):this.ba.call(null,a,b,c,d,e,f,h,k,l,m,t),w=Wk(this,u);q(w)||Tk(this.name,u);return w.eb?w.eb(a,b,c,d,e,f,h,k,l,m,t):w.call(null,a,b,c,d,e,f,h,k,l,m,t)};g.fb=function(a,b,c,d,e,f,h,k,l,m,t,u){var w=this.ba.fb?this.ba.fb(a,b,c,d,e,f,h,k,l,m,t,u):this.ba.call(null,a,b,c,d,e,f,h,k,l,m,t,u),v=Wk(this,w);q(v)||Tk(this.name,w);return v.fb?v.fb(a,b,c,d,e,f,h,k,l,m,t,u):v.call(null,a,b,c,d,e,f,h,k,l,m,t,u)};
g.gb=function(a,b,c,d,e,f,h,k,l,m,t,u,w){var v=this.ba.gb?this.ba.gb(a,b,c,d,e,f,h,k,l,m,t,u,w):this.ba.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w),z=Wk(this,v);q(z)||Tk(this.name,v);return z.gb?z.gb(a,b,c,d,e,f,h,k,l,m,t,u,w):z.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w)};
g.hb=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v){var z=this.ba.hb?this.ba.hb(a,b,c,d,e,f,h,k,l,m,t,u,w,v):this.ba.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v),B=Wk(this,z);q(B)||Tk(this.name,z);return B.hb?B.hb(a,b,c,d,e,f,h,k,l,m,t,u,w,v):B.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v)};
g.ib=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z){var B=this.ba.ib?this.ba.ib(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z):this.ba.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z),E=Wk(this,B);q(E)||Tk(this.name,B);return E.ib?E.ib(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z):E.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z)};
g.jb=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B){var E=this.ba.jb?this.ba.jb(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B):this.ba.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B),D=Wk(this,E);q(D)||Tk(this.name,E);return D.jb?D.jb(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B):D.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B)};
g.kb=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E){var D=this.ba.kb?this.ba.kb(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E):this.ba.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E),R=Wk(this,D);q(R)||Tk(this.name,D);return R.kb?R.kb(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E):R.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E)};
g.lb=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D){var R=this.ba.lb?this.ba.lb(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D):this.ba.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D),Z=Wk(this,R);q(Z)||Tk(this.name,R);return Z.lb?Z.lb(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D):Z.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D)};
g.vb=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R){var Z=this.ba.vb?this.ba.vb(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R):this.ba.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R),Ga=Wk(this,Z);q(Ga)||Tk(this.name,Z);return Ga.vb?Ga.vb(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R):Ga.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R)};
g.Ab=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z){var Ga=this.ba.Ab?this.ba.Ab(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z):this.ba.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z),Ya=Wk(this,Ga);q(Ya)||Tk(this.name,Ga);return Ya.Ab?Ya.Ab(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z):Ya.call(null,a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z)};
g.be=function(a,b,c,d,e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga){var Ya=dg(this.ba,a,b,c,d,N([e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga])),P=Wk(this,Ya);q(P)||Tk(this.name,Ya);return dg(P,a,b,c,d,N([e,f,h,k,l,m,t,u,w,v,z,B,E,D,R,Z,Ga]))};function Xk(a,b){var c=NA;Mg.fa(c.Ue,Je,a,b);Pk(c.Te,c.Ue,c.Be,c.Pe)}function Wk(a,b){G.a(A(a.Be),A(a.Pe))||Pk(a.Te,a.Ue,a.Be,a.Pe);var c=A(a.Te);c=c.g?c.g(b):c.call(null,b);return q(c)?c:Sk(a.name,b,a.Pe,a.Ue,a.Ui,a.Te,a.Be,a.rh)}g.de=function(){return yd(this.name)};g.ee=function(){return zd(this.name)};
g.na=function(){return la(this)};function Yk(a,b){this.Ac=a;this.H=b;this.F=2153775104;this.R=2048}g=Yk.prototype;g.toString=function(){return this.Ac};g.equiv=function(a){return this.ea(null,a)};g.ea=function(a,b){return b instanceof Yk&&this.Ac===b.Ac};g.ma=function(a,b){return kd(b,['#uuid "',r.g(this.Ac),'"'].join(""))};g.na=function(){null==this.H&&(this.H=Od(this.Ac));return this.H};
function $k(a,b,c){var d=Error(a);this.message=a;this.data=b;this.rg=c;this.name=d.name;this.description=d.description;this.number=d.number;this.fileName=d.fileName;this.lineNumber=d.lineNumber;this.columnNumber=d.columnNumber;this.stack=d.stack;return this}$k.prototype.__proto__=Error.prototype;$k.prototype.Pa=n;
$k.prototype.ma=function(a,b,c){kd(b,"#error {:message ");ak(this.message,b,c);q(this.data)&&(kd(b,", :data "),ak(this.data,b,c));q(this.rg)&&(kd(b,", :cause "),ak(this.rg,b,c));return kd(b,"}")};$k.prototype.toString=function(){return Gd(this)};if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof cl)var cl=null;"undefined"!==typeof console&&$b();
if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof dl)var dl=function(){throw Error("cljs.core/*eval* not bound");};$b();var kl=new S(null,"lng","lng",1667213918),kk=new S(null,"val","val",128701612),pl=new S(null,"readers","readers",-2118263030),Yq=new S(null,"timeout","timeout",-318625318),rl=new S(null,"line","line",212345235),$q=new S(null,"original-text","original-text",744448452),sl=new S(null,"left","left",-399115937),tl=new S(null,"content-type","content-type",-508222634),cr=new S(null,"looked-up-in","looked-up-in",258688908),dr=new S(null,"geo","geo",-2054400503),El=new S(null,"headers","headers",-835030129),
er=new S(null,"method","method",55703592),Fl=new S(null,"string","string",-1989541586),gr=new S(null,"write","write",-1857649168),hr=new S(null,"status-text","status-text",-1834235478),ir=new S(null,"namespaced-map","namespaced-map",1235665380),Ol=new S(null,"handlers","handlers",79528781),Pl=new S(null,"zip-code-tabulation-area","zip-code-tabulation-area",-1640974557),mk=new S(null,"status","status",-1997798413),Lk=new S(null,"descendants","descendants",1824886031),kr=new S(null,"tag","tag",-1290361223),
td=new C(null,"meta7488","meta7488",-1681077300,null),Vl=new S(null,"description","description",-1428560544),nr=new S(null,"finally","finally",1589088705),or=new S(null,"features","features",-1146962336),Zl=new S(null,"recur","recur",-437573268),qr=new S(null,"attributes","attributes",-74013604),rr=new C(null,"vacc","vacc",-1937917185,null),sr=new S(null,"edn","edn",1317840885),ur=new C("linked","set","linked/set",833210926,null),ck=new S(null,"alt-impl","alt-impl",670969595),Za=new C(null,"meta6370",
"meta6370",-729527131,null),zr=new S(null,"vintage","vintage",818195578),mm=new S(null,"state","state",-1988618099),Fr=new S(null,"geocodes","geocodes",-857805648),nm=new S(null,"parse-error","parse-error",255902478),Um=new S(null,"exception","exception",-335277064),Gr=new C(null,"cb","cb",-2064487928,null),Xm=new C(null,"/","/",-1371932971,null),Ym=new S(null,"parse","parse",-1162164619),ud=new C(null,"meta9347","meta9347",1606275077,null),Mr=new S(null,"raw","raw",1604651272),Nr=new S(null,"interceptors",
"interceptors",-1546782951),Ub=new S(null,"flush-on-newline","flush-on-newline",-151457939),$m=new S(null,"illegal-argument","illegal-argument",-1845493170),Qr=new S(null,"reader","reader",169660853),en=new S(null,"values","values",372645556),Ur=new S(null,"character","character",380652989),fn=new S(null,"us","us",746429226),Vr=new S(null,"xform","xform",-1725711008),gn=new S("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),Yr=new S(null,"failed","failed",-1397425762),jn=new C(null,
"kfn","kfn",729311001,null),bs=new S(null,"hierarchy","hierarchy",-1053470341),cs=new S("clojure.core.match","not-found","clojure.core.match/not-found",1553053780),on=new S(null,"wms","wms",663469516),pn=new S(null,"set","set",304602554),hs=new S(null,"lookup-up-in","lookup-up-in",576418132),is=new S(null,"strable","strable",1877668047),js=new S(null,"symbol","symbol",-1038572696),vn=new S(null,"error","error",-978969032),xn=new S(null,"st","st",1455255828),ls=new S(null,"filter-id","filter-id",-84826199),
os=new S(null,"value","value",305978217),dk=new S(null,"fallback-impl","fallback-impl",-1501286995),Bn=new S(null,"prefix","prefix",-265908465),rs=new S(null,"lookup","lookup",1225356838),Dn=new S(null,"catch-exception","catch-exception",-1997306795),Fn=new S(null,"sourcePath","sourcePath",-986600405),uk=new S(null,"keyword-fn","keyword-fn",-64566675),vs=new C("linked","map","linked/map",-195852787,null),ws=new S(null,"county","county",-1347113013),Gj=new S(null,"url-params","url-params",-697567619),
zs=new S(null,"vector","vector",1902966158),As=new S(null,"stats+geos","stats+geos",-1652005478),Ln=new S(null,"keywords?","keywords?",764949733),Pd=new C(null,"meta9365","meta9365",2117385110,null),On=new S(null,"format","format",-1306924766),Rn=new S(null,"finally-block","finally-block",832982472),Es=new S(null,"eof","eof",-489063237),Un=new C(null,"f","f",43394975,null),Fs=new C(null,"js","js",-886355190,null),Hs=new S(null,"not-initialized","not-initialized",-1937378906),Xn=new S(null,"type",
"type",1174270348),Qd=new C(null,"meta9015","meta9015",-1489265389,null),$n=new S(null,"reader-error","reader-error",1610253121),eo=new C(null,"m","m",-1021758608,null),Tj=new S(null,"more-marker","more-marker",-14717935),lo=new S(null,"vec-strategy","vec-strategy",1843221372),mo=new C(null,"rf","rf",-651557526,null),no=new C(null,"pair","pair",1193015215,null),Ps=new C(null,"val","val",1769233139,null),Ss=new S(null,"layers","layers",1944875032),vo=new S(null,"getter","getter",84844855),xo=new S(null,
"handler","handler",-195596612),Xb=new S(null,"meta","meta",1499536964),dt=new S(null,"map","map",1371690461),et=new S(null,"read","read",1140058661),ft=new S(null,"body","body",-2049205669),To=new S(null,"right","right",-452581833),it=new C(null,"mrf","mrf",-887894298,null),jt=new S(null,"uri","uri",-774711847),Ud=new C(null,"meta9293","meta9293",422677049,null),mt=new S(null,"url","url",276297046),fe=new C(null,"meta16379","meta16379",58032331,null),Ce=new C(null,"meta16372","meta16372",451318123,
null),Qe=new C(null,"meta16497","meta16497",-1535921377,null),$o=new S(null,"col","col",-1959363084),ot=new S(null,"no-values","no-values",711523891),ap=new S(null,"failure","failure",720415879),bp=new S(null,"id\x3c-json","id\x3c-json",-1249818926),gf=new C(null,"meta16463","meta16463",1309389125,null),tt=new S(null,"catch-block","catch-block",1175212748),ep=new S(null,"lat","lat",-580793929),vt=new C(null,"inst","inst",-2008473268,null),hp=new S(null,"with-credentials","with-credentials",-1163127235),
ip=new S(null,"ex-kind","ex-kind",1581199296),hf=new C(null,"meta16471","meta16471",-980800411,null),kp=new S(null,"cur-layer-idx","cur-layer-idx",1604904097),np=new S(null,"sub-level","sub-level",368751408),At=new S(null,"java","java",1958249105),sp=new C(null,"to","to",1832630534,null),tp=new C(null,"-Inf","-Inf",-2123243689,null),Dt=new S(null,"processing-request","processing-request",-264947221),vp=new S(null,"request-received","request-received",2110590540),Et=new S(null,"properties","properties",
685819552),Vk=new S(null,"default","default",-1987822328),yp=new S(null,"stats-only","stats-only",-1854147429),Ft=new S(null,"prev","prev",-1597069226),Gt=new C(null,"Inf","Inf",647172781,null),Ht=new C(null,"vfn","vfn",-868700079,null),Yb=new S(null,"dup","dup",556298533),Fp=new S(null,"api","api",-899839580),Zb=new S(null,"print-length","print-length",1931866356),Hp=new S(null,"nil","nil",99600501),Kp=new S(null,"json","json",1279968570),Mt=new S(null,"priority","priority",1431093715),Lp=new S(null,
"reader-exception","reader-exception",-1938323098),Sp=new C(null,"make-rf","make-rf",44212345,null),Wp=new S(null,"geos-only","geos-only",-735736590),jf=new C(null,"meta16408","meta16408",-490837800,null),yk=new S(null,"keywordize-keys","keywordize-keys",1310784252),Rt=new S(null,"aborted","aborted",1775972619),kf=new C(null,"meta16403","meta16403",90157260,null),Vt=new S(null,"list","list",765357683),aq=new S(null,"silent","silent",-1142977785),bu=new S(null,"column","column",2078222095),fq=new C(null,
"xform","xform",-85179481,null),jq=new S(null,"continue-block","continue-block",-1852047850),Bk=new S(null,"parents","parents",-2027538891),mq=new S(null,"response","response",-1068424192),Wb=new S(null,"readably","readably",1129599760),ku=new S(null,"geoResolution","geoResolution",1206666050),lu=new C(null,"blockable","blockable",-28395259,null),qq=new S(null,"error-handler","error-handler",-484945776),rq=new S(null,"file","file",-1269645878),nu=new S("net.cgrand.xforms","default","net.cgrand.xforms/default",
-729285165),tq=new S(null,"json-verbose","json-verbose",-542533531),uq=new S(null,"statsKey","statsKey",452548050),yq=new S(null,"scopes","scopes",-1571524352),tf=new C(null,"or__4131__auto__","or__4131__auto__",941665662,null),qu=new S(null,"connection-established","connection-established",-1403749733),tu=new S(null,"geoHierarchy","geoHierarchy",380422740),uu=new C(null,"flag","flag",-1565787888,null),Aq=new S(null,"writer","writer",-277568236),wu=new S(null,"progress-handler","progress-handler",
333585589),xu=new S(null,"response-ready","response-ready",245208276),Hq=new S(null,"predicates","predicates",620402712),Iq=new C(null,"uuid","uuid",-504564192,null),Au=new C(null,"NaN","NaN",666918153,null),Kq=new C(null,"queue","queue",-1198599890,null),Du=new S(null,"keyword","keyword",811389747),Sq=new S(null,"params","params",710516235),Mk=new S(null,"ancestors","ancestors",-776045424),Vq=new S(null,"response-format","response-format",1664465322);var Eu={},xf,Df,Ff,Iu={},Ju=function Ju(a,b){if(null!=a&&null!=a.Af)return a.Af(a,b);var d=Ju[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=Ju._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("ReadPort.take!",a);},Ku=function Ku(a,b,c){if(null!=a&&null!=a.He)return a.He(a,b,c);var e=Ku[ha(null==a?null:a)];if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);e=Ku._;if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);throw gc("WritePort.put!",a);},Lu=function Lu(a){if(null!=
a&&null!=a.he)return a.he(a);var c=Lu[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=Lu._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("Channel.close!",a);},Mu=function Mu(a){if(null!=a&&null!=a.bc)return a.bc(a);var c=Mu[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=Mu._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("Handler.active?",a);},Nu=function Nu(a){if(null!=a&&null!=a.Yb)return a.Yb(a);var c=Nu[ha(null==a?null:a)];if(null!=c)return c.g?
c.g(a):c.call(null,a);c=Nu._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("Handler.commit",a);},Ou=function Ou(a,b){if(null!=a&&null!=a.yf)return a.yf(a,b);var d=Ou[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=Ou._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("Buffer.add!*",a);},Pu=function Pu(a){switch(arguments.length){case 1:return Pu.g(arguments[0]);case 2:return Pu.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));
}};Pu.g=function(a){return a};Pu.a=function(a,b){return Ou(a,b)};Pu.ga=2;var Qu={};function Ru(a,b,c,d,e){for(var f=0;;)if(f<e)c[d+f]=a[b+f],f+=1;else break}function Su(a){this.length=this.Qa=this.head=0;this.M=a}Su.prototype.pop=function(){if(0===this.length)return null;var a=this.M[this.Qa];this.M[this.Qa]=null;this.Qa=(this.Qa+1)%this.M.length;--this.length;return a};Su.prototype.unshift=function(a){this.M[this.head]=a;this.head=(this.head+1)%this.M.length;this.length+=1;return null};function ig(a,b){a.length+1===a.M.length&&a.resize();a.unshift(b)}
Su.prototype.resize=function(){var a=Array(2*this.M.length);return this.Qa<this.head?(Ru(this.M,this.Qa,a,0,this.length),this.Qa=0,this.head=this.length,this.M=a):this.Qa>this.head?(Ru(this.M,this.Qa,a,0,this.M.length-this.Qa),Ru(this.M,0,a,this.M.length-this.Qa,this.head),this.Qa=0,this.head=this.length,this.M=a):this.Qa===this.head?(this.head=this.Qa=0,this.M=a):null};function yg(a,b){for(var c=a.length,d=0;;)if(d<c){var e=a.pop();(b.g?b.g(e):b.call(null,e))&&a.unshift(e);d+=1}else break}
function Tu(a,b){this.Ka=a;this.n=b;this.F=2;this.R=0}g=Tu.prototype;g.zf=function(){return this.Ka.length===this.n};g.ge=function(){return this.Ka.pop()};g.yf=function(a,b){ig(this.Ka,b);return this};g.Bg=function(){};g.ta=function(){return this.Ka.length};if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof Eu||"undefined"===typeof Iu||"undefined"===typeof Qu||"undefined"===typeof Uu)var Uu={};function Zu(){this.B=Uu;this.F=2;this.R=0}g=Zu.prototype;g.zf=function(){return!1};
g.ge=function(){return this.B};g.yf=function(a,b){Uu===this.B&&(this.B=b);return this};g.Bg=function(){Uu===this.B&&(this.B=null)};g.ta=function(){return Uu===this.B?0:1};var $u;a:{var Gg=ba.navigator;if(Gg){var Hg=Gg.userAgent;if(Hg){$u=Hg;break a}}$u=""}function cv(a){return-1!=$u.indexOf(a)};var dv;
function ev(){var a=ba.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!cv("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=ra(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!cv("Trident")&&!cv("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.$d;c.$d=null;a()}};return function(a){d.next={$d:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){ba.setTimeout(a,0)}};var fv=new Su(Array(32)),gv=!1,hv=!1;function iv(){gv=!0;hv=!1;for(var a=0;;){var b=fv.pop();if(null!=b&&(b.J?b.J():b.call(null),1024>a)){a+=1;continue}break}gv=!1;return 0<fv.length?jv.J?jv.J():jv.call(null):null}function jv(){if(hv&&gv)return null;hv=!0;!ja(ba.setImmediate)||ba.Window&&ba.Window.prototype&&!cv("Edge")&&ba.Window.prototype.setImmediate==ba.setImmediate?(dv||(dv=ev()),dv(iv)):ba.setImmediate(iv)}function kv(a){ig(fv,a);jv()};var lv={},Pg;
function nv(a){if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof Eu||"undefined"===typeof Iu||"undefined"===typeof lv||"undefined"===typeof Pg)Pg=function(a,c){this.B=a;this.xa=c;this.F=425984;this.R=0},Pg.prototype.W=function(a,c){return new Pg(this.B,c)},Pg.prototype.V=function(){return this.xa},Pg.prototype.cd=function(){return this.B},Pg.sa=function(){return new U(null,2,5,V,[Ps,td],null)},Pg.qa=!0,Pg.oa="cljs.core.async.impl.channels/t_cljs$core$async$impl$channels7487",Pg.ra=
function(a,c){return kd(c,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels7487")};return new Pg(a,jg)}function ov(a,b){this.cc=a;this.B=b}function pv(a){return Mu(a.cc)}function qv(a,b,c,d){this.Vd=a;this.Me=0;this.Xc=b;this.Le=0;this.Ka=c;this.closed=!1;this.gc=d}
function rv(a){for(;;){var b=a.Xc.pop();if(null!=b){var c=b.cc,d=b.B;if(c.bc(null)){var e=c.Yb(null);kv(function(a){return function(){return a.g?a.g(!0):a.call(null,!0)}}(e,c,d,b,a))}else continue}break}yg(a.Xc,Dg(!1));a.he(null)}
qv.prototype.He=function(a,b,c){var d=this,e=this,f=d.closed;if(f||!c.bc(null))return nv(!f);if(q(function(){var a=d.Ka;return q(a)?cc(d.Ka.zf()):a}())){c.Yb(null);var h=ie(d.gc.a?d.gc.a(d.Ka,b):d.gc.call(null,d.Ka,b));c=function(){for(var a=Fe;;)if(0<d.Vd.length&&0<K(d.Ka)){var b=d.Vd.pop();if(b.bc(null)){var c=b.Yb(null),k=d.Ka.ge();a=Ee.a(a,function(a,b,c){return function(){return b.g?b.g(c):b.call(null,c)}}(a,c,k,b,h,f,e))}}else return a}();h&&rv(e);if(H(c)){c=H(c);a=null;for(var k=0,l=0;;)if(l<
k){var m=a.za(null,l);kv(m);l+=1}else if(c=H(c))a=c,Ye(a)?(c=wd(a),l=xd(a),a=c,k=K(c),c=l):(c=I(a),kv(c),c=J(a),a=null,k=0),l=0;else break}return nv(!0)}a=function(){for(;;){var a=d.Vd.pop();if(q(a)){if(q(a.bc(null)))return a}else return null}}();if(q(a))return k=a.Yb(null),c.Yb(null),kv(function(a){return function(){return a.g?a.g(b):a.call(null,b)}}(k,a,f,e)),nv(!0);64<d.Le?(d.Le=0,yg(d.Xc,pv)):d.Le+=1;q(c.ie(null))&&ig(d.Xc,new ov(c,b));return null};
qv.prototype.Af=function(a,b){var c=this;if(b.bc(null)){if(null!=c.Ka&&0<K(c.Ka)){a=b.Yb(null);if(q(a)){var d=c.Ka.ge(),e=0<c.Xc.length?function(){for(var a=Fe;;){var b=c.Xc.pop(),d=b.cc;b=b.B;var e=d.bc(null);d=e?d.Yb(null):e;a=q(d)?Ee.a(a,d):a;b=q(d)?ie(c.gc.a?c.gc.a(c.Ka,b):c.gc.call(null,c.Ka,b)):null;if(!(cc(b)&&cc(c.Ka.zf())&&0<c.Xc.length))return new U(null,2,5,V,[b,a],null)}}():null,f=O(e,0,null),h=O(e,1,null);q(f)&&rv(this);for(var k=H(h),l=null,m=0,t=0;;)if(t<m){var u=l.za(null,t);kv(function(a,
b,c,d,e){return function(){return e.g?e.g(!0):e.call(null,!0)}}(k,l,m,t,u,d,e,f,h,a,a,this));t+=1}else{var w=H(k);if(w){u=w;if(Ye(u))k=wd(u),t=xd(u),l=k,m=K(k),k=t;else{var v=I(u);kv(function(a,b,c,d,e){return function(){return e.g?e.g(!0):e.call(null,!0)}}(k,l,m,t,v,u,w,d,e,f,h,a,a,this));k=J(u);l=null;m=0}t=0}else break}return nv(d)}return null}a=function(){for(;;){var a=c.Xc.pop();if(q(a)){if(Mu(a.cc))return a}else return null}}();if(q(a))return d=Nu(a.cc),b.Yb(null),kv(function(a){return function(){return a.g?
a.g(!0):a.call(null,!0)}}(d,a,this)),nv(a.B);if(q(c.closed))return q(c.Ka)&&(c.gc.g?c.gc.g(c.Ka):c.gc.call(null,c.Ka)),q(function(){var a=b.bc(null);return q(a)?b.Yb(null):a}())?(a=function(){var a=c.Ka;return q(a)?0<K(c.Ka):a}(),d=q(a)?c.Ka.ge():null,nv(d)):null;64<c.Me?(c.Me=0,yg(c.Vd,Mu)):c.Me+=1;q(b.ie(null))&&ig(c.Vd,b)}return null};
qv.prototype.he=function(){var a=this;if(!a.closed){a.closed=!0;for(q(function(){var b=a.Ka;return q(b)?0===a.Xc.length:b}())&&(a.gc.g?a.gc.g(a.Ka):a.gc.call(null,a.Ka));;){var b=a.Vd.pop();if(null!=b){if(b.bc(null)){var c=b.Yb(null),d=q(function(){var b=a.Ka;return q(b)?0<K(a.Ka):b}())?a.Ka.ge():null;kv(function(a,b){return function(){return a.g?a.g(b):a.call(null,b)}}(c,d,b,this))}}else break}q(a.Ka)&&a.Ka.Bg()}return null};function sv(a){console.log(a);return null}
function tv(a,b){var c=q(null)?null:sv;b=c.g?c.g(b):c.call(null,b);return null==b?a:Pu.a(a,b)}
function uv(a,b){return new qv(new Su(Array(32)),new Su(Array(32)),a,function(){return function(a){return function(){function b(b,c){try{return a.a?a.a(b,c):a.call(null,b,c)}catch(l){return tv(b,l)}}function c(b){try{return a.g?a.g(b):a.call(null,b)}catch(k){return tv(b,k)}}var f=null;f=function(a,d){switch(arguments.length){case 1:return c.call(this,a);case 2:return b.call(this,a,d)}throw Error("Invalid arity: "+arguments.length);};f.g=c;f.a=b;return f}()}(q(b)?b.g?b.g(Pu):b.call(null,Pu):Pu)}())}
;var vv={},Rg;
function xv(a){if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof Eu||"undefined"===typeof Iu||"undefined"===typeof vv||"undefined"===typeof Rg)Rg=function(a,c){this.Wa=a;this.Aa=c;this.F=393216;this.R=0},Rg.prototype.W=function(a,c){return new Rg(this.Wa,c)},Rg.prototype.V=function(){return this.Aa},Rg.prototype.bc=function(){return!0},Rg.prototype.ie=function(){return!0},Rg.prototype.Yb=function(){return this.Wa},Rg.sa=function(){return new U(null,2,5,V,[Un,Qd],null)},Rg.qa=
!0,Rg.oa="cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers9014",Rg.ra=function(a,c){return kd(c,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers9014")};return new Rg(a,jg)}function yv(a){try{var b=a[0];return b.g?b.g(a):b.call(null,a)}catch(c){if(c instanceof Object)throw b=c,a[6].he(null),b;throw c;}}function zv(a,b,c){c=c.Af(null,xv(function(c){a[2]=c;a[1]=b;return yv(a)}));return q(c)?(a[2]=A(c),a[1]=b,Zl):null}
function Av(a,b,c,d){c=c.He(null,d,xv(function(c){a[2]=c;a[1]=b;return yv(a)}));return q(c)?(a[2]=A(c),a[1]=b,Zl):null}function Bv(a,b){a=a[6];null!=b&&a.He(null,b,xv(function(){return function(){return null}}(a)));a.he(null);return a}
function Cv(a){for(;;){var b=a[4],c=tt.g(b),d=Dn.g(b),e=a[5];if(q(function(){var a=e;return q(a)?cc(b):a}()))throw e;if(q(function(){var a=e;return q(a)?(a=c,q(a)?G.a(Vk,d)||e instanceof d:a):a}())){a[1]=c;a[2]=e;a[5]=null;a[4]=Je.S(b,tt,null,N([Dn,null]));break}if(q(function(){var a=e;return q(a)?cc(c)&&cc(Rn.g(b)):a}()))a[4]=Ft.g(b);else{if(q(function(){var a=e;return q(a)?(a=cc(c))?Rn.g(b):a:a}())){a[1]=Rn.g(b);a[4]=Je.j(b,Rn,null);break}if(q(function(){var a=cc(e);return a?Rn.g(b):a}())){a[1]=
Rn.g(b);a[4]=Je.j(b,Rn,null);break}if(cc(e)&&cc(Rn.g(b))){a[1]=jq.g(b);a[4]=Ft.g(b);break}throw Error("No matching clause");}}};function Dv(a){if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof Eu||"undefined"===typeof xf)xf=function(a,c,d){this.Wa=a;this.pg=c;this.Ba=d;this.F=393216;this.R=0},xf.prototype.W=function(a,c){return new xf(this.Wa,this.pg,c)},xf.prototype.V=function(){return this.Ba},xf.prototype.bc=function(){return!0},xf.prototype.ie=function(){return this.pg},xf.prototype.Yb=function(){return this.Wa},xf.sa=function(){return new U(null,3,5,V,[Un,lu,Ud],null)},xf.qa=!0,xf.oa="cljs.core.async/t_cljs$core$async9292",
xf.ra=function(a,c){return kd(c,"cljs.core.async/t_cljs$core$async9292")};return new xf(a,!0,jg)}function Ev(a,b){a=G.a(a,0)?null:a;return uv("number"===typeof a?new Tu(new Su(Array(a)),a):a,b)}function Fv(a,b){return Gv(a,b)}function Gv(a,b){a=Ju(a,Dv(b));if(q(a)){var c=A(a);q(!0)?b.g?b.g(c):b.call(null,c):kv(function(a){return function(){return b.g?b.g(a):b.call(null,a)}}(c,a))}return null}var Hv=Dv(function(){return null});function Iv(a,b){a=Ku(a,b,Hv);return q(a)?A(a):!0}
function Jv(a){for(var b=Array(a),c=0;;)if(c<a)b[c]=0,c+=1;else break;for(c=1;;){if(G.a(c,a))return b;var d=Math.floor(Math.random()*c);b[c]=b[d];b[d]=c;c+=1}}
function Kv(){var a=Kg(!0);if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof Eu||"undefined"===typeof Df)Df=function(a,c){this.vd=a;this.Ca=c;this.F=393216;this.R=0},Df.prototype.W=function(){return function(a,c){return new Df(this.vd,c)}}(a),Df.prototype.V=function(){return function(){return this.Ca}}(a),Df.prototype.bc=function(){return function(){return A(this.vd)}}(a),Df.prototype.ie=function(){return function(){return!0}}(a),Df.prototype.Yb=function(){return function(){Lg(this.vd,
null);return!0}}(a),Df.sa=function(){return function(){return new U(null,2,5,V,[uu,ud],null)}}(a),Df.qa=!0,Df.oa="cljs.core.async/t_cljs$core$async9346",Df.ra=function(){return function(a,c){return kd(c,"cljs.core.async/t_cljs$core$async9346")}}(a);return new Df(a,jg)}
function Lv(a,b){if("undefined"===typeof Lb||"undefined"===typeof Mb||"undefined"===typeof Eu||"undefined"===typeof Ff)Ff=function(a,b,e){this.vd=a;this.$d=b;this.Ha=e;this.F=393216;this.R=0},Ff.prototype.W=function(a,b){return new Ff(this.vd,this.$d,b)},Ff.prototype.V=function(){return this.Ha},Ff.prototype.bc=function(){return Mu(this.vd)},Ff.prototype.ie=function(){return!0},Ff.prototype.Yb=function(){Nu(this.vd);return this.$d},Ff.sa=function(){return new U(null,3,5,V,[uu,Gr,Pd],null)},Ff.qa=
!0,Ff.oa="cljs.core.async/t_cljs$core$async9364",Ff.ra=function(a,b){return kd(b,"cljs.core.async/t_cljs$core$async9364")};return new Ff(a,b,jg)}
function Mv(a,b,c){var d=Kv(),e=K(b),f=Jv(e),h=Mt.g(c),k=function(){for(var c=0;;)if(c<e){var k=q(h)?c:f[c],t=M(b,k),u=Xe(t)?t.g?t.g(0):t.call(null,0):null,w=q(u)?function(){var b=t.g?t.g(1):t.call(null,1);return Ku(u,b,Lv(d,function(b,c,d,e,f){return function(b){b=new U(null,2,5,V,[b,f],null);return a.g?a.g(b):a.call(null,b)}}(c,b,k,t,u,d,e,f,h)))}():Ju(t,Lv(d,function(b,c,d){return function(b){b=new U(null,2,5,V,[b,d],null);return a.g?a.g(b):a.call(null,b)}}(c,k,t,u,d,e,f,h)));if(q(w))return nv(new U(null,
2,5,V,[A(w),function(){var a=u;return q(a)?a:t}()],null));c+=1}else return null}();return q(k)?k:ef(c,Vk)?(k=function(){var a=d.bc(null);return q(a)?d.Yb(null):a}(),q(k)?nv(new U(null,2,5,V,[Vk.g(c),Vk],null)):null):null}
function Nv(a,b){var c=Ev(1,null);kv(function(c){return function(){var d=function(){return function(a){return function(){function b(b){for(;;){a:try{for(;;){var c=a(b);if(!T(c,Zl)){var d=c;break a}}}catch(v){if(v instanceof Object)b[5]=v,Cv(b),d=Zl;else throw v;}if(!T(d,Zl))return d}}function c(){var a=[null,null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null;d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+
arguments.length);};d.J=c;d.g=b;return d}()}(function(){return function(c){var d=c[1];return 7===d?(c[2]=c[2],c[1]=3,Zl):1===d?(c[2]=null,c[1]=2,Zl):4===d?(d=c[2],c[7]=d,c[1]=q(null==d)?5:6,Zl):13===d?(c[2]=null,c[1]=14,Zl):6===d?(d=c[7],Av(c,11,b,d)):3===d?Bv(c,c[2]):12===d?(c[2]=null,c[1]=2,Zl):2===d?zv(c,4,a):11===d?(c[1]=q(c[2])?12:13,Zl):9===d?(c[2]=null,c[1]=10,Zl):5===d?(c[1]=q(!0)?8:9,Zl):14===d||10===d?(c[2]=c[2],c[1]=7,Zl):8===d?(d=Lu(b),c[2]=d,c[1]=10,Zl):null}}(c),c)}(),f=function(){var a=
d.J?d.J():d.call(null);a[6]=c;return a}();return yv(f)}}(c));return b}
function Ov(a,b){var c=Ev(1,null);kv(function(c){return function(){var d=function(){return function(a){return function(){function b(b){for(;;){a:try{for(;;){var c=a(b);if(!T(c,Zl)){var d=c;break a}}}catch(v){if(v instanceof Object)b[5]=v,Cv(b),d=Zl;else throw v;}if(!T(d,Zl))return d}}function c(){var a=[null,null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null;d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+
arguments.length);};d.J=c;d.g=b;return d}()}(function(){return function(c){var d=c[1];return 7===d?(c[2]=c[2],c[1]=6,Zl):1===d?(d=H(b),c[7]=d,c[2]=null,c[1]=2,Zl):4===d?(d=c[7],d=I(d),Av(c,7,a,d)):13===d?(c[2]=c[2],c[1]=10,Zl):6===d?(c[1]=q(c[2])?8:9,Zl):3===d?Bv(c,c[2]):12===d?(c[2]=null,c[1]=13,Zl):2===d?(d=c[7],c[1]=q(d)?4:5,Zl):11===d?(d=Lu(a),c[2]=d,c[1]=13,Zl):9===d?(c[1]=q(!0)?11:12,Zl):5===d?(d=c[7],c[2]=d,c[1]=6,Zl):10===d?(c[2]=c[2],c[1]=3,Zl):8===d?(d=c[7],d=J(d),c[7]=d,c[2]=null,c[1]=
2,Zl):null}}(c),c)}(),f=function(){var a=d.J?d.J():d.call(null);a[6]=c;return a}();return yv(f)}}(c))}function Pv(a){var b=Ev(Qf(100,a),null);Ov(b,a);return b}function Qv(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;return Rv(arguments[0],arguments[1],arguments[2],3<b.length?new Xd(b.slice(3),0,null):null)}
function Rv(a,b,c,d){var e=null!=d&&(d.F&64||n===d.wa)?$f(hj,d):d;a[1]=b;b=Mv(function(){return function(b){a[2]=b;return yv(a)}}(d,e,e),c,e);return q(b)?(a[2]=A(b),Zl):null};var X=Error();function Sv(a,b,c){var d=q(b.ignoreCase)?"gi":"g";d=q(b.multiline)?[d,"m"].join(""):d;return a.replace(new RegExp(b.source,q(b.pj)?[d,"u"].join(""):d),c)}
function Tv(a){return function(){function b(a){var b=null;if(0<arguments.length){b=0;for(var d=Array(arguments.length-0);b<d.length;)d[b]=arguments[b+0],++b;b=new Xd(d,0,null)}return c.call(this,b)}function c(b){b=Tg(b);if(G.a(K(b),1))return b=I(b),a.g?a.g(b):a.call(null,b);b=Ih(b);return a.g?a.g(b):a.call(null,b)}b.ga=0;b.ka=function(a){a=H(a);return c(a)};b.S=c;return b}()}
function Vv(a,b){var c=new Kb;for(b=H(b);;)if(null!=b)c.append(r.g(I(b))),b=J(b),null!=b&&c.append(a);else return c.toString()};var Xv=function Xv(a,b,c){if(null!=a&&null!=a.gf)return a.gf(a,b,c);var e=Xv[ha(null==a?null:a)];if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);e=Xv._;if(null!=e)return e.j?e.j(a,b,c):e.call(null,a,b,c);throw gc("AjaxImpl.-js-ajax-request",a);},Yv=function Yv(a){if(null!=a&&null!=a.lf)return a.lf(a);var c=Yv[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=Yv._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("AjaxResponse.-status",a);},Zv=function Zv(a){if(null!=a&&null!=
a.mf)return a.mf(a);var c=Zv[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=Zv._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("AjaxResponse.-status-text",a);},$v=function $v(a){if(null!=a&&null!=a.jf)return a.jf(a);var c=$v[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=$v._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("AjaxResponse.-get-all-headers",a);},aw=function aw(a){if(null!=a&&null!=a.hf)return a.hf(a);var c=aw[ha(null==a?null:a)];if(null!=
c)return c.g?c.g(a):c.call(null,a);c=aw._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("AjaxResponse.-body",a);},bw=function bw(a,b){if(null!=a&&null!=a.kf)return a.kf(a,b);var d=bw[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=bw._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("AjaxResponse.-get-response-header",a);},cw=function cw(a){if(null!=a&&null!=a.nf)return a.nf(a);var c=cw[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=cw._;if(null!=
c)return c.g?c.g(a):c.call(null,a);throw gc("AjaxResponse.-was-aborted",a);},dw=function dw(a,b){if(null!=a&&null!=a.Yd)return a.Yd(a,b);var d=dw[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=dw._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("Interceptor.-process-request",a);},ew=function ew(a,b){if(null!=a&&null!=a.Zd)return a.Zd(a,b);var d=ew[ha(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=ew._;if(null!=d)return d.a?d.a(a,b):d.call(null,
a,b);throw gc("Interceptor.-process-response",a);};function fw(a){throw Error(r.g(a));}var $l=new qj(null,new p(null,7,[206,null,204,null,304,null,1223,null,201,null,202,null,200,null],null),null);function gw(a){return a instanceof S?Hf(a):a}var hw=encodeURIComponent;function iw(a){var b=O(a,0,null);a=O(a,1,null);return[r.g(gw(b)),"\x3d",r.g(hw.g?hw.g(a):hw.call(null,a))].join("")}function jw(a){return function(b,c){return new U(null,2,5,V,[a.g?a.g(b):a.call(null,b),c],null)}}
function kw(a){var b=function(){var b=q(a)?a:At,d=b instanceof S?b.Ea:null;switch(d){case "java":return function(){return function(){return null}}(b,d);case "rails":return function(){return function(){return""}}(b,d);case "indexed":return qf;default:throw Error(["No matching clause: ",r.g(d)].join(""));}}();return jw(b)}
function lw(a,b){var c=O(b,0,null);b=O(b,1,null);var d=gw(c);c=q(null)?q(c)?[r.g(null),"[",r.g(d),"]"].join(""):null:d;d=mw(a,c);return"string"===typeof b?new U(null,1,5,V,[new U(null,2,5,V,[c,b],null)],null):b instanceof S?new U(null,1,5,V,[new U(null,2,5,V,[c,Hf(b)],null)],null):Ve(b)?Xg(d,N([H(b)])):Ue(b)?Xg(d,N([Ig(a,H(b))])):new U(null,1,5,V,[new U(null,2,5,V,[c,b],null)],null)}
function mw(a,b){return function(c){var d=O(c,0,null);c=O(c,1,null);var e=gw(d);d=q(b)?q(d)?[r.g(b),"[",r.g(e),"]"].join(""):b:e;e=mw(a,d);return"string"===typeof c?new U(null,1,5,V,[new U(null,2,5,V,[d,c],null)],null):c instanceof S?new U(null,1,5,V,[new U(null,2,5,V,[d,Hf(c)],null)],null):Ve(c)?Xg(e,N([H(c)])):Ue(c)?Xg(e,N([Ig(a,H(c))])):new U(null,1,5,V,[new U(null,2,5,V,[d,c],null)],null)}}function nw(a,b){return Vv("\x26",Qg.a(iw,lw(kw(a),new U(null,2,5,V,[null,b],null))))}
function ow(a){return function(b){return Vv("\x26",Qg.a(iw,lw(kw(a),new U(null,2,5,V,[null,b],null))))}}function pw(a){a=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;a=F.a(a,lo);return new p(null,2,[gr,ow(a),tl,"application/x-www-form-urlencoded; charset\x3dutf-8"],null)};var Ew="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){return rb(a)},Fw="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===ha(a)};function Gw(){return Math.round(15*Math.random()).toString(16)};function Hw(a,b){if(3<a.length){if(b)return!0;b=a.charAt(1);return"~"===a.charAt(0)?":"===b||"$"===b||"#"===b:!1}return!1}function Iw(a){var b=Math.floor(a/44);a=String.fromCharCode(a%44+48);return 0===b?"^"+a:"^"+String.fromCharCode(b+48)+a}function Jw(){this.$g=this.oe=this.Ma=0;this.cache={}}
Jw.prototype.write=function(a,b){return Hw(a,b)?(4096===this.$g?(this.clear(),this.oe=0,this.cache={}):1936===this.Ma&&this.clear(),b=this.cache[a],null==b?(this.cache[a]=[Iw(this.Ma),this.oe],this.Ma++,a):b[1]!=this.oe?(b[1]=this.oe,b[0]=Iw(this.Ma),this.Ma++,a):b[0]):a};Jw.prototype.clear=function(){this.Ma=0;this.oe++};function Kw(){this.Ma=0;this.cache=[]}Kw.prototype.write=function(a){1936==this.Ma&&(this.Ma=0);this.cache[this.Ma]=a;this.Ma++;return a};
Kw.prototype.read=function(a){return this.cache[2===a.length?a.charCodeAt(1)-48:44*(a.charCodeAt(1)-48)+(a.charCodeAt(2)-48)]};Kw.prototype.clear=function(){this.Ma=0};var Lw=1;function Mw(a,b){if(null==a)return null==b;if(a===b)return!0;if("object"===typeof a){if(Fw(a)){if(Fw(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!Mw(a[c],b[c]))return!1;return!0}return!1}if(a.ic)return a.ic(b);if(null!=b&&"object"===typeof b){if(b.ic)return b.ic(a);c=0;var d=Ew(b).length,e;for(e in a)if(a.hasOwnProperty(e)&&(c++,!b.hasOwnProperty(e)||!Mw(a[e],b[e])))return!1;return c===d}}return!1}function Nw(a,b){return a^b+2654435769+(a<<6)+(a>>2)}var Ow={},Pw=0;
function Qw(a){var b=0;if(null!=a.forEach)a.forEach(function(a,c){b=(b+(Rw(c)^Rw(a)))%4503599627370496});else for(var c=Ew(a),d=0;d<c.length;d++){var e=c[d],f=a[e];b=(b+(Rw(e)^Rw(f)))%4503599627370496}return b}function Sw(a){var b=0;if(Fw(a))for(var c=0;c<a.length;c++)b=Nw(b,Rw(a[c]));else a.forEach&&a.forEach(function(a){b=Nw(b,Rw(a))});return b}
function Rw(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":var b=Ow[a];if(null!=b)a=b;else{for(var c=b=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;Pw++;256<=Pw&&(Ow={},Pw=1);a=Ow[a]=b}return a;case "function":return b=a.transit$hashCode$,b||(b=Lw,"undefined"!=typeof Object.defineProperty?Object.defineProperty(a,"transit$hashCode$",{value:b,enumerable:!1}):a.transit$hashCode$=b,Lw++),b;default:return a instanceof Date?a.valueOf():
Fw(a)?Sw(a):a.pc?a.pc():Qw(a)}};var Tw="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function Uw(a,b){this.tag=a;this.s=b;this.rb=-1}Uw.prototype.toString=function(){return"[TaggedValue: "+this.tag+", "+this.s+"]"};Uw.prototype.equiv=function(a){return Mw(this,a)};Uw.prototype.equiv=Uw.prototype.equiv;Uw.prototype.ic=function(a){return a instanceof Uw?this.tag===a.tag&&Mw(this.s,a.s):!1};Uw.prototype.pc=function(){-1===this.rb&&(this.rb=Nw(Rw(this.tag),Rw(this.s)));return this.rb};function Vw(a,b){return new Uw(a,b)}
var Ww=Ta("9007199254740991"),Xw=Ta("-9007199254740991");Ba.prototype.equiv=function(a){return Mw(this,a)};Ba.prototype.equiv=Ba.prototype.equiv;Ba.prototype.ic=function(a){return a instanceof Ba&&this.Wb(a)};Ba.prototype.pc=function(){return this.xe()};function Yw(a){this.Db=a;this.rb=-1}Yw.prototype.toString=function(){return":"+this.Db};Yw.prototype.namespace=function(){var a=this.Db.indexOf("/");return-1!=a?this.Db.substring(0,a):null};
Yw.prototype.name=function(){var a=this.Db.indexOf("/");return-1!=a?this.Db.substring(a+1,this.Db.length):this.Db};Yw.prototype.equiv=function(a){return Mw(this,a)};Yw.prototype.equiv=Yw.prototype.equiv;Yw.prototype.ic=function(a){return a instanceof Yw&&this.Db==a.Db};Yw.prototype.pc=function(){-1===this.rb&&(this.rb=Rw(this.Db));return this.rb};function Zw(a){this.Db=a;this.rb=-1}Zw.prototype.namespace=function(){var a=this.Db.indexOf("/");return-1!=a?this.Db.substring(0,a):null};
Zw.prototype.name=function(){var a=this.Db.indexOf("/");return-1!=a?this.Db.substring(a+1,this.Db.length):this.Db};Zw.prototype.toString=function(){return this.Db};Zw.prototype.equiv=function(a){return Mw(this,a)};Zw.prototype.equiv=Zw.prototype.equiv;Zw.prototype.ic=function(a){return a instanceof Zw&&this.Db==a.Db};Zw.prototype.pc=function(){-1===this.rb&&(this.rb=Rw(this.Db));return this.rb};
function $w(a,b,c){var d="";c=c||b+1;for(var e=8*(7-b),f=(new Ba(255,0)).shiftLeft(e);b<c;b++,e-=8,f=bb(f,8)){var h=bb(a.and(f),e).toString(16);1==h.length&&(h="0"+h);d+=h}return d}function ax(a,b){this.high=a;this.low=b;this.rb=-1}ax.prototype.toString=function(){var a=this.high,b=this.low;var c=$w(a,0,4)+"-";c+=$w(a,4,6)+"-";c+=$w(a,6,8)+"-";c+=$w(b,0,2)+"-";return c+=$w(b,2,8)};ax.prototype.equiv=function(a){return Mw(this,a)};ax.prototype.equiv=ax.prototype.equiv;
ax.prototype.ic=function(a){return a instanceof ax&&this.high.Wb(a.high)&&this.low.Wb(a.low)};ax.prototype.pc=function(){-1===this.rb&&(this.rb=Rw(this.toString()));return this.rb};Date.prototype.ic=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.pc=function(){return this.valueOf()};function bx(a,b){this.entries=a;this.type=b||0;this.Ma=0}
bx.prototype.next=function(){if(this.Ma<this.entries.length){var a={value:0===this.type?this.entries[this.Ma]:1===this.type?this.entries[this.Ma+1]:[this.entries[this.Ma],this.entries[this.Ma+1]],done:!1};this.Ma+=2;return a}return{value:null,done:!0}};bx.prototype.next=bx.prototype.next;bx.prototype[Tw]=function(){return this};function cx(a,b){this.map=a;this.type=b||0;this.keys=this.map.Gc();this.Ma=0;this.nd=null;this.ad=0}
cx.prototype.next=function(){if(this.Ma<this.map.size){null!=this.nd&&this.ad<this.nd.length||(this.nd=this.map.map[this.keys[this.Ma]],this.ad=0);var a={value:0===this.type?this.nd[this.ad]:1===this.type?this.nd[this.ad+1]:[this.nd[this.ad],this.nd[this.ad+1]],done:!1};this.Ma++;this.ad+=2;return a}return{value:null,done:!0}};cx.prototype.next=cx.prototype.next;cx.prototype[Tw]=function(){return this};
function dx(a,b){if(a instanceof ex&&(b instanceof fx||b instanceof ex)){if(a.size!==b.size)return!1;for(var c in a.map)for(var d=a.map[c],e=0;e<d.length;e+=2)if(!Mw(d[e+1],b.get(d[e])))return!1;return!0}if(a instanceof fx&&(b instanceof fx||b instanceof ex)){if(a.size!==b.size)return!1;a=a.pb;for(e=0;e<a.length;e+=2)if(!Mw(a[e+1],b.get(a[e])))return!1;return!0}if(null!=b&&"object"===typeof b&&(e=Ew(b),c=e.length,a.size===c)){for(d=0;d<c;d++){var f=e[d];if(!a.has(f)||!Mw(b[f],a.get(f)))return!1}return!0}return!1}
function gx(a){return null==a?"null":"array"==ha(a)?"["+a.toString()+"]":ca(a)?'"'+a+'"':a.toString()}function hx(a){var b=0,c="TransitMap {";a.forEach(function(d,e){c+=gx(e)+" \x3d\x3e "+gx(d);b<a.size-1&&(c+=", ");b++});return c+"}"}function ix(a){var b=0,c="TransitSet {";a.forEach(function(d){c+=gx(d);b<a.size-1&&(c+=", ");b++});return c+"}"}function fx(a){this.pb=a;this.bb=null;this.rb=-1;this.size=a.length/2;this.jg=0}fx.prototype.toString=function(){return hx(this)};fx.prototype.inspect=function(){return this.toString()};
function jx(a){if(a.bb)throw Error("Invalid operation, already converted");if(8>a.size)return!1;a.jg++;return 32<a.jg?(a.bb=kx(a.pb,!1,!0),a.pb=[],!0):!1}fx.prototype.clear=function(){this.rb=-1;this.bb?this.bb.clear():this.pb=[];this.size=0};fx.prototype.clear=fx.prototype.clear;fx.prototype.keys=function(){return this.bb?this.bb.keys():new bx(this.pb,0)};fx.prototype.keys=fx.prototype.keys;
fx.prototype.wd=function(){if(this.bb)return this.bb.wd();for(var a=[],b=0,c=0;c<this.pb.length;b++,c+=2)a[b]=this.pb[c];return a};fx.prototype.keySet=fx.prototype.wd;fx.prototype.entries=function(){return this.bb?this.bb.entries():new bx(this.pb,2)};fx.prototype.entries=fx.prototype.entries;fx.prototype.values=function(){return this.bb?this.bb.values():new bx(this.pb,1)};fx.prototype.values=fx.prototype.values;
fx.prototype.forEach=function(a){if(this.bb)this.bb.forEach(a);else for(var b=0;b<this.pb.length;b+=2)a(this.pb[b+1],this.pb[b])};fx.prototype.forEach=fx.prototype.forEach;fx.prototype.get=function(a,b){if(this.bb)return this.bb.get(a);if(jx(this))return this.get(a);for(var c=0;c<this.pb.length;c+=2)if(Mw(this.pb[c],a))return this.pb[c+1];return b};fx.prototype.get=fx.prototype.get;
fx.prototype.has=function(a){if(this.bb)return this.bb.has(a);if(jx(this))return this.has(a);for(var b=0;b<this.pb.length;b+=2)if(Mw(this.pb[b],a))return!0;return!1};fx.prototype.has=fx.prototype.has;fx.prototype.set=function(a,b){this.rb=-1;if(this.bb)this.bb.set(a,b),this.size=this.bb.size;else{for(var c=0;c<this.pb.length;c+=2)if(Mw(this.pb[c],a)){this.pb[c+1]=b;return}this.pb.push(a);this.pb.push(b);this.size++;32<this.size&&(this.bb=kx(this.pb,!1,!0),this.pb=null)}};fx.prototype.set=fx.prototype.set;
fx.prototype["delete"]=function(a){this.rb=-1;if(this.bb)return a=this.bb["delete"](a),this.size=this.bb.size,a;for(var b=0;b<this.pb.length;b+=2)if(Mw(this.pb[b],a))return a=this.pb[b+1],this.pb.splice(b,2),this.size--,a};fx.prototype.clone=function(){var a=kx();this.forEach(function(b,c){a.set(c,b)});return a};fx.prototype.clone=fx.prototype.clone;fx.prototype[Tw]=function(){return this.entries()};fx.prototype.pc=function(){if(this.bb)return this.bb.pc();-1===this.rb&&(this.rb=Qw(this));return this.rb};
fx.prototype.ic=function(a){return this.bb?dx(this.bb,a):dx(this,a)};function ex(a,b,c){this.map=b||{};this.Gd=a||[];this.size=c||0;this.rb=-1}ex.prototype.toString=function(){return hx(this)};ex.prototype.inspect=function(){return this.toString()};ex.prototype.clear=function(){this.rb=-1;this.map={};this.Gd=[];this.size=0};ex.prototype.clear=ex.prototype.clear;ex.prototype.Gc=function(){return null!=this.Gd?this.Gd:Ew(this.map)};
ex.prototype["delete"]=function(a){this.rb=-1;this.Gd=null;for(var b=Rw(a),c=this.map[b],d=0;d<c.length;d+=2)if(Mw(a,c[d]))return a=c[d+1],c.splice(d,2),0===c.length&&delete this.map[b],this.size--,a};ex.prototype.entries=function(){return new cx(this,2)};ex.prototype.entries=ex.prototype.entries;ex.prototype.forEach=function(a){for(var b=this.Gc(),c=0;c<b.length;c++)for(var d=this.map[b[c]],e=0;e<d.length;e+=2)a(d[e+1],d[e],this)};ex.prototype.forEach=ex.prototype.forEach;
ex.prototype.get=function(a,b){var c=Rw(a);c=this.map[c];if(null!=c)for(b=0;b<c.length;b+=2){if(Mw(a,c[b]))return c[b+1]}else return b};ex.prototype.get=ex.prototype.get;ex.prototype.has=function(a){var b=Rw(a);b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2)if(Mw(a,b[c]))return!0;return!1};ex.prototype.has=ex.prototype.has;ex.prototype.keys=function(){return new cx(this,0)};ex.prototype.keys=ex.prototype.keys;
ex.prototype.wd=function(){for(var a=this.Gc(),b=[],c=0;c<a.length;c++)for(var d=this.map[a[c]],e=0;e<d.length;e+=2)b.push(d[e]);return b};ex.prototype.keySet=ex.prototype.wd;ex.prototype.set=function(a,b){this.rb=-1;var c=Rw(a),d=this.map[c];if(null==d)this.Gd&&this.Gd.push(c),this.map[c]=[a,b],this.size++;else{c=!0;for(var e=0;e<d.length;e+=2)if(Mw(b,d[e])){c=!1;d[e]=b;break}c&&(d.push(a),d.push(b),this.size++)}};ex.prototype.set=ex.prototype.set;
ex.prototype.values=function(){return new cx(this,1)};ex.prototype.values=ex.prototype.values;ex.prototype.clone=function(){var a=kx();this.forEach(function(b,c){a.set(c,b)});return a};ex.prototype.clone=ex.prototype.clone;ex.prototype[Tw]=function(){return this.entries()};ex.prototype.pc=function(){-1===this.rb&&(this.rb=Qw(this));return this.rb};ex.prototype.ic=function(a){return dx(this,a)};
function kx(a,b,c){a=a||[];b=!1===b?b:!0;if((!0!==c||!c)&&64>=a.length){if(b){var d=a;a=[];for(b=0;b<d.length;b+=2){var e=!1;for(c=0;c<a.length;c+=2)if(Mw(a[c],d[b])){a[c+1]=d[b+1];e=!0;break}e||(a.push(d[b]),a.push(d[b+1]))}}return new fx(a)}d={};e=[];var f=0;for(b=0;b<a.length;b+=2){c=Rw(a[b]);var h=d[c];if(null==h)e.push(c),d[c]=[a[b],a[b+1]],f++;else{var k=!0;for(c=0;c<h.length;c+=2)if(Mw(h[c],a[b])){h[c+1]=a[b+1];k=!1;break}k&&(h.push(a[b]),h.push(a[b+1]),f++)}}return new ex(e,d,f)}
function lx(a){this.map=a;this.size=a.size}lx.prototype.toString=function(){return ix(this)};lx.prototype.inspect=function(){return this.toString()};lx.prototype.add=function(a){this.map.set(a,a);this.size=this.map.size};lx.prototype.add=lx.prototype.add;lx.prototype.clear=function(){this.map=new ex;this.size=0};lx.prototype.clear=lx.prototype.clear;lx.prototype["delete"]=function(a){a=this.map["delete"](a);this.size=this.map.size;return a};lx.prototype.entries=function(){return this.map.entries()};
lx.prototype.entries=lx.prototype.entries;lx.prototype.forEach=function(a){var b=this;this.map.forEach(function(c,d){a(d,b)})};lx.prototype.forEach=lx.prototype.forEach;lx.prototype.has=function(a){return this.map.has(a)};lx.prototype.has=lx.prototype.has;lx.prototype.keys=function(){return this.map.keys()};lx.prototype.keys=lx.prototype.keys;lx.prototype.wd=function(){return this.map.wd()};lx.prototype.keySet=lx.prototype.wd;lx.prototype.values=function(){return this.map.values()};
lx.prototype.values=lx.prototype.values;lx.prototype.clone=function(){var a=mx();this.forEach(function(b){a.add(b)});return a};lx.prototype.clone=lx.prototype.clone;lx.prototype[Tw]=function(){return this.values()};lx.prototype.ic=function(a){if(a instanceof lx){if(this.size===a.size)return Mw(this.map,a.map)}else return!1};lx.prototype.pc=function(){return Rw(this.map)};
function mx(a){a=a||[];for(var b={},c=[],d=0,e=0;e<a.length;e++){var f=Rw(a[e]),h=b[f];if(null==h)c.push(f),b[f]=[a[e],a[e]],d++;else{f=!0;for(var k=0;k<h.length;k+=2)if(Mw(h[k],a[e])){f=!1;break}f&&(h.push(a[e]),h.push(a[e]),d++)}}return new lx(new ex(c,b,d))};function nx(a){this.Ub=a}
function ox(a){this.options=a||{};this.Kb={};for(var b in this.me.Kb)this.Kb[b]=this.me.Kb[b];for(b in this.options.handlers){a:{switch(b){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":a=!0;break a}a=!1}if(a)throw Error('Cannot override handler for ground type "'+b+'"');this.Kb[b]=this.options.handlers[b]}this.Ve=null!=this.options.preferStrings?this.options.preferStrings:this.me.Ve;this.dg=null!=this.options.preferBuffers?this.options.preferBuffers:this.me.dg;
this.Jf=this.options.defaultHandler||this.me.Jf;this.kc=this.options.mapBuilder;this.Id=this.options.arrayBuilder}
ox.prototype.me={Kb:{_:function(){return null},"?":function(a){return"t"===a},b:function(a,b){if(b&&!1===b.dg||"undefined"==typeof Buffer)if("undefined"!=typeof Uint8Array){if("undefined"!=typeof atob)var c=atob(a);else{a=String(a).replace(/=+$/,"");if(1==a.length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");b=0;for(var d,e=0,f="";d=a.charAt(e++);~d&&(c=b%4?64*c+d:d,b++%4)?f+=String.fromCharCode(255&c>>(-2*b&6)):0)d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".indexOf(d);
c=f}a=c.length;b=new Uint8Array(a);for(d=0;d<a;d++)b[d]=c.charCodeAt(d);c=b}else c=Vw("b",a);else c=new Buffer(a,"base64");return c},i:function(a){"number"===typeof a||a instanceof Ba||(a=Ta(a,10),a=a.Oe(Ww)||a.Rd(Xw)?a:a.yc());return a},n:function(a){return Vw("n",a)},d:function(a){return parseFloat(a)},f:function(a){return Vw("f",a)},c:function(a){return a},":":function(a){return new Yw(a)},$:function(a){return new Zw(a)},r:function(a){return Vw("r",a)},z:function(a){a:switch(a){case "-INF":a=-Infinity;
break a;case "INF":a=Infinity;break a;case "NaN":a=NaN;break a;default:throw Error("Invalid special double value "+a);}return a},"'":function(a){return a},m:function(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)},t:function(a){return new Date(a)},u:function(a){a=a.replace(/-/g,"");var b,c;var d=b=0;for(c=24;8>d;d+=2,c-=8)b|=parseInt(a.substring(d,d+2),16)<<c;var e=0;d=8;for(c=24;16>d;d+=2,c-=8)e|=parseInt(a.substring(d,d+2),16)<<c;var f=Qa(e,b);b=0;d=16;for(c=24;24>d;d+=2,c-=8)b|=parseInt(a.substring(d,
d+2),16)<<c;e=0;for(c=d=24;32>d;d+=2,c-=8)e|=parseInt(a.substring(d,d+2),16)<<c;return new ax(f,Qa(e,b))},set:function(a){return mx(a)},list:function(a){return Vw("list",a)},link:function(a){return Vw("link",a)},cmap:function(a){return kx(a,!1)}},Jf:function(a,b){return Vw(a,b)},Ve:!0,dg:!0};
ox.prototype.decode=function(a,b,c,d){if(null==a)return null;switch(typeof a){case "string":return Hw(a,c)?(a=px(this,a),b&&b.write(a,c),b=a):b="^"===a.charAt(0)&&" "!==a.charAt(1)?b.read(a,c):px(this,a),b;case "object":if(Fw(a))if("^ "===a[0])if(this.kc)if(17>a.length&&this.kc.w){d=[];for(c=1;c<a.length;c+=2)d.push(this.decode(a[c],b,!0,!1)),d.push(this.decode(a[c+1],b,!1,!1));b=this.kc.w(d,a)}else{d=this.kc.A(a);for(c=1;c<a.length;c+=2)d=this.kc.add(d,this.decode(a[c],b,!0,!1),this.decode(a[c+1],
b,!1,!1),a);b=this.kc.D(d)}else{d=[];for(c=1;c<a.length;c+=2)d.push(this.decode(a[c],b,!0,!1)),d.push(this.decode(a[c+1],b,!1,!1));b=kx(d,!1)}else b=qx(this,a,b,c,d);else{c=Ew(a);var e=c[0];if((d=1==c.length?this.decode(e,b,!1,!1):null)&&d instanceof nx)a=a[e],c=this.Kb[d.Ub],b=null!=c?c(this.decode(a,b,!1,!0),this):Vw(d.Ub,this.decode(a,b,!1,!1));else if(this.kc)if(16>c.length&&this.kc.w){var f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.decode(e,b,!0,!1)),f.push(this.decode(a[e],b,!1,!1));b=this.kc.w(f,
a)}else{f=this.kc.A(a);for(d=0;d<c.length;d++)e=c[d],f=this.kc.add(f,this.decode(e,b,!0,!1),this.decode(a[e],b,!1,!1),a);b=this.kc.D(f)}else{f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.decode(e,b,!0,!1)),f.push(this.decode(a[e],b,!1,!1));b=kx(f,!1)}}return b}return a};ox.prototype.decode=ox.prototype.decode;
function qx(a,b,c,d,e){if(e){var f=[];for(e=0;e<b.length;e++)f.push(a.decode(b[e],c,d,!1));return f}f=c&&c.Ma;if(2===b.length&&"string"===typeof b[0]&&(e=a.decode(b[0],c,!1,!1))&&e instanceof nx)return b=b[1],f=a.Kb[e.Ub],null!=f?f=f(a.decode(b,c,d,!0),a):Vw(e.Ub,a.decode(b,c,d,!1));c&&f!=c.Ma&&(c.Ma=f);if(a.Id){if(32>=b.length&&a.Id.w){f=[];for(e=0;e<b.length;e++)f.push(a.decode(b[e],c,d,!1));return a.Id.w(f,b)}f=a.Id.A(b);for(e=0;e<b.length;e++)f=a.Id.add(f,a.decode(b[e],c,d,!1),b);return a.Id.D(f)}f=
[];for(e=0;e<b.length;e++)f.push(a.decode(b[e],c,d,!1));return f}function px(a,b){if("~"===b.charAt(0)){var c=b.charAt(1);if("~"===c||"^"===c||"`"===c)return b.substring(1);if("#"===c)return new nx(b.substring(2));var d=a.Kb[c];return null==d?a.Jf(c,b.substring(2)):d(b.substring(2),a)}return b};function rx(a){this.qh=new ox(a)}function sx(a,b){this.Yi=a;this.options=b||{};this.cache=this.options.cache?this.options.cache:new Kw}sx.prototype.read=function(a){var b=this.cache;a=this.Yi.qh.decode(JSON.parse(a),b);this.cache.clear();return a};sx.prototype.read=sx.prototype.read;var tx=0,Vg=(8|3&Math.round(14*Math.random())).toString(16),vx="transit$guid$"+(Gw()+Gw()+Gw()+Gw()+Gw()+Gw()+Gw()+Gw()+"-"+Gw()+Gw()+Gw()+Gw()+"-4"+Gw()+Gw()+Gw()+"-"+Vg+Gw()+Gw()+Gw()+"-"+Gw()+Gw()+Gw()+Gw()+Gw()+Gw()+Gw()+Gw()+Gw()+Gw()+Gw()+Gw());
function wx(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var b=a[vx];null==b&&("undefined"!=typeof Object.defineProperty?(b=++tx,Object.defineProperty(a,vx,{value:b,enumerable:!1})):a[vx]=b=++tx);return b}function xx(a,b){a=a.toString();for(var c=a.length;c<b;c++)a="0"+a;return a}function yx(){}yx.prototype.tag=function(){return"_"};yx.prototype.s=function(){return null};
yx.prototype.v=function(){return"null"};function zx(){}zx.prototype.tag=function(){return"s"};zx.prototype.s=function(a){return a};zx.prototype.v=function(a){return a};function Ax(){}Ax.prototype.tag=function(){return"i"};Ax.prototype.s=function(a){return a};Ax.prototype.v=function(a){return a.toString()};function Bx(){}Bx.prototype.tag=function(){return"i"};Bx.prototype.s=function(a){return a.toString()};Bx.prototype.v=function(a){return a.toString()};function Cx(){}Cx.prototype.tag=function(){return"?"};
Cx.prototype.s=function(a){return a};Cx.prototype.v=function(a){return a.toString()};function Dx(){}Dx.prototype.tag=function(){return"array"};Dx.prototype.s=function(a){return a};Dx.prototype.v=function(){return null};function Ex(){}Ex.prototype.tag=function(){return"map"};Ex.prototype.s=function(a){return a};Ex.prototype.v=function(){return null};function Fx(){}Fx.prototype.tag=function(){return"t"};
Fx.prototype.s=function(a){return a.getUTCFullYear()+"-"+xx(a.getUTCMonth()+1,2)+"-"+xx(a.getUTCDate(),2)+"T"+xx(a.getUTCHours(),2)+":"+xx(a.getUTCMinutes(),2)+":"+xx(a.getUTCSeconds(),2)+"."+xx(a.getUTCMilliseconds(),3)+"Z"};Fx.prototype.v=function(a,b){return b.s(a)};function Gx(){}Gx.prototype.tag=function(){return"m"};Gx.prototype.s=function(a){return a.valueOf()};Gx.prototype.v=function(a){return a.valueOf().toString()};function Hx(){}Hx.prototype.tag=function(){return"u"};Hx.prototype.s=function(a){return a.toString()};
Hx.prototype.v=function(a){return a.toString()};function Ix(){}Ix.prototype.tag=function(){return":"};Ix.prototype.s=function(a){return a.Db};Ix.prototype.v=function(a,b){return b.s(a)};function Jx(){}Jx.prototype.tag=function(){return"$"};Jx.prototype.s=function(a){return a.Db};Jx.prototype.v=function(a,b){return b.s(a)};function Kx(){}Kx.prototype.tag=function(a){return a.tag};Kx.prototype.s=function(a){return a.s};Kx.prototype.v=function(){return null};function Lx(){}Lx.prototype.tag=function(){return"set"};
Lx.prototype.s=function(a){var b=[];a.forEach(function(a){b.push(a)});return Vw("array",b)};Lx.prototype.v=function(){return null};function Mx(){}Mx.prototype.tag=function(){return"map"};Mx.prototype.s=function(a){return a};Mx.prototype.v=function(){return null};function Nx(){}Nx.prototype.tag=function(){return"map"};Nx.prototype.s=function(a){return a};Nx.prototype.v=function(){return null};function Ox(){}Ox.prototype.tag=function(){return"b"};Ox.prototype.s=function(a){return a.toString("base64")};
Ox.prototype.v=function(){return null};function Px(){}Px.prototype.tag=function(){return"b"};
Px.prototype.s=function(a){for(var b,c=0,d=a.length,e="",f;c<d;)f=a.subarray(c,Math.min(c+32768,d)),e+=String.fromCharCode.apply(null,f),c+=32768;if("undefined"!=typeof btoa)b=btoa(e);else{a=String(e);d=0;e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d";for(f="";a.charAt(d|0)||(e="\x3d",d%1);f+=e.charAt(63&b>>8-d%1*8)){c=a.charCodeAt(d+=.75);if(255<c)throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");b=b<<8|c}b=f}return b};
Px.prototype.v=function(){return null};function Qx(){this.Kb={};this.set(null,new yx);this.set(String,new zx);this.set(Number,new Ax);this.set(Ba,new Bx);this.set(Boolean,new Cx);this.set(Array,new Dx);this.set(Object,new Ex);this.set(Date,new Gx);this.set(ax,new Hx);this.set(Yw,new Ix);this.set(Zw,new Jx);this.set(Uw,new Kx);this.set(lx,new Lx);this.set(fx,new Mx);this.set(ex,new Nx);"undefined"!=typeof Buffer&&this.set(Buffer,new Ox);"undefined"!=typeof Uint8Array&&this.set(Uint8Array,new Px)}
Qx.prototype.get=function(a){a="string"===typeof a?this.Kb[a]:this.Kb[wx(a)];return null!=a?a:this.Kb["default"]};Qx.prototype.get=Qx.prototype.get;Qx.prototype.set=function(a,b){var c;if(c="string"===typeof a)a:{switch(a){case "null":case "string":case "boolean":case "number":case "array":case "map":c=!1;break a}c=!0}c?this.Kb[a]=b:this.Kb[wx(a)]=b};function Rx(a){this.jd=a||{};this.Ve=null!=this.jd.preferStrings?this.jd.preferStrings:!0;this.Lg=this.jd.objectBuilder||null;this.Kb=new Qx;if(a=this.jd.handlers){if(Fw(a)||!a.forEach)throw Error('transit writer "handlers" option must be a map');var b=this;a.forEach(function(a,d){if(void 0!==d)b.Kb.set(d,a);else throw Error("Cannot create handler for JavaScript undefined");})}this.pe=this.jd.handlerForForeign;this.af=this.jd.unpack||function(a){return a instanceof fx&&null===a.bb?a.pb:!1};this.ye=
this.jd&&this.jd.verbose||!1}Rx.prototype.cc=function(a){var b=this.Kb.get(null==a?null:a.constructor);return null!=b?b:(a=a&&a.transitTag)?this.Kb.get(a):null};function Sx(a,b,c,d,e){a=a+b+c;return e?e.write(a,d):a}function Tx(a,b,c){var d=[];if(Fw(b))for(var e=0;e<b.length;e++)d.push(Ux(a,b[e],!1,c));else b.forEach(function(b){d.push(Ux(a,b,!1,c))});return d}function Vx(a,b){return"string"!==typeof b?(a=a.cc(b))&&1===a.tag(b).length:!0}
function Wx(a,b){var c=a.af(b),d=!0;if(c){for(b=0;b<c.length&&(d=Vx(a,c[b]),d);b+=2);return d}if(b.keys){c=b.keys();var e=null;if(c.next){for(e=c.next();!e.done;){d=Vx(a,e.value);if(!d)break;e=c.next()}return d}}if(b.forEach)return b.forEach(function(b,c){d=d&&Vx(a,c)}),d;throw Error("Cannot walk keys of object type "+(null==b?null:b.constructor).name);}
function Xx(a){if(a.constructor.transit$isObject)return!0;var b=a.constructor.toString();b=b.substr(9);b=b.substr(0,b.indexOf("("));isObject="Object"==b;"undefined"!=typeof Object.defineProperty?Object.defineProperty(a.constructor,"transit$isObject",{value:isObject,enumerable:!1}):a.constructor.transit$isObject=isObject;return isObject}
function Yx(a,b,c){var d=null,e=null,f=null;d=null;var h=0;if(b.constructor===Object||null!=b.forEach||a.pe&&Xx(b)){if(a.ye){if(null!=b.forEach)if(Wx(a,b)){var k={};b.forEach(function(b,d){k[Ux(a,d,!0,!1)]=Ux(a,b,!1,c)})}else{d=a.af(b);e=[];f=Sx("~#","cmap","",!0,c);if(d)for(;h<d.length;h+=2)e.push(Ux(a,d[h],!1,!1)),e.push(Ux(a,d[h+1],!1,c));else b.forEach(function(b,d){e.push(Ux(a,d,!1,!1));e.push(Ux(a,b,!1,c))});k={};k[f]=e}else for(d=Ew(b),k={};h<d.length;h++)k[Ux(a,d[h],!0,!1)]=Ux(a,b[d[h]],!1,
c);return k}if(null!=b.forEach){if(Wx(a,b)){d=a.af(b);k=["^ "];if(d)for(;h<d.length;h+=2)k.push(Ux(a,d[h],!0,c)),k.push(Ux(a,d[h+1],!1,c));else b.forEach(function(b,d){k.push(Ux(a,d,!0,c));k.push(Ux(a,b,!1,c))});return k}d=a.af(b);e=[];f=Sx("~#","cmap","",!0,c);if(d)for(;h<d.length;h+=2)e.push(Ux(a,d[h],!1,c)),e.push(Ux(a,d[h+1],!1,c));else b.forEach(function(b,d){e.push(Ux(a,d,!1,c));e.push(Ux(a,b,!1,c))});return[f,e]}k=["^ "];for(d=Ew(b);h<d.length;h++)k.push(Ux(a,d[h],!0,c)),k.push(Ux(a,b[d[h]],
!1,c));return k}if(null!=a.Lg)return a.Lg(b,function(b){return Ux(a,b,!0,c)},function(b){return Ux(a,b,!1,c)});h=(null==b?null:b.constructor).name;d=Error("Cannot write "+h);d.data={bg:b,type:h};throw d;}
function Ux(a,b,c,d){var e=a.cc(b)||(a.pe?a.pe(b,a.Kb):null),f=e?e.tag(b):null,h=e?e.s(b):null;if(null!=e&&null!=f)switch(f){case "_":return c?Sx("~","_","",c,d):null;case "s":return 0<h.length?(a=h.charAt(0),a="~"===a||"^"===a||"`"===a?"~"+h:h):a=h,Sx("","",a,c,d);case "?":return c?Sx("~","?",h.toString()[0],c,d):h;case "i":return Infinity===h?Sx("~","z","INF",c,d):-Infinity===h?Sx("~","z","-INF",c,d):isNaN(h)?Sx("~","z","NaN",c,d):c||"string"===typeof h||h instanceof Ba?Sx("~","i",h.toString(),
c,d):h;case "d":return c?Sx(h.aj,"d",h,c,d):h;case "b":return Sx("~","b",h,c,d);case "'":return a.ye?(b={},c=Sx("~#","'","",!0,d),b[c]=Ux(a,h,!1,d),d=b):d=[Sx("~#","'","",!0,d),Ux(a,h,!1,d)],d;case "array":return Tx(a,h,d);case "map":return Yx(a,h,d);default:a:{if(1===f.length){if("string"===typeof h){d=Sx("~",f,h,c,d);break a}if(c||a.Ve){(a=a.ye&&new Fx)?(f=a.tag(b),h=a.v(b,a)):h=e.v(b,e);if(null!==h){d=Sx("~",f,h,c,d);break a}d=Error('Tag "'+f+'" cannot be encoded as string');d.data={tag:f,s:h,
bg:b};throw d;}}b=f;c=h;a.ye?(h={},h[Sx("~#",b,"",!0,d)]=Ux(a,c,!1,d),d=h):d=[Sx("~#",b,"",!0,d),Ux(a,c,!1,d)]}return d}else throw d=(null==b?null:b.constructor).name,a=Error("Cannot write "+d),a.data={bg:b,type:d},a;}function Zx(a,b){a=a.cc(b)||(a.pe?a.pe(b,a.Kb):null);if(null!=a)return 1===a.tag(b).length?Vw("'",b):b;a=(null==b?null:b.constructor).name;var c=Error("Cannot write "+a);c.data={bg:b,type:a};throw c;}
function $x(a,b){this.Wd=a;this.options=b||{};this.cache=!1===this.options.cache?null:this.options.cache?this.options.cache:new Jw}$x.prototype.uh=function(){return this.Wd};$x.prototype.marshaller=$x.prototype.uh;$x.prototype.write=function(a,b){var c=b||{};b=c.asMapKey||!1;var d=this.Wd.ye?!1:this.cache;!1===c.marshalTop?a=Ux(this.Wd,a,b,d):(c=this.Wd,a=JSON.stringify(Ux(c,Zx(c,a),b,d)));null!=this.cache&&this.cache.clear();return a};$x.prototype.write=$x.prototype.write;
$x.prototype.register=function(a,b){this.Wd.Kb.set(a,b)};$x.prototype.register=$x.prototype.register;function ay(a,b){if("json"===a||"json-verbose"===a||null==a)return a=new rx(b),new sx(a,b);throw Error("Cannot create reader of type "+a);}function by(a,b){if("json"===a||"json-verbose"===a||null==a)return"json-verbose"===a&&(null==b&&(b={}),b.verbose=!0),a=new Rx(b),new $x(a,b);b=Error('Type must be "json"');b.data={type:a};throw b;};Yk.prototype.ea=function(a,b){return b instanceof Yk?this.Ac===b.Ac:b instanceof ax?this.Ac===b.toString():!1};Ba.prototype.ea=function(a,b){return this.equiv(b)};ax.prototype.ea=function(a,b){return b instanceof Yk?b.ea(null,this):this.equiv(b)};Uw.prototype.ea=function(a,b){return this.equiv(b)};Ba.prototype.uf=n;Ba.prototype.na=function(){return Rw(this)};ax.prototype.uf=n;ax.prototype.na=function(){return Od(this.toString())};Uw.prototype.uf=n;Uw.prototype.na=function(){return Rw(this)};
ax.prototype.Pa=n;ax.prototype.ma=function(a,b){return kd(b,['#uuid "',r.g(this.toString()),'"'].join(""))};function cy(a,b){for(var c=H(rb(b)),d=null,e=0,f=0;;)if(f<e){var h=d.za(null,f);a[h]=b[h];f+=1}else if(c=H(c))d=c,Ye(d)?(c=wd(d),f=xd(d),d=c,e=K(c),c=f):(c=I(d),a[c]=b[c],c=J(d),d=null,e=0),f=0;else break;return a}function dy(){}dy.prototype.A=function(){return pd(jg)};dy.prototype.add=function(a,b,c){return sd(a,b,c)};dy.prototype.D=function(a){return rd(a)};
dy.prototype.w=function(a){return mi.call(null,a)};function ey(){}ey.prototype.A=function(){return pd(Fe)};ey.prototype.add=function(a,b){return Tf.a(a,b)};ey.prototype.D=function(a){return rd(a)};ey.prototype.w=function(a){return Hh.call(null,a)};
function fy(a){var b=Hf(Kp);a=cy({handlers:tk(lj.S(N([new p(null,6,["$",function(){return function(a){return Td.g(a)}}(b),":",function(){return function(a){return Gf.g(a)}}(b),"set",function(){return function(a){return ch.a(zj,a)}}(b),"list",function(){return function(a){return ch.a(Zd,a.reverse())}}(b),"cmap",function(){return function(a){for(var b=0,c=pd(jg);;)if(b<a.length){var f=b+2;c=sd(c,a[b],a[b+1]);b=f}else return rd(c)}}(b),"with-meta",function(){return function(a){return Oe(a[0],a[1])}}(b)],
null),Ol.g(a)]))),mapBuilder:new dy,arrayBuilder:new ey,prefersStrings:!1},tk(Le.a(a,Ol)));return ay(b,a)}function gy(){}gy.prototype.tag=function(){return":"};gy.prototype.s=function(a){return a.Ea};gy.prototype.v=function(a){return a.Ea};function hy(){}hy.prototype.tag=function(){return"$"};hy.prototype.s=function(a){return a.Ub};hy.prototype.v=function(a){return a.Ub};function iy(){}iy.prototype.tag=function(){return"list"};
iy.prototype.s=function(a){var b=[];a=H(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.za(null,e);b.push(f);e+=1}else if(a=H(a))c=a,Ye(c)?(a=wd(c),e=xd(c),c=a,d=K(a),a=e):(a=I(c),b.push(a),a=J(c),c=null,d=0),e=0;else break;return Vw("array",b)};iy.prototype.v=function(){return null};function jy(){}jy.prototype.tag=function(){return"map"};jy.prototype.s=function(a){return a};jy.prototype.v=function(){return null};function ky(){}ky.prototype.tag=function(){return"set"};
ky.prototype.s=function(a){var b=[];a=H(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.za(null,e);b.push(f);e+=1}else if(a=H(a))c=a,Ye(c)?(a=wd(c),e=xd(c),c=a,d=K(a),a=e):(a=I(c),b.push(a),a=J(c),c=null,d=0),e=0;else break;return Vw("array",b)};ky.prototype.v=function(){return null};function ly(){}ly.prototype.tag=function(){return"array"};
ly.prototype.s=function(a){var b=[];a=H(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.za(null,e);b.push(f);e+=1}else if(a=H(a))c=a,Ye(c)?(a=wd(c),e=xd(c),c=a,d=K(a),a=e):(a=I(c),b.push(a),a=J(c),c=null,d=0),e=0;else break;return b};ly.prototype.v=function(){return null};function my(){}my.prototype.tag=function(){return"u"};my.prototype.s=function(a){return a.Ac};my.prototype.v=function(a){return this.s(a)};function ny(a,b){this.value=a;this.ca=b}function oy(){}oy.prototype.tag=function(){return"with-meta"};
oy.prototype.s=function(a){return Vw("array",[a.value,a.ca])};oy.prototype.v=function(){return null};
function py(a,b){var c=new gy,d=new hy,e=new iy,f=new jy,h=new ky,k=new ly,l=new my,m=new oy,t=lj.S(N([Qi([f,e,f,e,e,e,c,e,e,k,e,e,e,m,e,k,e,e,h,f,e,e,h,e,d,l,e,e]),"undefined"!==typeof Lb&&"undefined"!==typeof Mb&&"undefined"!==typeof pk?Ke([pk,e]):null,"undefined"!==typeof Lb&&"undefined"!==typeof Mb&&"undefined"!==typeof Ug?Ke([Ug,e]):null,"undefined"!==typeof Lb&&"undefined"!==typeof Mb&&"undefined"!==typeof Q?Ke([Q,k]):null,Ol.g(b)])),u=Hf(a);a=cy({objectBuilder:function(a,b,c,d,e,f,h,k,l,m){return function(v,
t,u){return pf(function(){return function(a,b,c){a.push(t.g?t.g(b):t.call(null,b),u.g?u.g(c):u.call(null,c));return a}}(a,b,c,d,e,f,h,k,l,m),["^ "],v)}}(u,c,d,e,f,h,k,l,m,t),handlers:function(){var a=qc(t);a.forEach=function(){return function(a){for(var b=H(this),c=null,d=0,e=0;;)if(e<d){var f=c.za(null,e),h=O(f,0,null);f=O(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=H(b))Ye(b)?(c=wd(b),b=xd(b),h=c,d=K(c),c=h):(c=I(b),h=O(c,0,null),f=O(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=J(b),c=null,
d=0),e=0;else return null}}(a,u,c,d,e,f,h,k,l,m,t);return a}(),unpack:function(){return function(a){return a instanceof p?a.M:!1}}(u,c,d,e,f,h,k,l,m,t)},tk(Le.a(b,Ol)));return by(u,a)};function sA(a,b,c){if(yf(c)){var d=$f(Bf,Qg.a(a,c));return b.g?b.g(d):b.call(null,d)}return Jh(c)?(d=new Q(function(){var b=Nc(c);return a.g?a.g(b):a.call(null,b)}(),function(){var b=Oc(c);return a.g?a.g(b):a.call(null,b)}(),null),b.g?b.g(d):b.call(null,d)):af(c)?(d=Oj(Qg.a(a,c)),b.g?b.g(d):b.call(null,d)):We(c)?(d=x(function(b,c){return Ee.a(b,a.g?a.g(c):a.call(null,c))},c,c),b.g?b.g(d):b.call(null,d)):Se(c)?(d=ch.a(Va(c),Qg.a(a,c)),b.g?b.g(d):b.call(null,d)):b.g?b.g(c):b.call(null,c)}
var W=function W(a,b){return sA(Fg(W,a),a,b)};function He(a){return W(function(a){return function(b){return Ve(b)?ch.a(jg,Qg.a(a,b)):b}}(function(a){var b=O(a,0,null);a=O(a,1,null);return"string"===typeof b?new U(null,2,5,V,[Gf.g(b),a],null):new U(null,2,5,V,[b,a],null)}),a)};var qw=function qw(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return qw.S(arguments[0],arguments[1],arguments[2],3<c.length?new Xd(c.slice(3),0,null):null)};qw.S=function(a,b,c,d){return new U(null,2,5,V,[!1,x(Ee,new p(null,3,[mk,a,hr,b,ap,c],null),Qg.a(Ih,eh(2,2,d)))],null)};qw.ga=3;qw.ka=function(a){var b=I(a),c=J(a);a=I(c);var d=J(c);c=I(d);d=J(d);return this.S(b,a,c,d)};function rw(a){return Vv(", ","string"===typeof a?new U(null,1,5,V,[a],null):a)}
function sw(a,b,c,d,e,f){this.read=a;this.description=b;this.qc=c;this.l=d;this.h=e;this.H=f;this.F=2230716170;this.R=139264}g=sw.prototype;g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){switch(b instanceof S?b.Ea:null){case "read":return this.read;case "description":return this.description;case "content-type":return this.qc;default:return F.j(this.h,b,c)}};
g.Ia=function(a,b,c){return x(function(){return function(a,c){var d=O(c,0,null);c=O(c,1,null);return b.j?b.j(a,d,c):b.call(null,a,d,c)}}(this),c,this)};g.Yd=function(a,b){var c=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a,d=F.a(c,tl),e=null!=this&&(this.F&64||n===this.wa)?$f(hj,this):this,f=F.a(e,tl);return hh(b,El,function(a,b,c){return function(a){return lj.S(N([new p(null,1,["Accept",rw(c)],null),q(a)?a:jg]))}}(this,e,f,a,c,d))};
g.Zd=function(a,b){a=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;F.a(a,et);a=null!=this&&(this.F&64||n===this.wa)?$f(hj,this):this;var c=F.a(a,et);try{var d=Yv(b),e=Fg(qw,d);switch(d){case 0:return e.a?e.a("Request failed.",Yr):e.call(null,"Request failed.",Yr);case -1:return q(cw(b))?e.a?e.a("Request aborted by client.",Rt):e.call(null,"Request aborted by client.",Rt):e.a?e.a("Request timed out.",Yq):e.call(null,"Request timed out.",Yq);case 204:return new U(null,2,5,V,[!0,null],null);case 205:return new U(null,
2,5,V,[!0,null],null);default:try{var f=c.g?c.g(b):c.call(null,b);if(ef($l,d))return new U(null,2,5,V,[!0,f],null);var h=Zv(b);return e.fa?e.fa(h,vn,mq,f):e.call(null,h,vn,mq,f)}catch(v){if(v instanceof Object){f=v;e=V;var k=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a,l=F.a(k,Vl),m=new p(null,3,[mk,d,ap,vn,mq,null],null),t=[r.g(f.message),"  Format should have been ",r.g(l)].join(""),u=Je.S(m,hr,t,N([ap,Ym,$q,aw(b)]));var w=ef($l,d)?u:Je.S(m,hr,Zv(b),N([nm,u]));return new U(null,2,5,e,[!1,w],null)}throw v;
}}}catch(v){if(v instanceof Object)return f=v,qw.S(0,f.message,Um,N([Um,f]));throw v;}};g.ma=function(a,b,c){return Sj(b,function(){return function(a){return Sj(b,ak,""," ","",c,a)}}(this),"#ajax.interceptors.ResponseFormat{",", ","}",c,Sf.a(new U(null,3,5,V,[new U(null,2,5,V,[et,this.read],null),new U(null,2,5,V,[Vl,this.description],null),new U(null,2,5,V,[tl,this.qc],null)],null),this.h))};g.Fa=function(){return new bi(this,3,new U(null,3,5,V,[et,Vl,tl],null),q(this.h)?Ed(this.h):hg())};g.V=function(){return this.l};
g.Da=function(){return new sw(this.read,this.description,this.qc,this.l,this.h,this.H)};g.ta=function(){return 3+K(this.h)};g.na=function(){var a=this,b=this.H;if(null!=b)return b;var c=function(){return function(){return function(a){return-2103965186^de(a)}}(b,a)(a)}();return this.H=c};g.ea=function(a,b){return null!=b&&this.constructor===b.constructor&&G.a(this.read,b.read)&&G.a(this.description,b.description)&&G.a(this.qc,b.qc)&&G.a(this.h,b.h)};
g.La=function(a,b){return ef(new qj(null,new p(null,3,[Vl,null,et,null,tl,null],null),null),b)?Le.a(Xc(ch.a(jg,this),this.l),b):new sw(this.read,this.description,this.qc,this.l,gg(Le.a(this.h,b)),null)};
g.ia=function(a,b,c){return q(T.a?T.a(et,b):T.call(null,et,b))?new sw(c,this.description,this.qc,this.l,this.h,null):q(T.a?T.a(Vl,b):T.call(null,Vl,b))?new sw(this.read,c,this.qc,this.l,this.h,null):q(T.a?T.a(tl,b):T.call(null,tl,b))?new sw(this.read,this.description,c,this.l,this.h,null):new sw(this.read,this.description,this.qc,this.l,Je.j(this.h,b,c),null)};g.pa=function(){return H(Sf.a(new U(null,3,5,V,[new Q(et,this.read,null),new Q(Vl,this.description,null),new Q(tl,this.qc,null)],null),this.h))};
g.W=function(a,b){return new sw(this.read,this.description,this.qc,b,this.h,this.H)};g.ua=function(a,b){return Xe(b)?this.ia(null,y.a(b,0),y.a(b,1)):x(wc,this,b)};function tw(a){var b=Le.S(a,et,N([Vl,tl]));b=We(a)?ch.a(jg,b):b;return new sw(et.g(a),Vl.g(a),tl.g(a),null,gg(b),null)}function uw(a,b,c){this.l=a;this.h=b;this.H=c;this.F=2230716170;this.R=139264}g=uw.prototype;g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){return F.j(this.h,b,c)};
g.Ia=function(a,b,c){return x(function(){return function(a,c){var d=O(c,0,null);c=O(c,1,null);return b.j?b.j(a,d,c):b.call(null,a,d,c)}}(this),c,this)};
g.Yd=function(a,b){a=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b;F.a(a,jt);F.a(a,er);var c=F.a(a,On),d=F.a(a,Sq);b=F.a(a,El);var e=Ve(c)?c:c instanceof S?fw(new U(null,2,5,V,["keywords are not allowed as request formats in ajax calls: ",c],null)):cf(c)?new p(null,2,[gr,c,tl,"text/plain"],null):jg;e=null!=e&&(e.F&64||n===e.wa)?$f(hj,e):e;var f=F.a(e,gr);e=F.a(e,tl);c=null!=f?f.g?f.g(d):f.call(null,d):fw(new U(null,2,5,V,["unrecognized request format: ",c],null));b=q(b)?b:jg;return Je.S(a,ft,c,N([El,q(e)?
Je.j(b,"Content-Type",rw(e)):b]))};g.Zd=function(a,b){return b};g.ma=function(a,b,c){return Sj(b,function(){return function(a){return Sj(b,ak,""," ","",c,a)}}(this),"#ajax.interceptors.ApplyRequestFormat{",", ","}",c,Sf.a(Fe,this.h))};g.Fa=function(){return new bi(this,0,Fe,q(this.h)?Ed(this.h):hg())};g.V=function(){return this.l};g.Da=function(){return new uw(this.l,this.h,this.H)};g.ta=function(){return 0+K(this.h)};
g.na=function(){var a=this,b=this.H;if(null!=b)return b;var c=function(){return function(){return function(a){return 1698259290^de(a)}}(b,a)(a)}();return this.H=c};g.ea=function(a,b){return null!=b&&this.constructor===b.constructor&&G.a(this.h,b.h)};g.La=function(a,b){return ef(zj,b)?Le.a(Xc(ch.a(jg,this),this.l),b):new uw(this.l,gg(Le.a(this.h,b)),null)};g.ia=function(a,b,c){return new uw(this.l,Je.j(this.h,b,c),null)};g.pa=function(){return H(Sf.a(Fe,this.h))};
g.W=function(a,b){return new uw(b,this.h,this.H)};g.ua=function(a,b){return Xe(b)?this.ia(null,y.a(b,0),y.a(b,1)):x(wc,this,b)};function vw(a){var b=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a,c=F.a(b,lo),d=F.a(b,Sq),e=F.a(b,er),f=F.a(b,Gj);return function(a,b,c,d,e,f){return function(a){var b=G.a(e,"GET")&&null==f?d:f;return q(b)?[r.g(a),q(Qj(/\?/,a))?"\x26":"?",r.g(nw(c,b))].join(""):a}}(a,b,c,d,e,f)}function cm(a,b,c){this.l=a;this.h=b;this.H=c;this.F=2230716170;this.R=139264}g=cm.prototype;
g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){return F.j(this.h,b,c)};g.Ia=function(a,b,c){return x(function(){return function(a,c){var d=O(c,0,null);c=O(c,1,null);return b.j?b.j(a,d,c):b.call(null,a,d,c)}}(this),c,this)};g.Yd=function(a,b){a=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b;b=F.a(a,er);b=G.a(b,"GET")?he:qf;a=hh(a,jt,vw(a));return b.g?b.g(a):b.call(null,a)};g.Zd=function(a,b){return b};
g.ma=function(a,b,c){return Sj(b,function(){return function(a){return Sj(b,ak,""," ","",c,a)}}(this),"#ajax.interceptors.ProcessUrlParameters{",", ","}",c,Sf.a(Fe,this.h))};g.Fa=function(){return new bi(this,0,Fe,q(this.h)?Ed(this.h):hg())};g.V=function(){return this.l};g.Da=function(){return new cm(this.l,this.h,this.H)};g.ta=function(){return 0+K(this.h)};
g.na=function(){var a=this,b=this.H;if(null!=b)return b;var c=function(){return function(){return function(a){return-516728758^de(a)}}(b,a)(a)}();return this.H=c};g.ea=function(a,b){return null!=b&&this.constructor===b.constructor&&G.a(this.h,b.h)};g.La=function(a,b){return ef(zj,b)?Le.a(Xc(ch.a(jg,this),this.l),b):new cm(this.l,gg(Le.a(this.h,b)),null)};g.ia=function(a,b,c){return new cm(this.l,Je.j(this.h,b,c),null)};g.pa=function(){return H(Sf.a(Fe,this.h))};
g.W=function(a,b){return new cm(b,this.h,this.H)};g.ua=function(a,b){return Xe(b)?this.ia(null,y.a(b,0),y.a(b,1)):x(wc,this,b)};function xw(a,b,c){this.l=a;this.h=b;this.H=c;this.F=2230716170;this.R=139264}g=xw.prototype;g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){return F.j(this.h,b,c)};g.Ia=function(a,b,c){return x(function(){return function(a,c){var d=O(c,0,null);c=O(c,1,null);return b.j?b.j(a,d,c):b.call(null,a,d,c)}}(this),c,this)};
g.Yd=function(a,b){a=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b;return null==F.a(a,ft)?a:he(a)};g.Zd=function(a,b){return b};g.ma=function(a,b,c){return Sj(b,function(){return function(a){return Sj(b,ak,""," ","",c,a)}}(this),"#ajax.interceptors.DirectSubmission{",", ","}",c,Sf.a(Fe,this.h))};g.Fa=function(){return new bi(this,0,Fe,q(this.h)?Ed(this.h):hg())};g.V=function(){return this.l};g.Da=function(){return new xw(this.l,this.h,this.H)};g.ta=function(){return 0+K(this.h)};
g.na=function(){var a=this,b=this.H;if(null!=b)return b;var c=function(){return function(){return function(a){return-1077152635^de(a)}}(b,a)(a)}();return this.H=c};g.ea=function(a,b){return null!=b&&this.constructor===b.constructor&&G.a(this.h,b.h)};g.La=function(a,b){return ef(zj,b)?Le.a(Xc(ch.a(jg,this),this.l),b):new xw(this.l,gg(Le.a(this.h,b)),null)};g.ia=function(a,b,c){return new xw(this.l,Je.j(this.h,b,c),null)};g.pa=function(){return H(Sf.a(Fe,this.h))};
g.W=function(a,b){return new xw(b,this.h,this.H)};g.ua=function(a,b){return Xe(b)?this.ia(null,y.a(b,0),y.a(b,1)):x(wc,this,b)};var yw=new U(null,3,5,V,[new cm(null,null,null),new xw(null,null,null),new uw(null,null,null)],null);
function zw(a){var b=Aw;a=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;var c=F.a(a,Vq);return c instanceof sw?c:Xe(c)?b.g?b.g(a):b.call(null,a):Ve(c)?tw(c):c instanceof S?fw(new U(null,2,5,V,["keywords are not allowed as response formats in ajax calls: ",c],null)):cf(c)?tw(new p(null,3,[et,c,Vl,"custom",tl,"*/*"],null)):fw(new U(null,2,5,V,["unrecognized response format: ",c],null))};var Bw=function(a){return function(){function b(b){var c=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b,d=F.a(c,Bn),e=F.a(c,Ln),l=F.a(c,Mr);return tw(new p(null,3,[et,function(b,c,d,e,f){return function(b){b=aw(b);b=q(q(d)?G.a(0,b.indexOf(d)):d)?b.substring(d.length):b;return a.j?a.j(f,e,b):a.call(null,f,e,b)}}(b,c,d,e,l),Vl,["JSON",q(d)?[" prefix '",r.g(d),"'"].join(""):null,q(e)?" keywordize":null].join(""),tl,new U(null,1,5,V,["application/json"],null)],null))}function c(){return d.g(jg)}var d=null;d=
function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+arguments.length);};d.J=c;d.g=b;return d}()}(function(a,b,c){c=JSON.parse(c);return q(a)?c:xk(c,N([yk,b]))}),Cw=function(a){return function(){return new p(null,2,[gr,a,tl,"application/json"],null)}}(function(a){return JSON.stringify(tk(a))});function qy(a){a=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;a=F.a(a,Xn);return q(a)?a:Kp}function ry(a,b){return function(a){return function(b){return a.write(b)}}(function(){var c=Aq.g(b);return q(c)?c:py(a,b)}())}function sy(a){var b=qy(a),c=G.a(b,Kp)||G.a(b,tq)?"json":"msgpack";return new p(null,2,[gr,ry(b,a),tl,["application/transit+",c].join("")],null)}function ty(a){return function(a){return function(b){b=aw(b);return a.read(b)}}(function(){var b=Qr.g(a);return q(b)?b:fy(a)}())}
var uy=function uy(a){switch(arguments.length){case 0:return uy.J();case 1:return uy.g(arguments[0]);case 2:return uy.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}};uy.J=function(){return uy.g(jg)};uy.g=function(a){return uy.a(qy(a),a)};uy.a=function(a,b){return tw(new p(null,3,[et,ty(b),Vl,"Transit",tl,new U(null,1,5,V,["application/transit+json"],null)],null))};uy.ga=2;var vy=function vy(a){switch(arguments.length){case 0:return vy.J();case 1:return vy.g(arguments[0]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}};vy.J=function(){return tw(new p(null,3,[et,aw,Vl,"raw text",tl,new U(null,1,5,V,["*/*"],null)],null))};vy.g=function(){return vy.J()};vy.ga=1;function wy(a,b){return null==b||Ve(b)?b:Xe(b)?wy(a,I(J(b))):b.g?b.g(a):b.call(null,a)}
function xy(a,b){a=Xe(b)?I(b):tl.g(wy(a,b));return null==a?new U(null,1,5,V,["*/*"],null):"string"===typeof a?new U(null,1,5,V,[a],null):a}function yy(a){return function(b){b=Xe(b)?I(b):tl.g(wy(a,b));return null==b?new U(null,1,5,V,["*/*"],null):"string"===typeof b?new U(null,1,5,V,[b],null):b}}function zy(a){return function(b){return G.a(b,"*/*")||0<=a.indexOf(b)}}function Ay(a,b){return function(c){c=xy(b,c);return Ag(zy(a),c)}}
function By(a){return function(b){var c=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;var d=F.a(c,Vq),e=bw(b,"Content-Type");c=wy(c,I(Zg(Ay(q(e)?e:"",c),d)));c=et.g(c);return c.g?c.g(b):c.call(null,b)}}function Aw(a){var b=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;var c=F.a(b,Vq);b=Xe(c)?Xg(yy(b),N([c])):xy(b,c);return tw(new p(null,3,[et,By(a),On,["(from ",r.g(b),")"].join(""),tl,b],null))};function Cy(a){return function(b){return new p(null,3,[mk,Yv(b),El,$v(b),ft,a.g?a.g(b):a.call(null,b)],null)}};function Dy(){0!=Ey&&la(this);this.Kf=this.Kf}var Ey=0;Dy.prototype.Kf=!1;function Fy(){return cv("iPhone")&&!cv("iPod")&&!cv("iPad")};var Gy=cv("Opera"),Hy=cv("Trident")||cv("MSIE"),Iy=cv("Edge"),Jy=cv("Gecko")&&!(Ha("WebKit")&&!cv("Edge"))&&!(cv("Trident")||cv("MSIE"))&&!cv("Edge"),Ky=Ha("WebKit")&&!cv("Edge");Ky&&cv("Mobile");cv("Macintosh");cv("Windows");cv("Linux")||cv("CrOS");var ah=ba.navigator||null;ah&&(ah.appVersion||"").indexOf("X11");cv("Android");Fy();cv("iPad");cv("iPod");Fy()||cv("iPad")||cv("iPod");Ha("KaiOS");Ha("GAFP");function My(){var a=ba.document;return a?a.documentMode:void 0}var Ny;
a:{var bh="",mh=function(){var a=$u;if(Jy)return/rv:([^\);]+)(\)|;)/.exec(a);if(Iy)return/Edge\/([\d\.]+)/.exec(a);if(Hy)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ky)return/WebKit\/(\S+)/.exec(a);if(Gy)return/(?:Version)[ \/]?(\S+)/.exec(a)}();mh&&(bh=mh?mh[1]:"");if(Hy){var xh=My();if(null!=xh&&xh>parseFloat(bh)){Ny=String(xh);break a}}Ny=bh}var Ry={};
function Sy(a){return Aa(Ry,a,function(){for(var b=0,c=Fa(String(Ny)).split("."),d=Fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",k=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;b=Ja(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||Ja(0==h[2].length,0==k[2].length)||Ja(h[2],k[2]);h=h[3];k=k[3]}while(0==b)}return 0<=b})}var Mi;var nj=ba.document;
Mi=nj&&Hy?My()||("CSS1Compat"==nj.compatMode?parseInt(Ny,10):5):void 0;var oj;(oj=!Hy)||(oj=9<=Number(Mi));var Wy=oj,Xy=Hy&&!Sy("9"),Yy=function(){if(!ba.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{ba.addEventListener("test",ea,b),ba.removeEventListener("test",ea,b)}catch(c){}return a}();function Zy(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Cd=!1;this.Rg=!0}Zy.prototype.stopPropagation=function(){this.Cd=!0};Zy.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Rg=!1};function $y(a,b){Zy.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.ne=null;a&&this.A(a,b)}ta($y,Zy);var Aj={2:"touch",3:"pen",4:"mouse"};
$y.prototype.A=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(Jy){a:{try{za(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=
d.screenY||0):(this.offsetX=Ky||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=Ky||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=
a.pointerId||0;this.pointerType=ca(a.pointerType)?a.pointerType:Aj[a.pointerType]||"";this.state=a.state;this.ne=a;a.defaultPrevented&&this.preventDefault()};$y.prototype.stopPropagation=function(){$y.Ug.stopPropagation.call(this);this.ne.stopPropagation?this.ne.stopPropagation():this.ne.cancelBubble=!0};
$y.prototype.preventDefault=function(){$y.Ug.preventDefault.call(this);var a=this.ne;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Xy)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var az="closure_listenable_"+(1E6*Math.random()|0),bz=0;function cz(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++bz;this.Sd=this.Ce=!1}function dz(a){a.Sd=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null};function ez(a){this.src=a;this.jc={};this.$e=0}ez.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.jc[f];a||(a=this.jc[f]=[],this.$e++);var h=fz(a,b,d,e);-1<h?(b=a[h],c||(b.Ce=!1)):(b=new cz(b,this.src,f,!!d,e),b.Ce=c,a.push(b));return b};ez.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.jc))return!1;var e=this.jc[a];b=fz(e,b,c,d);return-1<b?(dz(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.jc[a],this.$e--),!0):!1};
function gz(a,b){var c=b.type;if(c in a.jc){var d=a.jc[c],e=vb(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(dz(b),0==a.jc[c].length&&(delete a.jc[c],a.$e--))}}ez.prototype.Of=function(a,b,c,d){a=this.jc[a.toString()];var e=-1;a&&(e=fz(a,b,c,d));return-1<e?a[e]:null};function fz(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Sd&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1};var hz="closure_lm_"+(1E6*Math.random()|0),iz={},jz=0;function kz(a,b,c,d,e){if(d&&d.once)lz(a,b,c,d,e);else if("array"==ha(b))for(var f=0;f<b.length;f++)kz(a,b[f],c,d,e);else c=mz(c),a&&a[az]?a.ud.add(String(b),c,!1,ka(d)?!!d.capture:!!d,e):nz(a,b,c,!1,d,e)}
function nz(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=ka(e)?!!e.capture:!!e,k=oz(a);k||(a[hz]=k=new ez(a));c=k.add(b,c,d,h,f);if(!c.proxy){d=pz();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Yy||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(qz(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");jz++}}
function pz(){var a=rz,b=Wy?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function lz(a,b,c,d,e){if("array"==ha(b))for(var f=0;f<b.length;f++)lz(a,b[f],c,d,e);else c=mz(c),a&&a[az]?a.ud.add(String(b),c,!0,ka(d)?!!d.capture:!!d,e):nz(a,b,c,!0,d,e)}
function sz(a,b,c,d,e){if("array"==ha(b))for(var f=0;f<b.length;f++)sz(a,b[f],c,d,e);else d=ka(d)?!!d.capture:!!d,c=mz(c),a&&a[az]?a.ud.remove(String(b),c,d,e):a&&(a=oz(a))&&(b=a.Of(b,c,d,e))&&tz(b)}
function tz(a){if("number"!=typeof a&&a&&!a.Sd){var b=a.src;if(b&&b[az])gz(b.ud,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(qz(c),d):b.addListener&&b.removeListener&&b.removeListener(d);jz--;(c=oz(b))?(gz(c,a),0==c.$e&&(c.src=null,b[hz]=null)):dz(a)}}}function qz(a){return a in iz?iz[a]:iz[a]="on"+a}
function uz(a,b,c,d){var e=!0;if(a=oz(a))if(b=a.jc[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Sd&&(f=vz(f,d),e=e&&!1!==f)}return e}function vz(a,b){var c=a.listener,d=a.cc||a.src;a.Ce&&tz(a);return c.call(d,b)}
function rz(a,b){if(a.Sd)return!0;if(!Wy){if(!b)a:{b=["window","event"];for(var c=ba,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new $y(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(h){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.Cd&&0<=e;e--){b.currentTarget=d[e];var f=uz(d[e],a,!0,b);c=c&&f}for(e=0;!b.Cd&&e<d.length;e++)b.currentTarget=
d[e],f=uz(d[e],a,!1,b),c=c&&f}return c}return vz(a,new $y(b,this))}function oz(a){a=a[hz];return a instanceof ez?a:null}var wz="__closure_events_fn_"+(1E9*Math.random()>>>0);function mz(a){if(ja(a))return a;a[wz]||(a[wz]=function(b){return a.handleEvent(b)});return a[wz]};function xz(){Dy.call(this);this.ud=new ez(this);this.Zg=this;this.Og=null}ta(xz,Dy);xz.prototype[az]=!0;xz.prototype.addEventListener=function(a,b,c,d){kz(this,a,b,c,d)};xz.prototype.removeEventListener=function(a,b,c,d){sz(this,a,b,c,d)};
xz.prototype.dispatchEvent=function(a){var b,c=this.Og;if(c)for(b=[];c;c=c.Og)b.push(c);c=this.Zg;var d=a.type||a;if(ca(a))a=new Zy(a,c);else if(a instanceof Zy)a.target=a.target||c;else{var e=a;a=new Zy(d,c);ub(a,e)}e=!0;if(b)for(var f=b.length-1;!a.Cd&&0<=f;f--){var h=a.currentTarget=b[f];e=yz(h,d,!0,a)&&e}a.Cd||(h=a.currentTarget=c,e=yz(h,d,!0,a)&&e,a.Cd||(e=yz(h,d,!1,a)&&e));if(b)for(f=0;!a.Cd&&f<b.length;f++)h=a.currentTarget=b[f],e=yz(h,d,!1,a)&&e;return e};
function yz(a,b,c,d){b=a.ud.jc[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Sd&&h.capture==c){var k=h.listener,l=h.cc||h.src;h.Ce&&gz(a.ud,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Rg}xz.prototype.Of=function(a,b,c,d){return this.ud.Of(String(a),b,c,d)};function zz(a,b,c){if(ja(a))c&&(a=ra(a,c));else if(a&&"function"==typeof a.handleEvent)a=ra(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:ba.setTimeout(a,b||0)};function Az(){}Az.prototype.qg=null;function Bz(a){var b;(b=a.qg)||(b={},Cz(a)&&(b[0]=!0,b[1]=!0),b=a.qg=b);return b};var Dz;function Ez(){}ta(Ez,Az);function Fz(a){return(a=Cz(a))?new ActiveXObject(a):new XMLHttpRequest}function Cz(a){if(!a.Kg&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.Kg=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.Kg}Dz=new Ez;function Gz(a){xz.call(this);this.headers=new Gb;this.ff=a||null;this.Hd=!1;this.ef=this.Ja=null;this.Tf="";this.Qd=0;this.G="";this.qe=this.Qf=this.Qe=this.Nf=!1;this.Ze=0;this.Ye=null;this.We=Hz;this.hg=this.Pg=this.ig=!1}ta(Gz,xz);var Hz="",Iz=/^https?$/i,Jz=["POST","PUT"];g=Gz.prototype;g.setTimeoutInterval=function(a){this.Ze=Math.max(0,a)};g.setResponseType=function(a){this.We=a};g.setWithCredentials=function(a){this.ig=a};g.setProgressEventsEnabled=function(a){this.Pg=a};
g.send=function(a,b,c,d){if(this.Ja)throw Error("[goog.net.XhrIo] Object is active with another request\x3d"+this.Tf+"; newUri\x3d"+a);b=b?b.toUpperCase():"GET";this.Tf=a;this.G="";this.Qd=0;this.Nf=!1;this.Hd=!0;this.Ja=this.ff?Fz(this.ff):Fz(Dz);this.ef=this.ff?Bz(this.ff):Bz(Dz);this.Ja.onreadystatechange=ra(this.Ng,this);this.Pg&&"onprogress"in this.Ja&&(this.Ja.onprogress=ra(function(a){this.Mg(a,!0)},this),this.Ja.upload&&(this.Ja.upload.onprogress=ra(this.Mg,this)));try{this.getStatus(),this.Qf=
!0,this.Ja.open(b,String(a),!0),this.Qf=!1}catch(f){this.getStatus();Lz(this,f);return}a=c||"";var e=this.headers.clone();d&&Fb(d,function(a,b){e.set(b,a)});d=yb(e.Gc());c=ba.FormData&&a instanceof ba.FormData;!(0<=vb(Jz,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset\x3dutf-8");e.forEach(function(a,b){this.Ja.setRequestHeader(b,a)},this);this.We&&(this.Ja.responseType=this.We);"withCredentials"in this.Ja&&this.Ja.withCredentials!==this.ig&&(this.Ja.withCredentials=this.ig);
try{Mz(this),0<this.Ze&&(this.hg=Nz(this.Ja),this.getStatus(),this.hg?(this.Ja.timeout=this.Ze,this.Ja.ontimeout=ra(this.Vg,this)):this.Ye=zz(this.Vg,this.Ze,this)),this.getStatus(),this.Qe=!0,this.Ja.send(a),this.Qe=!1}catch(f){this.getStatus(),Lz(this,f)}};function Nz(a){return Hy&&Sy(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function zb(a){return"content-type"==a.toLowerCase()}
g.Vg=function(){"undefined"!=typeof aa&&this.Ja&&(this.G="Timed out after "+this.Ze+"ms, aborting",this.Qd=8,this.getStatus(),this.dispatchEvent("timeout"),this.abort(8))};function Lz(a,b){a.Hd=!1;a.Ja&&(a.qe=!0,a.Ja.abort(),a.qe=!1);a.G=b;a.Qd=5;Oz(a);Pz(a)}function Oz(a){a.Nf||(a.Nf=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
g.abort=function(a){this.Ja&&this.Hd&&(this.getStatus(),this.Hd=!1,this.qe=!0,this.Ja.abort(),this.qe=!1,this.Qd=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Pz(this))};g.Ng=function(){this.Kf||(this.Qf||this.Qe||this.qe?Qz(this):this.Qi())};g.Qi=function(){Qz(this)};
function Qz(a){if(a.Hd&&"undefined"!=typeof aa)if(a.ef[1]&&4==Rz(a)&&2==a.getStatus())a.getStatus();else if(a.Qe&&4==Rz(a))zz(a.Ng,0,a);else if(a.dispatchEvent("readystatechange"),4==Rz(a)){a.getStatus();a.Hd=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Tf).match(Jb)[1]||null;if(!f&&ba.self&&ba.self.location){var h=ba.self.location.protocol;f=h.substr(0,h.length-
1)}e=!Iz.test(f?f.toLowerCase():"")}d=e}d?(a.dispatchEvent("complete"),a.dispatchEvent("success")):(a.Qd=6,a.G=a.getStatusText()+" ["+a.getStatus()+"]",Oz(a))}finally{Pz(a)}}}g.Mg=function(a,b){this.dispatchEvent(Tz(a,"progress"));this.dispatchEvent(Tz(a,b?"downloadprogress":"uploadprogress"))};function Tz(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}}
function Pz(a){if(a.Ja){Mz(a);var b=a.Ja,c=a.ef[0]?ea:null;a.Ja=null;a.ef=null;a.dispatchEvent("ready");try{b.onreadystatechange=c}catch(d){}}}function Mz(a){a.Ja&&a.hg&&(a.Ja.ontimeout=null);a.Ye&&(ba.clearTimeout(a.Ye),a.Ye=null)}function Rz(a){return a.Ja?a.Ja.readyState:0}g.getStatus=function(){try{return 2<Rz(this)?this.Ja.status:-1}catch(a){return-1}};g.getStatusText=function(){try{return 2<Rz(this)?this.Ja.statusText:""}catch(a){return""}};
g.getResponse=function(){try{if(!this.Ja)return null;if("response"in this.Ja)return this.Ja.response;switch(this.We){case Hz:case "text":return this.Ja.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.Ja)return this.Ja.mozResponseArrayBuffer}return null}catch(a){return null}};g.getResponseHeader=function(a){if(this.Ja&&4==Rz(this))return a=this.Ja.getResponseHeader(a),null===a?void 0:a};
g.getAllResponseHeaders=function(){return this.Ja&&4==Rz(this)?this.Ja.getAllResponseHeaders()||"":""};g.getResponseHeaders=function(){for(var a={},b=this.getAllResponseHeaders().split("\r\n"),c=0;c<b.length;c++)if(!Ea(b[c])){var d=ya(b[c],":",1),e=d[0];d=d[1];if(ca(d)){d=d.trim();var f=a[e]||[];a[e]=f;f.push(d)}}return Ka(a,function(a){return a.join(", ")})};g.getLastErrorCode=function(){return this.Qd};function Vz(a){return a instanceof S?Hf(a).toUpperCase():a}function Wz(a,b){return ew(b,a)}function Xz(a,b){return function(c){c=x(Wz,c,b);return a.g?a.g(c):a.call(null,c)}}var Yz=Kg(Fe);function Zz(a){var b=zw(a);return hh(hh(a,er,Vz),Nr,function(a){return function(b){return Sf.S(new U(null,1,5,V,[a],null),q(b)?b:A(Yz),N([yw]))}}(b))}function $z(a,b){return dw(b,a)};var aA=Kg(new U(null,6,5,V,[new U(null,2,5,V,["application/transit+json",uy],null),new U(null,2,5,V,["application/transit+transit",uy],null),new U(null,2,5,V,["application/json",Bw],null),new U(null,2,5,V,["text/plain",vy],null),new U(null,2,5,V,["text/html",vy],null),new U(null,2,5,V,["*/*",vy],null)],null));
function bA(a,b){if(Ve(a))return a;if(Me(a))return new p(null,1,[gr,a],null);if(null==a)return sy(b);switch(a instanceof S?a.Ea:null){case "transit":return sy(b);case "json":return Cw.J?Cw.J():Cw.call(null);case "text":return new p(null,2,[gr,qf,tl,"text/plain; charset\x3dutf-8"],null);case "raw":return pw(b);case "url":return pw(b);default:return null}}
var cA=function cA(a,b){if(Xe(a)){var d=V,e=I(a);a=I(J(a));b=cA.a?cA.a(a,b):cA.call(null,a,b);return new U(null,2,5,d,[e,b],null)}if(Ve(a))return a;if(Me(a))return new p(null,2,[et,a,Vl,"custom"],null);if(null==a)return Aw(new p(null,1,[Vq,A(aA)],null));switch(a instanceof S?a.Ea:null){case "transit":return uy.g(b);case "json":return Bw.g?Bw.g(b):Bw.call(null,b);case "text":return vy.J?vy.J():vy.call(null);case "ring":return d=new p(null,1,[On,vy.J()],null),d=null!=d&&(d.F&64||n===d.wa)?$f(hj,d):
d,d=F.a(d,On),b=null!=d&&(d.F&64||n===d.wa)?$f(hj,d):d,d=F.a(b,et),e=F.a(b,Vl),b=F.a(b,tl),tw(new p(null,3,[et,Cy(d),Vl,["ring/",r.g(e)].join(""),tl,b],null));case "raw":return vy.J();case "detect":return Aw(new p(null,1,[Vq,A(aA)],null));default:return null}};function dA(a,b){return Xe(a)?$f(Mh,Qg.a(function(a){return cA(a,b)},a)):cA(a,b)}
var eA=Kg(function(a){return hk(N(["CLJS-AJAX response:",a]))}),fA=Kg(function(a){return"undefined"!==typeof console?console.error(a):"undefined"!==typeof window?window.alert(r.g(a)):hk(N(["CLJS-AJAX ERROR:",a]))});
function gA(a){var b=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a,c=F.a(b,xo),d=F.a(b,qq),e=F.a(b,nr),f=q(c)?c:A(eA),h=q(d)?d:A(fA);return function(a,b,c,d,e,f,h){return function(c){var d=O(c,0,null);c=O(c,1,null);d=q(d)?a:b;d.g?d.g(c):d.call(null,c);return Me(h)?h.J?h.J():h.call(null):null}}(f,h,a,b,c,d,e)};g=Gz.prototype;
g.gf=function(a,b,c){a=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b;var d=F.a(a,jt),e=F.a(a,er),f=F.a(a,ft),h=F.a(a,El),k=F.j(a,Yq,0),l=F.j(a,hp,!1),m=F.a(a,Vq),t=F.a(a,wu),u=Xn.g(m);q(u)&&this.setResponseType(Hf(u));Me(t)&&(this.setProgressEventsEnabled(!0),kz(this,"uploadprogress",t));kz(this,"complete",function(){return function(a){a=a.target;return c.g?c.g(a):c.call(null,a)}}(this,"complete",this,this,b,a,d,e,f,h,k,l,m,t));this.setTimeoutInterval(k);this.setWithCredentials(l);this.send(d,e,f,tk(h));
return this};g.hf=function(){return this.getResponse()};g.lf=function(){return this.getStatus()};g.mf=function(){return this.getStatusText()};g.jf=function(){return xk(this.getResponseHeaders(),N([yk,!1]))};g.kf=function(a,b){return this.getResponseHeader(b)};g.nf=function(){return G.a(this.getLastErrorCode(),7)};function hA(a){a=a.target.readyState;var b=new p(null,6,[0,Hs,1,qu,2,vp,3,Dt,4,xu,gn,!0],null);return b.g?b.g(a):b.call(null,a)}function jh(a,b){return q(a)?[r.g(a),", ",r.g(b)].join(""):b}function iA(a){return q(a)?x(function(a,c){if(q(Ea(c)))return a;c=ya(c,": ",2);return ih(a,c[0],c[1])},jg,a.split("\r\n")):jg}var eg;if(G.a("nodejs","nodejs")){var Fj=require("xmlhttprequest").XMLHttpRequest;eg=global.XMLHttpRequest=Fj}else eg=XMLHttpRequest;var lA=eg;g=lA.prototype;
g.gf=function(a,b,c){var d=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b,e=F.a(d,jt),f=F.a(d,er);a=F.a(d,ft);var h=F.a(d,El),k=F.j(d,Yq,0),l=F.j(d,hp,!1),m=F.a(d,Vq);this.withCredentials=l;this.onreadystatechange=function(a){return function(b){return G.a(xu,hA(b))?c.g?c.g(a):c.call(null,a):null}}(this,b,d,e,f,a,h,k,l,m);this.open(f,e,!0);this.timeout=k;b=Xn.g(m);q(b)&&(this.responseType=Hf(b));b=H(h);h=null;for(e=d=0;;)if(e<d)k=h.za(null,e),f=O(k,0,null),k=O(k,1,null),this.setRequestHeader(f,k),e+=1;else if(b=
H(b))Ye(b)?(d=wd(b),b=xd(b),h=d,d=K(d)):(d=I(b),h=O(d,0,null),d=O(d,1,null),this.setRequestHeader(h,d),b=J(b),h=null,d=0),e=0;else break;this.send(q(a)?a:"");return this};g.hf=function(){return this.response};g.lf=function(){return this.status};g.mf=function(){return this.statusText};g.jf=function(){return iA(this.getAllResponseHeaders())};g.kf=function(a,b){return this.getResponseHeader(b)};g.nf=function(){return G.a(0,this.readyState)};function mA(a,b){var c=I(b);b=c instanceof S?$f(hj,b):c;a=Je.S(b,jt,a,N([er,"GET"]));a=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;var d=F.a(a,er);c=F.a(a,On);b=F.a(a,Vq);F.a(a,Sq);d=null==F.a(a,ft)&&fg(d,"GET");c=q(q(c)?c:d)?bA(c,a):null;a=Je.S(a,xo,gA(a),N([On,c,Vq,dA(b,a)]));a=Zz(a);a=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;b=F.a(a,Nr);a=x($z,a,b);b=Af(b);c=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;c=F.a(c,xo);b=q(c)?Xz(c,b):fw("No ajax handler provided.");c=Fp.g(a);c=q(c)?c:new Gz;return Xv(c,a,b)};function rA(a){return x(function(a,c){var b=O(c,0,null);c=O(c,1,null);return Je.j(a,c,b)},jg,a)};var Jj=require("xregexp"),Rj=["XRegExp"],lk=ba;Rj[0]in lk||"undefined"==typeof lk.execScript||lk.execScript("var "+Rj[0]);for(var nk;Rj.length&&(nk=Rj.shift());)Rj.length||void 0===Jj?lk=lk[nk]&&lk[nk]!==Object.prototype[nk]?lk[nk]:lk[nk]={}:lk[nk]=Jj;var uA={},vA={},wA={},xA=/[\s]/;function yA(a){return null==a?null:","===a?!0:xA.test(a)}function zA(a){return null==a?null:!/[^0-9]/.test(a)}
function AA(a,b){return function e(b){return new If(null,function(){for(;;){var d=H(b);if(d){if(Ye(d)){var h=wd(d),k=K(h),l=Mf(k);return function(){for(var b=0;;)if(b<k){var d=y.a(h,b),e=l;if(d instanceof C||d instanceof S){var f=Mj();var m=f.g?f.g(d):f.call(null,d);f=O(m,0,null);m=O(m,1,null);var B=d instanceof C?Td:Gf;d=null==f?B.a?B.a(a,m):B.call(null,a,m):G.a("_",f)?B.g?B.g(m):B.call(null,m):d}e.add(d);b+=1}else return!0}()?Of(l.Pb(),e(xd(d))):Of(l.Pb(),null)}var m=I(d);return ye(m instanceof
C||m instanceof S?function(){var b=Mj();var d=b.g?b.g(m):b.call(null,m);b=O(d,0,null);d=O(d,1,null);var e=m instanceof C?Td:Gf;return null==b?e.a?e.a(a,d):e.call(null,a,d):G.a("_",b)?e.g?e.g(d):e.call(null,d):m}():m,e(Yd(d)))}return null}},null,null)}(b)}function BA(a,b){a=parseInt(a,b);return q(isNaN(a))?-1:a};var CA=function CA(a){if(null!=a&&null!=a.qd)return a.qd(a);var c=CA[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=CA._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("Reader.read-char",a);},DA=function DA(a){if(null!=a&&null!=a.ke)return a.ke(a);var c=DA[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=DA._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("Reader.peek-char",a);},EA=function EA(a,b){if(null!=a&&null!=a.Cg)return a.Cg(a,b);var d=EA[ha(null==
a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=EA._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw gc("IPushbackReader.unread",a);},FA=function FA(a){if(null!=a&&null!=a.ph)return a.ph(a);var c=FA[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=FA._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IndexingReader.get-line-number",a);},GA=function GA(a){if(null!=a&&null!=a.nh)return a.nh(a);var c=GA[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,
a);c=GA._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IndexingReader.get-column-number",a);},HA=function HA(a){if(null!=a&&null!=a.oh)return a.oh(a);var c=HA[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=HA._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("IndexingReader.get-file-name",a);};function IA(a,b){this.Ga=a;this.Tg=b;this.Td=0}IA.prototype.qd=function(){if(this.Tg>this.Td){var a=this.Ga.charAt(this.Td);this.Td+=1;return a}return null};
IA.prototype.ke=function(){return this.Tg>this.Td?this.Ga.charAt(this.Td):null};function JA(a,b){this.Qg=a;this.Ka=b;this.mc=this.qf=1}JA.prototype.qd=function(){var a=this.mc<this.qf?this.Ka[this.mc]:this.Qg.qd(null);this.mc<this.qf&&(this.mc+=1);return null==a?null:uf(a)};JA.prototype.ke=function(){var a=this.mc<this.qf?this.Ka[this.mc]:this.Qg.ke(null);return null==a?null:uf(a)};
JA.prototype.Cg=function(a,b){if(q(b)){if(0===this.mc)throw Error("Pushback buffer is full");--this.mc;return this.Ka[this.mc]=b}return null};function KA(a){return null!=a?n===a.oj?!0:!1:!1};var LA={};function MA(a,b,c,d){var e=K(b);a=q(a)?0:10<e?10:e;b=Qg.a(Fg(NA,!0),Bb(a,b));b=$f(r,Sg(1,Wg.a(new Ug(null,-1," ",null,null),b)));e=a<e?"...":null;return[r.g(c),r.g(b),e,r.g(d)].join("")}function OA(a,b){return null==b?Hp:"string"===typeof b?Fl:b instanceof S?is:"number"===typeof b?is:b instanceof C?is:Xe(b)?zs:yf(b)?Vt:Ve(b)?dt:Te(b)?pn:G.a(b,!0)?is:G.a(b,!1)?is:fc(b)}
if("undefined"===typeof Lb||"undefined"===typeof uA||"undefined"===typeof vA||"undefined"===typeof wA||"undefined"===typeof LA||"undefined"===typeof NA){var NA,kc=Kg(jg),Qc=Kg(jg),Sc=Kg(jg),nd=Kg(jg),jc=F.j(jg,bs,Ak.J?Ak.J():Ak.call(null));NA=new Uk}Xk(Fl,function(a,b){a=q(a)?5:20;var c=b.length>a?'..."':'"',d=b.length;return['"',r.g(b.substring(0,a<d?a:d)),c].join("")});Xk(is,function(a,b){return r.g(b)});Xk(Xd,function(){return"\x3cindexed seq\x3e"});Xk(fi,function(){return"\x3cmap seq\x3e"});
Xk(Ii,function(){return"\x3cmap seq\x3e"});Xk(Cf,function(){return"\x3ccons\x3e"});Xk(If,function(){return"\x3clazy seq\x3e"});Xk(Hp,function(){return"nil"});Xk(Vt,function(a,b){return MA(a,b,"(",")")});Xk(dt,function(a,b){var c=K(b),d=q(a)?0:c;b=$f(Sf,Bb(d,b));return MA(a,b,"{",c>d?"...}":"}")});Xk(pn,function(a,b){return MA(a,b,"#{","}")});Xk(zs,function(a,b){return MA(a,b,"[","]")});Xk(Vk,function(a,b){return fk(N([fc(b)]),Tb())});function UA(a){return NA.a?NA.a(!1,a):NA.call(null,!1,a)};function VA(a,b,c){b=new p(null,2,[Xn,Lp,ip,b],null);a=KA(a)?Je.S(b,rq,HA(a),N([rl,FA(a),$o,GA(a)])):b;var d=rq.g(a);b=rl.g(a);var e=$o.g(a);d=q(d)?[r.g(d)," "].join(""):null;b=q(b)?["[line ",r.g(b),", col ",r.g(e),"]"].join(""):null;c=cg(r,d,b,q(q(d)?d:b)?" ":null,c);throw new $k(c,a,null);}function WA(a,b){return VA(a,$n,N([$f(r,b)]))}function XA(a,b){return VA(a,$m,N([$f(r,b)]))}function YA(a,b){return VA(a,Es,N([$f(r,b)]))}
function ZA(a,b,c,d){WA(a,N(["The map literal starting with ",UA(I(d)),q(b)?[" on line ",r.g(b)," column ",r.g(c)].join(""):null," contains ",K(d)," form(s). Map literals must contain an even number of forms."]))}function $A(a,b,c){return WA(a,N(["Invalid ",Hf(b),": ",c,"."]))}function aB(a,b,c){return WA(a,N(["Invalid character: ",c," found while reading ",Hf(b),"."]))}
function bB(a,b){a:{var c=Fl instanceof S?Fl.Ea:null;switch(c){case "regex":c='#"';break a;case "string":c='"';break a;default:throw Error(["No matching clause: ",r.g(c)].join(""));}}return YA(a,N(["Unexpected EOF reading ",Hf(Fl)," starting ",ag(r,c,b),"."]))}function cB(a,b){return XA(a,N(["Invalid digit ",b," in unicode character."]))}function dB(a){return WA(a,N(["Octal escape sequence must be in range [0, 377]."]))}
function eB(a,b){b=function(a){return function f(a){return new If(null,function(){for(var b=a;;)if(b=H(b)){if(Ye(b)){var c=wd(b),e=K(c),m=Mf(e);a:for(var t=0;;)if(t<e){var u=y.a(c,t),w=O(u,0,null);1<O(u,1,null)&&m.add(w);t+=1}else{c=!0;break a}return c?Of(m.Pb(),f(xd(b))):Of(m.Pb(),null)}m=I(b);c=O(m,0,null);if(1<O(m,1,null))return ye(c,f(Yd(b)));b=Yd(b)}else return null},null,null)}(Lj(a))}(b);return cg(r,a,1<K(b)?"s":null,": ",Sg(1,Wg.a(new Ug(null,-1,", ",null,null),b)))}
function fB(a,b,c){WA(a,N([eB([r.g(xa(Hf(b)))," literal contains duplicate key"].join(""),c)]))};function gB(a){for(var b=a.qd(null);;)if(yA.g?yA.g(b):yA.call(null,b))b=a.qd(null);else return b}var hB=/^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$/,iB=/([-+]?[0-9]+)\/([0-9]+)/,jB=/([-+]?[0-9]+(\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?/;function kB(a,b){a=Qj(a,b);return O(a,0,null)===b}
function lB(a){if(kB(hB,a)){var b=Ih(Qj(hB,a));if(null!=(b.g?b.g(2):b.call(null,2)))a=0;else{a="-"===(b.g?b.g(1):b.call(null,1));b=null!=(b.g?b.g(3):b.call(null,3))?new U(null,2,5,V,[b.g?b.g(3):b.call(null,3),10],null):null!=(b.g?b.g(4):b.call(null,4))?new U(null,2,5,V,[b.g?b.g(4):b.call(null,4),16],null):null!=(b.g?b.g(5):b.call(null,5))?new U(null,2,5,V,[b.g?b.g(5):b.call(null,5),8],null):null!=(b.g?b.g(7):b.call(null,7))?new U(null,2,5,V,[b.g?b.g(7):b.call(null,7),parseInt(b.g?b.g(6):b.call(null,
6))],null):new U(null,2,5,V,[null,null],null);var c=b.g?b.g(0):b.call(null,0);null==c?a=null:(b=parseInt(c,b.g?b.g(1):b.call(null,1)),a=a?-1*b:b,a=q(isNaN(a))?null:a)}}else kB(jB,a)?(b=Ih(Qj(jB,a)),a=null!=(b.g?b.g(4):b.call(null,4))?parseFloat(b.g?b.g(1):b.call(null,1)):parseFloat(a)):kB(iB,a)?(b=Ih(Qj(iB,a)),a=b.g?b.g(1):b.call(null,1),b=b.g?b.g(2):b.call(null,2),a=q(Qj(/^\+/,a))?a.substring(1):a,a=parseInt(a)/parseInt(b)):a=null;return a}
function mB(a){if(""===a||!0===/:$/.test(a)||!0===/^::/.test(a))return null;var b=a.indexOf("/"),c=0<b?a.substring(0,b):null;if(null!=c){b+=1;if(b===K(a))return null;a=a.substring(b);return zA(M(a,0))||""===a||!1!==/:$/.test(c)||"/"!==a&&-1!==a.indexOf("/")?null:new U(null,2,5,V,[c,a],null)}return"/"===a||-1===a.indexOf("/")?new U(null,2,5,V,[null,a],null):null}
var nB=function nB(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return nB.S(arguments[0],1<c.length?new Xd(c.slice(1),0,null):null)};nB.S=function(a){for(;;){var b=a.qd(null);if("\n"===b||"\n"===b||null==b)break}return a};nB.ga=1;nB.ka=function(a){var b=I(a);a=J(a);return this.S(b,a)};
function oB(){return function(){function a(a,d){var c=null;if(1<arguments.length){c=0;for(var f=Array(arguments.length-1);c<f.length;)f[c]=arguments[c+1],++c;c=new Xd(f,0,null)}return b.call(this,a,c)}function b(a){return WA(a,N(["Unreadable form"]))}a.ga=1;a.ka=function(a){var c=I(a);a=Yd(a);return b(c,a)};a.S=b;return a}()};new Kb;if("undefined"===typeof Lb||"undefined"===typeof uA||"undefined"===typeof vA||"undefined"===typeof pB)var pB={};if("undefined"===typeof Lb||"undefined"===typeof uA||"undefined"===typeof vA||"undefined"===typeof qB)var qB={};if("undefined"===typeof Lb||"undefined"===typeof uA||"undefined"===typeof vA||"undefined"===typeof rB)var rB={};function sB(a){var b="#"!==a;return b&&(b="'"!==a)?(b=":"!==a)?tB.g?tB.g(a):tB.call(null,a):b:b}function uB(a){return"@"===a||"`"===a||"~"===a}function vB(a,b,c,d){if(cc(c))return YA(a,N(["Unexpected EOF while reading start of ",Hf(b),"."]));if(q(q(d)?uB(c):d))return aB(a,b,c);d=new Kb;for(EA(a,c);;){if(yA(c)||sB(c)||null==c)return r.g(d);if(uB(c))return aB(a,b,c);d.append(CA(a));c=DA(a)}}
function wB(a,b,c){b=CA(a);if(q(b)){var d=xB.g?xB.g(b):xB.call(null,b);if(q(d))return d.j?d.j(a,b,c):d.call(null,a,b,c);EA(a,b);c=yB.j?yB.j(a,b,c):yB.call(null,a,b,c);return q(c)?c:WA(a,N(["No dispatch macro for ",b,"."]))}return YA(a,N(["Unexpected EOF while reading dispatch character."]))}function zB(a,b){return WA(a,N(["Unmatched delimiter ",b,"."]))}
function AB(a,b,c){b=1+b;if(K(a)!==b)throw XA(null,N(["Invalid unicode literal: \\",a,"."]));for(var d=1,e=0;;){if(d===b)return String.fromCharCode(e);var f=BA(M(a,d),c);if(-1===f)return c=M(a,d),XA(null,N(["Invalid digit ",c," in unicode character \\",a,"."]));e=f+e*c;d+=1}}
function BB(a,b,c,d,e){for(var f=1,h=BA(b,c);;){if(-1===h)return cB(a,b);if(f!==d){var k=DA(a);var l=yA(k);l||(l=tB.g?tB.g(k):tB.call(null,k),l=q(l)?l:null==k);if(q(l))return q(e)?XA(a,N(["Invalid unicode literal. Unicode literals should be ",d,"characters long.  ","value suppled is ",f,"characters long."])):String.fromCharCode(h);l=BA(k,c);CA(a);if(-1===l)return cB(a,k);h=l+h*c;f+=1}else return String.fromCharCode(h)}}
function CB(a){var b=CA(a);if(null!=b){b=sB(b)||uB(b)||yA(b)?r.g(b):vB(a,Ur,b,!1);var c=K(b);if(1===c)return M(b,0);if("newline"===b)return"\n";if("space"===b)return" ";if("tab"===b)return"\t";if("backspace"===b)return"\b";if("formfeed"===b)return"\f";if("return"===b)return"\r";if(q(0==b.lastIndexOf("u",0)))return b=AB(b,4,16),c=b.charCodeAt(),55295<c&&57344>c?(b=c.toString(16),a=WA(a,N(["Invalid character literal \\u",b,"."]))):a=b,a;if(q(0==b.lastIndexOf("o",0))){--c;if(3<c)return WA(a,N(["Invalid octal escape sequence in a character literal:",
b,". Octal escape sequences must be 3 or fewer digits."]));b=AB(b,c,8);return 255<(b|0)?dB(a):b}return WA(a,N(["Unsupported character: ",b,"."]))}return YA(a,N(["Unexpected EOF while reading character."]))}function DB(a){return KA(a)?new U(null,2,5,V,[FA(a),(GA(a)|0)-1|0],null):null}
function EB(a,b,c,d){var e=DB(c),f=O(e,0,null);e=O(e,1,null);b=null==b?null:uf(b);for(var h=pd(Fe);;){var k=gB(c);if(!q(k)){var l=a,m=f,t=e,u=K(h);YA(c,N(["Unexpected EOF while reading ",q(u)?["item ",r.g(u)," of "].join(""):null,Hf(l),q(m)?[", starting at line ",r.g(m)," and column ",r.g(t)].join(""):null,"."]))}if(G.a(b,null==k?null:uf(k)))return rd(h);l=tB.g?tB.g(k):tB.call(null,k);q(l)?(k=l.j?l.j(c,k,d):l.call(null,c,k,d),h=k!==c?Tf.a(h,k):h):(EA(c,k),k=FB?FB(c,!0,null,d):GB.call(null,c,!0,null,
d),h=k!==c?Tf.a(h,k):h)}}function HB(a,b,c){a=EB(Vt,")",a,c);return Re(a)?Zd:$f(Bf,a)}function IB(a,b,c){return EB(zs,"]",a,c)}function JB(a,b,c){var d=DB(a);b=O(d,0,null);d=O(d,1,null);c=EB(dt,"}",a,c);var e=K(c),f=Kj(2,c),h=Cj(f);!Bg(e)&&ZA(a,b,d,c);G.a(K(h),K(f))||fB(a,dt,f);if(e<=2*ki)a=mi(lf(c));else a:for(a=lf(c),b=a.length,d=0,e=pd(li);;)if(d<b)c=d+2,e=sd(e,a[d],a[d+1]),d=c;else{a=rd(e);break a}return a}
function KB(a,b){for(var c=function(){var a=new Kb;a.append(b);return a}(),d=CA(a);;){if(q(function(){var a=yA(d);if(a)return a;a=tB.g?tB.g(d):tB.call(null,d);return q(a)?a:null==d}())){var e=r.g(c);EA(a,d);var f=lB(e);return q(f)?f:WA(a,N(["Invalid number: ",e,"."]))}e=function(){var a=c;a.append(d);return a}();f=CA(a);c=e;d=f}}
function LB(a){var b=CA(a);switch(b){case "t":return"\t";case "r":return"\r";case "n":return"\n";case "\\":return"\\";case '"':return'"';case "b":return"\b";case "f":return"\f";case "u":return b=CA(a),-1===parseInt(b|0,16)?WA(a,N(["Invalid unicode escape: \\u",b,"."])):BB(a,b,16,4,!0);default:return zA(b)?(b=BB(a,b,8,3,!1),255<(b|0)?dB(a):b):WA(a,N(["Unsupported escape character: \\",b,"."]))}}
function MB(a){for(var b=new Kb,c=CA(a);;){var d=c;if(G.a(null,d))return bB(a,N(['"',b]));if(G.a("\\",d)){d=function(){var c=b;c.append(LB(a));return c}();var e=CA(a);b=d;c=e}else{if(G.a('"',d))return r.g(b);d=function(){var a=b;a.append(c);return a}();e=CA(a);b=d;c=e}}}
function NB(a,b){b=vB(a,js,b,!0);if(q(b))switch(b){case "nil":return null;case "true":return!0;case "false":return!1;case "/":return Xm;default:var c=mB(b);c=q(c)?Td.a(c.g?c.g(0):c.call(null,0),c.g?c.g(1):c.call(null,1)):null;return q(c)?c:$A(a,js,b)}else return null}
function OB(a){var b=CA(a);if(yA(b))return WA(a,N(["A single colon is not a valid keyword."]));b=vB(a,Du,b,!0);var c=mB(b);if(q(q(c)?-1===b.indexOf("::"):c)){var d=c.g?c.g(0):c.call(null,0);c=c.g?c.g(1):c.call(null,1);return":"===M(b,0)?$A(a,Du,b):Gf.a(d,c)}return $A(a,Du,b)}
function PB(a,b,c){b=FB?FB(a,!0,null,c):GB.call(null,a,!0,null,c);b=b instanceof S?Ke([b,!0]):b instanceof C?new p(null,1,[kr,b],null):"string"===typeof b?new p(null,1,[kr,b],null):b;Ve(b)||WA(a,N(["Metadata cannot be ",UA(b),". Metadata must be a Symbol, Keyword, String or Map."]));c=FB?FB(a,!0,null,c):GB.call(null,a,!0,null,c);return null!=c&&(c.F&131072||n===c.Ee)?Oe(c,lj.S(N([Pe(c),b]))):WA(a,N(["Metadata can not be applied to ",UA(c),". ","Metadata can only be applied to IMetas."]))}
function QB(a,b,c){b=EB(pn,"}",a,c);c=Cj(b);G.a(K(b),K(c))||fB(a,pn,b);return c}function RB(a){FB?FB(a,!0,null,!0):GB.call(null,a,!0,null,!0);return a}
function SB(a,b,c){b=CA(a);b=vB(a,ir,b,!0);var d=null==b?null:mB(b);if(null==d)var e=null;else e=O(d,0,null),d=O(d,1,null),e=q(e)?null:d;return q(e)?"{"===gB(a)?(c=EB(ir,"}",a,c),!Bg(K(c))&&ZA(a,null,null,c),b=AA(r.g(e),Kj(2,c)),c=Kj(2,Yd(c)),G.a(K(Cj(b)),K(b))||fB(a,ir,b),Ej(b,c)):WA(a,N(["Namespaced map with namespace ",b," does not specify a map."])):WA(a,N(["Invalid value used as namespace in namespaced map: ",b,"."]))}
function TB(a,b,c){b=FB?FB(a,!0,null,c):GB.call(null,a,!0,null,c);return G.a(Au,b)?Number.NaN:G.a(tp,b)?Number.NEGATIVE_INFINITY:G.a(Gt,b)?Number.POSITIVE_INFINITY:WA(a,N([["Invalid token: ##",r.g(b)].join("")]))}function tB(a){switch(a){case '"':return MB;case ":":return OB;case ";":return nB;case "^":return PB;case "(":return HB;case ")":return zB;case "[":return IB;case "]":return zB;case "{":return JB;case "}":return zB;case "\\":return CB;case "#":return wB;default:return null}}
function xB(a){switch(a){case "^":return PB;case "{":return QB;case "\x3c":return oB();case "!":return nB;case "_":return RB;case ":":return SB;case "#":return TB;default:return null}}
function yB(a,b,c){b=FB?FB(a,!0,null,c):GB.call(null,a,!0,null,c);var d=FB?FB(a,!0,null,c):GB.call(null,a,!0,null,c);b instanceof C||WA(a,N(["Invalid reader tag: ",UA("Reader tag must be a symbol"),". Reader tags must be symbols."]));var e=F.a(pl.g(c),b);e=q(e)?e:jg.g?jg.g(b):jg.call(null,b);if(q(e))return e.g?e.g(d):e.call(null,d);c=Vk.g(c);return q(c)?c.a?c.a(b,d):c.call(null,b,d):WA(a,N(["No reader function for tag ",UA(b),"."]))}
function GB(a){switch(arguments.length){case 1:return UB(jg,arguments[0]);case 2:return UB(arguments[0],arguments[1]);case 4:return FB(arguments[0],arguments[1],arguments[2],arguments[3]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}}function UB(a,b){a=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;var c=F.a(a,Es),d=!ef(a,Es);return FB(b,d,c,a)}
function FB(a,b,c,d){try{for(;;){var e=CA(a);if(!yA(e)){if(null==e){if(q(b)){b=a;var f=q(null)?YA(b,N(["EOF while reading, starting at line ",null,"."])):YA(b,N(["EOF while reading."]))}else f=c;return f}if(zA(e)||("+"===e||"-"===e)&&zA(a.ke(null)))return KB(a,e);var h=tB(e);if(q(h)){var k=h.j?h.j(a,e,d):h.call(null,a,e,d);if(k!==a)return k}else return NB(a,e)}}}catch(l){if(l instanceof Error){f=l;if(f instanceof $k){b=f instanceof $k?f.data:null;if(G.a(Lp,Xn.g(b)))throw f;a=lj.S(N([new p(null,1,
[Xn,Lp],null),b,KA(a)?new p(null,3,[rl,FA(a),bu,GA(a),rq,HA(a)],null):null]));throw new $k(f.message,a,f);}a=lj.S(N([new p(null,1,[Xn,Lp],null),KA(a)?new p(null,3,[rl,FA(a),bu,GA(a),rq,HA(a)],null):null]));throw new $k(f.message,a,f);}throw l;}};var VB=function(a,b){return function(c,d){return F.a(q(d)?b:a,c)}}(new U(null,13,5,V,[null,31,28,31,30,31,30,31,31,30,31,30,31],null),new U(null,13,5,V,[null,31,29,31,30,31,30,31,31,30,31,30,31],null)),WB=/(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;function XB(a){a=parseInt(a,10);return cc(isNaN(a))?a:null}
function YB(a,b,c,d){if(!(a<=b&&b<=c))throw Error([r.g(d)," Failed:  ",r.g(a),"\x3c\x3d",r.g(b),"\x3c\x3d",r.g(c)].join(""));return b}
function ZB(a){var b=Pj(WB,a);O(b,0,null);var c=O(b,1,null),d=O(b,2,null),e=O(b,3,null),f=O(b,4,null),h=O(b,5,null),k=O(b,6,null),l=O(b,7,null),m=O(b,8,null),t=O(b,9,null),u=O(b,10,null);if(cc(b))throw Error(["Unrecognized date/time syntax: ",r.g(a)].join(""));var w=XB(c),v=function(){var a=XB(d);return q(a)?a:1}();a=function(){var a=XB(e);return q(a)?a:1}();b=function(){var a=XB(f);return q(a)?a:0}();c=function(){var a=XB(h);return q(a)?a:0}();var z=function(){var a=XB(k);return q(a)?a:0}(),B=function(){a:if(G.a(3,
K(l)))var a=l;else if(3<K(l))a=l.substring(0,3);else for(a=new Kb(l);;)if(3>a.getLength())a=a.append("0");else{a=a.toString();break a}a=XB(a);return q(a)?a:0}();m=(G.a(m,"-")?-1:1)*(60*function(){var a=XB(t);return q(a)?a:0}()+function(){var a=XB(u);return q(a)?a:0}());return new U(null,8,5,V,[w,YB(1,v,12,"timestamp month field must be in range 1..12"),YB(1,a,function(){var a=0===(w%4+4)%4&&(0!==(w%100+100)%100||0===(w%400+400)%400);return VB.a?VB.a(v,a):VB.call(null,v,a)}(),"timestamp day field must be in range 1..last day in month"),
YB(0,b,23,"timestamp hour field must be in range 0..23"),YB(0,c,59,"timestamp minute field must be in range 0..59"),YB(0,z,G.a(c,59)?60:59,"timestamp second field must be in range 0..60"),YB(0,B,999,"timestamp millisecond field must be in range 0..999"),m],null)}
var $B=Kg(null),aC=Kg(lj.S(N([new p(null,4,[vt,function(a){if("string"===typeof a){var b=ZB(a);if(q(b)){a=O(b,0,null);var c=O(b,1,null),d=O(b,2,null),e=O(b,3,null),f=O(b,4,null),h=O(b,5,null),k=O(b,6,null);b=O(b,7,null);b=new Date(Date.UTC(a,c-1,d,e,f,h,k)-6E4*b)}else throw Error(["Unrecognized date/time syntax: ",r.g(a)].join(""));return b}throw Error("Instance literal expects a string for its timestamp.");},Iq,function(a){if("string"===typeof a)return new Yk(a.toLowerCase(),null);throw Error("UUID literal expects a string as its representation.");
},Kq,function(a){if(Xe(a))return ch.a(Yh,a);throw Error("Queue literal expects a vector for its elements.");},Fs,function(a){if(Xe(a)){var b=[];a=H(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.za(null,e);b.push(f);e+=1}else if(a=H(a))c=a,Ye(c)?(a=wd(c),e=xd(c),c=a,d=K(a),a=e):(a=I(c),b.push(a),a=J(c),c=null,d=0),e=0;else break;return b}if(Ve(a)){b={};a=H(a);c=null;for(e=d=0;;)if(e<d){var h=c.za(null,e);f=O(h,0,null);h=O(h,1,null);var k=b;f=Hf(f);k[f]=h;e+=1}else if(a=H(a))Ye(a)?(d=wd(a),a=xd(a),c=
d,d=K(d)):(d=I(a),c=O(d,0,null),d=O(d,1,null),e=b,c=Hf(c),e[c]=d,a=J(a),c=null,d=0),e=0;else break;return b}throw Error("JS literal expects a vector or map containing only string or unqualified keyword keys");}],null),jg])));
function bC(a){var b=new p(null,3,[pl,A(aC),Vk,A($B),Es,null],null);if(q(q(a)?fg(a,""):a)){a=new IA(a,K(a));a:{var c=Array(1);if(af(null))for(var d=0,e=H(null);;)if(e&&1>d)c[d]=I(e),d+=1,e=J(e);else break a;else for(d=0;;)if(1>d)c[d]=null,d+=1;else break}b=UB(b,new JA(a,c))}else b=null;return b};function cC(a){if("string"===typeof a){if(null==a)return!1;if(q(0===K(".0000")))return!0;var b=K(a)-K(".0000");return 0<=b&&G.a(a.indexOf(".0000",b),b)}return null}function dC(a){return"string"===typeof a?bf(Pj(/^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$/,a)):null}function eC(a){if(q(cC(a))){var b=K(a)-K(".0000".toString());a="string"===typeof a?a.slice(0,b):null}return a}
function fC(a,b,c){var d=b.flags;var e="string"===typeof d?-1!=d.indexOf("g"):null;d=q(e)?d:[r.g(d),"g"].join("");return a.replace(new RegExp(b.source,d),c)}
function gC(a,b,c){if("string"===typeof a)if("string"===typeof b)if("string"===typeof b)a=a.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c);else if(b instanceof RegExp)a="string"===typeof c?Sv(a,b,c):Sv(a,b,Tv(c));else throw["Invalid match arg: ",r.g(b)].join("");else a=b instanceof RegExp?"string"===typeof c?fC(a,b,c):fC(a,b,Tv(c)):null;else a=null;return a}function hC(a,b){return $f(r,Sg(1,Wg.a(new Ug(null,-1,a,null,null),b)))}
Ej("ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž","aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz");function iC(a){return null==a?NaN:q(dC(a))?bC(a):NaN};var HH=Error;function IH(a,b){return pf(function(b,d,e){return Je.j(b,a.g?a.g(d):a.call(null,d),e)},jg,b)}function JH(a,b){return pf(function(b,d,e){return Je.j(b,d,a.g?a.g(e):a.call(null,e))},jg,b)}function KH(a){return gC(a,/-_|_|!|-/,new p(null,4,"-_; (;_;);!;/;-; ".split(";"),null))}function LH(a){return gC(a,/ \(|\)|\/| /,new p(null,4," (;-_;);_;/;!; ;-".split(";"),null))}function MH(a){if(a instanceof HH)throw a;return a}
function NH(a,b,c,d,e){return function(){function f(f,h,k,u){return Fv(f,function(f){if(G.a(f,A(c))&&!Re(A(e)))return ik(N([["Unsuccessful ",r.g(b)," request."].join("")])),Iv(k,A(e)),Lg(e,jg);if(G.a(f,A(c))&&Re(A(e)))return null==u&&(ik(N([["Getting ",r.g(b)," data from cache:"].join("")])),ik(N([f]))),Iv(h,A(d));null==u&&(ik(N([["Getting ",r.g(b)," data from source:"].join("")])),ik(N([f])));var l=new p(null,1,[qq,function(a){var d=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;a=F.a(d,mk);d=F.a(d,hr);
ik(N([["Unsuccessful: ",r.g(b)," request"].join("")]));Lg(c,f);return Iv(k,Lg(e,["STATUS: ",r.g(a)," ",r.g(d)," for: ",r.g(f)].join("")))}],null),m=a instanceof S?a.Ea:null;switch(m){case "json":return l=lj.S(N([l,new p(null,3,[Vq,Kp,Ln,!0,xo,function(){return function(a){Lg(e,jg);Lg(c,f);return Iv(h,Lg(d,a))}}(a,m,l)],null)])),mA(f,N([l]));case "edn":return l=lj.S(N([l,new p(null,1,[xo,function(){return function(a){Lg(e,jg);Lg(c,f);return Iv(h,Lg(d,bC(a)))}}(a,m,l)],null)])),mA(f,N([l]));case "raw":return l=
lj.S(N([l,new p(null,1,[xo,function(){return function(a){Lg(e,jg);Lg(c,f);return Iv(h,Lg(d,a))}}(a,m,l)],null)])),mA(f,N([l]));default:throw Error(["No matching clause: ",r.g(m)].join(""));}})}function h(f,h,k){var l=NH.ya?NH.ya(a,b,c,d,e):NH.call(null,a,b,c,d,e);return l.fa?l.fa(f,h,k,null):l.call(null,f,h,k,null)}var k=null;k=function(a,b,c,d){switch(arguments.length){case 3:return h.call(this,a,b,c);case 4:return f.call(this,a,b,c,d)}throw Error("Invalid arity: "+arguments.length);};k.j=h;k.fa=
f;return k}()}function Uo(a){if(G.a(fc(a),p)){var b=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;b=F.a(b,zr);return lj.S(N([a,new p(null,1,[zr,r.g(b)],null)]))}a=xk(a,N([yk,!1]));var c=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a,d=F.a(c,"geoHierarchy");b=F.a(c,"vintage");return He(lj.S(N([c,new p(null,2,["geoHierarchy",IH(function(){return function(a){return LH(a)}}(a,c,c,d,b),d),"vintage",r.g(b)],null)])))}
function Yo(a){var b=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a,c=F.a(b,tu);a=IH(function(){return function(a){return KH(Hf(a))}}(a,b,b,c),c);return tk(lj.S(N([b,new p(null,1,[tu,a],null)])))}
function PH(a){return function(b){return function(){function c(c,d){return a.j?a.j(b,c,d):a.call(null,b,c,d)}function d(a){return b.g?b.g(a):b.call(null,a)}function e(){return b.J?b.J():b.call(null)}var f=null;f=function(a,b){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b)}throw Error("Invalid arity: "+arguments.length);};f.J=e;f.g=d;f.a=c;return f}()}}
function QH(a){return function(b){return function(c){return function(){function d(d,e){return a.fa?a.fa(c,b,d,e):a.call(null,c,b,d,e)}function e(a){return b.g?b.g(a):b.call(null,a)}function f(){return b.J?b.J():b.call(null)}var h=null;h=function(a,b){switch(arguments.length){case 0:return f.call(this);case 1:return e.call(this,a);case 2:return d.call(this,a,b)}throw Error("Invalid arity: "+arguments.length);};h.J=f;h.g=e;h.a=d;return h}()}(new Ng(null))}}
function RH(a){return function(b){return function(){function c(c,d){d=qk(N([a,d]));return b.a?b.a(c,d):b.call(null,c,d)}function d(a){return b.g?b.g(a):b.call(null,a)}function e(){return b.J?b.J():b.call(null)}var f=null;f=function(a,b){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b)}throw Error("Invalid arity: "+arguments.length);};f.J=e;f.g=d;f.a=c;return f}()}}
function SH(a,b){var c=TH,d=O(a,0,null),e=O(a,1,null);return pf(function(a,b,d,e){return function(f,h,k){return q(Ag(function(){return function(a){return G.a(h,a)}}(a,b,d,e),a))?Ee.a(f,c.g?c.g(k):c.call(null,k)):Ee.a(f,k)}}(e<=d?Zd:new Ij(null,d,e,1,null,null,null),a,d,e),Fe,b)};function iD(a,b,c,d,e,f){this.value=a;this.left=b;this.right=c;this.l=d;this.h=e;this.H=f;this.F=2230716170;this.R=139264}g=iD.prototype;g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){switch(b instanceof S?b.Ea:null){case "value":return this.value;case "left":return this.left;case "right":return this.right;default:return F.j(this.h,b,c)}};
g.Ia=function(a,b,c){return x(function(){return function(a,c){var d=O(c,0,null);c=O(c,1,null);return b.j?b.j(a,d,c):b.call(null,a,d,c)}}(this),c,this)};g.ma=function(a,b,c){return Sj(b,function(){return function(a){return Sj(b,ak,""," ","",c,a)}}(this),"#linked.map.Node{",", ","}",c,Sf.a(new U(null,3,5,V,[new U(null,2,5,V,[os,this.value],null),new U(null,2,5,V,[sl,this.left],null),new U(null,2,5,V,[To,this.right],null)],null),this.h))};
g.Fa=function(){return new bi(this,3,new U(null,3,5,V,[os,sl,To],null),q(this.h)?Ed(this.h):hg())};g.V=function(){return this.l};g.Da=function(){return new iD(this.value,this.left,this.right,this.l,this.h,this.H)};g.ta=function(){return 3+K(this.h)};g.na=function(){var a=this,b=this.H;if(null!=b)return b;var c=function(){return function(){return function(a){return-1739253980^de(a)}}(b,a)(a)}();return this.H=c};
g.ea=function(a,b){return null!=b&&this.constructor===b.constructor&&G.a(this.value,b.value)&&G.a(this.left,b.left)&&G.a(this.right,b.right)&&G.a(this.h,b.h)};g.La=function(a,b){return ef(new qj(null,new p(null,3,[os,null,To,null,sl,null],null),null),b)?Le.a(Xc(ch.a(jg,this),this.l),b):new iD(this.value,this.left,this.right,this.l,gg(Le.a(this.h,b)),null)};
g.ia=function(a,b,c){return q(T.a?T.a(os,b):T.call(null,os,b))?new iD(c,this.left,this.right,this.l,this.h,null):q(T.a?T.a(sl,b):T.call(null,sl,b))?new iD(this.value,c,this.right,this.l,this.h,null):q(T.a?T.a(To,b):T.call(null,To,b))?new iD(this.value,this.left,c,this.l,this.h,null):new iD(this.value,this.left,this.right,this.l,Je.j(this.h,b,c),null)};g.pa=function(){return H(Sf.a(new U(null,3,5,V,[new Q(os,this.value,null),new Q(sl,this.left,null),new Q(To,this.right,null)],null),this.h))};
g.W=function(a,b){return new iD(this.value,this.left,this.right,b,this.h,this.H)};g.ua=function(a,b){return Xe(b)?this.ia(null,y.a(b,0),y.a(b,1)):x(wc,this,b)};function jD(a,b){this.head=a;this.rc=b;this.F=2314602255;this.R=8192}g=jD.prototype;
g.toString=function(){var a=this;return["{",r.g(Vv(", ",function(){return function(a){return function e(b){return new If(null,function(){return function(){for(;;){var a=H(b);if(a){if(Ye(a)){var d=wd(a),k=K(d),l=Mf(k);a:for(var m=0;;)if(m<k){var t=y.a(d,m),u=O(t,0,null);t=O(t,1,null);u=[r.g(u)," ",r.g(t)].join("");l.add(u);m+=1}else{d=!0;break a}return d?Of(l.Pb(),e(xd(a))):Of(l.Pb(),null)}d=I(a);l=O(d,0,null);d=O(d,1,null);return ye([r.g(l)," ",r.g(d)].join(""),e(Yd(a)))}return null}}}(a),null,null)}}(a)(a)}())),
"}"].join("")};g.equiv=function(a){return this.ea(null,a)};g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){a=ff(this.rc,b);return q(a)?os.g(Oc(a)):c};g.Ia=function(a,b,c){return x(function(){return function(a,c){return $f(Fg(b,a),c)}}(this),c,H(this))};g.ma=function(a,b){return kd(b,["#linked/map ",r.g(ch.a(Fe,this))].join(""))};g.V=function(){return Pe(this.rc)};g.Da=function(){return new jD(this.head,this.rc)};g.ta=function(){return K(this.rc)};
g.nc=function(){return kD.g?kD.g(this):kD.call(null,this)};g.na=function(){return Od(ch.a(jg,this))};g.ea=function(a,b){return ai(this,b)};g.Ra=function(){return Xc(lD,Pe(this.rc))};g.La=function(a,b){return mD.a?mD.a(this,b):mD.call(null,this,b)};g.ia=function(a,b,c){return nD.j?nD.j(this,b,c):nD.call(null,this,b,c)};g.Mc=function(a,b){return ef(this.rc,b)};g.pa=function(){return oD.g?oD.g(this):oD.call(null,this)};g.W=function(a,b){return new jD(this.head,Oe(this.rc,b))};
g.ua=function(a,b){if(Xe(b))return this.ia(null,y.a(b,0),y.a(b,1));a=this;for(b=H(b);;){if(null==b)return a;var c=I(b);if(Xe(c))a=Hc(a,y.a(c,0),y.a(c,1)),b=J(b);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.la(null,c);case 3:return this.X(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.la(null,c)};a.j=function(a,c,d){return this.X(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.la(null,a)};g.a=function(a,b){return this.X(null,a,b)};
function nD(a,b,c){var d=a.head;a=a.rc;var e=ff(a,b);if(q(e))return new jD(d,gh(a,new U(null,2,5,V,[b,os],null),c));if(Re(a))return new jD(b,Je.j(a,b,new iD(c,b,b,null,null,null)));e=fh(a,new U(null,2,5,V,[d,sl],null));return new jD(d,gh(gh(Je.j(a,b,new iD(c,e,d,null,null,null)),new U(null,2,5,V,[d,sl],null),b),new U(null,2,5,V,[e,To],null),b))}
function mD(a,b){var c=a.head,d=a.rc,e=ff(d,b);if(q(e)){if(G.a(1,K(d)))return Va(a);a=To.g(Oc(e));e=sl.g(Oc(e));c=G.a(b,c)?a:c;return new jD(c,gh(gh(Le.a(d,b),new U(null,2,5,V,[a,sl],null),e),new U(null,2,5,V,[e,To],null),a))}return a}function pD(a,b){return new Q(a,b,null)}
var qD=function qD(a,b,c,d){var f=ff(a,b),h=O(f,0,null),k=O(f,1,null),l=pD(h,os.g(k)),m=d.g?d.g(k):d.call(null,k);return G.a(b,c)?new Ge(null,l,null,1,null):ye(l,new If(null,function(b,f,h,k,l){return function(){return qD.fa?qD.fa(a,l,c,d):qD.call(null,a,l,c,d)}}(f,h,k,l,m),null,null))};function oD(a){var b=a.rc;a=a.head;var c=fh(b,new U(null,2,5,V,[a,sl],null));return H(b)?qD(b,a,c,To):null}
function kD(a){var b=a.rc;a=a.head;var c=fh(b,new U(null,2,5,V,[a,sl],null));return H(b)?qD(b,c,a,sl):null}var lD=new jD(null,li),ok=Fg(ch,lD);F.a(A(aC),vs);Mg.fa(aC,Je,vs,ok);function sD(a){this.Uc=a;this.F=2313556239;this.R=8192}g=sD.prototype;g.toString=function(){return["[",r.g(Vv(" ",Qg.a(r,this))),"]"].join("")};g.equiv=function(a){return this.ea(null,a)};g.la=function(a,b){return this.X(null,b,null)};g.X=function(a,b,c){return Fc(this.Uc,b)?b:c};g.ma=function(a,b){return kd(b,["#linked/set ",r.g(ch.a(Fe,this))].join(""))};g.V=function(){return Pe(this.Uc)};g.Da=function(){return new sD(this.Uc)};g.ta=function(){return tc(this.Uc)};
g.nc=function(){var a=jd(this.Uc);return a?Qg.a(Kh,a):null};g.na=function(){return Od(ch.a(zj,this))};g.ea=function(a,b){return Te(b)&&K(this)===K(b)&&zg(function(a){return function(b){return ef(a,b)}}(this),b)};g.Ra=function(){return Oe(tD,Pe)};g.pa=function(){var a=H(this.Uc);return a?Qg.a(Kh,a):null};g.W=function(a,b){return new sD(Oe(this.Uc,b))};g.ua=function(a,b){return new sD(Je.j(this.Uc,b,null))};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.la(null,c);case 3:return this.X(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.la(null,c)};a.j=function(a,c,d){return this.X(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(lc(b)))};g.g=function(a){return this.la(null,a)};g.a=function(a,b){return this.X(null,a,b)};var tD=new sD(lD),Zk=Fg(ch,tD);F.a(A(aC),ur);
Mg.fa(aC,Je,ur,Zk);function $H(a,b,c){b=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b;var d=F.a(b,tu);b=F.a(b,zr);var e=Ih(d),f=O(e,0,null);d=O(f,0,null);f=O(f,1,null);var h=null!=f&&(f.F&64||n===f.wa)?$f(hj,f):f;f=F.a(h,ep);h=F.a(h,kl);e=O(e,1,null);var k=fh(a,new U(null,3,5,V,[d,Gf.g(r.g(b)),on],null)),l=null!=k&&(k.F&64||n===k.wa)?$f(hj,k):k;k=F.a(l,rs);l=F.a(l,Ss);c=new p(null,6,[zr,b,Ss,l,kp,c,ep,f,kl,h,np,e],null);return k instanceof U?mj.S(Je,N([c,new p(null,2,[dr,k,cr,Gf.g(b)],null)])):mj.S(Je,N([c,new p(null,2,[dr,
fh(a,new U(null,3,5,V,[d,k,bp],null)),hs,k],null)]))}function aI(a,b){var c=O(b,0,null),d=O(b,1,null),e=Qg.a(function(){return function(a){O(a,0,null);a=O(a,1,null);a=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;var b=F.a(a,on);b=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b;b=F.a(b,rs);a=F.a(a,bp);return b instanceof U?De(b):De(a)}}(b,c,d),Ih(c));return q(Ag(function(){return function(b){return G.a(a,b)}}(e,b,c,d),e))?d:null}
function bI(a,b){a=H(rA(a));return $g(ac,Qg.a(function(){return function(a){return aI(b,a)}}(a),a))}
function cI(a,b,c){a=$H(a,b,c);b=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a;c=F.a(b,zr);var d=F.a(b,Ss),e=F.a(b,kp),f=F.a(b,ep),h=F.a(b,kl),k=F.a(b,dr);return["https://tigerweb.geo.census.gov/arcgis/rest/services/",G.a("2010",r.g(c))?"TIGERweb/tigerWMS_Census2010":G.a("2000",r.g(c))?"Census2010/tigerWMS_Census2000":["TIGERweb/tigerWMS_ACS",r.g(c)].join(""),"/Mapserver/",r.g(F.a(d,e)),"/query?",r.g(hC("\x26",Qg.a(function(){return function(a){return hC("\x3d",a)}}(a,b,c,d,e,f,h,k),new U(null,7,5,V,[new U(null,
2,5,V,["geometry",[r.g(h),",",r.g(f)].join("")],null),new U(null,2,5,V,["geometryType","esriGeometryPoint"],null),new U(null,2,5,V,["inSR","4269"],null),new U(null,2,5,V,["spatialRel","esriSpatialRelIntersects"],null),new U(null,2,5,V,["returnGeometry","false"],null),new U(null,2,5,V,["f","pjson"],null),new U(null,2,5,V,["outFields",hC(",",Qg.a(Hf,k))],null)],null))))].join("")}
function dI(a,b){var c=ch.a(Fe,hi(b));b=ch.a(Fe,ii(b));for(var d=Qg.a(function(){return function(b){return bI(a,b)}}(c,b),c),e=0,f=jg;;){if(G.a(null,F.a(c,e)))return f;var h=e+1;f=Je.j(f,F.a(c,e),Ke([F.a(dh(function(){return function(a){return I(a)}}(e,f,c,b,d),d),e),F.a(b,e)]));e=h}}var eI=NH(Kp,"Census FIPS Geocoding",Kg(""),Kg(Fe),Kg(jg));
function fI(a,b,c,d){var e=Ev(1,Qg.g(function(b){return dI(a,fh(b,new U(null,3,5,V,[or,0,qr],null)))}));b=cI(a,b,c);c=Pv(new U(null,1,5,V,[b],null));eI.j?eI.j(c,e,e):eI.call(null,c,e,e);return Fv(e,function(a){return function(b){Iv(d,b);return Lu(a)}}(e,b))}
function hI(a){return function(b,c){var d=Ev(1,null);kv(function(d){return function(){var e=function(){return function(a){return function(){function b(b){for(;;){a:try{for(;;){var c=a(b);if(!T(c,Zl)){var d=c;break a}}}catch(z){if(z instanceof Object)b[5]=z,Cv(b),d=Zl;else throw z;}if(!T(d,Zl))return d}}function c(){var a=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null;d=function(a){switch(arguments.length){case 0:return c.call(this);
case 1:return b.call(this,a)}throw Error("Invalid arity: "+arguments.length);};d.J=c;d.g=b;return d}()}(function(){return function(d){var e=d[1];if(7===e){var f=d[7];e=d[9];var h=d[10];e=fI(a,h,f,e);h=$H(a,h,0);f=cc(null==h);d[8]=h;d[11]=e;d[1]=f?9:10;return Zl}if(20===e){f=d[7];h=d[12];var k=d[13];e=Re(k);h=null==F.a(h,f+1);h=cc(h);d[1]=q(e&&h)?23:24;return Zl}if(27===e)return d[2]=null,d[1]=28,Zl;if(1===e)return zv(d,2,b);if(24===e)return d[1]=26,Zl;if(4===e)return e=d[14],d[7]=0,d[10]=e,d[2]=null,
d[1]=7,Zl;if(15===e)return e=d[8],e=$f(hj,e),d[2]=e,d[1]=17,Zl;if(21===e)return d[2]=d[2],d[1]=8,Zl;if(13===e)return d[2]=!1,d[1]=14,Zl;if(22===e)return e=d[9],h=d[2],e=Lu(e),d[15]=h,d[2]=e,d[1]=21,Zl;if(29===e)return e=d[9],h=d[2],e=Lu(e),d[16]=h,d[2]=e,d[1]=28,Zl;if(6===e)return e=d[9],h=d[2],e=Lu(e),d[17]=h,d[2]=e,d[1]=5,Zl;if(28===e)return d[2]=d[2],d[1]=25,Zl;if(25===e)return d[2]=d[2],d[1]=21,Zl;if(17===e)return e=d[9],f=d[2],h=F.a(f,Ss),f=F.a(f,np),d[12]=h,d[18]=f,zv(d,18,e);if(3===e)return e=
d[14],Av(d,6,c,e);if(12===e)return d[2]=!0,d[1]=14,Zl;if(2===e)return h=d[2],e=Ev(1,null),f=null!=h&&(h.F&64||n===h.wa)?$f(hj,h):h,f=F.a(f,tu),f=I(f),O(f,0,null),f=!(O(f,1,null)instanceof p),d[9]=e,d[14]=h,d[1]=f?3:4,Zl;if(23===e)return f=d[7],e=d[14],d[7]=f+1,d[10]=e,d[2]=null,d[1]=7,Zl;if(19===e){k=d[13];f=d[18];h=d[10];var w=e=lD;k=ii(k);k=ch.a(w,k);f=ch.a(lD,new U(null,1,5,V,[f],null));e=Ee.S(e,k,N([f]));e=Je.j(li,tu,e);e=lj.S(N([h,e]));return Av(d,22,c,e)}return 11===e?(d[1]=q(d[2])?15:16,Zl):
9===e?(e=d[8],h=n===e.wa,d[1]=q(e.F&64||h)?12:13,Zl):5===e?Bv(d,d[2]):14===e?(d[2]=d[2],d[1]=11,Zl):26===e?Av(d,29,c,"No FIPS (Census geocodes) found for given arguments"):16===e?(e=d[8],d[2]=e,d[1]=17,Zl):10===e?(d[2]=!1,d[1]=11,Zl):18===e?(e=d[2],h=!Re(e),d[13]=e,d[1]=h?19:20,Zl):8===e?(d[2]=d[2],d[1]=5,Zl):null}}(d),d)}(),h=function(){var a=e.J?e.J():e.call(null);a[6]=d;return a}();return yv(h)}}(d));return d}}
function iI(a){return function(b,c){b=Pv(new U(null,1,5,V,[Uo(b)],null));var d=hI(a);return d.a?d.a(b,c):d.call(null,b,c)}};function jI(a,b,c,d){var e=KH(Hf(d));b=new U(null,3,5,V,[["No GeoJSON found for: '",r.g(e),"'"].join(""),["at this scope in vintage: ",r.g(c)].join(""),["at resolution: ",r.g(b)].join("")],null);d=fh(a,new U(null,1,5,V,[d],null));if(q(d)){a=new U(null,3,5,V,[["For '",r.g(e),"' try of of the following:"].join(""),["\x3d\x3d\x3d :us \x3d nation-level '",r.g(e),"' geoResolutions \x3d\x3d\x3d"].join(""),["\x3d\x3d\x3d :st \x3d state-levels '",r.g(e),"' geoResolutions \x3d\x3d\x3d"].join("")],null);c=
H(b);for(var f=null,h=0,k=0;;)if(k<h){var l=f.za(null,k);ik(N([l]));k+=1}else if(c=H(c))f=c,Ye(f)?(c=wd(f),k=xd(f),f=c,h=K(c),c=k):(c=I(f),ik(N([c])),c=J(f),f=null,h=0),k=0;else break;c=H(a);f=null;for(k=h=0;;)if(k<h)l=f.za(null,k),ik(N([l])),k+=1;else if(c=H(c))f=c,Ye(f)?(c=wd(f),k=xd(f),f=c,h=K(c),c=k):(c=I(f),ik(N([c])),c=J(f),f=null,h=0),k=0;else break;e=H(Ih(JH(function(){return function(a){return fh(a,new U(null,1,5,V,[yq],null))}}(a,d,d,e,b),d)));b=null;for(a=d=0;;)if(a<d)c=b.za(null,a),ik(N([c])),
a+=1;else if(e=H(e))b=e,Ye(b)?(e=wd(b),a=xd(b),b=e,d=K(e),e=a):(e=I(b),ik(N([e])),e=J(b),b=null,d=0),a=0;else break}else{c=H(b);f=null;for(k=h=0;;)if(k<h)l=f.za(null,k),ik(N([l])),k+=1;else if(c=H(c))f=c,Ye(f)?(c=wd(f),k=xd(f),f=c,h=K(c),c=k):(c=I(f),ik(N([c])),c=J(f),f=null,h=0),k=0;else break;ik(N(["\x3d\x3d\x3d available geoHierarchy levels \x3d\x3d\x3d"]));e=H(Ih(Qg.a(function(){return function(a){return KH(Hf(Nc(a)))}}("\x3d\x3d\x3d available geoHierarchy levels \x3d\x3d\x3d",d,e,b),a)));b=null;
for(a=d=0;;)if(a<d)c=b.za(null,a),ik(N([c])),a+=1;else if(e=H(e))b=e,Ye(b)?(e=wd(b),a=xd(b),b=e,d=K(e),e=a):(e=I(b),ik(N([e])),e=J(b),b=null,d=0),a=0;else break}return""}function kI(a,b,c,d){return null==d?[r.g(hC("/",new U(null,4,5,V,["https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON",a,b,Hf(c)],null))),".json"].join(""):[r.g(hC("/",new U(null,5,5,V,["https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON",a,b,d,Hf(c)],null))),".json"].join("")}
function lI(a,b,c,d,e,f,h){f=null!=Ag(function(a){return G.a(b,a)},f);e=null!=Ag(function(){return function(a){return G.a(b,a)}}(f),e);var k=null!=h,l=null==h;return k&&f?kI(b,c,d,h):l&&e?kI(b,c,d,null):k&&e&&!f?kI(b,c,d,null):jI(a,b,c,d)}
function mI(a,b,c,d,e){for(var f=H(new U(null,4,5,V,["Warning, you are about to make a large GeoJSON request.","This may take some time -\x3e consider local data caching.","The response may also cause VM heap capacity overflow.","On Node - for ZCTAs - Use `--max-old-space-size\x3d4096"],null)),h=null,k=0,l=0;;)if(l<k){var m=h.za(null,l);ik(N([m]));l+=1}else if(f=H(f))h=f,Ye(h)?(f=wd(h),l=xd(h),h=f,k=K(f),f=l):(f=I(h),ik(N([f])),f=J(h),h=null,k=0),l=0;else break;return lI(a,b,c,d,e,null,null)}
var nI=function(){function a(a){var c=null;if(0<arguments.length){c=0;for(var e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new Xd(e,0,null)}return b.call(this,c)}function b(a){var b=Ih(a);try{if(Xe(b)&&2===K(b))try{var c=M(b,1);if(Xe(c)&&5===K(c))try{var f=M(c,3);if(Xe(f)&&2===K(f))try{var h=M(f,0);if(T(h,Pl))try{var k=M(c,0);if("500k"===k)try{var l=M(c,2);if(null===l)try{var m=M(c,4);if(null!=m?m.F&256||n===m.ce||(m.F?0:ec(Cc,m)):ec(Cc,m))try{if(null===F.j(m,xn,cs))try{var t=
F.j(m,fn,cs);if(fg(t,cs)){var u=F.a(m,fn),w=M(c,1),v=M(b,0);return mI(v,"500k",w,Pl,u)}throw X;}catch(sa){if(sa instanceof Error){var z=sa;if(z===X)throw X;throw z;}throw sa;}else throw X;}catch(sa){if(sa instanceof Error){z=sa;if(z===X)throw X;throw z;}throw sa;}else throw X;}catch(sa){if(sa instanceof Error){z=sa;if(z===X)throw X;throw z;}throw sa;}else throw X;}catch(sa){if(sa instanceof Error){z=sa;if(z===X)throw X;throw z;}throw sa;}else throw X;}catch(sa){if(sa instanceof Error)if(z=sa,z===
X)try{k=M(c,0);if(function(){return function(){return function(a){return!G.a("500k",a)}}(k,z,h,f,c,b)(k)}()){var B=M(c,0);w=M(c,1);v=M(b,0);return jI(v,B,w,Pl)}throw X;}catch(oa){if(oa instanceof Error){var E=oa;if(E===X)throw X;throw E;}throw oa;}else throw z;else throw sa;}else throw X;}catch(sa){if(sa instanceof Error)if(z=sa,z===X)try{if(m=M(c,4),null!=m?m.F&256||n===m.ce||(m.F?0:ec(Cc,m)):ec(Cc,m))try{if(null===F.j(m,xn,cs))try{if(h=M(f,0),T(h,ws))try{if(l=M(c,2),null===l)try{var D=F.j(m,fn,
cs);if(fg(D,cs))return u=F.a(m,fn),B=M(c,0),w=M(c,1),v=M(b,0),mI(v,B,w,ws,u);throw X;}catch(oa){if(oa instanceof Error){E=oa;if(E===X)throw X;throw E;}throw oa;}else throw X;}catch(oa){if(oa instanceof Error){E=oa;if(E===X)throw X;throw E;}throw oa;}else throw X;}catch(oa){if(oa instanceof Error){E=oa;if(E===X)throw X;throw E;}throw oa;}else throw X;}catch(oa){if(oa instanceof Error){E=oa;if(E===X)throw X;throw E;}throw oa;}else throw X;}catch(oa){if(oa instanceof Error)if(E=oa,E===X)try{m=M(c,4);
if(null===m){var R=M(f,0);B=M(c,0);w=M(c,1);v=M(b,0);return jI(v,B,w,R)}throw X;}catch(wb){if(wb instanceof Error)if(a=wb,a===X)try{if(m=M(c,4),null!=m?m.F&256||n===m.ce||(m.F?0:ec(Cc,m)):ec(Cc,m))try{if(l=M(c,2),null===l)try{var Z=F.j(m,fn,cs);if(null===Z)try{var Ga=F.j(m,xn,cs);if(fg(Ga,cs))return R=M(f,0),B=M(c,0),w=M(c,1),v=M(b,0),jI(v,B,w,R);throw X;}catch(Sa){if(Sa instanceof Error){var Ya=Sa;if(Ya===X)throw X;throw Ya;}throw Sa;}else throw X;}catch(Sa){if(Sa instanceof Error){Ya=Sa;if(Ya===
X)throw X;throw Ya;}throw Sa;}else throw X;}catch(Sa){if(Sa instanceof Error)if(Ya=Sa,Ya===X)try{if(l=M(c,2),"*"===l)try{if(Z=F.j(m,fn,cs),null===Z)try{Ga=F.j(m,xn,cs);if(fg(Ga,cs))return R=M(f,0),B=M(c,0),w=M(c,1),v=M(b,0),jI(v,B,w,R);throw X;}catch(Ra){if(Ra instanceof Error){var P=Ra;if(P===X)throw X;throw P;}throw Ra;}else throw X;}catch(Ra){if(Ra instanceof Error){P=Ra;if(P===X)throw X;throw P;}throw Ra;}else throw X;}catch(Ra){if(Ra instanceof Error)if(P=Ra,P===X)try{if(l=M(c,2),null===l)try{if(Z=
F.j(m,fn,cs),fg(Z,cs))try{Ga=F.j(m,xn,cs);if(fg(Ga,cs))return u=F.a(m,fn),R=M(f,0),B=M(c,0),w=M(c,1),v=M(b,0),lI(v,B,w,R,u,null,null);throw X;}catch(fb){if(fb instanceof Error){var Ca=fb;if(Ca===X)throw X;throw Ca;}throw fb;}else throw X;}catch(fb){if(fb instanceof Error){Ca=fb;if(Ca===X)throw X;throw Ca;}throw fb;}else throw X;}catch(fb){if(fb instanceof Error)if(Ca=fb,Ca===X)try{if(l=M(c,2),"*"===l)try{if(Z=F.j(m,fn,cs),fg(Z,cs))try{Ga=F.j(m,xn,cs);if(fg(Ga,cs))return u=F.a(m,fn),R=M(f,0),B=M(c,
0),w=M(c,1),v=M(b,0),lI(v,B,w,R,u,null,null);throw X;}catch(hb){if(hb instanceof Error){var fa=hb;if(fa===X)throw X;throw fa;}throw hb;}else throw X;}catch(hb){if(hb instanceof Error){fa=hb;if(fa===X)throw X;throw fa;}throw hb;}else throw X;}catch(hb){if(hb instanceof Error)if(fa=hb,fa===X)try{if(Ga=F.j(m,xn,cs),null===Ga)try{Z=F.j(m,fn,cs);if(fg(Z,cs))return u=F.a(m,fn),R=M(f,0),B=M(c,0),w=M(c,1),v=M(b,0),lI(v,B,w,R,u,null,null);throw X;}catch(sb){if(sb instanceof Error){var $a=sb;if($a===X)throw X;
throw $a;}throw sb;}else throw X;}catch(sb){if(sb instanceof Error)if($a=sb,$a===X)try{if(Ga=F.j(m,xn,cs),fg(Ga,cs))try{Z=F.j(m,fn,cs);if(fg(Z,cs)){u=F.a(m,fn);var Ma=F.a(m,xn),La=M(c,2);R=M(f,0);B=M(c,0);w=M(c,1);v=M(b,0);return lI(v,B,w,R,u,Ma,La)}throw X;}catch(lb){if(lb instanceof Error){var Oa=lb;if(Oa===X)throw X;throw Oa;}throw lb;}else throw X;}catch(lb){if(lb instanceof Error){Oa=lb;if(Oa===X)throw X;throw Oa;}throw lb;}else throw $a;else throw sb;}else throw fa;else throw hb;}else throw Ca;
else throw fb;}else throw P;else throw Ra;}else throw Ya;else throw Sa;}else throw X;}catch(Sa){if(Sa instanceof Error){Ya=Sa;if(Ya===X)throw X;throw Ya;}throw Sa;}else throw a;else throw wb;}else throw E;else throw oa;}else throw z;else throw sa;}else throw X;}catch(sa){if(sa instanceof Error){z=sa;if(z===X)throw X;throw z;}throw sa;}else throw X;}catch(sa){if(sa instanceof Error){z=sa;if(z===X)throw X;throw z;}throw sa;}else throw X;}catch(sa){if(sa instanceof Error)if(z=sa,z===X)try{if(Xe(b)&&
1<=K(b))try{var Wa=Rh(b,0,1);if(Xe(Wa)&&1===K(Wa))return v=M(Wa,0),Rh(b,1,K(b)),"";throw X;}catch(oa){if(oa instanceof Error){E=oa;if(E===X)throw X;throw E;}throw oa;}else throw X;}catch(oa){if(oa instanceof Error){E=oa;if(E===X)throw Error(["No matching clause: ",r.g(b)].join(""));throw E;}throw oa;}else throw z;else throw sa;}}a.ga=0;a.ka=function(a){a=H(a);return b(a)};a.S=b;return a}();
function oI(a,b){var c=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b;b=F.a(c,tu);var d=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b;b=F.a(d,mm);var e=F.a(c,zr);c=F.a(c,ku);d=De(d);a=fh(a,new U(null,3,5,V,[Nc(d),Gf.g(e),yq],null));return new U(null,5,5,V,[c,e,b,d,a],null)}var pI=NH(Mr,"Census GeoJSON",Kg(""),Kg(Fe),Kg(jg));
function qI(a){return function(b,c,d){return Fv(b,function(b){var e=nI.S(N([a,oI(a,b)]));b=Ev(1,Qg.g(JSON.parse));if(G.a("",e))return Iv(d,"Invalid GeoJSON request. Please check arguments against requirements.");e=Pv(new U(null,1,5,V,[e],null));pI.j?pI.j(e,b,d):pI.call(null,e,b,d);return Nv(b,c)})}}function rI(a,b){var c=null!=b&&(b.F&64||n===b.wa)?$f(hj,b):b;b=F.a(c,tu);c=F.a(c,zr);a=fh(a,new U(null,3,5,V,[Nc(De(b)),Gf.g(c),bp],null));return H(a)}
function sI(a,b){a=rI(a,b);return PH(function(a){return function(b,c,f){f=Ke([$f(r,Qg.a(Et.g(f),a)),f]);return b.a?b.a(c,f):b.call(null,c,f)}}(a))}function tI(a,b){return Eg.a(Qg.g(function(a){return F.a(a,or)}),RH(sI(a,b)))}
var uI=NH(Kp,"Census GeoJSON (for merge)",Kg(""),Kg(Fe),Kg(jg)),vI=new U(null,2,5,V,[function(a){return function(b,c){return Fv(b,function(b){var d=nI.S(N([a,oI(a,b)])),f=tI(a,b);b=I(rI(a,b));return G.a("",d)?Iv(c,"Invalid GeoJSON request. Please check arguments against requirements."):Iv(c,new p(null,4,[mt,d,Vr,f,vo,uI,ls,b],null))})}},!0],null);function TJ(a,b){var c=O(a,0,null);a=O(a,1,null);return hC(b,new U(null,2,5,V,[Hf(c),r.g(a)],null))}
function UJ(a){var b=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a,c=F.a(b,zr),d=F.a(b,Fn),e=F.a(b,tu),f=F.a(b,en),h=F.a(b,Hq),k=F.a(b,uq);return cc(Ag(ac,new U(null,4,5,V,[c,d,e,f],null)))?["https://api.census.gov/data/",r.g(c),r.g($f(r,Qg.a(function(){return function(a){return["/",r.g(a)].join("")}}(a,b,c,d,e,f,h,k),d))),"?get\x3d",r.g(null!=f?hC(",",f):""),null!=h?["\x26",r.g(hC("\x26",Qg.a(function(){return function(a){return TJ(a,"\x3d")}}(a,b,c,d,e,f,h,k),h)))].join(""):"",r.g(KH(G.a(1,K(e))?["\x26for\x3d",
r.g(TJ(I(e),":"))].join(""):["\x26in\x3d",r.g(hC("%20",Qg.a(function(){return function(a){return TJ(a,":")}}(a,b,c,d,e,f,h,k),Dj(e)))),"\x26for\x3d",r.g(TJ(De(e),":"))].join(""))),null!=k?["\x26key\x3d",r.g(k)].join(""):null].join(""):""}function TH(a){return q(Ag(function(b){return G.a(a,b)},new U(null,6,5,V,"-222222222.0000 -333333333.0000 -555555555.0000 -666666666.0000 -888888888.0000 -999999999.0000".split(" "),null)))?["NAN: ",r.g(eC(a))].join(""):q(dC(a))?iC(a):a}
function VJ(a){var b=null!=a&&(a.F&64||n===a.wa)?$f(hj,a):a,c=F.a(b,en),d=F.a(b,Hq),e=new U(null,2,5,V,[0,K(c)+K(d)],null);return QH(function(a){return function(b,c,d,e){if(null==A(b))return c=dh(LH,e),Cd(b,c),null;b=Ej(dh(Gf,A(b)),SH(a,e));return c.a?c.a(d,b):c.call(null,d,b)}}(e,a,b,c,d))}function WJ(a){return Eg.a(VJ(a),Qg.g(function(a){return tk.S(a,N([yk,!0]))}))}var XJ=NH(Mr,"Census statistics",Kg(""),Kg(Fe),Kg(jg));
function YJ(a,b,c){return Fv(a,function(a){var d=UJ(a);a=Ev(1,Eg.a(RH(WJ(a)),Qg.g(lf)));if(G.a("",d))return Iv(c,"Invalid Census Statistics request. Please check arguments against requirements.");d=Pv(new U(null,1,5,V,[d],null));XJ.j?XJ.j(d,a,c):XJ.call(null,d,a,c);return Nv(a,b)})}function ZJ(a){return PH(function(b,c,d){var e=r;a:{var f=K(d)-a,h=H(d);for(f=H(Sg(f,d));;)if(f)h=J(h),f=J(f);else break a}d=Ke([$f(e,ii(h)),new p(null,1,[Et,d],null)]);return b.a?b.a(c,d):b.call(null,c,d)})}
var $J=new U(null,2,5,V,[function(a,b){return Fv(a,function(a){var c=K(F.a(a,en))+K(F.a(a,Hq)),e=UJ(a);c=Eg.a(VJ(a),ZJ(c));c=RH(c);a=Gf.g(I(F.a(a,en)));return G.a("",e)?Iv(b,"Invalid Census Statistics request. Please check arguments against requirements."):Iv(b,new p(null,4,[mt,e,Vr,c,vo,XJ,ls,a],null))})},!1],null);var wI={},AJ={},BJ={},Y,al,bl,el,fl,gl,hl;var JJ=function JJ(a){if(null!=a&&null!=a.hd)return a.hd(a);var c=JJ[ha(null==a?null:a)];if(null!=c)return c.g?c.g(a):c.call(null,a);c=JJ._;if(null!=c)return c.g?c.g(a):c.call(null,a);throw gc("KvRfable.some-kvrf",a);};JJ._=function(){return null};
function KJ(a){var b=JJ(a);if(q(b))return b;if("undefined"===typeof wI||"undefined"===typeof AJ||"undefined"===typeof BJ||"undefined"===typeof Y)Y=function(a,b,e){this.ha=a;this.Va=b;this.K=e;this.F=393217;this.R=0},Y.prototype.W=function(){return function(a,b){return new Y(this.ha,this.Va,b)}}(b),Y.prototype.V=function(){return function(){return this.K}}(b),Y.prototype.hd=function(){return function(){return this}}(b),Y.prototype.call=function(){return function(){function a(a,b,c,d){a=this;c=new U(null,
2,5,V,[c,d],null);return a.ha.a?a.ha.a(b,c):a.ha.call(null,b,c)}function b(a,b,c){a=this;return a.ha.a?a.ha.a(b,c):a.ha.call(null,b,c)}function e(a,b){a=this;return a.ha.g?a.ha.g(b):a.ha.call(null,b)}function f(a){a=this;return a.ha.J?a.ha.J():a.ha.call(null)}var h=null;h=function(c,d,h,t){switch(arguments.length){case 1:return f.call(this,c);case 2:return e.call(this,c,d);case 3:return b.call(this,c,d,h);case 4:return a.call(this,c,d,h,t)}throw Error("Invalid arity: "+(arguments.length-1));};h.g=
f;h.a=e;h.j=b;h.fa=a;return h}()}(b),Y.prototype.apply=function(){return function(a,b){return this.call.apply(this,[this].concat(lc(b)))}}(b),Y.prototype.j=function(){return function(a,b,e){b=new U(null,2,5,V,[b,e],null);return this.ha.a?this.ha.a(a,b):this.ha.call(null,a,b)}}(b),Y.prototype.J=function(){return function(){return this.ha.J?this.ha.J():this.ha.call(null)}}(b),Y.prototype.g=function(){return function(a){return this.ha.g?this.ha.g(a):this.ha.call(null,a)}}(b),Y.prototype.a=function(){return function(a,
b){return this.ha.a?this.ha.a(a,b):this.ha.call(null,a,b)}}(b),Y.sa=function(){return function(){return new U(null,3,5,V,[mo,tf,Ce],null)}}(b),Y.qa=!0,Y.oa="net.cgrand.xforms/t_net$cgrand$xforms16371",Y.ra=function(){return function(a,b){return kd(b,"net.cgrand.xforms/t_net$cgrand$xforms16371")}}(b);return new Y(a,b,null)}
function LJ(){var a=MJ(Fe);return function(b){var c=new Ng(a.J?a.J():a.call(null)),d=KJ(a);if("undefined"===typeof wI||"undefined"===typeof AJ||"undefined"===typeof BJ||"undefined"===typeof al)al=function(a,b,c,d){this.Wa=a;this.ha=b;this.Vb=c;this.N=d;this.F=393217;this.R=0},al.prototype.W=function(){return function(a,b){return new al(this.Wa,this.ha,this.Vb,b)}}(d,c),al.prototype.V=function(){return function(){return this.N}}(d,c),al.prototype.hd=function(){return function(){return this}}(d,c),
al.prototype.call=function(){return function(){function a(a,b,c,d){a=this;var e=a.Vb,f=A(a.Vb);a=a.Wa.j?a.Wa.j(f,c,d):a.Wa.call(null,f,c,d);return ie(Cd(e,a))?he(b):b}function b(a,b,c){a=this;var d=a.Vb,e=A(a.Vb);a=a.Wa.a?a.Wa.a(e,c):a.Wa.call(null,e,c);return ie(Cd(d,a))?he(b):b}function c(a,b){a=this;var c=A(a.Vb);if(c===a.Vb)return null;Cd(a.Vb,a.Vb);c=je(c);c=a.Wa.g?a.Wa.g(c):a.Wa.call(null,c);b=a.ha.a?a.ha.a(b,c):a.ha.call(null,b,c);b=je(b);return a.ha.g?a.ha.g(b):a.ha.call(null,b)}function d(a){a=
this;return a.ha.J?a.ha.J():a.ha.call(null)}var l=null;l=function(e,f,h,k){switch(arguments.length){case 1:return d.call(this,e);case 2:return c.call(this,e,f);case 3:return b.call(this,e,f,h);case 4:return a.call(this,e,f,h,k)}throw Error("Invalid arity: "+(arguments.length-1));};l.g=d;l.a=c;l.j=b;l.fa=a;return l}()}(d,c),al.prototype.apply=function(){return function(a,b){return this.call.apply(this,[this].concat(lc(b)))}}(d,c),al.prototype.J=function(){return function(){return this.ha.J?this.ha.J():
this.ha.call(null)}}(d,c),al.prototype.g=function(){return function(a){var b=A(this.Vb);if(b===this.Vb)return null;Cd(this.Vb,this.Vb);b=je(b);b=this.Wa.g?this.Wa.g(b):this.Wa.call(null,b);a=this.ha.a?this.ha.a(a,b):this.ha.call(null,a,b);a=je(a);return this.ha.g?this.ha.g(a):this.ha.call(null,a)}}(d,c),al.prototype.a=function(){return function(a,b){var c=this.Vb,d=A(this.Vb);b=this.Wa.a?this.Wa.a(d,b):this.Wa.call(null,d,b);return ie(Cd(c,b))?he(a):a}}(d,c),al.prototype.j=function(){return function(a,
b,c){var d=this.Vb,e=A(this.Vb);b=this.Wa.j?this.Wa.j(e,b,c):this.Wa.call(null,e,b,c);return ie(Cd(d,b))?he(a):a}}(d,c),al.sa=function(){return function(){return new U(null,4,5,V,[Un,mo,rr,fe],null)}}(d,c),al.qa=!0,al.oa="net.cgrand.xforms/t_net$cgrand$xforms16378",al.ra=function(){return function(a,b){return kd(b,"net.cgrand.xforms/t_net$cgrand$xforms16378")}}(d,c);return new al(d,b,c,null)}}
function MJ(a){if(null!=a?a.R&4||n===a.vg||(a.R?0:ec(od,a)):ec(od,a)){if(Ve(a)){if("undefined"===typeof wI||"undefined"===typeof AJ||"undefined"===typeof BJ||"undefined"===typeof bl)bl=function(a,c){this.Zc=a;this.O=c;this.F=393217;this.R=0},bl.prototype.W=function(a,c){return new bl(this.Zc,c)},bl.prototype.V=function(){return this.O},bl.prototype.hd=function(){return this},bl.prototype.call=function(){var a=null;a=function(a,b,e,f){switch(arguments.length){case 1:return pd(this.Zc);case 2:return rd(b);
case 3:return Tf.a(b,e);case 4:return sd(b,e,f)}throw Error("Invalid arity: "+(arguments.length-1));};a.g=function(){return pd(this.Zc)};a.a=function(a,b){return rd(b)};a.j=function(a,b,e){return Tf.a(b,e)};a.fa=function(a,b,e,f){return sd(b,e,f)};return a}(),bl.prototype.apply=function(a,c){return this.call.apply(this,[this].concat(lc(c)))},bl.prototype.J=function(){return pd(this.Zc)},bl.prototype.g=function(a){return rd(a)},bl.prototype.a=function(a,c){return Tf.a(a,c)},bl.prototype.j=function(a,
c,d){return sd(a,c,d)},bl.sa=function(){return new U(null,2,5,V,[sp,kf],null)},bl.qa=!0,bl.oa="net.cgrand.xforms/t_net$cgrand$xforms16402",bl.ra=function(a,c){return kd(c,"net.cgrand.xforms/t_net$cgrand$xforms16402")};return new bl(a,null)}return function(){function b(a,b){return Tf.a(a,b)}function c(){return pd(a)}var d=null;d=function(a,d){switch(arguments.length){case 0:return c.call(this);case 1:return rd(a);case 2:return b.call(this,a,d)}throw Error("Invalid arity: "+arguments.length);};d.J=
c;d.g=function(a){return rd(a)};d.a=b;return d}()}if(Ve(a)){if("undefined"===typeof wI||"undefined"===typeof AJ||"undefined"===typeof BJ||"undefined"===typeof el)el=function(a,c){this.Zc=a;this.P=c;this.F=393217;this.R=0},el.prototype.W=function(a,c){return new el(this.Zc,c)},el.prototype.V=function(){return this.P},el.prototype.hd=function(){return this},el.prototype.call=function(){var a=null;a=function(a,b,e,f){switch(arguments.length){case 1:return this.Zc;case 2:return b;case 3:return Ee.a(b,
e);case 4:return Je.j(b,e,f)}throw Error("Invalid arity: "+(arguments.length-1));};a.g=function(){return this.Zc};a.a=function(a,b){return b};a.j=function(a,b,e){return Ee.a(b,e)};a.fa=function(a,b,e,f){return Je.j(b,e,f)};return a}(),el.prototype.apply=function(a,c){return this.call.apply(this,[this].concat(lc(c)))},el.prototype.J=function(){return this.Zc},el.prototype.g=function(a){return a},el.prototype.a=function(a,c){return Ee.a(a,c)},el.prototype.j=function(a,c,d){return Je.j(a,c,d)},el.sa=
function(){return new U(null,2,5,V,[sp,jf],null)},el.qa=!0,el.oa="net.cgrand.xforms/t_net$cgrand$xforms16407",el.ra=function(a,c){return kd(c,"net.cgrand.xforms/t_net$cgrand$xforms16407")};return new el(a,null)}return function(){function b(a,b){return Ee.a(a,b)}var c=null;c=function(c,e){switch(arguments.length){case 0:return a;case 1:return c;case 2:return b.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.J=function(){return a};c.g=function(a){return a};c.a=b;return c}()}
function NJ(a){var b=Fe,c=function(){var a=MJ(b);return qf.g?qf.g(a):qf.call(null,a)}(),d=function(){var b=Ve(a);return b?(b=null!=a?a.F&1048576||n===a.fh?!0:a.F?!1:ec($c,a):ec($c,a))?JJ(c):b:b}();if(q(d)){var e=pf(d,d.J?d.J():d.call(null),a);return d.g?d.g(e):d.call(null,e)}d=x(c,c.J?c.J():c.call(null),a);return c.g?c.g(d):c.call(null,d)}function OJ(a){return M(a,0)}function PJ(a){return M(a,1)}
var QJ=function QJ(a){switch(arguments.length){case 1:return QJ.g(arguments[0]);case 2:return QJ.a(arguments[0],arguments[1]);case 3:return QJ.j(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}};QJ.g=function(a){return a};QJ.a=function(a){return a};QJ.j=function(a){return a};QJ.ga=3;
function RJ(a){a=KJ(a);if("undefined"===typeof wI||"undefined"===typeof AJ||"undefined"===typeof BJ||"undefined"===typeof fl)fl=function(a,c){this.ha=a;this.U=c;this.F=393217;this.R=0},fl.prototype.W=function(){return function(a,c){return new fl(this.ha,c)}}(a),fl.prototype.V=function(){return function(){return this.U}}(a),fl.prototype.hd=function(){return function(){return this}}(a),fl.prototype.call=function(){return function(){function a(a,b,c,d){a=this;a=a.ha.j?a.ha.j(b,c,d):a.ha.call(null,b,
c,d);return ie(a)?he(a):a}function c(a,b,c){a=this;a=a.ha.a?a.ha.a(b,c):a.ha.call(null,b,c);return ie(a)?he(a):a}var d=null;d=function(b,d,h,k){switch(arguments.length){case 1:return null;case 2:return d;case 3:return c.call(this,b,d,h);case 4:return a.call(this,b,d,h,k)}throw Error("Invalid arity: "+(arguments.length-1));};d.g=function(){return null};d.a=function(a,b){return b};d.j=c;d.fa=a;return d}()}(a),fl.prototype.apply=function(){return function(a,c){return this.call.apply(this,[this].concat(lc(c)))}}(a),
fl.prototype.J=function(){return function(){return null}}(a),fl.prototype.g=function(){return function(a){return a}}(a),fl.prototype.a=function(){return function(a,c){a=this.ha.a?this.ha.a(a,c):this.ha.call(null,a,c);return ie(a)?he(a):a}}(a),fl.prototype.j=function(){return function(a,c,d){a=this.ha.j?this.ha.j(a,c,d):this.ha.call(null,a,c,d);return ie(a)?he(a):a}}(a),fl.sa=function(){return function(){return new U(null,2,5,V,[mo,gf],null)}}(a),fl.qa=!0,fl.oa="net.cgrand.xforms/t_net$cgrand$xforms16462",
fl.ra=function(){return function(a,c){return kd(c,"net.cgrand.xforms/t_net$cgrand$xforms16462")}}(a);return new fl(a,null)}var SJ=function SJ(a){switch(arguments.length){case 1:return SJ.g(arguments[0]);case 2:return SJ.a(arguments[0],arguments[1]);case 3:return SJ.j(arguments[0],arguments[1],arguments[2]);case 4:return SJ.fa(arguments[0],arguments[1],arguments[2],arguments[3]);default:throw Error(["Invalid arity: ",r.g(arguments.length)].join(""));}};SJ.g=function(a){return SJ.fa(null,null,Mh,a)};
SJ.a=function(a,b){return SJ.fa(a,qf,Mh,b)};SJ.j=function(a,b,c){return SJ.fa(a,b,Mh,c)};
SJ.fa=function(a,b,c,d){return function(c){return function(e){var f=RJ(e),k=null==c?Dg(f):G.a(nu,c)?function(a,b){return function(c){return function(a){return function(){function b(b,d){return a.j?a.j(b,c,d):a.call(null,b,c,d)}var d=null;d=function(a,c){switch(arguments.length){case 1:return a;case 2:return b.call(this,a,c)}throw Error("Invalid arity: "+arguments.length);};d.g=function(a){return a};d.a=b;return d}()}(a,b)}}(f,c):function(a,b){return function(c){return function(a,b){return function(){function d(d,
e){e=b.a?b.a(c,e):b.call(null,c,e);return a.a?a.a(d,e):a.call(null,d,e)}var e=null;e=function(a,b){switch(arguments.length){case 1:return a;case 2:return d.call(this,a,b)}throw Error("Invalid arity: "+arguments.length);};e.g=function(a){return a};e.a=d;return e}()}(a,b)}}(f,c),l=new Ng(pd(jg));if(null==a&&null==b){if("undefined"===typeof wI||"undefined"===typeof AJ||"undefined"===typeof BJ||"undefined"===typeof gl)gl=function(a,b,c,d,e,f,h,k,l){this.Zb=a;this.ac=b;this.cg=c;this.Xa=d;this.ha=e;this.Yf=
f;this.yb=h;this.va=k;this.Z=l;this.F=393217;this.R=0},gl.prototype.W=function(){return function(a,b){return new gl(this.Zb,this.ac,this.cg,this.Xa,this.ha,this.Yf,this.yb,this.va,b)}}(f,k,l,c),gl.prototype.V=function(){return function(){return this.Z}}(f,k,l,c),gl.prototype.hd=function(){return function(){return this}}(f,k,l,c),gl.prototype.call=function(a,b,c,d){return function(){function e(a,b,c,d){a=this;var e=F.a(A(a.va),c);q(e)||(e=a.yb.g?a.yb.g(c):a.yb.call(null,c),e=a.Xa.g?a.Xa.g(e):a.Xa.call(null,
e),Cd(a.va,Uf(A(a.va),c,e)));b=e.a?e.a(b,d):e.call(null,b,d);if(ie(b)){if(ie(A(b)))return Og(a.va),A(b);Cd(a.va,Uf(A(a.va),c,QJ));a=A(b);return e.g?e.g(a):e.call(null,a)}return b}function f(a,b,c){a=this;var d=O(c,0,null);c=O(c,1,null);var e=F.a(A(a.va),d);q(e)||(e=a.yb.g?a.yb.g(d):a.yb.call(null,d),e=a.Xa.g?a.Xa.g(e):a.Xa.call(null,e),Cd(a.va,Uf(A(a.va),d,e)));b=e.a?e.a(b,c):e.call(null,b,c);if(ie(b)){if(ie(A(b)))return Og(a.va),A(b);Cd(a.va,Uf(A(a.va),d,QJ));a=A(b);return e.g?e.g(a):e.call(null,
a)}return b}function h(e,f){e=this;var h=A(e.va);if(h===e.va)return null;Cd(e.va,e.va);f=x(function(){return function(a,b){return b.g?b.g(a):b.call(null,a)}}(h,h,this,this,a,b,c,d),f,ii(rd(h)));return e.ha.g?e.ha.g(f):e.ha.call(null,f)}function k(a){a=this;return a.ha.J?a.ha.J():a.ha.call(null)}var l=null;l=function(a,b,c,d){switch(arguments.length){case 1:return k.call(this,a);case 2:return h.call(this,a,b);case 3:return f.call(this,a,b,c);case 4:return e.call(this,a,b,c,d)}throw Error("Invalid arity: "+
(arguments.length-1));};l.g=k;l.a=h;l.j=f;l.fa=e;return l}()}(f,k,l,c),gl.prototype.apply=function(){return function(a,b){return this.call.apply(this,[this].concat(lc(b)))}}(f,k,l,c),gl.prototype.a=function(){return function(a,b){var c=O(b,0,null);b=O(b,1,null);var d=F.a(A(this.va),c);q(d)||(d=this.yb.g?this.yb.g(c):this.yb.call(null,c),d=this.Xa.g?this.Xa.g(d):this.Xa.call(null,d),Cd(this.va,Uf(A(this.va),c,d)));a=d.a?d.a(a,b):d.call(null,a,b);if(ie(a)){if(ie(A(a)))return Og(this.va),A(a);Cd(this.va,
Uf(A(this.va),c,QJ));c=A(a);return d.g?d.g(c):d.call(null,c)}return a}}(f,k,l,c),gl.prototype.J=function(){return function(){return this.ha.J?this.ha.J():this.ha.call(null)}}(f,k,l,c),gl.prototype.g=function(a,b,c,d){return function(e){var f=A(this.va);if(f===this.va)return null;Cd(this.va,this.va);e=x(function(){return function(a,b){return b.g?b.g(a):b.call(null,a)}}(f,f,this,a,b,c,d),e,ii(rd(f)));return this.ha.g?this.ha.g(e):this.ha.call(null,e)}}(f,k,l,c),gl.prototype.j=function(){return function(a,
b,c){var d=F.a(A(this.va),b);q(d)||(d=this.yb.g?this.yb.g(b):this.yb.call(null,b),d=this.Xa.g?this.Xa.g(d):this.Xa.call(null,d),Cd(this.va,Uf(A(this.va),b,d)));a=d.a?d.a(a,c):d.call(null,a,c);if(ie(a)){if(ie(A(a)))return Og(this.va),A(a);Cd(this.va,Uf(A(this.va),b,QJ));b=A(a);return d.g?d.g(b):d.call(null,b)}return a}}(f,k,l,c),gl.sa=function(){return function(){return new U(null,9,5,V,[jn,Ht,no,fq,mo,it,Sp,eo,hf],null)}}(f,k,l,c),gl.qa=!0,gl.oa="net.cgrand.xforms/t_net$cgrand$xforms16470",gl.ra=
function(){return function(a,b){return kd(b,"net.cgrand.xforms/t_net$cgrand$xforms16470")}}(f,k,l,c);return new gl(a,b,c,d,e,f,k,l,null)}var m=q(a)?a:OJ,t=q(b)?b:PJ;if("undefined"===typeof wI||"undefined"===typeof AJ||"undefined"===typeof BJ||"undefined"===typeof hl)hl=function(a,b,c,d,e,f,h,k,l){this.Zb=a;this.ac=b;this.cg=c;this.Xa=d;this.ha=e;this.Yf=f;this.yb=h;this.va=k;this.da=l;this.F=393217;this.R=0},hl.prototype.W=function(){return function(a,b){return new hl(this.Zb,this.ac,this.cg,this.Xa,
this.ha,this.Yf,this.yb,this.va,b)}}(m,t,f,k,l,c),hl.prototype.V=function(){return function(){return this.da}}(m,t,f,k,l,c),hl.prototype.hd=function(){return function(){return this}}(m,t,f,k,l,c),hl.prototype.call=function(a,b,c,d,e,f){return function(){function h(a,b,c,d){a=this;var e=new U(null,2,5,V,[c,d],null),f=a.Zb.g?a.Zb.g(e):a.Zb.call(null,e),h=function(){var b=F.a(A(a.va),f);if(q(b))return b;b=a.yb.g?a.yb.g(f):a.yb.call(null,f);b=a.Xa.g?a.Xa.g(b):a.Xa.call(null,b);Cd(a.va,Uf(A(a.va),f,b));
return b}();c=function(){var c=a.ac.g?a.ac.g(e):a.ac.call(null,e);return h.a?h.a(b,c):h.call(null,b,c)}();if(ie(c)){if(ie(A(c)))return Og(a.va),A(c);Cd(a.va,Uf(A(a.va),f,QJ));c=A(c);return h.g?h.g(c):h.call(null,c)}return c}function k(a,b,c){a=this;var d=a.Zb.g?a.Zb.g(c):a.Zb.call(null,c),e=function(){var b=F.a(A(a.va),d);if(q(b))return b;b=a.yb.g?a.yb.g(d):a.yb.call(null,d);b=a.Xa.g?a.Xa.g(b):a.Xa.call(null,b);Cd(a.va,Uf(A(a.va),d,b));return b}(),f=function(){var d=a.ac.g?a.ac.g(c):a.ac.call(null,
c);return e.a?e.a(b,d):e.call(null,b,d)}();if(ie(f)){if(ie(A(f)))return Og(a.va),A(f);Cd(a.va,Uf(A(a.va),d,QJ));f=A(f);return e.g?e.g(f):e.call(null,f)}return f}function l(h,k){h=this;var l=A(h.va);if(l===h.va)return null;Cd(h.va,h.va);k=x(function(){return function(a,b){return b.g?b.g(a):b.call(null,a)}}(l,l,this,this,a,b,c,d,e,f),k,ii(rd(l)));return h.ha.g?h.ha.g(k):h.ha.call(null,k)}function m(a){a=this;return a.ha.J?a.ha.J():a.ha.call(null)}var v=null;v=function(a,b,c,d){switch(arguments.length){case 1:return m.call(this,
a);case 2:return l.call(this,a,b);case 3:return k.call(this,a,b,c);case 4:return h.call(this,a,b,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};v.g=m;v.a=l;v.j=k;v.fa=h;return v}()}(m,t,f,k,l,c),hl.prototype.apply=function(){return function(a,b){return this.call.apply(this,[this].concat(lc(b)))}}(m,t,f,k,l,c),hl.prototype.j=function(){return function(a,b,c){var d=this,e=new U(null,2,5,V,[b,c],null),f=d.Zb.g?d.Zb.g(e):d.Zb.call(null,e),h=function(){var a=F.a(A(d.va),f);if(q(a))return a;
a=d.yb.g?d.yb.g(f):d.yb.call(null,f);a=d.Xa.g?d.Xa.g(a):d.Xa.call(null,a);Cd(d.va,Uf(A(d.va),f,a));return a}();b=function(){var b=d.ac.g?d.ac.g(e):d.ac.call(null,e);return h.a?h.a(a,b):h.call(null,a,b)}();if(ie(b)){if(ie(A(b)))return Og(d.va),A(b);Cd(d.va,Uf(A(d.va),f,QJ));b=A(b);return h.g?h.g(b):h.call(null,b)}return b}}(m,t,f,k,l,c),hl.prototype.J=function(){return function(){return this.ha.J?this.ha.J():this.ha.call(null)}}(m,t,f,k,l,c),hl.prototype.g=function(a,b,c,d,e,f){return function(h){var k=
A(this.va);if(k===this.va)return null;Cd(this.va,this.va);h=x(function(){return function(a,b){return b.g?b.g(a):b.call(null,a)}}(k,k,this,a,b,c,d,e,f),h,ii(rd(k)));return this.ha.g?this.ha.g(h):this.ha.call(null,h)}}(m,t,f,k,l,c),hl.prototype.a=function(){return function(a,b){var c=this,d=c.Zb.g?c.Zb.g(b):c.Zb.call(null,b),e=function(){var a=F.a(A(c.va),d);if(q(a))return a;a=c.yb.g?c.yb.g(d):c.yb.call(null,d);a=c.Xa.g?c.Xa.g(a):c.Xa.call(null,a);Cd(c.va,Uf(A(c.va),d,a));return a}(),f=function(){var d=
c.ac.g?c.ac.g(b):c.ac.call(null,b);return e.a?e.a(a,d):e.call(null,a,d)}();if(ie(f)){if(ie(A(f)))return Og(c.va),A(f);Cd(c.va,Uf(A(c.va),d,QJ));f=A(f);return e.g?e.g(f):e.call(null,f)}return f}}(m,t,f,k,l,c),hl.sa=function(){return function(){return new U(null,9,5,V,[jn,Ht,no,fq,mo,it,Sp,eo,Qe],null)}}(m,t,f,k,l,c),hl.qa=!0,hl.oa="net.cgrand.xforms/t_net$cgrand$xforms16496",hl.ra=function(){return function(a,b){return kd(b,"net.cgrand.xforms/t_net$cgrand$xforms16496")}}(m,t,f,k,l,c);return new hl(m,
t,c,d,e,f,k,l,null)}}(Mh===c?nu:c)};SJ.ga=4;var aK=function aK(a){return ag(mj,function(){function a(a){var c=null;if(0<arguments.length){c=0;for(var e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new Xd(e,0,null)}return d.call(this,c)}function d(a){return zg(Ve,a)?aK.g?aK.g(a):aK.call(null,a):De(a)}a.ga=0;a.ka=function(a){a=H(a);return d(a)};a.S=d;return a}(),a)};function bK(a){return function(b){b=NJ(b);b=O(b,0,null);O(b,0,null);b=O(b,1,null);return cc(Ag(ac,Qg.a(F.a(b,Et),a)))?b:null}}
function cK(a){return Eg.S(LJ(),Qg.g(aK),Qg.g(bK(a)),N([Qg.g(tk)]))}function dK(a){return Eg.j(SJ.a(hi,cK(a)),Yg(Cg(function(a){O(a,0,null);return null==O(a,1,null)})),Qg.g(function(a){return F.a(a,1)}))}
function eK(a,b){var c=new U(null,2,5,V,[vI,$J],null);return function(d,e){var f=Ev(new Zu,null),h=Ev(1,null);kv(function(f,h){return function(){var k=function(){return function(a){return function(){function b(b){for(;;){a:try{for(;;){var c=a(b);if(!T(c,Zl)){var d=c;break a}}}catch(R){if(R instanceof Object)b[5]=R,Cv(b),d=Zl;else throw R;}if(!T(d,Zl))return d}}function c(){var a=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null;d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+arguments.length);};d.J=c;d.g=b;return d}()}(function(f,h){return function(f){var k=f[1];if(7===k){var l=f[7],m=f;m[1]=q(l)?10:11;return Zl}if(20===k){var t=f[8],u=$f(hj,t),v=m=f;v[2]=u;v[1]=22;return Zl}if(27===k){var w=f[9],Ya=f[10],
P=f[11],Ca=f[12],fa=f[13],$a=O(Ca,0,null),Ma=Lu(w),La=Lu(Ya),Oa=Yd(P),Wa=I(J(P)),sa=Tf.a(fa,$a),oa=Wa;f[14]=oa;f[11]=Oa;f[15]=La;f[16]=Ma;f[13]=sa;var wb=m=f;wb[2]=null;wb[1]=4;return Zl}if(1===k)return m=f,zv(m,3,b);if(24===k){var Sa=m=f;Sa[2]=null;Sa[1]=25;return Zl}if(4===k){oa=f[14];P=f[11];var Ra=O(oa,0,null);l=O(oa,1,null);var fb=null==I(P);f[7]=l;f[17]=Ra;m=f;m[1]=q(fb)?6:7;return Zl}if(15===k){var hb=m=f;hb[2]=!1;hb[1]=16;return Zl}if(21===k){t=f[8];var sb=m=f;sb[2]=t;sb[1]=22;return Zl}if(31===
k){var lb=f[18],sc=G.a(lb,Vk);m=f;m[1]=sc?34:35;return Zl}if(32===k){var Gc=f[2],Lc=m=f;Lc[2]=Gc;Lc[1]=29;return Zl}if(33===k){var Vb=f[19];w=f[9];Ya=f[10];var Rd=f[2],Sd=Lu(Vb),Nj=Lu(d),Li=Lu(h),Ck=Lu(w),Ao=Lu(Ya);f[20]=Sd;f[21]=Rd;f[22]=Li;f[23]=Nj;f[24]=Ck;var rm=m=f;rm[2]=Ao;rm[1]=32;return Zl}if(13===k){t=f[8];var sm=f[2],Bo=cc(null==sm);f[8]=sm;m=f;m[1]=Bo?14:15;return Zl}if(22===k){var tm=f[25],rh=f[2],sh=F.a(rh,vo),sj=F.a(rh,mt),Dk=F.a(rh,Vr),Ek=F.a(rh,ls),um=G.a(fc(rh),p);f[26]=sj;f[27]=
Dk;f[28]=Ek;f[29]=sh;f[25]=rh;m=f;m[1]=um?23:24;return Zl}if(36===k){var vm=f[2],wm=m=f;wm[2]=vm;wm[1]=32;return Zl}if(29===k){var xm=f[2],ym=m=f;ym[2]=xm;ym[1]=25;return Zl}if(6===k){var th=f[30];fa=f[13];var zm=ik(N(["Working on it ..."])),Co=A(th),Am=dK(Co),Do=rd(fa),Eo=of(Sf,Do),Bm=qk(N([Am,Eo])),Fk={type:"FeatureCollection",features:mc(Bm)};f[31]=zm;m=f;return Av(m,9,d,Fk)}if(28===k){Ya=f[10];lb=f[18];var Fo=G.a(lb,Ya);m=f;m[1]=Fo?30:31;return Zl}if(25===k)return tm=f[25],f[32]=f[2],m=f,Av(m,
37,e,tm);if(34===k){var tj=f[33],Cm=m=f;Cm[2]=tj;Cm[1]=36;return Zl}if(17===k){var Dm=m=f;Dm[2]=!0;Dm[1]=19;return Zl}if(3===k){var Gk=f[2];m=f;return Av(m,2,h,Gk)}if(12===k)return Vb=f[19],f[34]=f[2],m=f,zv(m,13,Vb);if(2===k){var Em=f[2];Vb=Ev(1,null);th=Kg(Fe);var uj=I(c),Go=O(uj,0,null),Fm=O(uj,1,null),Ho=pd(Fe);P=c;oa=uj;fa=Ho;f[14]=oa;f[19]=Vb;f[30]=th;f[11]=P;f[35]=Fm;f[36]=Go;f[37]=Em;f[13]=fa;var Hk=m=f;Hk[2]=null;Hk[1]=4;return Zl}if(23===k){sj=f[26];th=f[30];w=f[9];Dk=f[27];Ek=f[28];Ya=
f[10];sh=f[29];var vj=Ev(1,Dk),wj=Ev(1,null),Gm=Mg.j(th,Ee,Ek),Hm=Pv(new U(null,1,5,V,[sj],null)),Im=sh.j?sh.j(Hm,vj,wj):sh.call(null,Hm,vj,wj),Io=new U(null,2,5,V,[vj,wj],null);f[9]=vj;f[38]=Gm;f[39]=Im;f[10]=wj;m=f;return Qv(m,26,Io)}if(35===k){var Ik=m=f;Ik[2]=null;Ik[1]=36;return Zl}if(19===k){var Jo=f[2],Jm=m=f;Jm[2]=Jo;Jm[1]=16;return Zl}if(11===k){Vb=f[19];Ra=f[17];var Ko=Ra.a?Ra.a(h,Vb):Ra.call(null,h,Vb),Km=m=f;Km[2]=Ko;Km[1]=12;return Zl}if(9===k){Vb=f[19];var Lo=f[2],Mo=Lu(Vb),Lm=Lu(h);
f[40]=Lo;f[41]=Mo;var Jk=m=f;Jk[2]=Lm;Jk[1]=8;return Zl}if(5===k){var No=f[2];m=f;return Bv(m,No)}if(14===k){t=f[8];var Mm=n===t.wa,Nm=t.F&64||Mm;m=f;m[1]=q(Nm)?17:18;return Zl}if(26===k){w=f[9];lb=f[18];Ca=f[12];var xj=f[2];tj=O(xj,0,null);var Om=O(xj,1,null),Pm=G.a(Om,w);f[18]=Om;f[33]=tj;f[12]=xj;m=f;m[1]=Pm?27:28;return Zl}if(16===k){var Qm=f[2];m=f;m[1]=q(Qm)?20:21;return Zl}if(30===k){Ca=f[12];var Rm=O(Ca,0,null);m=f;return Av(m,33,e,Rm)}if(10===k){Vb=f[19];Ra=f[17];var yj=Ra.g?Ra.g(a):Ra.call(null,
a),Oo=yj.a?yj.a(h,Vb):yj.call(null,h,Vb),Kk=m=f;Kk[2]=Oo;Kk[1]=12;return Zl}if(18===k){var Sm=m=f;Sm[2]=!1;Sm[1]=19;return Zl}if(37===k){Vb=f[19];var Po=f[2],Tm=Lu(Vb),Vu=Lu(d),Wu=Lu(h),Xu=Lu(e);f[42]=Wu;f[43]=Po;f[44]=Tm;f[45]=Vu;var Hr=m=f;Hr[2]=Xu;Hr[1]=8;return Zl}if(8===k){var Yu=f[2],Ir=m=f;Ir[2]=Yu;Ir[1]=5;return Zl}return null}}(f,h),f,h)}(),l=function(){var a=k.J?k.J():k.call(null);a[6]=f;return a}();return yv(l)}}(h,f));return h}};var fK=function(){function a(a){var c=null;if(0<arguments.length){c=0;for(var e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new Xd(e,0,null)}return b.call(this,c)}function b(a){a=Ih(a);try{if(Xe(a)&&1===K(a))try{var b=M(a,0);if(null!=b?b.F&256||n===b.ce||(b.F?0:ec(Cc,b)):ec(Cc,b))try{var c=F.j(b,ku,cs);if(fg(c,cs))try{var f=F.j(b,Fn,cs);if(fg(f,cs))try{var h=F.j(b,tu,cs);if(fg(h,cs))try{var k=F.j(b,en,cs);if(fg(k,cs))try{var l=F.j(b,Hq,cs);if(fg(l,cs))try{var m=F.j(b,zr,cs);if(fg(m,
cs))return As;throw X;}catch(B){if(B instanceof Error){var t=B;if(t===X)throw X;throw t;}throw B;}else throw X;}catch(B){if(B instanceof Error)if(t=B,t===X)try{m=F.j(b,zr,cs);if(fg(m,cs))return As;throw X;}catch(E){if(E instanceof Error){var u=E;if(u===X)throw X;throw u;}throw E;}else throw t;else throw B;}else throw X;}catch(B){if(B instanceof Error){t=B;if(t===X)throw X;throw t;}throw B;}else throw X;}catch(B){if(B instanceof Error){t=B;if(t===X)throw X;throw t;}throw B;}else throw X;}catch(B){if(B instanceof
Error){t=B;if(t===X)throw X;throw t;}throw B;}else throw X;}catch(B){if(B instanceof Error)if(t=B,t===X)try{if(f=F.j(b,Fn,cs),fg(f,cs))try{if(h=F.j(b,tu,cs),fg(h,cs))try{if(k=F.j(b,en,cs),fg(k,cs))try{if(l=F.j(b,Hq,cs),fg(l,cs))try{m=F.j(b,zr,cs);if(fg(m,cs))return yp;throw X;}catch(E){if(E instanceof Error){u=E;if(u===X)throw X;throw u;}throw E;}else throw X;}catch(E){if(E instanceof Error)if(u=E,u===X)try{m=F.j(b,zr,cs);if(fg(m,cs))return yp;throw X;}catch(D){if(D instanceof Error){var w=D;if(w===
X)throw X;throw w;}throw D;}else throw u;else throw E;}else throw X;}catch(E){if(E instanceof Error)if(u=E,u===X)try{if(c=F.j(b,ku,cs),fg(c,cs))try{if(l=F.j(b,Hq,cs),fg(l,cs))try{m=F.j(b,zr,cs);if(fg(m,cs))return ot;throw X;}catch(D){if(D instanceof Error){w=D;if(w===X)throw X;throw w;}throw D;}else throw X;}catch(D){if(D instanceof Error){w=D;if(w===X)throw X;throw w;}throw D;}else throw X;}catch(D){if(D instanceof Error)if(w=D,w===X)try{if(l=F.j(b,Hq,cs),fg(l,cs))try{m=F.j(b,zr,cs);if(fg(m,cs))return ot;
throw X;}catch(R){if(R instanceof Error){var v=R;if(v===X)throw X;throw v;}throw R;}else throw X;}catch(R){if(R instanceof Error){v=R;if(v===X)throw X;throw v;}throw R;}else throw w;else throw D;}else throw u;else throw E;}else throw X;}catch(E){if(E instanceof Error){u=E;if(u===X)throw X;throw u;}throw E;}else throw X;}catch(E){if(E instanceof Error)if(u=E,u===X)try{if(c=F.j(b,ku,cs),fg(c,cs))try{if(h=F.j(b,tu,cs),fg(h,cs))try{m=F.j(b,zr,cs);if(fg(m,cs))return Wp;throw X;}catch(D){if(D instanceof
Error){w=D;if(w===X)throw X;throw w;}throw D;}else throw X;}catch(D){if(D instanceof Error){w=D;if(w===X)throw X;throw w;}throw D;}else throw X;}catch(D){if(D instanceof Error)if(w=D,w===X)try{if(h=F.j(b,tu,cs),fg(h,cs))try{m=F.j(b,zr,cs);if(fg(m,cs))return Fr;throw X;}catch(R){if(R instanceof Error){v=R;if(v===X)throw X;throw v;}throw R;}else throw X;}catch(R){if(R instanceof Error){v=R;if(v===X)throw X;throw v;}throw R;}else throw w;else throw D;}else throw u;else throw E;}else throw t;else throw B;
}else throw X;}catch(B){if(B instanceof Error){t=B;if(t===X)throw X;throw t;}throw B;}else throw X;}catch(B){if(B instanceof Error)if(t=B,t===X)try{if(Xe(a)&&0<=K(a))try{var z=Rh(a,0,0);if(Xe(z)&&0===K(z))return Rh(a,0,K(a)),null;throw X;}catch(E){if(E instanceof Error){u=E;if(u===X)throw X;throw u;}throw E;}else throw X;}catch(E){if(E instanceof Error){u=E;if(u===X)throw Error(["No matching clause: ",r.g(a)].join(""));throw u;}throw E;}else throw t;else throw B;}}a.ga=0;a.ka=function(a){a=H(a);return b(a)};
a.S=b;return a}();
function gK(a){return function(b,c,d){return Fv(b,function(b){var e=fK.S(N([b]));ik(N([e]));switch(e instanceof S?e.Ea:null){case "stats+geos":return b=eK(a,Pv(new U(null,1,5,V,[b],null))),b.a?b.a(c,d):b.call(null,c,d);case "stats-only":return YJ(Pv(new U(null,1,5,V,[b],null)),c,d);case "geos-only":return b=Pv(new U(null,1,5,V,[b],null)),e=qI(a),e.j?e.j(b,c,d):e.call(null,b,c,d);case "geocodes":return Iv(c,Yo(b));case "no-values":return Iv(d,"When using `predicates`, you must also supply at least one value to `values`");default:return ik(N(["No matching clause for the arguments provided.",
"Please check arguments against requirements"]))}})}}var hK=NH(sr,"configuration",Kg(""),Kg(Fe),Kg(jg)),iK=Ev(new Zu,null),il=Pv(new U(null,1,5,V,["https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/src/configs/geojson/index.edn"],null)),jl=Ev(1,Qg.g(MH));hK.fa?hK.fa(il,iK,jl,aq):hK.call(null,il,iK,jl,aq);shadow$umd$export=function(a,b){var c=Ev(1,null),d=Ev(1,null),e=Ev(1,Qg.g(MH));return Fv(iK,function(c,d,e){return function(f){var h=iI(f);h.a?h.a(a,c):h.call(null,a,c);return Fv(c,function(a,c,d){return function(e){if(G.a(fc(e),p)){e=Pv(new U(null,1,5,V,[e],null));var h=gK(f);h.j?h.j(e,c,d):h.call(null,e,c,d);Fv(d,function(){return function(a){return b.a?b.a(a,null):b.call(null,a,null)}}(a,c,d));return Fv(c,function(){return function(a){return b.a?b.a(null,a):b.call(null,null,a)}}(a,c,d))}return b.a?
b.a(e,null):b.call(null,e,null)}}(c,d,e))}}(c,d,e))};

  return shadow$umd$export;
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"buffer":4,"xmlhttprequest":40,"xregexp":48}]},{},[54]);
